"use client";
import { useState } from "react";
import { ChangeEvent, FormEvent } from "react";

export default function MyForm() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputs((prev) => ({ ...prev, message: e.target.value }));
  };

  const handlesubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs.name);
    console.log(inputs.email);
    console.log(inputs.message);
  };

  return (
    <form
      action="/send-data-here"
      method="post"
      onSubmit={handlesubmit}
      className="flex flex-col gap-4"
    >
      <label htmlFor="name">name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        className="text-zinc-950"
      />
      <label htmlFor="email">email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        className="text-zinc-950"
      />
      <label htmlFor="message">message</label>
      <textarea
        name="message"
        id="message"
        cols={30}
        rows={10}
        value={inputs.message}
        className="text-zinc-950"
        onChange={handleTextArea}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}
