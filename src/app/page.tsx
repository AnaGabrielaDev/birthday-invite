'use client'
import "./style.css";
import { Card } from "./Card";
import Sparkle from "react-sparkle"

export default function Home({searchParams}: any) {
  return (
    <div className="App overflow-hidden">
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-pink-400">
      <Sparkle
        color={'#fff'}
        count={80}
        minSize={5}
        maxSize={8}
        overflowPx={20}
        fadeOutSpeed={50}
        newSparkleOnFadeOut={true}
        flicker={true}
        flickerSpeed={'normal'}
      />
      <Card name={searchParams.name} />
      </div>
    </div>
  );
}