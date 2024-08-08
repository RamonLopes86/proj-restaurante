import Image from "next/image";
import estiloNossos from "../NossosSabores/sabores.module.css"
import SorveteColorido from "../../../public/banner-sabores.jpg"
import Eventos from "../../../public/eventos-image.jpg"
import Nos from "../../../public/sobre-image.jpg"




export default function NossosSabores(){

    return(

        <section className={estiloNossos.box_Pai}>

            <div className={estiloNossos.box_Sabores}>

                <Image className={estiloNossos.img} src={SorveteColorido}/>

                <div className={estiloNossos.Texto}>
                    
                        <h1>Nossos Sabores</h1>
                        <h4>Novos e deliciosos</h4>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!
                        </p>
                  

                </div>

            </div>

            <div className={estiloNossos.box_Eventos}>
            
                <div className={estiloNossos.Texto}>
                    
                        <h1>Nossos Eventos</h1>
                        <h4>Delícias com sorvete!</h4>
                        <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                        </p>
                  

                </div>  

                <Image className={estiloNossos.img} src={Eventos}/> 

            </div>

            <div className={estiloNossos.box_Nos}>


                <Image className={estiloNossos.img} src={Nos}/> 

            <div className={estiloNossos.Texto}>
                    
                    <h1>Nossos Eventos</h1>
                    <h4>Delícias com sorvete!</h4>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                    </p>
              

            </div>  

            

            </div>


        </section>


    )


}