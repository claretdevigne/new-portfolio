'use client'
import Foto from "@/public/foto.jpg"
import { useSettingStore } from "@/reducers/store"
import { PortfolioCard } from "./PortfolioCard"

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
            <div className="flex flex-col items-center w-full gap-5 md:flex-row">

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