'use client'
import Image from "next/image"
import Foto from "@/public/foto.jpg"
import { useSettingStore } from "@/reducers/store"

const PortfolioCard = (props: any) => {


    return (
        <div className="w-1/3 flex flex-col justify-center gap-5">
            <Image className="rounded-3xl w-3/4 self-center" src={ props.url } alt="TEXT" width={500} height={500}/>
            <div className="w-full text-center font-semibold">{ props.description }</div>
        </div>
    )
}

const text = {
    english: {
        name: "Portfolio",
        title: "Some projects",
        description: {
            first: "This is the first project",
            second: "This is the second project",
            third: "This is the third project"
        }
    },
    español: {
        name: "Portafolio",
        title: "Algunos proyectos",
        description: {
            first: "Este es el primer proyecto",
            second: "Este es el segundo proyecto",
            third: "Este es el tercer proyecto"
        }
    }
}

export const Portfolio = () => {
    
    const languageSelected = useSettingStore((state: any) => state.language)

    return (
        <div className="min-w-screen p-16 flex flex-col gap-6 items-center">
            <p className="font-bold text-green-500">{
                languageSelected === "english"
                    ? text.english.name
                        : text.español.name
            }</p>
            <h1 className="text-5xl font-extrabold">{
                languageSelected === "english"
                    ? text.english.title
                        : text.español.title
            }</h1>
            <div className="flex w-full gap-5 ">

                <PortfolioCard url={ Foto } description={
                    languageSelected === "english"
                        ? text.english.description.first
                            : text.español.description.first
                } />

                <PortfolioCard url={ Foto } description={
                    languageSelected === "english"
                        ? text.english.description.second
                            : text.español.description.second
                } />

                <PortfolioCard url={ Foto } description={
                    languageSelected === "english"
                        ? text.english.description.third
                            : text.español.description.third
                } />

            </div>
        </div>
    )
}