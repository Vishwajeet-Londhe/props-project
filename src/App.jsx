import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {

  const data = [
    {image: "https://plus.unsplash.com/premium_photo-1681074651975-f036fb8b3db9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", SongName:"Kabira", ArtistName:"Tochi Raina" ,added:false},
    {image: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", SongName:"Mile ho Tum Hamko", ArtistName:"Neha kakkar" ,added:false},
    {image: "https://images.unsplash.com/photo-1520454125516-134a66d9bf78?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", SongName:"Aashiq Banaya Aapne", ArtistName:"Himesh Reshammiya" ,added:false},
    {image: "https://images.unsplash.com/photo-1505282722405-413748d3de7a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", SongName:"Papa Mera Papa", ArtistName:"Shreya Ghoshal" ,added:false},
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index)=>{
    setSongData((prev)=>{
      return prev.map((item, itemindex)=>{
        if(itemindex === index) return {...item, added: !item.added};
        return item;
      })
    })
  }

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar />
      <div className="px-20 flex gap-10 flex-wrap">
        {songData.map((obj, index)=>(
          <Card data={obj} handleClick={handleClick} index={index} key={index} />
        ))}
      </div>
    </div>
  )
}

export default App;
