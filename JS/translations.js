// Sistema de traducciones
const translations = {
    es: {
        // Navegación
        nav_inicio: "Inicio",
        nav_sobre_mi: "Sobre Mí",
        nav_experiencia: "Experiencia",
        nav_habilidades: "Habilidades",
        nav_proyectos: "Proyectos",
        nav_contacto: "Contacto",
        
        // Hero
        hero_greeting: "Hola, soy",
        hero_description: "Desarrollador Full-Stack .NET con más de 3 años implementando soluciones empresariales críticas y gestionando infraestructura TI",
        hero_btn_projects: "Ver Proyectos",
        hero_btn_contact: "Contáctame",
        
        // Sobre Mí
        about_title: "Sobre Mí",
        about_description: "Desarrollador Full-Stack especializado en .NET con experiencia comprobada en sistemas empresariales críticos. Actualmente trabajando como Analista IT en Select Solutions, donde lidero el desarrollo de soluciones end-to-end desde análisis hasta despliegue en producción. Especializado en creacion de sistemas eficientes y escalables.",
        about_years: "Años de Experiencia",
        about_projects: "Proyectos Completados",
        about_commitment: "Compromiso",
        
        // Experiencia
        exp_title: "Experiencia Profesional",
        exp_current: "Actualidad",
        exp_job1_title: "Analista IT",
        exp_job1_company: "Select Solutions, El Salvador",
        exp_job1_date: "Julio 2024 - Actualidad",
        exp_job1_desc1: "Desarrollo e implementación de sistema de facturación electrónica integrado con Ministerio de Hacienda",
        exp_job1_desc2: "Evaluación y optimización del sistema ERP corporativo (POLY PM)",
        exp_job1_desc3: "Administración de infraestructura Windows Server, Linux, IIS y Apache",
        exp_job1_desc4: "Implementación de seguridad de red con pfSense y Active Directory",
        exp_job1_desc5: "Automatización de procesos con Python y JSX (Adobe ExtendScript)",
        
        exp_job2_title: "Programador Jr",
        exp_job2_company: "Garan, El Salvador",
        exp_job2_date: "Noviembre 2022 - Junio 2024",
        exp_job2_desc1: "Desarrollo de aplicaciones web con C# ASP.NET MVC y Entity Framework",
        exp_job2_desc2: "Creación de aplicaciones desktop con Windows Forms",
        exp_job2_desc3: "Diseño y optimización de bases de datos SQL Server",
        exp_job2_desc4: "Implementación de interfaces responsivas con Bootstrap y jQuery",
        exp_job2_desc5: "Desarrollo de sistemas especializados de control de inventarios y gestión de IPs",
        
        exp_job3_title: "Infraestructura IT / Soporte Técnico",
        exp_job3_company: "Garan, El Salvador",
        exp_job3_date: "Julio 2022 - Noviembre 2022",
        exp_job3_desc1: "Soporte técnico presencial y remoto optimizando rendimiento de sistemas",
        exp_job3_desc2: "Migración de telefonía análoga a sistema IP, reduciendo costos operativos",
        exp_job3_desc3: "Instalación y configuración de redes estructuradas (cableado UTP Cat 5e/6)",
        exp_job3_desc4: "Administración de Windows, Microsoft 365 y gestión de impresoras de red",
        
        // Habilidades
        skills_title: "Habilidades Técnicas",
        skills_backend: "Backend Development",
        skills_backend_desc: "C#, .NET Framework/Core, ASP.NET MVC, Entity Framework, Node.js",
        skills_frontend: "Frontend Development",
        skills_frontend_desc: "JavaScript, jQuery, Razor Views, Bootstrap, React, HTML5, CSS3",
        skills_database: "Bases de Datos",
        skills_database_desc: "SQL Server (Avanzado), MySQL, PostgreSQL, Entity Framework",
        skills_devops: "DevOps & Infraestructura",
        skills_devops_desc: "IIS, Apache, Git/GitHub, pfSense, DNS, DHCP, Active Directory",
        skills_os: "Sistemas Operativos",
        skills_os_desc: "Windows Server (Avanzado), Linux (Intermedio), Redes",
        skills_automation: "Automatización",
        skills_automation_desc: "Python Scripts, JSX (Adobe ExtendScript), PowerShell",
        
        // Habilidades Blandas
        soft_skills_title: "Habilidades Blandas",
        soft_responsibility: "Responsabilidad",
        soft_responsibility_desc: "Compromiso con plazos y entrega de soluciones de calidad en proyectos críticos empresariales",
        soft_teamwork: "Trabajo en Equipo",
        soft_teamwork_desc: "Colaboración efectiva con equipos multidisciplinarios en entornos corporativos",
        soft_problem_solving: "Resolución de Problemas",
        soft_problem_solving_desc: "Análisis crítico y soluciones innovadoras para desafíos técnicos complejos",
        soft_learning: "Aprendizaje Continuo",
        soft_learning_desc: "Actualización constante en nuevas tecnologías y metodologías de desarrollo",
        soft_adaptability: "Adaptabilidad",
        soft_adaptability_desc: "Capacidad para ajustarse a diferentes tecnologías, proyectos y entornos de trabajo",
        soft_communication: "Comunicación",
        soft_communication_desc: "Traducción efectiva de requisitos técnicos para diferentes audiencias",
        soft_autodidact: "Autodidacta",
        soft_autodidact_desc: "Capacidad de aprender nuevas habilidades sin supervisión directa",
        soft_time_management: "Gestión del Tiempo",
        soft_time_management_desc: "Organización eficiente para cumplir con múltiples tareas y proyectos simultáneamente",
        soft_creativity: "Creatividad",
        soft_creativity_desc: "Enfoque innovador para el desarrollo de soluciones técnicas y optimización de procesos",
        soft_results_oriented: "Orientado a Resultados",
        soft_results_oriented_desc: "Enfoque en la entrega de soluciones que generen impacto positivo y cumplimiento de objetivos estratégicos",
        soft_analytical: "Capacidad Analítica",
        soft_analytical_desc: "Análisis crítico de datos y sistemas para tomar decisiones informadas",
        soft_detail_oriented: "Atencion al Detalle",
        soft_detail_oriented_desc: "Enfoque meticuloso en la calidad del código y la precisión en la implementación de soluciones técnicas",
        soft_proactive: "ProActividad",
        soft_proactive_desc: "Capacidad para anticipar necesidades y actuar proactivamente en entornos cambiantes",
        soft_pressure: "Trabajo bajo presion",
        soft_pressure_desc: "Capacidad para mantener altos niveles de productividad y calidad bajo condiciones de estrés y plazos ajustados",
        soft_improvisation: "Capacidad de improvisación",
        soft_improvisation_desc: "Flexibilidad para adaptarse a situaciones imprevistas y resolver problemas sin planificación previa",
        
        // Idiomas
        languages_title: "Idiomas",
        lang_spanish: "Español",
        lang_spanish_desc: "Nativo - Dominio completo",
        lang_english: "Inglés",
        lang_english_desc: "En desarrollo - Lectura y escritura: Intermedio | Conversación y comprensión auditiva: Básico",
        
        // Proyectos
        projects_title: "Proyectos Destacados",
        project1_title: "Sistema de Facturación Electrónica DTE",
        project1_desc: "Solución completa integrada con Ministerio de Hacienda de El Salvador. Soporte para múltiples tipos de documentos tributarios con firma digital certificada.",
        project2_title: "Sistema de Control de Inventarios",
        project2_desc: "Aplicación web con arquitectura escalable para trazabilidad de activos tecnológicos y administración de direcciones IP en red corporativa.",
        project3_title: "Automatización Adobe Illustrator",
        project3_desc: "Suite de scripts personalizados para automatización de procesos de diseño gráfico, reduciendo tiempos operativos del equipo creativo.",
        project4_title: "Generador de Tickets de Precios",
        project4_desc: "Herramienta Python para generación masiva e impresión automática de tickets de precios a partir de archivos Excel.",
        project5_title: "Control de Terminales ZKTeco",
        project5_desc: "Aplicación de control principal para exportación/importación y gestión de usuarios y huellas digitales de marcaciones.",
        project6_title: "Módulos ERP Personalizados",
        project6_desc: "Desarrollo de módulos especializados para sistema POLY PM: control de calidad, gestión de órdenes de producción e importadores de datos.",
        btn_more_info: "Más Información",
        
        // Contacto
        contact_title: "Contacto",
        contact_ready: "¿Listo para trabajar juntos?",
        contact_available: "Estoy disponible para proyectos freelance o posiciones tiempo completo. ¡Hablemos!",
        contact_email: "Email",
        contact_phone: "Teléfono",
        contact_location: "Ubicación",
        contact_location_text: "Ateos, La Libertad, El Salvador",
        form_name: "Nombre",
        form_name_placeholder: "Tu nombre",
        form_email: "Email",
        form_email_placeholder: "tu@email.com",
        form_message: "Mensaje",
        form_message_placeholder: "Escribe tu mensaje aquí...",
        form_submit: "Enviar Mensaje",
        form_success: "¡Gracias {name}! Tu mensaje ha sido enviado. Te contactaré pronto al correo {email}.",
        
        // Footer
        footer_rights: "Todos los derechos reservados."
    },
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_sobre_mi: "About Me",
        nav_experiencia: "Experience",
        nav_habilidades: "Skills",
        nav_proyectos: "Projects",
        nav_contacto: "Contact",
        
        // Hero
        hero_greeting: "Hi, I'm",
        hero_description: "Full-Stack .NET Developer with over 3 years implementing critical enterprise solutions and managing IT infrastructure",
        hero_btn_projects: "View Projects",
        hero_btn_contact: "Contact Me",
        
        // About Me
        about_title: "About Me",
        about_description: "Full-Stack Developer specialized in .NET with proven experience in critical enterprise systems. Currently working as IT Analyst at Select Solutions, where I lead the development of end-to-end solutions from analysis to production deployment. Specialized in creating efficient and scalable systems.",
        about_years: "Years of Experience",
        about_projects: "Completed Projects",
        about_commitment: "Commitment",
        
        // Experience
        exp_title: "Professional Experience",
        exp_current: "Present",
        exp_job1_title: "IT Analyst",
        exp_job1_company: "Select Solutions, El Salvador",
        exp_job1_date: "July 2024 - Present",
        exp_job1_desc1: "Development and implementation of electronic invoicing system integrated with Ministry of Finance",
        exp_job1_desc2: "Evaluation and optimization of corporate ERP system (POLY PM)",
        exp_job1_desc3: "Administration of Windows Server, Linux, IIS and Apache infrastructure",
        exp_job1_desc4: "Network security implementation with pfSense and Active Directory",
        exp_job1_desc5: "Process automation with Python and JSX (Adobe ExtendScript)",
        
        exp_job2_title: "Junior Programmer",
        exp_job2_company: "Garan, El Salvador",
        exp_job2_date: "November 2022 - June 2024",
        exp_job2_desc1: "Web application development with C# ASP.NET MVC and Entity Framework",
        exp_job2_desc2: "Desktop application creation with Windows Forms",
        exp_job2_desc3: "SQL Server database design and optimization",
        exp_job2_desc4: "Responsive interface implementation with Bootstrap and jQuery",
        exp_job2_desc5: "Development of specialized inventory control and IP management systems",
        
        exp_job3_title: "IT Infrastructure / Technical Support",
        exp_job3_company: "Garan, El Salvador",
        exp_job3_date: "July 2022 - November 2022",
        exp_job3_desc1: "On-site and remote technical support optimizing system performance",
        exp_job3_desc2: "Migration from analog to IP telephony, reducing operational costs",
        exp_job3_desc3: "Installation and configuration of structured networks (UTP Cat 5e/6 cabling)",
        exp_job3_desc4: "Windows administration, Microsoft 365 and network printer management",
        
        // Skills
        skills_title: "Technical Skills",
        skills_backend: "Backend Development",
        skills_backend_desc: "C#, .NET Framework/Core, ASP.NET MVC, Entity Framework, Node.js",
        skills_frontend: "Frontend Development",
        skills_frontend_desc: "JavaScript, jQuery, Razor Views, Bootstrap, React, HTML5, CSS3",
        skills_database: "Databases",
        skills_database_desc: "SQL Server (Advanced), MySQL, PostgreSQL, Entity Framework",
        skills_devops: "DevOps & Infrastructure",
        skills_devops_desc: "IIS, Apache, Git/GitHub, pfSense, DNS, DHCP, Active Directory",
        skills_os: "Operating Systems",
        skills_os_desc: "Windows Server (Advanced), Linux (Intermediate), Networks",
        skills_automation: "Automation",
        skills_automation_desc: "Python Scripts, JSX (Adobe ExtendScript), PowerShell",
        
        // Soft Skills
        soft_skills_title: "Soft Skills",
        soft_responsibility: "Responsibility",
        soft_responsibility_desc: "Commitment to deadlines and delivery of quality solutions in critical business projects",
        soft_teamwork: "Teamwork",
        soft_teamwork_desc: "Effective collaboration with multidisciplinary teams in corporate environments",
        soft_problem_solving: "Problem Solving",
        soft_problem_solving_desc: "Critical analysis and innovative solutions for complex technical challenges",
        soft_learning: "Continuous Learning",
        soft_learning_desc: "Constant updating in new technologies and development methodologies",
        soft_adaptability: "Adaptability",
        soft_adaptability_desc: "Ability to adjust to different technologies, projects and work environments",
        soft_communication: "Communication",
        soft_communication_desc: "Effective translation of technical requirements for different audiences",
        soft_autodidact: "Self-taught",
        soft_autodidact_desc: "Ability to learn new skills without direct supervision",
        soft_time_management: "Time Management",
        soft_time_management_desc: "Efficient organization to meet multiple tasks and projects simultaneously",
        soft_creativity: "Creativity",
        soft_creativity_desc: "Innovative approach to technical solution development and process optimization",
        soft_results_oriented: "Results Oriented",
        soft_results_oriented_desc: "Focus on delivering solutions that generate positive impact and meet strategic objectives",
        soft_analytical: "Analytical Ability",
        soft_analytical_desc: "Critical analysis of data and systems to make informed decisions",
        soft_detail_oriented: "Attention to Detail",
        soft_detail_oriented_desc: "Meticulous focus on code quality and precision in technical solution implementation",
        soft_proactive: "Proactivity",
        soft_proactive_desc: "Ability to anticipate needs and act proactively in changing environments",
        soft_pressure: "Work Under Pressure",
        soft_pressure_desc: "Ability to maintain high levels of productivity and quality under stress conditions and tight deadlines",
        soft_improvisation: "Improvisation Ability",
        soft_improvisation_desc: "Flexibility to adapt to unforeseen situations and solve problems without prior planning",
        
        // Languages
        languages_title: "Languages",
        lang_spanish: "Spanish",
        lang_spanish_desc: "Native - Full proficiency",
        lang_english: "English",
        lang_english_desc: "In development - Reading and writing: Intermediate | Conversation and listening comprehension: Basic",
        
        // Projects
        projects_title: "Featured Projects",
        project1_title: "DTE Electronic Invoicing System",
        project1_desc: "Complete solution integrated with El Salvador's Ministry of Finance. Support for multiple types of tax documents with certified digital signature.",
        project2_title: "Inventory Control System",
        project2_desc: "Web application with scalable architecture for technological asset traceability and IP address management in corporate network.",
        project3_title: "Adobe Illustrator Automation",
        project3_desc: "Suite of custom scripts for graphic design process automation, reducing creative team operational times.",
        project4_title: "Price Ticket Generator",
        project4_desc: "Python tool for mass generation and automatic printing of price tickets from Excel files.",
        project5_title: "ZKTeco Terminal Control",
        project5_desc: "Main control application for export/import and management of users and fingerprints for time attendance.",
        project6_title: "Custom ERP Modules",
        project6_desc: "Development of specialized modules for POLY PM system: quality control, production order management and data importers.",
        btn_more_info: "More Information",
        
        // Contact
        contact_title: "Contact",
        contact_ready: "Ready to work together?",
        contact_available: "I'm available for freelance projects or full-time positions. Let's talk!",
        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Location",
        contact_location_text: "Ateos, La Libertad, El Salvador",
        form_name: "Name",
        form_name_placeholder: "Your name",
        form_email: "Email",
        form_email_placeholder: "your@email.com",
        form_message: "Message",
        form_message_placeholder: "Write your message here...",
        form_submit: "Send Message",
        form_success: "Thank you {name}! Your message has been sent. I'll contact you soon at {email}.",
        
        // Footer
        footer_rights: "All rights reserved."
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Actualizar el título del documento
    const title = lang === 'es' 
        ? 'Ovidio Ascencio - Desarrollador Full-Stack .NET'
        : 'Ovidio Ascencio - Full-Stack .NET Developer';
    document.title = title;
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'es';
    changeLanguage(savedLang);
    
    // Event listeners para botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, changeLanguage };
}