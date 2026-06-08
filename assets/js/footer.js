function inicializarFooter() {
    const footer = CONFIG.footer;

    if (!footer) return;

    document.getElementById("footer-marca").textContent =
        footer.marca;

    document.getElementById("footer-descripcion").textContent =
        footer.descripcion;

    const footerLinks =
        document.getElementById("footer-links");

    footerLinks.innerHTML = "";

    footer.links.forEach(link => {
        if (link.tipo === "politica") {
            footerLinks.innerHTML += `
                <a href="#" class="footer-link-politica" id="footer-politica">
                    ${link.texto}
                </a>
            `;
        } else {
            footerLinks.innerHTML += `
                <a href="${link.href}">
                    ${link.texto}
                </a>
            `;
        }
    });

    const botonPoliticaFooter =
        document.getElementById("footer-politica");

    const modalPolitica =
        document.getElementById("modal-politica");

    if (botonPoliticaFooter && modalPolitica) {
        botonPoliticaFooter.addEventListener("click", (e) => {
            e.preventDefault();
            modalPolitica.classList.remove("oculto");
        });
    }

    const footerContacto =
        document.getElementById("footer-contacto");

    footerContacto.innerHTML = "";

    if (footer.contacto.whatsapp) {
        footerContacto.innerHTML += `
            <a href="https://wa.me/${footer.contacto.whatsappNumero}" target="_blank">
                ${footer.contacto.whatsapp}
            </a>
        `;
    }

    if (footer.contacto.email) {
        footerContacto.innerHTML += `
            <a href="mailto:${footer.contacto.email}">
                ${footer.contacto.email}
            </a>
        `;
    }

    if (footer.contacto.ubicacion) {
        footerContacto.innerHTML += `
            <span>${footer.contacto.ubicacion}</span>
        `;
    }

    document.getElementById("footer-copy").textContent =
        footer.copy;
}