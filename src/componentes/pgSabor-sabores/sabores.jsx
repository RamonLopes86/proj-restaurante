import estiloSabores from "../pgSabor-sabores/sabores.module.css"
import Image from "next/image"
import Oreo from "../../../public/sabor-oreo.png"
import Pistache from "../../../public/sabor-pistache.png"
import Cokie from "../../../public/sabor-cookies-avela.png"
import Kiwi from "../../../public/sorbet-kiwi.png"
import Morango from "../../../public/sorbet-morango.png"
import Limao from "../../../public/sorbet-limao.png"


export default function BolasSorvete(){
    return(
        
        
    <section className={estiloSabores.box_pai}>
        
        <h2 className={estiloSabores.titulo}>SABORES DE SORVETE</h2>

        <section className={estiloSabores.box_BolasSorvete}>
        
            <div className={estiloSabores.box_bolas}>

                <Image style={{width:"350px"}} className={estiloSabores.img_bolas} src={Oreo}/>

                <div style={{position:'relative' , top:'10px'}} className={estiloSabores.box_texto}>
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo.Uma explosão de sabor.</p>
                </div>

            </div>

            <div className={estiloSabores.box_bolas}>
                <Image className={estiloSabores.img_bolas} src={Pistache}/>

                <div className={estiloSabores.box_texto}>
                    <h3>Sorvete Pistache</h3>
                    <p>Cremoso sorvete pistache com pedacinhos de semente.</p>
                </div>

            </div>

            <div className={estiloSabores.box_bolas}>

                <Image style={{width:'290px'}}  className={estiloSabores.img_bolas} src={Cokie} alt="imagem de avelã sorvete"/>

                <div style={{position:'relative', top:'17px'}}  className={estiloSabores.box_texto}>
                    <h3>Sorvete de Cookies & Avelã</h3>
                    <p>O nosso melhor sorvete.Você vai adorar o sabor</p>
                </div>

            </div>

            <div className={estiloSabores.box_bolas}>
                <Image style={{width:"400px"}} className={estiloSabores.img_bolas}  src={Kiwi}/>

                <div className={estiloSabores.box_texto} style={{position:'relative' , top:'5px'}}>
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwui.Rico em vitamina C.</p>
                </div>

            </div>

            <div className={estiloSabores.box_bolas}>
                <Image className={estiloSabores.img_bolas} src={Morango}/>

                <div className={estiloSabores.box_texto}>
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de Morango gourmet. <br />Tradicional e saboroso</p>
                </div>

            </div>

            <div className={estiloSabores.box_bolas}>
                <Image style={{width:'380px'}} className={estiloSabores.img_bolas} src={Limao} alt="imagem de limao"/>

                <div className={estiloSabores.box_texto}>
                    <h3>Sorvete de Limão Siciliano</h3>
                    <p>Sorvete de Morango gourmet. <br />Tradicional e saboroso</p>
                </div>
            </div>

        </section>

    </section>

        
    )
}