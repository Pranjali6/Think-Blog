import TopBar from "./components/topbar/Topbar";
import Home from ".pages/home/Home"
import Write from ".pages/write/Write"

function App() {
  return (
   <>
   {/*we dont remove the top bar from here because we want the top bar to be visible at all times */}
   <TopBar />
   <Write/>
   
   </>
  );
}

export default App;
