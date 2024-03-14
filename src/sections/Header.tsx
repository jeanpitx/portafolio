import { Button, Link } from "@nextui-org/react";
import { ESPANOL, SLIDER_HEADER } from "../assets/content";
import { Titulo } from "../components/Titulo";
import { InfiniteMovingCards } from "../components/InfiniteMovingCards";
import { TextGenerateEffect } from "../components/TextGenerateEffect";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import StarsCanvas from "../components/Stars";

export const Header = () => {
  return (
    <div className="md:pt-12 relative w-full min-h-[100vh] overflow-hidden bg-primary dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex flex-col items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <StarsCanvas/>
      <Titulo className="max-w-[790px] mt-24 mb-0 lg:mb-8 lg:mt-12">{ESPANOL.header.titulo}</Titulo>
      <TextGenerateEffect className="font-Poppins font-[500] mb-6 w-[90%] lg:w-[60%] text-textSecondary text-center text-sm lg:text-lg" words={ESPANOL.header.descripcion} />

      <InfiniteMovingCards
        items={SLIDER_HEADER.slice(0, 6)}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={SLIDER_HEADER.slice(6)}
        direction="left"
        speed="slow"
      />

      <div className="flex flex-col items-center lg:flex-row gap-2 md:gap-12 my-6 lg:my-12">
        
        <Link href={"#contacto"} className="w-full transition duration-300 ease-in-out hover:scale-125 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="text-xl font-Poppins font-[600] inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-white backdrop-blur-3xl">
            Contacto
          </span>
        </Link>
        <Button href="#proyectos" as={Link} className="bg-gradient-to-br from-indigo-500 to-pink-500 w-full p-6 px-12 rounded-full
         hover:scale-125 md:hover:scale-125 text-xl font-Poppins font-[600]">
          Mis proyectos
        </Button>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    
      <div className="hidden justify-center gap-10 pb-6">
        <FaLinkedin className="text-textPrimary text-4xl animate-bounce" />
        <FaGithub className="text-textPrimary text-4xl" />
      </div>
      
    </div>
  )
}