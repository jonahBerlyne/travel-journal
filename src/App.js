import Navbar from "./Navbar";
import Main from "./Main";
import data from "./data";

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main data={data}/>
    </div>
  );
}
