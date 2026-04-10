import { motion } from "framer-motion";
import { StickyScroll } from '../components/StickyScroll';
import { useState } from 'react';
import { Titulo } from '../components/Titulo';
import { SliderTestimonios } from '../components/SliderTestimonios';
import { useLang } from '../context';

export const SobreMi = () => {
    const { content } = useLang();
    const [activeCard, setActiveCard] = useState(0);

    const backgroundColors = [
        "#25192e",
        "#578777",
        "#218cb6"
    ];
    const linearGradients = [
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
                    <Titulo align='LEFT' useTheme={false} className='ml-0 text-white'>{content.ui.aboutMe.title}</Titulo>
                    <StickyScroll content={content.sobreMi} backgrounds={{ bg: backgroundColors, gradients: linearGradients }} activeCard={activeCard} setActiveCard={setActiveCard} />
                </div>
                <div className='w-full h-full'>
                    <div>
                        <Titulo align='LEFT' useTheme={false} className='mb-2 ml-0 text-white'>{content.ui.aboutMe.testimonials}</Titulo>
                        <p className='font-[600] font-Poppins text-xl ml-6'>{content.ui.aboutMe.testimonialSubtitle}</p>
                        <SliderTestimonios />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
