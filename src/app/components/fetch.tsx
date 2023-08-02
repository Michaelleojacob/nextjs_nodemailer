"use client";

export default function MyFetch() {
  const MakeFetch = async () => {
    try {
      const raw1 = await fetch("/api/test");
      // const raw2 = await fetch("http://localhost:3000/api/test");
      // const raw3 = await fetch("api/test");
      console.log(raw1.status);
      const res1 = await raw1.json();
      console.log(res1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={MakeFetch} className="border-2 p-2 hover:opacity-75 m-2">
      fetch
    </button>
  );
}
