import { Outlet } from "react-router-dom";
import "./App.css";
import { SideHeader } from "./component/SideHeader";
import { TopHeader } from "./component/TopHeader";

function App() {
  return (
    <section className="dashboard container px-4 py-2 flex flex-col">
      <TopHeader />
      <div className="w-full flex  container py-4 bg-white">
        <SideHeader />
        <div className="container w-full p-4  overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default App;
