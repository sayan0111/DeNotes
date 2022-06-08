import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import SideBar from "../components/SideBar";
export default function Home() {
  return (
    <>
      <SideBar />
      <NavBar />
      <div className="font-extrabold">Hehehehe</div>
    </>
  );
}
