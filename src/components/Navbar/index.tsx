import Command from "./command/index";

export default function Navbar() {
  return (
    <nav class="fixed top-0 left-0 flex flex-col items-center h-screen w-60 m-0 py-3 bg-black-800">
      <Command name={"git"} />
      <Command name={"npm"} />
      <Command name={"brew"} />
    </nav>
  );
}

