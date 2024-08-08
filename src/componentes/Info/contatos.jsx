import estiloContatos from "../Info/contatos.module.css"
import Image from "next/image"
import Logo from "../../../public/logo.png"


export default function Contatos(){
    return(

        <section className={estiloContatos.box_contatos_pai}>

                <div className={estiloContatos.box_filho}>
                    <Image className={estiloContatos.img_logo} src={Logo}/>
                </div>

                <div className={estiloContatos.box_filho}>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernadinho de <br /> campos,98 <br /> São Paulo,SP 12345-678</p>
                </div>

                <div className={estiloContatos.box_contato}>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel:(11)9999-9999</p>
                </div>

                <div className={estiloContatos.box_horario}>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>

        </section>

    )
}