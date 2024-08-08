import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/componentes/Header/header";
import Sorvete from "@/componentes/SorveteArtesanal/SorveteArtesanal"
import NossosSabores from "@/componentes/NossosSabores/NossosSabores";
import Contatos from "@/componentes/Info/contatos";
import Footer from "@/componentes/footer/footer";

export default function Home() {
  return (
      <>
      
      

      <main>

        <Sorvete/>
        
        <NossosSabores/>

        
       

      </main>

      
      
      </>
    
  );
}
