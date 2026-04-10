import { FaLinkedin, FaGithub, FaInstagramSquare, FaWhatsapp } from "react-icons/fa";
import { ENLACES } from "../assets/content";
import { Link } from "@nextui-org/react";
import { useLang } from "../context";

export const Footer = () => {
    const { content } = useLang();
    const ui = content.ui.footer;
    const nav = content.ui.nav;

    const calcularFecha = (): string => {
        return `© Copyright ${new Date().getFullYear()}. Todos los derechos reservados.`;
    }
    return (
        <footer className="w-full bg-primary text-textPrimary">
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1.5px] w-full" />
            <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sm:col-span-2 space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide">{ui.sections}</p>
                        <ul>
                            {nav.map(item => (
                                <li key={item.name}>
                                    <Link isBlock showAnchorIcon href={item.href} color="foreground">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-2 text-sm">
                        <p className="text-base font-bold tracking-wide">{ui.contact}</p>
                        <div className="flex">
                            <p className="mr-1 text-textSecondary">{ui.phone}</p>
                            <a href="tel:+593960445403" aria-label="Our phone" title="Our phone" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">+593 960-445-403</a>
                        </div>
                        <div className="flex">
                            <p className="mr-1 text-textSecondary">{ui.email}</p>
                            <a href="mailto:yojean02@hotmail.com" aria-label="Our email" title="Our email" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">yojean02@hotmail.com</a>
                        </div>
                        <div className="flex">
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Our address" title="Our address" className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800">
                                Ecuador
                            </a>
                        </div>
                    </div>
                    <div>
                        <span className="text-base font-bold tracking-wide">{ui.networks}</span>
                        <div className="flex items-center mt-1 space-x-3">
                            <a href={ENLACES.github} target="_blank" className="transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <FaGithub className="text-3xl" />
                            </a>
                            <a href={ENLACES.linkedin} className="transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <FaLinkedin className="text-3xl" />
                            </a>
                            <a href={ENLACES.instagram} target="_blank" className="transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <FaInstagramSquare className="text-3xl" />
                            </a>
                            <a href={ENLACES.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-green-500">
                                <FaWhatsapp className="text-3xl" />
                            </a>
                        </div>
                        <p className="mt-4 text-sm text-textSecondary">
                            {ui.followMe}
                        </p>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
                <div className="flex flex-col-reverse justify-between pt-5 pb-10 lg:flex-row">
                    <p className="text-sm">
                        {calcularFecha()}
                    </p>
                </div>
            </div>
        </footer>
    )
}
