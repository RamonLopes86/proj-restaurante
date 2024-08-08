import Image from "next/image";
import Link from "next/link";
import estiloHeader from "./header.module.css"
import Logo from "../../../public/logo.png"




export default function Header(){

    return(

        <header className={estiloHeader.header}>

            <Image className={estiloHeader.img_logo} src={Logo}></Image>
           

            <nav>
                <ul className={estiloHeader.lista_ul}>
                    <Link className={estiloHeader.Link} href="/">
                        <li>Home</li>
                    </Link>
                    <Link className={estiloHeader.Link} href="/pgsabores">
                        <li>Sabores</li>
                    </Link>
                    <Link className={estiloHeader.Link} href="/pgsobre">
                        <li>Sobre</li>
                    </Link>
                    
                </ul>
            </nav>
        </header>

    )

}