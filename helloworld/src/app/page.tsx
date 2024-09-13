import Image from "next/image";
import Navbar from "./components/navbaar";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div>
      <Navbar/>
          <h1>hellow world {1+1}</h1>
          <Sidebar/>
         
        </div>
  );
}
