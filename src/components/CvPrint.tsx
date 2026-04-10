import { EXPERIENCIA_LABORAL } from "../assets/content";

export const CvPrint = () => {
    const stack = [
        "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS",
        "Laravel", "PHP", "Node.js", "Java", "Spring Boot", "Quarkus", "Go",
        ".NET / C#", "Python", "Oracle DB", "MySQL", "MongoDB", "SQL Server",
        "Docker", "Azure", "AWS", "Firebase", "Inertia.js", "Vue.js",
        "JHipster", "Vapor", "Render", "Vercel", "Git",
    ];

    return (
        <div id="cv-print" className="hidden">
            <div className="cv-page">

                {/* HEADER */}
                <div className="cv-header">
                    <div className="cv-header-left">
                        <img
                            src="https://avatars.githubusercontent.com/u/13682353?v=4"
                            alt="Jean Meza"
                            className="cv-avatar"
                        />
                    </div>
                    <div className="cv-header-right">
                        <h1>Jean Meza</h1>
                        <h2>Programador Full Stack & Diseñador Web</h2>
                        <div className="cv-contact-row">
                            <span>📍 Manabí, Ecuador</span>
                            <span>📞 +593 960-445-403</span>
                            <span>✉ yojean02@hotmail.com</span>
                        </div>
                        <div className="cv-contact-row">
                            <span>🔗 linkedin.com/in/jeanpitx</span>
                            <span>🐙 github.com/jeanpitx</span>
                            <span>💬 wa.me/593960445403</span>
                        </div>
                    </div>
                </div>

                {/* PERFIL */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Perfil Profesional</h3>
                    <p className="cv-text">
                        Desarrollador Full Stack con más de 8 años de experiencia construyendo aplicaciones web y móviles.
                        He trabajado en sectores como banca, alimentos, facturación y logística, desarrollando desde e-commerce y ERPs
                        hasta microservicios y APIs de alto rendimiento. Me apasiona crear soluciones que combinen buen diseño con
                        arquitecturas sólidas y escalables.
                    </p>
                </div>

                {/* EXPERIENCIA */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Experiencia Laboral</h3>
                    {EXPERIENCIA_LABORAL.map((exp, i) => (
                        <div key={i} className="cv-exp-item">
                            <div className="cv-exp-header">
                                <div>
                                    <span className="cv-exp-title">{exp.titulo}</span>
                                    <span className="cv-exp-company"> — {exp.empresa}</span>
                                </div>
                                <span className="cv-exp-time">{exp.tiempo}</span>
                            </div>
                            <ul className="cv-task-list">
                                {exp.tareas.map((t, j) => (
                                    <li key={j}>{t}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* TECNOLOGIAS */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Tecnologías & Herramientas</h3>
                    <div className="cv-skills">
                        {stack.map(s => (
                            <span key={s} className="cv-skill-tag">{s}</span>
                        ))}
                    </div>
                </div>

                {/* PROYECTOS DESTACADOS */}
                <div className="cv-section">
                    <h3 className="cv-section-title">Proyectos Destacados</h3>
                    <ul className="cv-task-list">
                        <li><strong>E-commerce Outlet al 50%</strong> — Plataforma completa con catálogo, carrito, pasarela de pago (Datafast) y panel admin. Stack: Laravel, Next.js, MySQL.</li>
                        <li><strong>Rediseño Web Banco Manabí</strong> — Sitio institucional con formularios, gestión de solicitudes y panel de administración. Stack: Laravel, Bootstrap, MySQL.</li>
                        <li><strong>API Webhook Últimas Millas (KFC)</strong> — Middleware entre plataformas de delivery (Uber, Rappi, PedidosYa) y sistema interno. Stack: Laravel → Go, MongoDB, Azure.</li>
                        <li><strong>Migración Habitanto (Evaluar.com)</strong> — Plataforma de alquiler inmobiliario migrada a Laravel full stack con microservicios, SES y Lambda en AWS.</li>
                        <li><strong>Servicio Automatizado Transferencias Interbancarias</strong> — Sistema SOAP para el Banco Comercial de Manabí. Stack: Java, Oracle DB.</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};
