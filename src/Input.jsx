import { useState } from "react";

export default function Input({ handleInput }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim() === "") return;
    handleInput(input);
    setInput("");
  }
  return (
    <div className="flex max-w-screen justify-center pt-4 mx-10">
      <form onSubmit={handleSubmit} className="   flex-1 flex max-w-4xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type City Name Here"
          className="text-center flex-1 rounded-xl shadow-xl "
        />
      </form>
    </div>
  );
}
