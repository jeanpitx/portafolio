import emailjs from "@emailjs/browser";
import { Input } from '../components/InputForm';
import { TextArea } from '../components/TextAreaFrom';
import imgDev from "../assets/developer.svg";
import { Image, Link, Snippet, Spinner } from '@nextui-org/react';
import { Tilt } from 'react-tilt';
import { FaLinkedin } from "react-icons/fa";
import { MouseEvent, useState } from 'react';
import Swal from 'sweetalert2';
import { ENLACES } from "../assets/content";
import StarsCanvas from "../components/Stars";


export const Contacto = () => {

    const [formValues, setFormValues] = useState({ name: '', email: '', message: '', phone: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { name, email, phone, message } = formValues;


    const onInputStateChange = ({ target }: any) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const resetForm = () => {
        setFormValues({ name: '', email: '', message: '', phone: "" })
    }


    const enviarMesaje = async (e: MouseEvent) => {
        e.preventDefault();

        setIsLoading(true);
        if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
            setIsLoading(false);
            return Swal.fire({
                title: "Faltan datos obligatorios",
                icon: "warning"
            })
        }
        const resp = await emailjs.send("service_1sz7mit", "template_xmndj6k",
            {
                to_name: "Jean Meza",
                to_email: "jeanpitx@gmail.com",
                from_name: name,
                from_mail: email,
                from_phone: phone,
                message: message,
            },
            "IRpKX0tzEcKYY7rM0"
        )
        setIsLoading(false);
        if (resp.status == 200) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Gracias por contactarme, pronto me comunicare contigo.",
                showConfirmButton: false,
                timer: 2300
            });
            resetForm();
        } else {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Ups, algo salio mal, Por favor intentalo nuevamente.",
                showConfirmButton: false,
                timer: 2000
            });
        }
    }


    return (
        <div id="contacto" className='w-full py-10 bg-secondary flex gap-36 justify-center items-center relative'>
            <StarsCanvas/>
            <form className="bg-primary drop-shadow-xl w-[90%] md:w-full max-w-[590px] border border-border rounded-lg p-8 font-Poppins text-textPrimary" onSubmit={() => { }}>
                <h3 className='text-textPrimary font-[800] text-4xl mb-6'>Contacto.</h3>
                <div className="mb-4 flex flex-col gap-2">
                    <label htmlFor="firstname">Nombre</label>
                    <Input id="firstname"
                        name='name'
                        placeholder="Ejemplo" type="text" className='bg-primary'
                        onChange={(e) => { onInputStateChange(e) }} />
                </div>
                <div className="mb-4 flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <Input id="email" placeholder="jean@ejemplo.com" type="email" className='bg-primary'
                        name="email" onChange={(e) => { onInputStateChange(e) }} />
                </div>
                <div className="mb-4 flex flex-col gap-2">
                    <label htmlFor="phone">{"Telefono (*opcional)"}</label>
                    <Input id="phone" placeholder="+593" type="number" className='bg-primary'
                        name='phone' onChange={(e) => { onInputStateChange(e) }} />
                </div>
                <div className="mb-4 flex flex-col gap-2">
                    <label>Mensaje</label>
                    <TextArea className="w-full h-36 bg-primary"
                        name='message' onChange={(e) => { onInputStateChange(e) }} />
                </div>


                <button 
                disabled={isLoading}
                onClick={(e) => enviarMesaje(e)} className="mt-6 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none 
                w-full 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className={`transition-all ease-in-out duration-700 
                    hover:bg-gradient-to-br from-indigo-500 to-pink-500 inline-flex 
                    ${isLoading ? "bg-gradient-to-br from-indigo-500 to-pink-500" : ""}
                    h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm 
                    font-medium text-white backdrop-blur-3xl`}>
                        {
                            isLoading ? <span className="flex items-center gap-4"><Spinner size="sm" color="current"/> Enviando...</span> : <span>Enviar mensaje</span>
                        }
                    </span>
                </button>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                <div className='w-full flex items-center justify-center gap-2 md:gap-6 text-textPrimary'>
                    <Link href={ENLACES.linkedin} className='text-textPrimary text-2xl md:text-3xl'>
                        {<FaLinkedin />}
                    </Link>
                    <Snippet hideSymbol color='warning' tooltipProps={{ content: "Copiar al portapapeles", }} className='text-xs md:text-sm'>yojean02@hotmail.com</Snippet>
                </div>
            </form>

            <Tilt className='hidden md:flex animate-bounce cursor-pointer'>
                <Image
                    src={imgDev}
                    className='h-96 animate-bounce'
                />
            </Tilt>
        </div>
    )
}
