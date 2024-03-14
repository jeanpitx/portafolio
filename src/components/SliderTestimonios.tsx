import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { ESPANOL } from "../assets/content";


export const SliderTestimonios = () => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 1,
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true);
        }
    })

    return (
        <div className="lg:px-10 py-4">
            <div className="hidden lg:mt-8 lg:flex lg:gap-4 mb-6">
                <Button
                    onClick={() => { instanceRef.current?.prev() }}
                    isIconOnly
                    className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500
                    hover:scale-110 text-white">
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-7 rtl:rotate-180"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </Button>

                <Button
                    onClick={() => { instanceRef.current?.next() }}
                    isIconOnly
                    className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500
                    hover:scale-110 text-white">
                    <svg
                        className="size-7 rtl:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                        />
                    </svg>
                </Button>
            </div>
            <div>
            </div>
            <div ref={sliderRef} className="keen-slider">
                {
                    ESPANOL.testimonios.map((item) => (
                        <figure key={item.nombre} className="keen-slider__slide w-48 shrink-0 relative bg-white py-6 px-4
                        font-Poppins rounded-xl drop-shadow-md border">
                            <svg aria-hidden="true" width="105" height="78" className="absolute top-6 left-6 fill-slate-200">
                                <path
                                    d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                                </path>
                            </svg>
                            <blockquote className="relative">
                                <p className="text-lg tracking-tight text-slate-900 font-[400]">
                                    {item.testimonio}
                                </p>
                            </blockquote>
                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-2 h-[1px] w-full" />
                            <figcaption className="relative flex items-center justify-between">
                                <div>
                                    <div className="font-display text-base text-slate-900">{item.nombre}</div>
                                    <div className="text-sm text-slate-500">{item.posicion}</div>
                                </div>
                                <div className="overflow-hidden rounded-full bg-slate-50">
                                    <img alt="" src={item.imagen} className="h-12 w-12 object-cover" loading="lazy" width="46" height="46" />
                                </div>
                            </figcaption>
                        </figure>
                    ))
                }
            </div>
            {loaded && instanceRef.current &&
                (<div className="w-3/4 m-auto flex items-center justify-center gap-2 my-4">
                    {
                        [...Array(instanceRef.current?.track.details.slides.length)].map((dot, i) => (
                            <span key={dot +  "-" +i}
                                className={`h-3 w-3 rounded-full ${i == currentSlide ? "bg-[#fff] h-4 w-4" : "bg-[rgba(255,255,255,0.4)]"}`}>
                            </span>
                        ))
                    }
                </div>)
            }

        </div >
    )
}
