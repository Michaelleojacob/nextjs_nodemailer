"use client";
import { useEffect } from "react";

export default function Home() {
  const MakeFetch = async () => {
    const rawRes = await fetch("/api/test");
    console.log(rawRes);
    // const res = await rawRes.json();
    // console.log(res);
  };

  useEffect(() => {
    MakeFetch();
  }, []);

  return (
    <>
      <div>hi</div>
    </>
  );
}
