// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::api::process::Command;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn get_current_dir() -> Vec<String> {
    let out = Command::new("pwd").output().expect("failed to get dir");
    let full_res = out.stdout.replace("\n", "");
    let mut arr = full_res.split("/").collect::<Vec<&str>>();
    arr.remove(0);
    let current: String = arr[arr.len() - 1].to_string();
    arr.remove(arr.len() - 1);
    let arr = arr.join("/");
    vec![arr, current]
}

#[tauri::command]
fn get_user() -> String {
    let out = Command::new("whoami").output().expect("failed to get user");
    format!("{}", out.stdout)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_current_dir, get_user])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
