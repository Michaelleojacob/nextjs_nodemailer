"use client";
import { useEffect } from "react";

export default function Home() {
  const MakeFetch = async () => {
    try {
      const rawRes = await fetch("http://localhost:3000/pages/api/test");
      console.log(rawRes);
      rawRes.status ? console.log(rawRes.status) : null;
      const res = await rawRes.json();
      console.log(res);
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
