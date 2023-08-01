import { invoke } from "@tauri-apps/api";
import { createSignal, createContext, useContext } from "solid-js";

const CounterContext = createContext();

export function CounterProvider(props: Props) {
  const [count, setCount] = createSignal(0);
  const counter = [
    count,
    {
      increment() {
        setCount((c) => c + 1);
      },
      decrement() {
        setCount((c) => c - 1);
      },
    },
  ];

  return <CounterContext.Provider value={counter}>{props.children}</CounterContext.Provider>;
}

export function useCounter() {
  return useContext(CounterContext);
}

async function getDir(user: string) {
  let dir: string[];
  dir = (await invoke("get_current_dir")) as string[];

  const regex = new RegExp(`^(.*)${user}`, "g");
  dir = [dir[0].replace(regex, "~"), dir[1]];
  return dir;
}

type Props = {
  children: Element | Element[];
};

