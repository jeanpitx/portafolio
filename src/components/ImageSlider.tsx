import { useState } from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { RxDotFilled } from 'react-icons/rx';


interface Props {
    arrImagenes: { src: string; portada: boolean }[];
}
export const ImageSlider = ({ arrImagenes }: Props) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? arrImagenes.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === arrImagenes.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    };

    if (arrImagenes.length < 1) {
        return (
            <div className='w-full h-[220px] md:h-[320px] md:h-[400px]'>
            </div>
        );
    }
    return (
        <div className='w-full h-[220px] md:h-[320px] lg:h-[400px] w-full m-auto md:p-2 relative group'>
            <div
                style={{ backgroundImage: `url(${arrImagenes[currentIndex].src})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative'
            >
                <div className='h-full flex flex-col justify-between py-2'>
                    <div></div>
                    <div className='flex justify-center'>
                        {arrImagenes.map((slide, slideIndex) => (
                            <div
                                key={slide.src + slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-2 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <MdKeyboardArrowLeft onClick={prevSlide} className='text-xl md:text-3xl' />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] translate-x-2 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <MdKeyboardArrowRight onClick={nextSlide} className='text-xl md:text-3xl' />
            </div>

        </div>
    );
}