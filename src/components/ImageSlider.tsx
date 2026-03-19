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
            <div className='w-full h-[220px] md:h-[320px] lg:h-[400px] rounded-2xl bg-gray-800 flex items-center justify-center'>
                <div className="flex flex-col items-center gap-3 text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-Poppins">Sin imágenes</span>
                </div>
            </div>
        );
    }
    return (
        <div className='w-full h-[220px] md:h-[320px] lg:h-[400px] w-full m-auto md:p-2 relative group'>
            <div
                style={{ backgroundImage: `url(${arrImagenes[currentIndex].src})` }}
                className='w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500 relative'
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