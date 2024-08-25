import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import NavBar from "./Components/NavBar/NavBar"
import Hero from "./Components/Hero/Hero"

export default function App() {
  let heroData=[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const[heroCount,setheroCount]=useState(0)
  const[playStatus,setplayStatus]=useState(false)

  useEffect(()=>{
    setInterval(()=>{
      setheroCount((count)=>{return count===2?0:count+1})
    },3000)
  },[])
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <NavBar/>
      <Hero
        setplayStatus={setplayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setheroCount={setheroCount}
        playStatus={playStatus}
      />
    </div>
  )}