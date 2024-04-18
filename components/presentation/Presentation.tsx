'use client'

import { useSettingStore } from "@/reducers/store"
import Image from "next/image"
import { useState } from "react"
import Foto from '@/public/foto.jpg'

const texts = {
    english: {
        greeting: "Hello!",
        name: "I'm Claret Devigne",
        description: "a passionate full stack developer. Since a young age, I've enjoyed the art of programming and embarked on creating innovative web projects. My self-taught approach and passion for technologies like React, Next.js, and JavaScript have led me to develop solid skills and continue growing constantly. I'm excited to collaborate on innovative projects and contribute meaningfully to the world of technology.",
    },
    español: {
        greeting: "Hola!",
        name: "Soy Claret Devigne",
        description: "un desarrollador full stack apasionado. Desde muy joven, he disfrutado el arte de programar y he empezado a crear proyectos web innovadores. Mi enfoque autodidacta y pasión por las tecnologías como React, Next.js, y JavaScript han llevado a desarrollar habilidades sólidas y seguir creciendo constantemente. Me encanta colaborar en proyectos innovadores y contribuir significativamente al mundo de la tecnología.",
    }
}

export const Presentation = () => {

    const [copyLabel, setCopyLabel] = useState(false)
    const languageSelected = useSettingStore((state: any) => state.language)

    const handleCopy = () => {
        navigator.clipboard.writeText("claretdevigne@gmail.com")
        setCopyLabel(!copyLabel)
        setTimeout(() => {
            setCopyLabel(false)
        }, 2000)
    }

    const handleWhatsapp = () => {
        window.open("https://wa.me/+529982915952")
    }

    return (
        <div className="bg-slate-800 min-w-screen px-16 py-12 flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
                <p className="fade-in text-white mb-5 text-center lg:text-start">{ 
                    languageSelected === "english" 
                        ? texts.english.greeting 
                            : texts.español.greeting }</p>
                <h1 className="fade-in text-6xl mb-5 text-green-500 text-center lg:text-start"><span>👋</span> {
                    languageSelected === "english" 
                        ? texts.english.name 
                            : texts.español.name
                }</h1>
                <p className="fade-in text-white mb-5 text-center lg:text-start">{
                    languageSelected === "english" 
                        ? texts.english.description 
                            : texts.español.description
                }</p>
                <input value={"claretdevigne@gmail.com"} className="fade-in w-3/4 md:w-1/2 text-green-600 py-1 text-center rounded-2xl outline-none" placeholder="claretdevigne@gmail.com"/>
                <span>
                    <button onClick={handleCopy} className="fade-in ml-4 align-middle bg-green-200 opacity-80 rounded-full p-1.5">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            height="22"
                            viewBox="0 -960 960 960"
                            width="22"
                            >
                            <path 
                                fill="#4d7c0f"
                                d="M300-200q-24 0-42-18t-18-42v-560q0-24 18-42t42-18h440q24 0 42 18t18 42v560q0 24-18 42t-42 18H300Zm0-60h440v-560H300v560ZM180-80q-24 0-42-18t-18-42v-620h60v620h500v60H180Zm120-180v-560 560Z"
                            />
                        </svg>
                    </button>

                    <span className={`${copyLabel ? "" : "hidden"} relative inline-block bg-gray-800 text-white px-4 py-1 rounded-lg`}>
                        <span className="absolute top-full left-0 transform -translate-x-1 -translate-y-5 bg-gray-800 border-gray-800 rotate-45 w-3 h-3"></span>
                            Texto copiado
                    </span>

                </span>
                
                <div className="mt-4 text-green-500 flex items-center gap-3">
                <input value={"+52 99 82 91 59 52"} className="fade-in w-3/4 md:w-1/2 text-green-600 py-1 text-center rounded-2xl outline-none"/>
                    <span onClick={handleWhatsapp} className="fade- in opacity-70 cursor-pointer">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="40"
                            height="40">
                            <path
                                fill="#bbf7d0"
                                d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"
                            />
                        </svg>
                    </span>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center items-center my-20">
                <Image className="foto-animation rounded-full w-1/2" src={ Foto } alt="Foto" width={500} height={500} />
            </div>
        </div>
    )
}