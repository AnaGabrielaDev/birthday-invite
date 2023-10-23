'use client'
import { capitalize } from '@/helper/capitalize'
import Sparkle from 'react-sparkle'


export default function Home({searchParams}) {
  return (
    <>
    {/* <Confetti
      width={1000}
      height={500}
      colors={['pink', 'purple']}
      confettiSource={{x: 2, y:2, w:2, h:2}}
    /> */}

    <div className="flex flex-col justify-between items-center h-screen w-screen bg-pink-400">
        <Sparkle
          color={'#fff'}
          count={50}
          minSize={5}
          maxSize={8}
          overflowPx={50}
          fadeOutSpeed={60}
          newSparkleOnFadeOut={true}
          flicker={true}
          flickerSpeed={'normal'}
        />

        <div>
          <h1 className="text-white mt-6 text-3xl">🎀 {capitalize(searchParams.name)}, Você está convidado(a) para a festa de aniversário! 🎀</h1>
          <h2 className="text-white text-2xl">Tema: Patricinhas dos anos 2000</h2>
        </div>

        <div className='text-white'>
          <ul>
            <li>
              endereco: minha casa
            </li>
            <li>
              horario: 19:00 horas
            </li>
            <li>
              data: 24 de novembro
            </li>
            <li>
              vestimenta: estilo anos #2000
            </li>
          </ul>
        </div>
      <p className='text-white mt-90 text-lg'>Lembre-se, nas festas de aniversários... USAMOS ROSA!</p>
    </div>
    </>
    
  )
}
