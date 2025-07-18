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
import imgViejito from "../assets/sobremi/viejito.jpg";
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
        empresa: "Jean Meza",
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
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
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
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
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
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
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
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
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
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
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
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
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
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/101511719?v=4" },
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
        content: "El dia que conocimos al abuelito de la comunidad",
        className: "col-span-1",
        thumbnail: imgViejito
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
        nombre: "Mychael Castro",
        posicion: "Product Owner - Kentucky Fried Chicken (KFC)",
        testimonio: `Como Product Owner, siempre busco personas que no solo dominen lo técnico, sino que también aporten desde lo estratégico. Jean Meza ha sido fundamental en los proyectos que desarrollamos juntos. Su dominio experto en Laravel, Vue, React, Java, Node y MongoDB ha sido clave para sacar adelante iniciativas complejas. Tiene una visión integral del desarrollo de software, con una capacidad excepcional para proponer soluciones eficientes y sostenibles. Su criterio técnico y compromiso han hecho una gran diferencia en nuestro trabajo conjunto.`,
        img: "https://media.licdn.com/dms/image/v2/D4E03AQEHx891RKqfig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1707708936407?e=1752105600&v=beta&t=PN0v2I9LoU4mBuMcfrfQ1VtdNoG5BOO_R_u4gly9hYA"
    },
    {
        nombre: "Danny Rivadeneira",
        posicion: "Lider de proyectos Laravel - Habitantos (Evaluar.com Tech)",
        testimonio: `Jean Meza es un desarrollador muy completo, con un alto nivel de expertise en Laravel. En los proyectos en los que coincidimos, siempre mostró una gran capacidad para proponer soluciones escalables y bien estructuradas. Su habilidad para adaptarse a nuevas necesidades técnicas lo convierte en una pieza muy valiosa dentro del equipo. Su aporte ha sido clave en la mejora de nuestros procesos y productos.`,
        img: "https://media.licdn.com/dms/image/v2/C5603AQELi5veabGx3w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1607555320483?e=1752105600&v=beta&t=CFKTTSivDF5PkBM96C-SkClRRkNgbHnyh_CHSR64ZjU"
    },
    {
        nombre: "Marcelo Alcivar",
        posicion: "Diseñador Grafico Experto - Proyectos",
        testimonio: `He trabajado con Jean Meza en varios proyectos web, y siempre he quedado muy satisfecho con los resultados. Su capacidad para traducir mis diseños en interfaces funcionales y limpias es impresionante. Actualmente seguimos colaborando en proyectos externos: yo me encargo del diseño y él del desarrollo, y la sinergia es excelente. Es un profesional comprometido y con gran atención al detalle. Recomiendo su trabajo sin dudarlo.`,
        img: "https://media.licdn.com/dms/image/v2/D5603AQHIbtIdFEyJgA/profile-displayphoto-shrink_800_800/B56ZYlLT9ZGoAo-/0/1744380445276?e=1752105600&v=beta&t=ZZkRfBAWMcBQe9B4eCIJn89B9SDQ3ECZOOiPa38G524"
    },
    {
        nombre: "Jorge Asitimbay",
        posicion: "Jefe de seguridad - Banco Manabí",
        testimonio: `Desde el área de seguridad, es fundamental contar con desarrolladores que entiendan la importancia de la integridad y confidencialidad de los sistemas bancarios. Jean Meza ha demostrado un alto compromiso con las buenas prácticas de seguridad en el desarrollo de software, especialmente en entornos sensibles como los nuestros. Su experiencia en .NET, C# y Oracle le permite diseñar soluciones robustas y alineadas a nuestros estándares. Es meticuloso, responsable y siempre trabaja con una visión orientada a mitigar riesgos. Una pieza clave en cualquier equipo de misión crítica.`,
        img: "https://media.licdn.com/dms/image/v2/C5603AQEDpHMVZTwi0g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517882699848?e=1752105600&v=beta&t=YWXTXqKMC6sx4ZCOGB4UkZnIdNLNwrRg1eSkQpWvEDk"
    },
    {
        nombre: "Juan Ayala",
        posicion: "Web Developer Senior - Laravel",
        testimonio: `Jean Meza es excelente en Laravel y React. Hemos compartido varios retos técnicos, y siempre me ha impresionado su capacidad para resolver problemas complejos de forma rápida y elegante. Tiene una lógica muy clara y está siempre dispuesto a compartir sus conocimientos, lo que genera un gran ambiente de equipo. Sin duda, es un referente en estas tecnologías.`,
        img: "https://media.licdn.com/dms/image/v2/D5635AQEHcVSkhn4quA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1661176691759?e=1747252800&v=beta&t=agn6jma6PBTkxwHVmaPmMrcVKeTmnI0j_r0eaqjESjw"
    },
    {
        nombre: "Jean Bazurto",
        posicion: "Developer Senior en Banco Manabí",
        testimonio: "Trabajar con Jean Meza ha sido muy positivo. Tiene gran dominio en entornos empresariales con tecnologías como .NET, C# y Oracle, y su código es limpio, optimizado y siempre dentro de los tiempos de entrega. Se nota su experiencia trabajando bajo presión y su capacidad para mantener la calidad en cada entrega.",
        img: "https://media.licdn.com/dms/image/v2/C4D03AQH_IUUoCTMT_w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1553741690845?e=1752105600&v=beta&t=lsc62Yr-7fCG5Ob36yzbRA1kg68nLnF3rXxEFFNr6xs"
    },
    {
        nombre: "Frank Molina",
        posicion: "Developer Semi Senior en Banco Manabí",
        testimonio: `Trabajar con Jean Meza fue una experiencia enriquecedora. Su conocimiento en .NET, Oracle y C# fue fundamental en el desarrollo de varios módulos clave para el banco. Además, es un gran compañero: siempre abierto a escuchar, sugerir mejoras y compartir su experiencia. Su profesionalismo y actitud positiva hacen que sea un gusto trabajar con él.`,
         img: "https://media.licdn.com/dms/image/v2/D4E35AQExJq8wLZKW0w/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1669646822882?e=1747252800&v=beta&t=DGAQp94R-_tzff2MeQJe8kFFbal2tmtoep4PMnui12k"
    },

]


export const ENLACES = {
    nav: [
        { name: "Proyectos", href: "#proyectos" },
        { name: "Sobre mi", href: "#sobre-mi" },
        { name: "Experiencia", href: "#experiencia" },
        { name: "Contacto", href: "#contacto" },

    ],
    linkedin: "https://www.linkedin.com/in/jeanpitx",
    github: "https://github.com/jeanpitx",
    instagram: "https://www.instagram.com/jeanpitx/"

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



