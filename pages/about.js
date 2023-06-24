import Image from "next/image"
import style from '@/styles/About.module.css'
export default function Aboute() {
    return (
        <>
            <div className={style.about}>
                <h1>Este projeto foi desenvolvido em Nextjs</h1>
                <Image src={'/images/generations.png'} width={'700'} height={'600'} alt="Pokemons"/>
            </div>
        </>
    )
}