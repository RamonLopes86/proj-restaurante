import Image from "next/image";
import Header from "@/componentes/Header/header";
import Footer from "@/componentes/footer/footer";
import Contatos from "@/componentes/Info/contatos";
import Sabores from "@/componentes/pgSabor-NossosSabores/nossoSabor";
import BolasSorvete from "@/componentes/pgSabor-sabores/sabores";


export default function PgSabor(){

        return(

            <>
            
            <main>
                
                <Sabores/>

                <BolasSorvete/>
                
            </main>
           
            </>

        )
}