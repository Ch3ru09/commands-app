import Command from "./command/Command";
import Files from "./command/Files";

export default function Navbar() {
  return (
    <nav class="top-0 left-0 flex flex-col items-center h-screen w-60 m-0 p-0 bg-black-800 text-black-100">
      <Files />
      <Command name={"git"} />
      <Command name={"npm"} />
      <Command name={"brew"} />
    </nav>
  );
}

