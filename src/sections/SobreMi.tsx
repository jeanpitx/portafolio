import { motion } from "framer-motion";
import { StickyScroll } from '../components/StickyScroll';
import { useState } from 'react';
import { Titulo } from '../components/Titulo';
import { SliderTestimonios } from '../components/SliderTestimonios';
import { ESPANOL } from '../assets/content';

export const SobreMi = () => {

    const [activeCard, setActiveCard] = useState(0);

    const backgroundColors = [
        "#25192e",
        "#578777",
        "#f58413"
    ];
    const linearGradients = [
        //"linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
        "transparent",
        "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
        "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];

    return (
        <motion.div
            id='sobre-mi'
            className="w-full min-h-[100vh] flex items-center text-white"
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
        >
            <div className="w-full xl:grid p-6 md:p-10 items-center justify-center lg:py-20" style={{ gridTemplateColumns: "60% 40%" }}>
                <div className='w-full'>
                    <Titulo align='LEFT' useTheme={false} className='ml-0 text-white'>Sobre mi.</Titulo>
                    <StickyScroll content={ESPANOL.sobreMi} backgrounds={{ bg: backgroundColors, gradients: linearGradients }} activeCard={activeCard} setActiveCard={setActiveCard} />
                </div>
                <div className='w-full h-full'>
                    <div>
                        <Titulo align='LEFT' useTheme={false} className='mb-2 ml-0 text-white'>Testimonios.</Titulo>
                        <p className='font-[600] font-Poppins text-xl ml-6'>Lo que dicen de mi</p>
                        <SliderTestimonios />
                    </div>
                </div>
            </div>

        </motion.div>
    )
}
