"use client";
import Image from "next/image";
import Clicker from "../components/Clicker";
import {useState} from "react";
import SnowEffect from "../components/SnowEffect";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <SnowEffect />
      <div className="" style={{overflow: "hidden"}}>
        <main className="">
          <div className="flex flex-col items-center gap-5 text-center sm:items-start sm:text-left">
            <h1 className={"text-6xl self-center my-7"}>Haxmas Day 1 - Christmas Clicker</h1>
            <p className={"text-3xl font-bold self-center"}>Count: {count}</p>
            <Clicker onClick={() => {setCount(count + 1)}} />
          </div>
          <div style={{ height: "500px", overflow: "hidden" }}></div>
        </main>
      </div>
    </>
  );
}