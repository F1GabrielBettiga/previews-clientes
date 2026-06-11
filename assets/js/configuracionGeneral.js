const CONFIG = {

   /* =========================================
      SECCIÓN SEO
      ========================================= */
   empresa: {
      nombre: "SEGNEOS",
      telefonoVisible: "+54 9 11 6685-5761",
      telefonoWhatsapp: "5491166855761",
      email: "hernanparig@gmail.com",
      ubicacion: "Buenos Aires, Argentina",
      region: "Buenos Aires",
      pais: "Argentina"
   },
   /* =========================================
      SECCIÓN PÁGINA / MARCA
      ========================================= */
   pagina: {
      titulo: "SEGNEOS | Consultoría Integral en Seguridad, Higiene & Medio Ambiente",

      // Favicon de la pestaña del navegador
      favicon: "assets/img/favicon.png",

      // Logo de la empresa
      logo: {
         usarImagen: true,
         texto: "SEGNEOS Seguridad, higiene y mededio ambiente",
         imagen: "assets/img/logo.png",
         alt: "Logo SEGNEOS SyH"
      }
   },

   /* =========================================
      SECCIÓN NAVBAR
      ========================================= */
   navbar: {
      links: [
         { texto: "Inicio", href: "#inicio" },
         { texto: "Servicios", href: "#servicios" },
         { texto: "Sobre nosotros", href: "#sobre-nosotros" },
         { texto: "Contacto", href: "#contacto" }
      ],

      botonPrincipal: {
         texto: "Solicitar asesoramiento",
         href: "#contacto"
      }
   },

   /* =========================================
   SECCIÓN HERO / INICIO
========================================= */
   hero: {
      badge: "SEGNEOS | Seguridad e Higiene",

      titulo: "Consultora de Seguridad e Higiene",
      tituloResaltado: "Para Empresas",

      descripcion: "Soluciones profesionales en seguridad laboral, higiene y medio ambiente para empresas que buscan prevenir riesgos, cumplir la normativa vigente y trabajar de forma responsable.",

      beneficios: [
         { icono: "check_circle", texto: "Prevención" },
         { icono: "verified_user", texto: "Cumplimiento" },
         { icono: "nature", texto: "Medio ambiente" }
      ],

      botonWhatsapp: {
         texto: "Contactar por WhatsApp",
         numero: "5491166855761"
      },

      botonSecundario: {
         texto: "Enviar consulta",
         href: "#contacto"
      },

      imagen: {
         src: "assets/img/hero-seguridad.webp",
         alt: "Elementos de seguridad industrial para prevención de riesgos laborales"
      },

      cardImagen: {
         titulo: "Soluciones para empresas",
         texto: "Seguridad laboral | Gestión ambiental"
      }
   },
   /* =========================================
      SECCIÓN SERVICIOS
      ========================================= */
   servicios: {
      titulo: "Servicios Especializados",

      items: [
         {
            icono: "health_and_safety",
            titulo: "Gestión integral de seguridad industrial y salud ocupacional",
            descripcion: "Implementación de programas de seguridad, auditorías internas y control de riesgos en planta."
         },
         {
            icono: "assignment_late",
            titulo: "Evaluación de riesgos",
            descripcion: "Identificación y valoración de peligros potenciales para mitigar accidentes y enfermedades laborales."
         },
         {
            icono: "school",
            titulo: "Capacitaciones",
            descripcion: "Programas formativos a medida sobre prevención, uso de EPP y protocolos de emergencia."
         },
         {
            icono: "eco",
            titulo: "Cumplimiento de normativas y legislaciones vigentes",
            descripcion: "Estudios de impacto ambiental, gestión de residuos y cumplimiento de leyes ecológicas."
         },
         {
            icono: "description",
            titulo: "Documentación técnica",
            descripcion: "Elaboración de manuales, procedimientos operativos y legajos técnicos requeridos por ley."
         },
         {
            icono: "support_agent",
            titulo: "Asesoramiento integral",
            descripcion: "Consultoría permanente para garantizar el cumplimiento normativo ante organismos de control."
         }
      ]
   },

   /* =========================================
      SECCIÓN SOBRE NOSOTROS
   ========================================= */
   sobreNosotros: {
      franja: [
         { icono: "security", texto: "Prevención" },
         { icono: "gavel", texto: "Cumplimiento" },
         { icono: "nature_people", texto: "Responsabilidad" },
         { icono: "handshake", texto: "Acompañamiento" }
      ],

      titulo: "Nuestro Enfoque Técnico",

      descripcion:
         "En SEGNEOS, no solo brindamos consultoría; nos convertimos en socios estratégicos para la prevención de riesgos laborales y la protección del medio ambiente.",

      descripcionSecundaria:
         "Nuestro equipo técnico está conformado por especialistas con amplia trayectoria en diversos sectores industriales. Aplicamos una metodología orientada a resultados concretos, optimizando procesos y garantizando que su empresa opere bajo los más altos estándares de seguridad nacional e internacional.",

      imagen: {
         src: "assets/img/sobre-nosotros.webp",
         alt: "Equipo técnico de seguridad e higiene"
      },

      valores: [
         {
            icono: "verified",
            texto: "+10 años de experiencia técnica"
         },
         {
            icono: "speed",
            texto: "Respuesta inmediata ante auditorías"
         }
      ],

      cta: {
         titulo: "¿Necesitás asesoramiento para tu empresa?",
         texto: "Estamos listos para ayudarte a mejorar tus estándares de seguridad y cumplir con la normativa.",
         whatsappTexto: "Contactar WhatsApp",
         whatsappNumero: "5491166855761",
         emailTexto: "Enviar un Email",
         email: "hernanparig@gmail.com"
      }
   },

   /* =========================================
      SECCIÓN CONTACTO
   ========================================= */
   contacto: {
      titulo: "Hablemos sobre tu proyecto",

      descripcion:
         "Contanos las necesidades de tu empresa y te responderemos a la brevedad.",

      whatsappTexto: "+54 11 6685-5761",
      whatsappNumero: "5491166855761",

      email: "hernanparig@gmail.com",

      marcaVisual: {
         mostrar: true,
         imagen: "assets/img/favicon.png",
         alt: "Símbolo SEGNEOS",
         titulo: "SEGNEOS",
         texto: "Seguridad, Higiene y Medio Ambiente"
      },

      politicaPrivacidad: {
         titulo: "Política de Privacidad",
         texto: [
            "SEGNEOS respeta y protege la privacidad de todas las personas que utilizan este sitio web. La información proporcionada mediante formularios de contacto será utilizada exclusivamente para responder consultas, brindar información sobre nuestros servicios y mantener comunicaciones relacionadas con solicitudes realizadas por el usuario.",

            "Los datos que podrán ser solicitados incluyen nombre y apellido, dirección de correo electrónico, empresa, teléfono y cualquier otra información que el usuario decida proporcionar voluntariamente a través de los formularios disponibles en el sitio.",

            "La información recopilada será tratada de manera confidencial y utilizada únicamente con fines profesionales y comerciales vinculados a las actividades desarrolladas por SEGNEOS. En ningún caso los datos personales serán vendidos, alquilados o cedidos a terceros para fines publicitarios o comerciales ajenos a la prestación de nuestros servicios.",

            "SEGNEOS adopta medidas razonables de seguridad para proteger la información suministrada por los usuarios y evitar accesos no autorizados, alteraciones, pérdidas o divulgaciones indebidas de los datos almacenados.",

            "El envío de información mediante este sitio implica el consentimiento expreso del usuario para el tratamiento de los datos proporcionados de acuerdo con los términos establecidos en esta Política de Privacidad.",

            "En cualquier momento el usuario podrá solicitar la actualización, rectificación o eliminación de sus datos personales comunicándose a través de los medios de contacto publicados en este sitio web.",

            "SEGNEOS se reserva el derecho de actualizar o modificar esta Política de Privacidad cuando resulte necesario para adecuarla a cambios legales, técnicos o comerciales. Cualquier modificación será publicada en este mismo sitio."
         ]
      }
   },

   /* =========================================
      WHATSAPP FLOTANTE
   ========================================= */
   whatsappFlotante: {
      visible: true,
      numero: "5491166855761",
      mensajeInicial: "Hola, quiero realizar una consulta desde la página web."
   },

   /* =========================================
      SECCIÓN FOOTER
   ========================================= */
   footer: {
      marca: "SEGNEOS",

      descripcion:
         "Consultoría integral en Seguridad, Higiene y Medio Ambiente para empresas que buscan trabajar de forma segura y responsable.",

      links: [
         { texto: "Inicio", href: "#inicio" },
         { texto: "Servicios", href: "#servicios" },
         { texto: "Sobre nosotros", href: "#sobre-nosotros" },
         { texto: "Contacto", href: "#contacto" },
         { texto: "Política de Privacidad", href: "#", tipo: "politica" }
      ],

      contacto: {
         whatsapp: "+54 9 11 6685-5761",
         whatsappNumero: "5491166855761",
         email: "hernanparig@gmail.com",
         ubicacion: "Buenos Aires, Argentina"
      },

      copy: "© 2026 SEGNEOS. Todos los derechos reservados."
   }
};