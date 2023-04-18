import { invoke } from "@tauri-apps/api";
import { createEffect, createSignal } from "solid-js";

export default function Files() {
  // dir()[0]: path
  // dir()[1]: currentDir
  const [dir, setDir] = createSignal<string[]>(["~", "workspace"]);
  const [user, setUser] = createSignal<string>();
  invoke("get_user").then((res) => {
    setUser(() => (res as string).replace("\n", ""));
  });

  createEffect(() => {
    const regex = new RegExp(`^(.*)${user()}`, "g");
    setDir((dir: string[]) => [dir[0].replace(regex, "~"), dir[1]]);
  });

  return (
    <div
      class="py-5 bg-black-700 w-full mb-3 text-center"
      onclick={() => {
        invoke("get_current_dir").then((dir) => setDir((dir as string).split(/([^\/].$)/)));
      }}
    >
      <p>{user()}</p>
      <p>{dir()}</p>
    </div>
  );
}

