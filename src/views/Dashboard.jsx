import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <section className="container flex w-full">
        <Sidebar />
        <Navbar />
        <div className="ml-[240px] mt-[92px] w-full flex justify-center items-center">
          HELLO WORLD
        </div>
      </section>
    </>
  );
}
