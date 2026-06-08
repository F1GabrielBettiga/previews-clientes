function inicializarServicios() {
    const servicios = CONFIG.servicios;

    if (!servicios) return;

    const titulo = document.getElementById("servicios-titulo");
    const grid = document.getElementById("servicios-grid");

    if (!titulo || !grid) return;

    titulo.textContent = servicios.titulo;
    grid.innerHTML = "";

    servicios.items.forEach(servicio => {
        grid.innerHTML += `
            <article class="servicio-card">
                <span class="material-symbols-outlined servicio-icono">
                    ${servicio.icono}
                </span>

                <h3 class="servicio-titulo">
                    ${servicio.titulo}
                </h3>

                <p class="servicio-descripcion">
                    ${servicio.descripcion}
                </p>
            </article>
        `;
    });

    inicializarAnimacionServiciosMobile();
}

function inicializarAnimacionServiciosMobile() {
    const cards = document.querySelectorAll(".servicio-card");

    if (!cards.length) return;

    const esMobile = window.innerWidth <= 900;

    cards.forEach(card => {
        card.classList.remove("servicio-visible");
    });

    if (!esMobile) {
        cards.forEach(card => {
            card.classList.add("servicio-visible");
        });

        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;

            if (entry.isIntersecting) {
                card.classList.add("servicio-visible");
            } else {
                card.classList.remove("servicio-visible");
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -20px 0px"
    });

    cards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 35}ms`;
        observer.observe(card);
    });
}