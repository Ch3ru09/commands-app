import { For, createSignal } from "solid-js";

export default function CommandsInProgress() {
  const [inProgress, setInProgress] = createSignal<string[]>(["test1", "test2"]);

  const addItem = (item: string) => {
    setInProgress((current) => {
      const temp = current ?? [];
      temp.push(item);
      return temp;
    });
  };

  return (
    <For each={inProgress()} fallback={<div></div>}>
      {(e) => <div>{e}</div>}
    </For>
  );
}

