import { useState } from "react";
import "./App.css";

function App() {
  const [color, setcolor] = useState("olive");

  return (
    <div
      className="w-full h-screen fixed top-0 left-0"
      style={{ background : color }}
    >
      <div class="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 fixed top-10 left-10 bg-slate-700 p-5 rounded-xl">
        <button
        onClick={() => setcolor("black")}
          type="button"
          class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Black color
        </button>
        <button
        onClick={() => setcolor("yellow")}
          type="button"
          class="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Yellow color
        </button>
        <button 
        onClick={() => setcolor("red")}
          type="button"
          class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Red color
        </button>
        <button
        onClick={() => setcolor("blue")}
          type="button"
          class="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Blue color
        </button>
        <button 
        onClick={() => setcolor("pink")}
          type="button"
          class="rounded-md bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Pink color
        </button>
        <button 
        onClick={() => setcolor("white")}
          type="button"
          class="rounded-md bg-white  px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          White color
        </button>
        <button 
        onClick={() => setcolor("green")}
          type="button"
          class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Green color
        </button>
      </div>
    </div>
  );
}

export default App;
