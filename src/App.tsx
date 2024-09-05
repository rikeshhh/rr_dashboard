import { Outlet } from "react-router-dom";
import "./App.css";
import { SideHeader } from "./component/SideHeader";

function App() {
  return (
    <section className="dashboard flex">
      <SideHeader  />
      <Outlet />
    </section>
  );
}

export default App;
