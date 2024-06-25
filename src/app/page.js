import Infomenu from "@/components/Infomenu";
import Menubar from "@/components/Menubar";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <div style={{
      boxShadow: '0px 4px 4px 0px rgba(217, 217, 217, 0.10)' /* #D9D9D91A in rgba format */
    }}>
        <Navbar />
      </div>
      <div style={{
      boxShadow: '0px 4px 4px 0px rgba(217, 217, 217, 0.10)'
    }}>
      <Menubar/>
      </div>
      <div>
        <Infomenu/>
      </div>
    </main>
  );
}
