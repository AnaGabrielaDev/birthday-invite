import { capitalize } from "@/helper/capitalize";

export function Card ({name}: any) { 
    return(
    <>
    <div className="birthdayCard flex flex-col justify-between items-center h-screen w-screen bg-pink-400">
      <div className="cardFront" onClick={() => {new Audio("/audio/msc.mp3").play()}}>
        <h3 className="happy">Clique para abrir o convite</h3>
        <div className="flex">
        <img className="img-gaby" src="img/me.jpeg" alt="foto Gaby" />
        <img className="img-gaby" src="img/paty.jpg" alt="foto Gaby" />
        </div>

        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">Gaby faz 20!</h3>
        <p className="">Querida(o), {capitalize(name)}</p>
        <p className="">
          Eu tenho uma novidade incrível para te contar: eu vou fazer 20 anos e quero comemorar com você!
  
          A minha festa vai ser super especial, porque o tema é patricinhas dos anos 2000, aquela época que a gente adora relembrar. Você sabe, né? Muito rosa, brilho, saia plissada, bota de cano alto, tiara, gloss e tudo mais que a gente ama!
  
          Então, prepare-se para arrasar no visual estilo anos 2000(obrigatório), pode ser uma fantasia de personagem da época, roupas que eram tendências ou até mesmo um look todo rosa e venha curtir comigo e com as pessoas que eu amo. Vai ser uma noite inesquecível!
          Estou ansiosa para te ver!
        </p>
        <p>local: minha casa</p>

        <p>data: 25 de novembro</p>
        <p>horário: 18:30h</p>
        <p>sugestões de presentes: sandálias/saltos: 37, vestidos longos, perfumes doces (ex: luna tradicional) mas fique à vontade para escolher o que você acha que mais combina comigo (um hb20 combinaria kkkk)! </p>
        <p id="kiss">Beijos,</p>
        <p className="name">Ana Gabriela</p>
      </div>
    </div>
    </>
  )}
  