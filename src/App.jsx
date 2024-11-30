import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 item-center justify-center">
      <Navbar />
      < Card />
    </div>
  )
}

export default App;
