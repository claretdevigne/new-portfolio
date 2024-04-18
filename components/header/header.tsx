'use client'
import Link from "next/link"
import { LanguageDropdown } from "../dropdown/languageDropdown"
import { useSettingStore } from "@/reducers/store"

export const Header = () => {

    // TODO: ANY
    const languageSelected = useSettingStore((state: any) => state.language)

    return (
        <header className="flex fixed w-screen justify-between items-center py-8 px-16 bg-gray-900 text-white z-50">
            <h1 className="text-3xl font-bold hover:text-green-500">
                <span className="text-green-400">C</span>
                <span className="text-green-500">l</span>
                <span>aret </span>
                <span className="text-green-400">D</span>
                <span>ev</span>
            </h1>

            <div className="flex lg:hidden">
                <svg className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="50"
                    height="50"
                    viewBox="0,0,256,256"
                >
                <g 
                    fill="none"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                >
                <g 
                    transform="scale(2,2)"
                >
                <path
                    d="M64,14c-27.61424,0 -50,22.38576 -50,50c0,27.61424 22.38576,50 50,50c27.61424,0 50,-22.38576 50,-50c0,-27.61424 -22.38576,-50 -50,-50z" 
                    fill-opacity="0"
                ></path>
                <path 
                    d="M64,117c-29.2,0 -53,-23.8 -53,-53c0,-29.2 23.8,-53 53,-53c29.2,0 53,23.8 53,53c0,29.2 -23.8,53 -53,53zM64,17c-25.9,0 -47,21.1 -47,47c0,25.9 21.1,47 47,47c25.9,0 47,-21.1 47,-47c0,-25.9 -21.1,-47 -47,-47z" 
                    fill="#22c55e"
                    >
                </path>
                <path 
                    d="M86.5,52h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3zM86.5,67h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3z" 
                    fill="white"
                >
                </path>
                <g 
                    fill="white"
                >
                <path 
                    d="M86.5,82h-45c-1.7,0 -3,-1.3 -3,-3c0,-1.7 1.3,-3 3,-3h45c1.7,0 3,1.3 3,3c0,1.7 -1.3,3 -3,3z"
                ></path>    
                </g>
                </g>
                </g>
                </svg>
            </div>

            <nav className="gap-5 hidden lg:flex">
                <Link href="/">
                    <p className="hover:text-green-400">{
                        languageSelected === "english"
                            ? "Home"
                                : "Inicio"
                    }</p>
                </Link>
                <p>|</p>
                <Link href="/about">
                    <p className="hover:text-green-400">{
						languageSelected === "english"
							? "About"
                                : "Acerca de"
										}</p>
                </Link>
                <p>|</p>
                <Link href="/portfolio">
                    <p className="hover:text-green-400">{
						languageSelected === "english"
                            ? "Portfolio"
                                : "Portafolio"
										}</p>
                </Link>
                <p>|</p>
                <Link href="/blog">
                    <p className="hover:text-green-400">{
						languageSelected === "english"
                            ? "Blog"
                                : "Blog"
										}</p>
                </Link>
                <p>|</p>
                <Link href="/contact">
                    <p className="hover:text-green-400">{
						languageSelected === "english"
                            ? "Contact"
                                : "Contacto"
										}</p>
                </Link>

                <p>|</p>

                <LanguageDropdown />
            </nav>
        </header>
    )
}