'use client'
import "./style.css";
import { Card } from "./Card";

export default function Home({searchParams}: any) {
  return (
    <div className="App">
      <Card name={searchParams.name} />
    </div>
  );
}