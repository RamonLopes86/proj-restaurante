import Header from "@/componentes/Header/header";
import Footer from "@/componentes/footer/footer";
import Contatos from "@/componentes/Info/contatos";
import GelateriaFoto from "@/componentes/pgSobre-Gelateria/gelateria";
import TxNos from "@/componentes/pgsobre-sobreNos/sobreNos";
import SessaoFotos from "@/componentes/pgSobre-fotos/fotos";




export default function PgSobre(){
    return(

        <>
        
      

       <main>
        <GelateriaFoto/>
        <TxNos/>
        <SessaoFotos/>
       
       </main>
       
        </>
     

    )
}