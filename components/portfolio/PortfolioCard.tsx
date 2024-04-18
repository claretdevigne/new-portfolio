import Image from "next/image"

export const PortfolioCard = (props: any) => {


    return (
        <div className="md:w-1/3 flex flex-col justify-center gap-5">
            <Image className="rounded-3xl w-3/4 self-center" src={ props.url } alt="TEXT" width={500} height={500}/>
            <div className="w-full text-center font-semibold">{ props.description }</div>
        </div>
    )
}