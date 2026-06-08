document.addEventListener("DOMContentLoaded", async () => {

    /* =========================================
       CARGAR SECCIONES HTML
    ========================================= */
    await cargarSeccion("navbar", "secciones/navbar.html");
    await cargarSeccion("inicio", "secciones/hero.html");
    await cargarSeccion("servicios", "secciones/servicios.html");
    await cargarSeccion("sobre-nosotros", "secciones/sobreNosotros.html");
    await cargarSeccion("contacto", "secciones/contacto.html");
    await cargarSeccion("footer", "secciones/footer.html");
    await cargarSeccion("whatsapp-flotante", "secciones/whatsappFlotante.html");

    /* =========================================
       CONFIGURAR DATOS GENERALES
    ========================================= */
    configurarPagina();

    /* =========================================
       INICIALIZAR FUNCIONAMIENTOS
    ========================================= */
    inicializarNavbar();
    inicializarHero();
    inicializarServicios();
    inicializarSobreNosotros();
    inicializarContacto();
    inicializarFooter();
    inicializarWhatsappFlotante();
});

async function cargarSeccion(idContenedor, rutaArchivo) {
    const contenedor = document.getElementById(idContenedor);

    if (!contenedor) {
        console.error(`No existe el contenedor con id: ${idContenedor}`);
        return;
    }

    try {
        const respuesta = await fetch(rutaArchivo);

        if (!respuesta.ok) {
            throw new Error(`No se pudo cargar: ${rutaArchivo}`);
        }

        const html = await respuesta.text();
        contenedor.innerHTML = html;

    } catch (error) {
        console.error(`Error cargando la sección ${idContenedor}:`, error);
    }
}

function configurarPagina() {
    if (CONFIG?.pagina?.titulo) {
        document.title = CONFIG.pagina.titulo;
    }

    const favicon = document.getElementById("favicon-dinamico");

    if (favicon && CONFIG?.pagina?.favicon) {
        favicon.href = CONFIG.pagina.favicon;
    }
}