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
import imgPhp from "../assets/imgs/PHP-logo.svg.png";
import imgGo from "../assets/imgs/Go-Logo_Blue.png";
import imgLaravel from "../assets/imgs/Laravel-Logo.wine.png";
import imgPrimeVue from "../assets/imgs/primevue-logo.png";
import imgCsharp from "../assets/imgs/Csharp_Logo.png";
import imgPython from "../assets/imgs/Python-logo-notext.svg.png";
import imgAzure from "../assets/imgs/azure.png";
import imgAws from "../assets/imgs/Amazon_Web_Services_Logo.svg.png";

import tiendaNueva from "../assets/imgs/tienda.png";

import systemec from "../assets/imgs/systemec.png";
import gestion_zonas from "../assets/imgs/gestion_zonas.png";

import prode from "../assets/imgs/facturas_sri.png";

import interbancarias from "../assets/imgs/interbancarias.png";
import informativabcm from "../assets/imgs/informativabcm.png";


import imgViejito from "../assets/sobremi/viejito.jpg";
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
    { nombre: "Express", src: imgExpress },
    { nombre: "PHP", src: imgPhp },
    { nombre: "Go", src: imgGo },
    { nombre: "Laravel", src: imgLaravel },
    { nombre: "Prime", src: imgPrimeVue },
    { nombre: "C#", src: imgCsharp },
    { nombre: "Python", src: imgPython },
    { nombre: "Azure", src: imgAzure },
    { nombre: "AWS", src: imgAws }
];

const EXPERIENCIA_LABORAL = [
    {
        titulo: "Programador Semi Senior",
        empresa: "Sipecom SA",
        tiempo: "Noviembre 2021 - Actualidad",
        tareas: [
            "Desarrollo de sistemas y aplicativos para empresas outsourcing con PHP avanzado y SQL Server.",
            "Programación de scripts y desarrollo de frontend y backend para restaurantes y APIs del grupo KFC.",
            "Gestión de pases a producción, revisión de cambios y reuniones diarias con el equipo de trabajo.",
            "Monitoreo de pases y pruebas, manejo de SQL Compare, Git y Azure.",
        ]
    },
    {
        titulo: "Analista de Sistemas",
        empresa: "Banco Comercial de Manabí",
        tiempo: "Agosto 2018 - Noviembre 2021",
        tareas: [
            "Desarrollo de sistemas para la banca: Sistema Nacional de Pagos, Seguros, Recursos Humanos y Administración.",
            "Administración y mantenimiento de BD Oracle: packages, consultas, procedimientos almacenados, funciones y desarrollo de nuevos paquetes.",
            "Administración de servicios y servidores mediante escritorio remoto y consola Linux.",
            "Monitoreo de servicios, servidores y base de datos con Zabbix y Speed Standby.",
        ]
    },
    {
        titulo: "Analista de Sistemas",
        empresa: "Systems EC",
        tiempo: "Junio 2017 - Julio 2018",
        tareas: [
            "Programación en Power Builder 12, Android y PHP.",
            "Mantenimiento y administración de computadoras, redes y cámaras de seguridad.",
            "Manejo de servidores Linux y Windows Server por línea de comandos.",
            "Administración de base de datos Sybase 9: procedimientos almacenados, triggers, funciones y consultas.",
            "Instalación de sistemas propietarios, públicos y privados.",
            "Asistencia personalizada a clientes, visitas técnicas y solución de problemas informáticos.",
        ]
    },
    {
        titulo: "Programador Freelance",
        empresa: "Jean Meza",
        tiempo: "Enero 2017 - Actualidad",
        tareas: [
            "Desarrollo y mantenimiento de aplicaciones web y móviles.",
            "Desarrollo de APIs y servicios web.",
            "Maquetación de wireframes y diseño de interfaces de usuario.",
            "Creación y mantenimiento de bases de datos relacionales y no relacionales.",
            "Integración de sistemas y servicios de terceros.",
            "Despliegue en servidores (Vercel, Firebase, VPS).",
            "Implementación de lógica de negocio para cumplir con requisitos funcionales y no funcionales.",
            "Desarrollo de sistemas para Habitantos (Evaluar.com): plataforma inmobiliaria con Laravel y Vue.",
            "Desarrollo de módulos adicionales para el Banco Comercial de Manabí: integraciones y mejoras sobre sistemas existentes.",
            "Desarrollo de e-commerce completo para Outlet al 50%: catálogo, carrito, pasarela de pago y panel administrativo con Laravel, Next.js y MySQL.",
        ]
    },
];

const PROYECTOS_LIST: ProyectoInterface[] = [
    
    {
        titulo: "E-commerce",
        descripcion: `Este sitio es un e-commerce totalmente operativo, el mismo proporciona un catálogo de productos provenientes de una base de datos 
        conectada a un sistema de gestión, tambien desarrollado por mí.  Los clientes podran filtrar articulos 
        por multiples condiciones, agregarlos facilmente a su carrito y seleccionar las variones que desee (talla, color, etc). 
        Una vez completada la selección, los clientes pueden 
        realizar el pago de manera segura a través de Tarjeta de Crédito.
        Este enfoque 
        brinda flexibilidad y comodidad a los usuarios, permitiéndoles
        elegir el método de pago que mejor se adapte a sus 
        preferencias.
        Con estas funcionalidades, el sitio brinda una experiencia de compra intuitiva y completa para los usuarios.
        Brinda un panel administrativo para productos, ventas, inventario`,

        stack: ["Next Js", "TypeScript", "React", "Datafast", "Tailwind", "react-google-maps", "Laravel", "Inertia", "Livewire", "MySQL"],
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        imagenes: [
            { src: tiendaNueva, portada: true },
            { src: tiendaNueva, portada: false }
        ],
        enlaces: [
            { titulo: "Ver Sitio", url: "https://outletal50.com/" },
        ]
    },
    {
        titulo: (<span>Inventario App <span className="text-lg font-[400]">: Inventario en Tiendas</span></span>),
        descripcion: `
            El sistema permite realizar ventas desde que el cliente llega a un almacén, 
            permitiendo a un vendedor acompañar al cliente, el mismo permite el ingreso 
            de los datos de un cliente nuevo si no está ingresado, buscarlos si está en 
            la Base de datos, cave recalcar que esta base se extrae de un servicio REST, 
            posteriormente se almacena localmente y permite trabajar sin conexión.
        `,
        stack: ["Android", "Java", "Php", "Sybase Central", "Sybase Database"],
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
            { nombre: "Evis Cardenas", img: "https://avatars.githubusercontent.com/u/1038095?s=48&v=4" }
        ],
        imagenes: [
            { src: systemec, portada: true },
            { src: systemec, portada: false },
        ],
        enlaces: [
            
        ]
    },
    {
        titulo: "Control de necesidades por sector",
        descripcion: `
            Este proyecto fue una solicitud de un cliente de Systems Ec, 
            me hizo la petición de que se haga un sistema web, el cual permita ingresar 
            información de las personas e información de las necesidades por sector, 
            permitiendo a un candidato saber cuales eran las necesidades más comunes.
            El sistema permitía el acceso a la camara en tiempo real para grabar y tomar
            fotos de las personas y de las necesidades, para luego almacenarlas en la base de datos,
        `,
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        enlaces: [],
        imagenes: [
            { src: gestion_zonas, portada: true },
            { src: gestion_zonas, portada: false },
        ],
        stack: ["Laravel", "Javascript", "Jquery", "CSS3", "Bootstrap", "Node.js"]
    },
    {
        titulo: "CONSULTA DE COMPROBANTES SRI (ECUADOR)",
        descripcion: `
            Para este desarrollo se saltaba el captcha que antes tenía el SRI el cual era con imágenes, posterior a esto se mediante CURL de PHP, se obtenía la información del GET o del POST, obteniendo de estos resultados los contenidos de las tablas, enlaces y valores.
            Para este desarrollo estaba incluido el objetivo de saltar este tipo de captcha, además se creó un inicio de sesión con privilegios por usuario para que solo usuarios específicos puedan acceder al sitio a realizar las consultas.
        `,
        stack: ["Laravel", "Curl", "Javascript", "CSS3", "Bootstrap","PHP"],
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        enlaces: [],
        imagenes: [
            { src: prode, portada: true },
            { src: prode, portada: false },
        ],
    },
    {
        titulo: "SERVICIO AUTOMATIZADO DE TRANSFERENCIAS INTERBANCARIAS",
        descripcion: `
            El proyecto se maneja de manera interna en el Banco, el mismo estaba listo para entregarse, con un desarrollo del 100%, con la entrega de manuales, pruebas unitarias y pruebas de integración, lo único que faltaba era el pase a producción que no se dio por motivos externos a la entidad.
        `,
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        stack: ["JAVA", "SOAP UI", "XML", "HTML", "Javascript", "Oracle Database"],
        enlaces: [
        ],
        imagenes: [
            { src: interbancarias, portada: true },
            { src: interbancarias, portada: false }
        ],
    },
    {
        titulo: "Rediseño Web Banco Manabí",
        descripcion: `
            El presente proyecto se desarrolló al 100% por mi autoría, el mismo es desarrollado en un servidor independiente el cual toco hacer el pase a producción de este, es decir, antes existía una página estática, la cual para realizar cambios era necesario pasar un requerimiento al área de sistemas para que se realicen cambios, con la nueva página los cambios los realiza una persona la cual tiene un usuario asignado y un rol de usuario.
            Cuenta con múltiples opciones, algunos formularios los cuales permiten ingresar información tal como información de contacto para solicitar productos, llenar formulario de solicitud de tarjetas de créditos, el cual tiene mas de 60 campos, los mismos se manejan en el apartado solicitudes, solicitan la subida de algunos archivos digitalizados en formato PDF. 

        `,
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        stack: ["Laravel", "Javascript", "Bootstrap", "CSS3", "HTML", "MySQL", "API Rest"],
        enlaces: [
            {titulo: "Visitar sitio", url: "https://www.bcmanabi.com/"},
        ],
        imagenes: [
            { src: informativabcm, portada: true },
            { src: informativabcm, portada: false },
        ]
    },
    {
        titulo: "API Pago de servicios",
        descripcion: `
             El proyecto se maneja de manera interna en el Banco, el mismo se ha entregado con un 100% de desarrollo, manteniendo el mismo esquema que se maneja en el otro servicio automatizado y además con la entrega correspondiente de manuales, pruebas unitarias y pruebas de integración, esta disponible para que se integre en las aplicaciones internas del banco tales como plataforma móvil y web.
        `,
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        stack: ["Java", "Spring Boot", "Oracle Database", "REST API", "SOAP"],
        enlaces: [
        ],
        imagenes: [
        ]
    },
    {
        titulo: "API Webhook Ultimas Millas",
        descripcion: `
             Es un api intermedio entre las marcas de delivery y el sistema de KFC, el mismo se encarga de recibir las ordenes de las tiendas que solicitan un motorizado y asignarlo a una marca como: (Uber, Rappi, PedidosYa), recibir los estados del motorizado mediante webhooks.
             En su version 2.0 que despues de implementada en laravel se migró a GO.
        `,
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        stack: ["Laravel", "Mongo DB", "REST API", "GO", "Microservicios", "Azure"],
        enlaces: [
        ],
        imagenes: [
        ]
    },
    {
        titulo: "Migración sistema Habitanto (Gestión de alquileres)",
        descripcion: `
             Se migra un aplicativo realizado en Web Ratio hacia laravel en modalidad full stack, front y back, en el cual se implementan diferentes tecnologías como microservicios, micro frontends, colas de trabajo, etc. El sistema se encarga de gestionar alquileres, con funcionalidades como: gestión de propiedades, gestión de inquilinos, gestión de contratos, gestión de pagos, etc.
        `,
        colaboradores: [
            { nombre: "Jean Meza", img: "https://avatars.githubusercontent.com/u/13682353?s=96&v=4" },
        ],
        stack: ["Laravel", "AWS", "Mongo DB", "REST API", "Microservicios", "SES", "Lambda"],
        enlaces: [
        ],
        imagenes: [
        ]
    }

]

const cards = [
    {
        id: 1,
        content: "",
        className: "md:col-span-1",
        thumbnail: null
    },
    {
        id: 2,
        content: "Celebrando el cumpleaños al abuelito de la TI",
        className: "col-span-2",
        thumbnail: imgViejito
    },
    {
        id: 3,
        content: "",
        className: "col-span-1",
        thumbnail: null
    },
    {
        id: 4,
        content: "Juntada grupo discord programadores",
        className: "md:col-span-2",
        thumbnail: null
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
        descripcion: `Soy Jean Meza, desarrollador Full Stack con más de 8 años de experiencia construyendo aplicaciones web y móviles.
        He trabajado en sectores como banca, alimentos, facturación y logística, desarrollando desde e-commerce y ERPs hasta apps móviles y microservicios.
        Me apasiona crear soluciones que combinen buen diseño con arquitecturas sólidas y escalables.`,
        content: <LayoutGrid cards={cards} />
    },
    {
        titulo: "Mi stack",
        descripcion: (<span>
            A lo largo de mis proyectos he trabajado con un stack amplio y versátil. En el <strong>frontend</strong> domino React, Next.js, React Native e Ionic.
            En el <strong>backend</strong> trabajo con Laravel, Node.js, Java y .NET. Para bases de datos uso MySQL, MongoDB y Oracle según el proyecto.
            También tengo experiencia con servicios cloud como <strong>Firebase, Azure y AWS</strong>, lo que me permite desplegar soluciones robustas de extremo a extremo.
        </span>),
        content: (
            <div className="flex flex-row items-center justify-center w-full h-full rounded-full">
                <AnimatedTooltip items={people} />
            </div>
        )
    },
    {
        titulo: "Experiencia real",
        descripcion: `
        He desarrollado proyectos reales en producción: un sistema de reservas de transporte usado en Argentina, un e-commerce activo con pasarela de pago propia,
        un ERP para gestión de pymes, un inventario móvil para tiendas con base de datos offline, y microservicios de notificaciones para apps con miles de usuarios.
        Cada proyecto me ha dejado aprendizajes concretos sobre rendimiento, seguridad y experiencia de usuario.`,
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#218cb6,#0f5f7a)a] flex items-center justify-center">
                <Tilt>
                    <Image src={imgDev} className="w-60" />
                </Tilt>
            </div>
        ),
    },
    {
        titulo: "Hacia el futuro",
        descripcion: `Mi foco actual está en profundizar en arquitecturas cloud con Azure y AWS, seguir creciendo en Laravel para el backend y explorar Go para servicios de alto rendimiento.
        También me interesa consolidar mis conocimientos en Python aplicado a automatización e inteligencia artificial.
        El objetivo es seguir entregando productos completos, bien diseñados y listos para escalar.
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
        img: ""
    },
    {
        nombre: "Danny Rivadeneira",
        posicion: "Lider de proyectos Laravel - Habitantos (Evaluar.com Tech)",
        testimonio: `Jean Meza es un desarrollador muy completo, con un alto nivel de expertise en Laravel. En los proyectos en los que coincidimos, siempre mostró una gran capacidad para proponer soluciones escalables y bien estructuradas. Su habilidad para adaptarse a nuevas necesidades técnicas lo convierte en una pieza muy valiosa dentro del equipo. Su aporte ha sido clave en la mejora de nuestros procesos y productos.`,
        img: ""
    },
    {
        nombre: "Marcelo Alcivar",
        posicion: "Diseñador Grafico Experto - Proyectos",
        testimonio: `He trabajado con Jean Meza en varios proyectos web, y siempre he quedado muy satisfecho con los resultados. Su capacidad para traducir mis diseños en interfaces funcionales y limpias es impresionante. Actualmente seguimos colaborando en proyectos externos: yo me encargo del diseño y él del desarrollo, y la sinergia es excelente. Es un profesional comprometido y con gran atención al detalle. Recomiendo su trabajo sin dudarlo.`,
        img: ""
    },
    {
        nombre: "Jorge Asitimbay",
        posicion: "Jefe de seguridad - Banco Manabí",
        testimonio: `Desde el área de seguridad, es fundamental contar con desarrolladores que entiendan la importancia de la integridad y confidencialidad de los sistemas bancarios. Jean Meza ha demostrado un alto compromiso con las buenas prácticas de seguridad en el desarrollo de software, especialmente en entornos sensibles como los nuestros. Su experiencia en .NET, C# y Oracle le permite diseñar soluciones robustas y alineadas a nuestros estándares. Es meticuloso, responsable y siempre trabaja con una visión orientada a mitigar riesgos. Una pieza clave en cualquier equipo de misión crítica.`,
        img: ""
    },
    {
        nombre: "Juan Ayala",
        posicion: "Web Developer Senior - Laravel",
        testimonio: `Jean Meza es excelente en Laravel y React. Hemos compartido varios retos técnicos, y siempre me ha impresionado su capacidad para resolver problemas complejos de forma rápida y elegante. Tiene una lógica muy clara y está siempre dispuesto a compartir sus conocimientos, lo que genera un gran ambiente de equipo. Sin duda, es un referente en estas tecnologías.`,
        img: ""
    },
    {
        nombre: "Jean Bazurto",
        posicion: "Developer Senior en Banco Manabí",
        testimonio: "Trabajar con Jean Meza ha sido muy positivo. Tiene gran dominio en entornos empresariales con tecnologías como .NET, C# y Oracle, y su código es limpio, optimizado y siempre dentro de los tiempos de entrega. Se nota su experiencia trabajando bajo presión y su capacidad para mantener la calidad en cada entrega.",
        img: ""
    },
    {
        nombre: "Frank Molina",
        posicion: "Developer Semi Senior en Banco Manabí",
        testimonio: `Trabajar con Jean Meza fue una experiencia enriquecedora. Su conocimiento en .NET, Oracle y C# fue fundamental en el desarrollo de varios módulos clave para el banco. Además, es un gran compañero: siempre abierto a escuchar, sugerir mejoras y compartir su experiencia. Su profesionalismo y actitud positiva hacen que sea un gusto trabajar con él.`,
         img: ""
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



