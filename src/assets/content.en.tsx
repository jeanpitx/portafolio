import { PROYECTOS_LIST, EXPERIENCIA_LABORAL, TESTIMONIOS, SOBRE_MI } from "./content";

// ─── Projects ────────────────────────────────────────────────────────────────
const proyectosTextoEN = [
    {
        titulo: "E-commerce",
        descripcion: `A fully operational e-commerce site with a product catalog sourced from a database connected to a management system I also developed. Customers can filter items by multiple conditions, easily add them to their cart, and choose variants (size, color, etc.). Secure credit card payment is available. The site includes an admin panel for products, sales, and inventory.`,
    },
    {
        titulo: (<span>Inventory App <span className="text-lg font-[400]">: In-Store Sales</span></span>),
        descripcion: `
            The system handles sales from the moment a customer enters the store,
            allowing a salesperson to accompany the customer. It supports new customer registration
            if they are not in the database, or lookup if they are. The database is pulled from a REST service,
            stored locally, and works offline.
        `,
    },
    {
        titulo: "Community Needs Tracker",
        descripcion: `
            Developed at the request of a Systems EC client who needed a web system to record
            information about people and community needs by sector, allowing candidates to see
            the most common needs. The system allowed real-time camera access to photograph and record
            people and needs, storing everything in the database.
        `,
    },
    {
        titulo: "TAX RECEIPT QUERY (SRI ECUADOR)",
        descripcion: `
            This solution bypassed the image-based CAPTCHA previously used by Ecuador's SRI tax authority.
            Using PHP CURL, data was extracted from GET and POST responses, parsing table contents, links, and values.
            It included user login with role-based access so only specific users could perform queries.
        `,
    },
    {
        titulo: "AUTOMATED INTERBANK TRANSFER SERVICE",
        descripcion: `
            An internal banking project delivered at 100% completion, including manuals, unit tests, and
            integration tests. The only pending step was the production deployment, not completed
            for reasons external to the institution.
        `,
    },
    {
        titulo: "Banco Manabí Website Redesign",
        descripcion: `
            Fully developed by me, this project replaced a static site that required an IT ticket for any change.
            The new site allows authorized users to make updates themselves. It includes multiple forms:
            contact info for product requests, a credit card application with over 60 fields, file upload for
            scanned PDFs, and a requests management module.
        `,
    },
    {
        titulo: "Service Payment API",
        descripcion: `
             An internal banking project delivered at 100% completion, following the same architecture as the
             interbank transfer service, with full manuals and testing. Ready to integrate into the bank's
             internal mobile and web platforms.
        `,
    },
    {
        titulo: "Last Mile Webhook API",
        descripcion: `
             A middleware API between delivery brands and the KFC system, responsible for receiving store orders
             that need a delivery driver and assigning them to platforms like Uber, Rappi, or PedidosYa,
             and receiving driver status updates via webhooks. Version 2.0 was migrated from Laravel to Go.
        `,
    },
    {
        titulo: "Habitanto System Migration (Rental Management)",
        descripcion: `
             Migrated an application built in Web Ratio to a full-stack Laravel solution, implementing microservices,
             micro frontends, job queues, and more. The system manages rentals with features for properties, tenants,
             contracts, payments, and more.
        `,
    },
];

const PROYECTOS_EN = PROYECTOS_LIST.map((p, i) => ({ ...p, ...proyectosTextoEN[i] }));

// ─── Experience ──────────────────────────────────────────────────────────────
const experienciaTextoEN = [
    {
        titulo: "Mid-Senior Developer",
        tareas: [
            "Enterprise software development in outsourcing mode for Eclipsoft within Sipecom SA.",
            "Backend development with Java and Spring Boot for business applications.",
            "Use of JHipster as a full-stack project generator with clean architecture.",
            "Deployment and environment management with Docker and containers.",
        ],
    },
    {
        titulo: "Mid-Senior Developer",
        tareas: [
            "Development of systems and applications for KFC in outsourcing mode using advanced PHP and SQL Server.",
            "Scripting and full-stack development for restaurants and APIs for the KFC group.",
            "Microservices and API development with Java (Quarkus and Spring) and Go for high-performance applications.",
            "Service deployment and management with Docker containers in production environments.",
            "Managing production deployments, reviewing changes, and attending daily team meetings.",
            "Deployment monitoring and testing, using SQL Compare, Git, and Azure.",
        ],
    },
    {
        titulo: "Systems Analyst",
        tareas: [
            "Development of banking systems: National Payment System, Insurance, Human Resources, and Administration.",
            "Administration and maintenance of Oracle DB: packages, queries, stored procedures, functions, and new package development.",
            "Server and service administration via remote desktop and Linux console.",
            "Service, server, and database monitoring with Zabbix and Speed Standby.",
        ],
    },
    {
        titulo: "Systems Analyst",
        tareas: [
            "Programming in Power Builder 12, Android, and PHP.",
            "Maintenance and administration of computers, networks, and security cameras.",
            "Linux and Windows Server management via command line.",
            "Sybase 9 database administration: stored procedures, triggers, functions, and queries.",
            "Installation of proprietary, public, and private systems.",
            "Personalized customer support, technical visits, and IT problem-solving.",
        ],
    },
    {
        titulo: "Freelance Developer",
        tareas: [
            "Development and maintenance of web and mobile applications.",
            "API and web service development with Laravel, .NET Web 6, Inertia.js, and MVC Razor with Oracle.",
            "Wireframe layout and UI design.",
            "Creation and maintenance of relational and non-relational databases.",
            "Integration of third-party systems and services.",
            "Deployment on servers: Vercel, Firebase, VPS, Vapor (Laravel), and Render.",
            "Business logic implementation for functional and non-functional requirements.",
            "System development for Habitantos (Evaluar.com): real estate platform with Laravel and Vue.",
            "Additional module development for Banco Comercial de Manabí: integrations and improvements on existing systems.",
            "Full e-commerce for Outlet al 50%: catalog, cart, payment gateway, and admin panel with Laravel, Next.js, and MySQL.",
        ],
    },
];

const EXPERIENCIA_EN = EXPERIENCIA_LABORAL.map((e, i) => ({ ...e, ...experienciaTextoEN[i] }));

// ─── About Me ─────────────────────────────────────────────────────────────────
const sobreMiTextoEN = [
    {
        titulo: "A bit about me",
        descripcion: `I'm Jean Meza, a Full Stack developer with over 8 years of experience building web and mobile applications.
        I've worked in banking, food, invoicing, and logistics — developing everything from e-commerce and ERPs to mobile apps and microservices.
        I'm passionate about creating solutions that combine great design with solid, scalable architectures.`,
    },
    {
        titulo: "My stack",
        descripcion: `Throughout my projects I've worked with a broad and versatile stack. On the frontend I'm proficient in React, Next.js, React Native, and Ionic.
        On the backend I work with Laravel, Node.js, Java, and .NET. For databases I use MySQL, MongoDB, and Oracle depending on the project.
        I also have experience with cloud services like Firebase, Azure, and AWS, allowing me to deploy robust end-to-end solutions.`,
    },
    {
        titulo: "Real experience",
        descripcion: `I've built real production projects: a transport reservation system used in Argentina, a live e-commerce with a custom payment gateway,
        an ERP for SME management, a mobile offline inventory system for stores, and notification microservices for apps with thousands of users.
        Each project has taught me concrete lessons about performance, security, and user experience.`,
    },
    {
        titulo: "Looking ahead",
        descripcion: `My current focus is deepening cloud architectures with Azure and AWS, continuing to grow in Laravel for the backend, and exploring Go for high-performance services.
        I'm also interested in consolidating my Python knowledge applied to automation and artificial intelligence.
        The goal is to keep delivering complete, well-designed products ready to scale.`,
    },
];

const SOBRE_MI_EN = SOBRE_MI.map((item, i) => ({
    ...item,
    titulo: sobreMiTextoEN[i].titulo,
    descripcion: sobreMiTextoEN[i].descripcion,
}));

// ─── Testimonials ─────────────────────────────────────────────────────────────
const testimoniosTextoEN = [
    `As a Product Owner, I always look for people who not only master the technical side but also contribute strategically. Jean Meza has been instrumental in the projects we've developed together. His expert command of Laravel, Vue, React, Java, Node, and MongoDB has been key to pushing forward complex initiatives. He has a comprehensive vision of software development, with an exceptional ability to propose efficient and sustainable solutions. His technical judgment and commitment have made a huge difference in our work together.`,
    `Jean Meza is a very well-rounded developer with a high level of expertise in Laravel. In the projects we worked on together, he always showed a great capacity to propose scalable, well-structured solutions. His ability to adapt to new technical requirements makes him a very valuable team member. His contributions have been key to improving our processes and products.`,
    `I've worked with Jean Meza on several web projects and have always been very satisfied with the results. His ability to translate my designs into functional, clean interfaces is impressive. We are currently collaborating on external projects: I handle design and he handles development, and the synergy is excellent. He's a committed professional with great attention to detail. I recommend his work without hesitation.`,
    `From the security side, it's essential to have developers who understand the importance of integrity and confidentiality in banking systems. Jean Meza has demonstrated a high commitment to best practices in software security, especially in sensitive environments like ours. His experience with .NET, C#, and Oracle allows him to design robust solutions aligned with our standards. He is meticulous, responsible, and always works with a risk-mitigation mindset. A key asset in any mission-critical team.`,
    `Jean Meza is excellent in Laravel and React. We've shared several technical challenges, and I've always been impressed by his ability to solve complex problems quickly and elegantly. He has very clear logic and is always willing to share his knowledge, which creates a great team atmosphere. Without a doubt, he is a reference in these technologies.`,
    `Working with Jean Meza has been very positive. He has great command of enterprise environments with technologies like .NET, C#, and Oracle, and his code is clean, optimized, and always delivered on time. You can clearly see his experience working under pressure and his ability to maintain quality in every delivery.`,
    `Working with Jean Meza was an enriching experience. His knowledge of .NET, Oracle, and C# was fundamental in developing several key banking modules. He's also a great colleague: always open to listening, suggesting improvements, and sharing his experience. His professionalism and positive attitude make it a pleasure to work with him.`,
];

const TESTIMONIOS_EN = TESTIMONIOS.map((t, i) => ({ ...t, testimonio: testimoniosTextoEN[i] }));

// ─── UI strings ──────────────────────────────────────────────────────────────
export const UI_EN = {
    header: {
        contact: "Contact",
        myProjects: "My projects",
        downloadCv: "Download CV",
    },
    nav: [
        { name: "Projects", href: "#proyectos" },
        { name: "About me", href: "#sobre-mi" },
        { name: "Experience", href: "#experiencia" },
        { name: "Contact", href: "#contacto" },
    ],
    contact: {
        title: "Contact.",
        name: "Name",
        email: "Email",
        phone: "Phone (*optional)",
        message: "Message",
        send: "Send message",
        sending: "Sending...",
        alertMissing: "Missing required fields",
        alertSuccess: "Thank you for reaching out, I will get back to you soon.",
        alertError: "Oops, something went wrong. Please try again.",
    },
    footer: {
        sections: "Sections",
        contact: "Contact",
        networks: "Networks",
        phone: "Phone:",
        email: "Email:",
        followMe: "You can find me on these social networks.",
    },
    aboutMe: {
        title: "About me.",
        testimonials: "Testimonials.",
        testimonialSubtitle: "What they say about me",
    },
    projects: {
        noImage: "No image",
    },
    modal: {
        close: "Close",
    },
};

export const UI_ES = {
    header: {
        contact: "Contacto",
        myProjects: "Mis proyectos",
        downloadCv: "Descargar CV",
    },
    nav: [
        { name: "Proyectos", href: "#proyectos" },
        { name: "Sobre mi", href: "#sobre-mi" },
        { name: "Experiencia", href: "#experiencia" },
        { name: "Contacto", href: "#contacto" },
    ],
    contact: {
        title: "Contacto.",
        name: "Nombre",
        email: "Email",
        phone: "Telefono (*opcional)",
        message: "Mensaje",
        send: "Enviar mensaje",
        sending: "Enviando...",
        alertMissing: "Faltan datos obligatorios",
        alertSuccess: "Gracias por contactarme, pronto me comunicare contigo.",
        alertError: "Ups, algo salio mal, Por favor intentalo nuevamente.",
    },
    footer: {
        sections: "Secciones",
        contact: "Contacto",
        networks: "Redes",
        phone: "Telefono:",
        email: "Email:",
        followMe: "Podes encontrame en estas redes sociales.",
    },
    aboutMe: {
        title: "Sobre mi.",
        testimonials: "Testimonios.",
        testimonialSubtitle: "Lo que dicen de mi",
    },
    projects: {
        noImage: "Sin imagen",
    },
    modal: {
        close: "Cerrar",
    },
};

// ─── Full English content object ─────────────────────────────────────────────
export const INGLES = {
    header: {
        titulo: "Full Stack Developer & Web Designer",
        descripcion: "As a Full Stack developer with experience in native and web applications, I am passionate about learning new skills and solving problems, using development and design to make a positive impact on every project.",
    },
    proyectos: {
        titulo: "Projects.",
        descripcion: "Some of the projects I have developed.",
        proyectos: PROYECTOS_EN,
    },
    expericia: {
        titulo: "Work Experience.",
        descripcion: "What I've done so far",
        timeLine: EXPERIENCIA_EN,
    },
    sobreMi: SOBRE_MI_EN,
    testimonios: TESTIMONIOS_EN,
    ui: UI_EN,
};
