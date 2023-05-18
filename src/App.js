import MainScreen from "./components/MainScreen";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar/>
      <MainScreen/>  
    </div>
  );
}

export default App;
