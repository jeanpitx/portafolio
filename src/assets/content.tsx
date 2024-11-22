import imgReact from "../assets/iconos/react-icon.svg";
import imgFirebase from "../assets/iconos/firebase-icon.svg";
import imgCss from "../assets/iconos/css-icon.svg";
import imgGit from "../assets/iconos/git-icon.svg";
import imgHtml from "../assets/iconos/html-icon.svg";
import imgJava from "../assets/iconos/java-icon.svg";
import imgJs from "../assets/iconos/js-icon.svg";
import imgMongo from "../assets/iconos/mongo-icon.svg"
import imgMysql from "../assets/iconos/mysql-icon.svg"
import imgTs from "../assets/iconos/ts-icon.svg";
import imgNode from "../assets/iconos/node-icon.svg";
import imgNext from "../assets/iconos/next.png";
import imgTailwind from "../assets/iconos/tailwind.svg";
import imgExpress from "../assets/iconos/express.png";

import fono0 from "../assets/proyects/fono.jpg";
import fono1 from "../assets/proyects/fonobus1.jpg";
import fono2 from "../assets/proyects/fonobus2.jpg";
import fono3 from "../assets/proyects/fono4.jpg";

import tienda from "../assets/proyects/tienda.jpg";
import tienda1 from "../assets/proyects/tienda1.jpg";
import tienda2 from "../assets/proyects/tienda2.jpg";

import prode from "../assets/proyects/prode.jpg";
import prode1 from "../assets/proyects/prode1.jpg";
import prode2 from "../assets/proyects/prode2.jpg";

import erp from "../assets/proyects/erp.jpg";
import erp1 from "../assets/proyects/erp1.jpg";
import erp2 from "../assets/proyects/erp2.jpg";
import erp3 from "../assets/proyects/erp3.jpg";

import cine from "../assets/proyects/cine.jpg";
import cine1 from "../assets/proyects/cine1.jpg";
import cine2 from "../assets/proyects/cine2.jpg";
import cine3 from "../assets/proyects/cine3.jpg";
import cine4 from "../assets/proyects/cine4.jpg";

import poke from "../assets/proyects/poke.jpg";
import poke2 from "../assets/proyects/poke1.jpg";

import msNotif from "../assets/proyects/ms-noti.jpg";

import imgSobreMi1 from "../assets/sobremi/1.jpg";
import imgSobreMi2 from "../assets/sobremi/2.jpg";
import imgSobreMi3 from "../assets/sobremi/3.jpg";
import imgSobreMi4 from "../assets/sobremi/4.jpg";
import img2024 from "../assets/sobremi/2024.png";
import imgDev from "../assets/developer.svg";


import { LayoutGrid } from "../components/LayoutGrid";
import { AnimatedTooltip } from "../components/AnimatedToolTip";
import { Image } from "@nextui-org/react";
import { Tilt } from "react-tilt";

export interface ProyectoInterface {
    titulo: any;
    descripcion: string;
    stack: string[];
    enlaces: { titulo: string; url: string }[];
    colaboradores: {
        nombre: string;
        img: string;
    }[];
    imagenes: {
        src: string;
        portada: boolean;
    }[];
}

//REACT, NEXT, JAVA, TYPESCRIPT, HTML, CSS, GIT, TAILWIND, 
//NODE, MONGO, SQL, FIREBASE,JS

export const SLIDER_HEADER: { nombre: string, src: string }[] = [
    { nombre: "React", src: imgReact },
    { nombre: "Next.js", src: imgNext },
    { nombre: "Css", src: imgCss },
    { nombre: "HTML", src: imgHtml },
    { nombre: "JavaScript", src: imgJs },
    { nombre: "Tailwind", src: imgTailwind },
    { nombre: "Git", src: imgGit },

    { nombre: "Firebase", src: imgFirebase },
    { nombre: "JAVA", src: imgJava },
    { nombre: "Node", src: imgNode },
    { nombre: "Mongo", src: imgMongo },
    { nombre: "Mysql", src: imgMysql },
    { nombre: "TypeScript", src: imgTs },
    { nombre: "Express", src: imgExpress }
];

const EXPERIENCIA_LABORAL = [
    {
        titulo: "FrontEnd Developer",
        empresa: "Segurarse SA",
        tiempo: "Mayo 2024 - Actualidad",
        tareas: [
           "Desarrollé un módulo en Ionic para reportar siniestros con detalles completos, mejorando la experiencia del usuario y agilizando la gestión.",
           "Creé un multicotizador de seguros de autos con comparación de más de 15 aseguradoras, optimizando la experiencia y la conversión de clientes.",
           "Implementé la descarga y visualización de pólizas en la app, facilitando acceso rápido a documentos importantes."
        ]
    },

    {
        titulo: "Full Stack especializado en React Native y Node.js",
        empresa: "NetOne Software",
        tiempo: "Agosto 2022 - Abril 2024",
        tareas: [
            "Diseño y desarrollo de aplicaciones móviles para Android y iOS, con React Native.",
            "Desarrollo de microservicios con Node.js, Express y MongoDB.",
            "Testing de funcionalidades con Jest y Supertest.",
            "Testing de UI con Detox.",
            "Integración de servicios externos, como APIs, JWTs, Firebase, notificaciones push, Maps, entre otros.",
            "Utilización de manejadores de estado como Redux, Context y Zustand.",
            "Uso de metodología ágil Scrum como marco de trabajo para la gestión de proyectos.",
            "Colaboración activa en equipos."
        ]
    },
    {
        titulo: "Web Developer",
        empresa: "Netegia",
        tiempo: "Julio 2021 - Agosto 2022",
        tareas: [
            "Mantenimiento y desarrollo de funcionalidades para un sistema de ERP (Netegia).",
            "Desarrollo con Java y frameworks como Spring y Hibernate.",
            "Implementación de pasarelas de pago (Mercado pago, Decidir).",
            "Diseño de interfaces de usuario intuitivas y atractivas mediante HTML, CSS, Bootstrap y jQuery.",
            "Testing de funcionalidades con JUnit y Mockito.",
            "Integración y optimización de bases de datos relacionales y no relacionales.",
            "Desarrollo de documentación técnica y capacitación de usuarios para facilitar la adopción y el mantenimiento del sistema.",
            "Sistema de plantillas de impresion para PDF, en documentos fiscales. Comprobantes, Recibos, Notas de Debito/Credito, etc"
        ]
    },
    {
        titulo: "Programador Freelance",
        empresa: "Emanuel Cisterna",
        tiempo: "Julio 2021 - Actualidad",
        tareas: [
            "Desarrollo y mantenimiento de aplicaciones web y móviles.",
            "Desarrollo de API y servicios web.",
            "Maquetación de wireframes y diseño de interfaces de usuario.",
            "Creación y mantenimiento de bases de datos relacionales y no relacionales.",
            "Implementación de estrategias de SEO.",
            "Integración de sistemas y servicios de terceros.",
            "Realización de test, incluyendo pruebas de unitarias y de integración.",
            "Despliegue en servidores (Vercel, Heroku, Firebase).",
            "Implementación de lógica de negocio para cumplir con los requisitos funcionales y no funcionales del proyecto."
        ]
    },
];

const PROYECTOS_LIST: ProyectoInterface[] = [
    {
        titulo: (<span>FonoBus <span className="text-lg font-[400]">: Sistema de reservas</span></span>),
        descripcion: `
            Esta aplicación ofrece dos roles de usuario: "Cliente" y "Chofer". En el rol de "Cliente", el sistema te brinda la capacidad
            de tener organizada tu compra de tickets, reservas y pasajes. 
            Además, podrás ver los vehículos cercanos, reservar y programar tus viajes. También podrás cargar crédito y 
            administrar tus saldos de manera conveniente.
            Por otro lado, si eres un "Chofer", la aplicación te permite dar de alta y asignarte servicios, así como finalizarlos. Puedes 
            subir pasajeros escaneando un QR generado por la app. Además, como chofer, tienes acceso a la información de los servicios 
            futuros asignados y estadísticas relacionadas con tus servicios. Con estas funcionalidades, la app garantiza una experiencia 
            completa tanto para clientes como para choferes, facilitando la organización y eficiencia en la gestión de viajes y servicios.
        `,
        stack: ["React Native", "TypeScript", "react-native-vision-camera", "vision-camera-code-scanner", "react-native-maps", "AsyncStorage", "Firebase"],
        colaboradores: [
            { nombre: "Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
            { nombre: "Maximiliano Ramos", img: "https://avatars.githubusercontent.com/u/26845674?v=4" }
        ],
        imagenes: [
            { src: fono0, portada: true },
            { src: fono3, portada: false },
            { src: fono2, portada: false },
            { src: fono1, portada: false }
        ],
        enlaces: [
            { titulo: "Ver codigo", url: "https://play.google.com/store/apps/details?id=com.fonobus&hl=es_AR&gl=US&pli=1" },
        ]
    },
    {
        titulo: "E-commerce",
        descripcion: `Este sitio es un e-commerce totalmente operativo, el mismo proporciona un catálogo de productos provenientes de una base de datos 
        conectada a un sistema de gestión, tambien desarrollado por mí.  Los clientes podran filtrar articulos 
        por multiples condiciones, agregarlos facilmente a su carrito y seleccionar las variones que desee (talle, color, ingrendiente, etc). 
        Una vez completada la selección, los clientes pueden 
        realizar el pago de manera segura a través de Mercado Pago. 
        Alternativamente, tienen la opción de ser redirigidos a 
        WhatsApp con su carrito listo para finalizar la transacción 
        de pago mediante este canal de comunicación. Este enfoque 
        brinda flexibilidad y comodidad a los usuarios, permitiéndoles
        elegir el método de pago que mejor se adapte a sus 
        preferencias.
        Con estas funcionalidades, el sitio brinda una experiencia de compra intuitiva y completa para los usuarios.`,

        stack: ["Next Js", "TypeScript", "React", "Firebase", "Tailwind", "Mercado Pago API", "react-google-maps", "Zustand", "WhatsApp API"],
        colaboradores: [
            { nombre: "Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
        ],
        imagenes: [
            { src: tienda, portada: true },
            { src: tienda1, portada: false },
            { src: tienda2, portada: false }
        ],
        enlaces: []
    },
    {
        titulo: "Microservicio notificaciones",
        colaboradores: [
            { nombre: "Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
            { nombre: "Maximiliano Ramos", img: "https://avatars.githubusercontent.com/u/26845674?v=4" }
        ],
        stack: ["Node.js", "Express", "MongoDB", "Firebase", "OAuth", "TypeScript"],
        descripcion: `
        Asistente de Notificaciones: nuestro servicio avanzado de notificaciones que va más allá de simplemente enviar alertas. 
        Puede enviar tanto notificaciones push como mensajes más detallados, capaces de realizar acciones específicas y nutrir de 
        funcionalidad al front-end que lo utlice.
        
        Para garantizar la seguridad y privacidad, hemos implementado OAuth como método de autenticación, 
        asegurándonos de que solo los usuarios autorizados tengan acceso al servicio.
        
        Además, para asegurar que la información llegue a tus dispositivos de manera segura y oportuna, utilizamos Firebase Messaging,
        como mensajero confiable que se encarga de que la informacion llegue exactamente donde debe ser.`,
        enlaces: [],
        imagenes: [
            { src: msNotif, portada: true },
            { src: msNotif, portada: false }
        ]
    },
    {
        titulo: "Sistema de gestion",
        descripcion: `
            El Sistema ERP proporciona todas las herramientas necesarias para simplificar la gestión de pequeñas y medianas empresas (pymes) en una
            plataforma unificada. Con roles de usuario, reportes detallados de ventas, control de artículos y niveles de stock, así como 
            funciones simples de facturación, esta solución integral abarca todos los aspectos esenciales para una gestión eficiente. Además, se 
            integra con E-commerce, garantizando una coordinación fluida y unificada de las operaciones comerciales.
        `,
        colaboradores: [
            { nombre: "Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
        ],
        enlaces: [],
        imagenes: [
            { src: erp, portada: true },
            { src: erp1, portada: false },
            { src: erp2, portada: false },
            { src: erp3, portada: false }
        ],
        stack: ["Next.js", "React", "MongoDB", "Zustand", "Tailwind", "Node.js", "Firebase", "TypeScript"]
    },
    {
        titulo: "Prode Qatar 2022",
        descripcion: `
            Prode Mundial Qatar 2022: Este sitio brinda la oportunidad de crear salas privadas donde varios usuarios pueden diseñar su propio fixture, 
            prediciendo los resultados de cada partido del torneo. A medida que avanzan las rondas, los participantes acumulan puntos según la precisión 
            de sus pronósticos. Las posiciones de la sala se presentan en una lista clasificatoria, ofreciendo así un emocionante ranking que refleja el 
            desempeño de cada jugador a lo largo del juego.
        `,
        stack: ["Next.js", "React", "Firebase", "styled-components", "swiper.Js", "sweetalert2", "emoji-flags"],
        colaboradores: [
            { nombre: "Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
        ],
        enlaces: [],
        imagenes: [
            { src: prode, portada: true },
            { src: prode1, portada: false },
            { src: prode2, portada: false },
        ],
    },
    {
        titulo: "Clon Amazon Prime",
        descripcion: `
            Plataforma web inspirada en Amazon Prime Video, respetando su diseño de manera integral. Aprovechando la API "themoviedb", permite filtrar el contenido
            de películas y series por categorías, géneros y otras opciones. El sitio cuenta con autenticación de usuarios mediante Firebase Auth, ofreciendo una 
            experiencia segura y personalizada. Además, los usuarios tienen la capacidad de gestionar su lista de favoritos, pudiendo agregar y quitar contenido según 
            sus preferencias.
        `,
        colaboradores: [
            { nombre: "Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
        ],
        stack: ["NextJs", "React", "TypeScript", "Styled-components", "Swiper.Js", "Firebase"],
        enlaces: [
            {titulo: "Visitar sitio", url: "https://amazon-clone-abbsjdho4-emadev.vercel.app/"},
            {titulo: "Ver codigo", url: "https://github.com/EmaDev/amazon-clone"},
        ],
        imagenes: [
            { src: cine, portada: true },
            { src: cine1, portada: false },
            { src: cine2, portada: false },
            { src: cine3, portada: false },
            { src: cine4, portada: false }
        ],
    },
    {
        titulo: "PokeApp",
        descripcion: `
             Aplicación móvil desarrollada con React Native, que utiliza la API 'PokeApi' para exhibir una lista de todos los Pokémon. La presentación de la lista 
             se realiza de manera eficiente mediante un FlatList, permitiendo una carga perezosa de la información. Además, los usuarios pueden acceder a una pantalla
             específica para cada Pokémon, donde se muestra de manera detallada toda la información relacionada con el Pokémon seleccionado.
        `,
        colaboradores: [
            { nombre: "Emanuel Cisterna", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
        ],
        stack: ["NextJs", "React", "TypeScript", "Styled-components", "Swiper.Js"],
        enlaces: [
            {titulo: "Ver codigo", url: "https://github.com/EmaDev/pokeAppp"}
        ],
        imagenes: [
            { src: poke, portada: true },
            { src: poke, portada: false },
            { src: poke2, portada: false }
        ]
    }

]

const cards = [
    {
        id: 1,
        content: "Mi equipo de trabajo",
        className: "md:col-span-2",
        thumbnail: imgSobreMi1
    },
    {
        id: 2,
        content: "El dia que conocimos a MiduDev",
        className: "col-span-1",
        thumbnail: imgSobreMi2
    },
    {
        id: 3,
        content: "",
        className: "col-span-1",
        thumbnail: imgSobreMi3
    },
    {
        id: 4,
        content: "Juntada grupo discord programadores",
        className: "md:col-span-2",
        thumbnail: imgSobreMi4
    },
];

const people = [
    {
        id: 1,
        name: "Mongo DB",
        image: imgMongo
    },
    {
        id: 2,
        name: "Express.js",
        image: imgExpress
    },
    {
        id: 3,
        name: "React",
        image: imgReact
    },
    {
        id: 4,
        name: "Node.js",
        image: imgNode
    }
];

export const SOBRE_MI = [
    {
        titulo: "Un poco de mi",
        descripcion: `Soy un programador altamente motivado y apasionado por aprender nuevas tecnologías que me ayuden a crecer en el ámbito profesional. 
        Tengo interés en el desarrollo web, de aplicaciones móviles y el mundo IT en general.`,
        content: <LayoutGrid cards={cards} />
    },
    {
        titulo: "Mi stack Favorito",
        descripcion: (<span>Dentro del vasto mundo del desarrollo web , he encontrado preferencia en el stack MERN (MongoDB, Express.js, React, Node.js). Esta
            combinación armoniosa no solo proporciona una base robusta y eficiente para la construcción de
            aplicaciones, sino que también se adapta perfectamente a mi estilo de desarrollo.
            Actualmente una herramienta que me entusiasma es Next.js con su capacidad para el SSR.
            Esta combinación de tecnologías MERN y Next.js refleja mi compromiso con la búsqueda constante de soluciones que ofrezcan un rendimiento
            óptimo y una experiencia de usuario excepcional.</span>),
        content: (
            <div className="flex flex-row items-center justify-center w-full h-full rounded-full">
                <AnimatedTooltip items={people} />
            </div>
        )
    },
    {
        titulo: "Desafios",
        descripcion: `
        Como programador, enfrento desafíos constantes en tareas de backend y frontend, abordando diversas tecnologías. Este equilibrio me impulsa a aprender nuevas 
        habilidades continuamente. Aunque desafiante, esta diversidad en mi trabajo me inspira a superar obstáculos, manteniéndome actualizado y listo para enfrentar 
        cualquier proyecto que se presente. Cada desafío es una oportunidad de crecimiento, alimentando mi pasión por la programación.`,
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center">
                <Tilt>
                    <Image src={imgDev} className="w-60" />
                </Tilt>
            </div>
        ),
    },
    {
        titulo: "Expectativas 2024",
        /*descripcion: `
        Mirando hacia el futuro, mi aspiración es dedicarme plenamente al desarrollo en React, explorando sus infinitas posibilidades tanto en el ámbito web como 
        móvil. Sueño con perfeccionar mis habilidades en la creación de interfaces interactivas y experiencias de usuario excepcionales. Además, deseo seguir 
        profundizando en el desarrollo backend, específicamente con Node.js y Express, consolidando mi expertise en la construcción de sistemas robustos y eficientes. 
        Mi meta es fusionar estas tecnologías para contribuir de manera significativa a proyectos innovadores y seguir evolucionando en este emocionante camino del 
        desarrollo de software.
        `,*/
        descripcion: `Este año, mi enfoque como programador se centrará en perfeccionar mis habilidades en Next.js, explorar los 
        conceptos y prácticas de desarrollo con Nest.js, e integrar Prisma como el ORM principal en mis proyectos. Además, planeo aprovechar las capacidades de diseño 
        y estilización que ofrece shadcn/ui, una biblioteca que utiliza Tailwind CSS en su núcleo. Al unificar Next.js, Nest.js, Prisma y shadcn/ui, podré construir 
        aplicaciones web modernas con un enfoque en el rendimiento, la escalabilidad y una experiencia de usuario excepcional. Estoy emocionado por expandir mis 
        conocimientos y llevar mis habilidades de desarrollo a un nuevo nivel este 2024.
        `,
        content: (
            <Tilt>
                <div className="h-96 w-96 m-auto bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center rounded-full">
                    <Image src={img2024} className="w-96" />
                </div>
            </Tilt>
        )
    }
];

const TESTIMONIOS = [
    {
        nombre: "Hernan Marrapodi",
        posicion: "Web Developer - NetOne",
        testimonio: `Ema es excelente en React! Siempre encuentra la vuelta a los desafíos más complicados con una habilidad 
        impresionante. Además, es súper colaborativo y comparte sus conocimientos. Un verdadero activo para cualquier equipo.`,
        img: "https://media.licdn.com/dms/image/v2/D4D03AQGz73GCTQTRTA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1710017620604?e=2147483647&v=beta&t=8CpQ0a9pG6SQdnAQI-AYFxW5dd3hLJMrX3cvWmyQMkE"
    },
    {
        nombre: "Hernan Rinaldo",
        posicion: "PM en NetOne",
        testimonio: "Trabajar con Emanuel ha sido una experiencia gratificante. Su código es limpio y eficiente, y siempre cumple con los plazos de entrega.",
        img: "https://media.licdn.com/dms/image/v2/C4E03AQFjModxY29HCw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516197657825?e=2147483647&v=beta&t=Rff4QYurDmDtDRH0lovv-Yxq0DuN07ZxMwE8_rHozZg"
    },
    {
        nombre: "Lucia Tonietti",
        posicion: "Developer en Fusap",
        testimonio: `Trabajar con Ema fue una experiencia enriquecedora. Es un gran compañero de equipo. Siempre está dispuesto a escuchar y aportar nuevas ideas, 
        creando un ambiente de trabajo
         colaborativo y positivo.
         Su dedicación y profesionalismo son realmente inspiradores. ¡Un placer trabajar junto a él en cualquier proyecto!`,
         img: "https://media.licdn.com/dms/image/v2/C4D03AQGmDjJZD6s97Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1626649672259?e=2147483647&v=beta&t=IZL9MVIzDovoW9V9NjpntFz41dtNSIf_CMAHhR8l54k"
    },
    {
        nombre: "Leandro Alfaro",
        posicion: "Backend Developer - NetOne",
        testimonio: `Ema es un excelente compañero, no solo ha demostrado su habilidad desde lo técnico, sino que además 
        realiza un gran aporte al equipo. Siempre se puede contar con el para resolver cualquier tipo de problemática, 
        desde algoritmos, bases de datos, front-end, procesos y muchas otras cosas. Siempre desde NetOne valoramos su opinión.`,
        img: "https://media.licdn.com/dms/image/v2/D4D03AQHTa6xT1mRj9A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669904242410?e=2147483647&v=beta&t=j4KtxtawDuja8SVAaSd2Eh33OctqRsnTgH1sXlKO048"
    },

]


export const ENLACES = {
    nav: [
        { name: "Sobre mi", href: "#sobre-mi" },
        { name: "Experiencia", href: "#experiencia" },
        { name: "Contacto", href: "#contacto" },

    ],
    linkedin: "https://www.linkedin.com/in/emanuel-cisterna/",
    github: "https://github.com/EmaDev",
    instagram: "https://www.instagram.com/emacisterna/"

}

export const ESPANOL = {
    header: {
        titulo: "Programador Full Stack & Diseñador Web",
        descripcion: "Como desarrollador Full Stack con experiencia en aplicaciones nativas y web, estoy apasionado por aprender nuevas habilidades y resolver problemas, utilizando el desarrollo y el diseño para lograr un impacto positivo en cada proyecto."
    },
    proyectos: {
        titulo: "Proyectos.",
        descripcion: "Algunos de los proyectos que he desarrollado.",
        proyectos: PROYECTOS_LIST
    },
    expericia: {
        titulo: "Experiencia Laboral.",
        descripcion: "Lo que hice hasta ahora",
        timeLine: EXPERIENCIA_LABORAL
    },
    sobreMi: SOBRE_MI,
    testimonios: TESTIMONIOS
}



