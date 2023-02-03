import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div>HELLO WORLD</div>
      </div>
    </>
  );
}
