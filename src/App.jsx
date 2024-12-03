import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar />
      <div className="px-20 flex gap-10 flex-wrap">
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
        < Card />
      </div>
    </div>
  )
}

export default App;
