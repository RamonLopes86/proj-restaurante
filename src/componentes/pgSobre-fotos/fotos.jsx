import estiloFotos from "../pgSobre-fotos/fotos.module.css"
import Image from "next/image"
import Pessoas from "../../../public/sobre-image.jpg"
import Lugar from "../../../public/sorveteria.jpg"



export default function SessaoFotos(){

    return(

        <section className={estiloFotos.box_fotos}>

           
                <Image className={estiloFotos.img} src={Pessoas} alt="pessoas tomando sorvete"/>
          

            
                <Image className={estiloFotos.img} src={Lugar} alt="pessoas tomando sorvete"/>
           

        </section>

    )
}