function inicializarNavbar() {
    const logo = document.getElementById("navbar-logo");
    const contenedorDesktop = document.getElementById("navbar-links-desktop");
    const contenedorMobile = document.getElementById("navbar-links-mobile");
    const botonMenu = document.getElementById("navbar-menu-btn");
    const menuMobile = document.getElementById("navbar-menu-mobile");
    const iconoMenu = document.getElementById("navbar-menu-icon");

    if (!logo || !contenedorDesktop || !contenedorMobile) return;

    /* =========================================
       CARGAR LOGO DESDE CONFIGURACIÓN GENERAL
    ========================================= */
    if (CONFIG.pagina.logo.usarImagen) {
        logo.innerHTML = `
            <img 
                src="${CONFIG.pagina.logo.imagen}" 
                alt="${CONFIG.pagina.logo.alt}" 
                class="navbar-logo-img"
            >
        `;
    } else {
        logo.textContent = CONFIG.pagina.logo.texto;
    }

    /* =========================================
       CARGAR LINKS DESKTOP Y MOBILE
    ========================================= */
    CONFIG.navbar.links.forEach(link => {
        contenedorDesktop.innerHTML += `
            <a class="navbar-link" href="${link.href}">
                ${link.texto}
            </a>
        `;

        contenedorMobile.innerHTML += `
            <a class="navbar-link-mobile" href="${link.href}">
                ${link.texto}
            </a>
        `;
    });

    /* =========================================
       CARGAR BOTÓN PRINCIPAL
    ========================================= */
    contenedorDesktop.innerHTML += `
        <a class="navbar-boton" href="${CONFIG.navbar.botonPrincipal.href}">
            ${CONFIG.navbar.botonPrincipal.texto}
        </a>
    `;

    contenedorMobile.innerHTML += `
        <a class="navbar-boton-mobile" href="${CONFIG.navbar.botonPrincipal.href}">
            ${CONFIG.navbar.botonPrincipal.texto}
        </a>
    `;

    /* =========================================
       FUNCIONAMIENTO MENÚ MOBILE
    ========================================= */
    function abrirMenu() {
        menuMobile.classList.add("abierto");
        iconoMenu.textContent = "close";
        document.body.classList.add("menu-abierto");
    }

    function cerrarMenu() {
        menuMobile.classList.remove("abierto");
        iconoMenu.textContent = "menu";
        document.body.classList.remove("menu-abierto");
    }

    botonMenu.addEventListener("click", (e) => {
        e.stopPropagation();

        if (menuMobile.classList.contains("abierto")) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    document.addEventListener("click", (e) => {
        if (
            menuMobile.classList.contains("abierto") &&
            !menuMobile.contains(e.target) &&
            !botonMenu.contains(e.target)
        ) {
            cerrarMenu();
        }
    });

    document.querySelectorAll(".navbar-link-mobile, .navbar-boton-mobile").forEach(link => {
        link.addEventListener("click", cerrarMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth >= 768) {
            cerrarMenu();
        }
    });

    inicializarScrollSpy();
}

function inicializarScrollSpy() {
    const linksDesktop = document.querySelectorAll(".navbar-link");
    const linksMobile = document.querySelectorAll(".navbar-link-mobile");
    const secciones = document.querySelectorAll("section[id]");

    function marcarActivo(id) {
        [...linksDesktop, ...linksMobile].forEach(link => {
            const href = link.getAttribute("href");

            if (href === `#${id}`) {
                link.classList.add("activo");
            } else {
                link.classList.remove("activo");
            }
        });
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                marcarActivo(entry.target.id);
            }
        });
    }, {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0
    });

    secciones.forEach(section => observer.observe(section));

    [...linksDesktop, ...linksMobile].forEach(link => {
        link.addEventListener("click", () => {
            const id = link.getAttribute("href").replace("#", "");
            marcarActivo(id);
        });
    });
}