import { invoke } from "@tauri-apps/api";
import { createEffect, createSignal } from "solid-js";

export default function Files() {
  // dir()[0]: path
  // dir()[1]: currentDir
  const [dir, setDir] = createSignal<string[]>(["~"]);
  const [user, setUser] = createSignal<string>();

  invoke("get_user").then((res) => {
    setUser(() => (res as string).replace("\n", ""));
  });

  invoke("get_current_dir").then((dir) => {
    setDir(() => dir as string[]);
  });

  createEffect(() => {
    const regex = new RegExp(`^(.*)${user()}`, "g");
    setDir((dir: string[]) => [dir[0].replace(regex, "~"), dir[1]]);
    dir();
  });

  return (
    <div class="py-5 bg-black-700 w-full mb-3 px-10">
      <p>{dir().length == 1 ? "" : dir()[0]}</p>
      <p class="text-center">{dir().length == 1 ? dir()[0] : dir()[1]}</p>
    </div>
  );
}

