'use client'
import { capitalize } from "@/helper/capitalize";
import "./style.css";

export default function Home({searchParams}: any) {
  return (
    <div className="App">
      <Card name={searchParams.name} />
    </div>
  );
}
export function Card ({name}: any) { 
  return(
  <>
  <div className="birthdayCard flex flex-col justify-between items-center h-screen w-screen bg-pink-400">
    <div className="cardFront">
      <h3 className="happy">20 anos de Gaby</h3>
      <div className="balloons">
        <div className="balloonOne" />
        <div className="balloonTwo" />
        <div className="balloonThree" />
        <div className="balloonFour" />
      </div>
    </div>
    <div className="cardInside">
      <h3 className="back">Oie!</h3>
      <p className="p-0 m-0">Querida, {capitalize(name)}</p>
      <p className="p-0 m-0 text-xs	">
        Eu tenho uma novidade incrível para te contar: eu vou fazer 20 anos e quero comemorar com você!

        A minha festa vai ser super especial, porque o tema é patricinhas dos anos 2000, aquela época que a gente adora relembrar. Você sabe, né? Muito rosa, brilho, saia plissada, bota de cano alto, tiara, gloss e tudo mais que a gente ama!

        Então, prepare-se para arrasar no visual estilo anos 2000(obrigatório) e venha curtir comigo e com as pessoas que eu amo. Vai ser uma noite inesquecível!
        Estou ansiosa para te ver!
      </p>
      <p id="kiss">Beijos,</p>
      <p className="name">Ana Gabriela</p>
    </div>
  </div>
  </>
)}
