import { Outlet } from "react-router-dom";
import "./App.css";
import { SideHeader } from "./component/SideHeader";
import { TopHeader } from "./component/TopHeader";

function App() {
  return (
    <section className="dashboard flex h-screen">
      <SideHeader />
      <div className="w-full flex flex-col container p-4 bg-white">
        <TopHeader />
        <Outlet />
      </div>
    </section>
  );
}

export default App;
