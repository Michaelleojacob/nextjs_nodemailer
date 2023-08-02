"use client";
import { useEffect } from "react";

export default function Home() {
  const MakeFetch = async () => {
    try {
      const raw1 = await fetch("/api/test");
      // const raw2 = await fetch("http://localhost:3000/api/test");
      // const raw3 = await fetch("api/test");
      const res1 = await raw1.json();
      console.log(res1);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    MakeFetch();
  }, []);

  return (
    <>
      <div>hi</div>
      <button onClick={MakeFetch}>refetch</button>
    </>
  );
}
