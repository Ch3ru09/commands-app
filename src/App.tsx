import Navbar from "./components/navbar/Navbar";
import Topbar from "./components/topbar/Topbar";
import CommandsInProgressContainer from "./components/inprogress/CommandsInProgress";

function App() {
  return (
    <>
      <div class="bg-black-900 h-full w-full flex flex-row text-black-100">
        <div>
          <Navbar />
        </div>
        <div>
          <Topbar />
          <CommandsInProgressContainer />
        </div>
      </div>
    </>
  );
}

export default App;

