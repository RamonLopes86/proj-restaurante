import Image from "next/image";
import estiloSorvete from "../SorveteArtesanal/SorvArt.module.css"
import ImageSorvete from "../../../public/banner-home.png"




export default function Sorvete(){

    return(

       <section className={estiloSorvete.box_sorvete}>
            <h1>SORVETE ARTESANAL</h1>
            <Image className={estiloSorvete.img_sorvete} src={ImageSorvete} alt="Imagem de um sorvete"/>
       </section>

    )

}