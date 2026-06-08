function inicializarContacto() {
    const contacto = CONFIG.contacto;

    document.getElementById("contacto-titulo").textContent =
        contacto.titulo;

    document.getElementById("contacto-descripcion").textContent =
        contacto.descripcion;

    /* =========================================
       WHATSAPP
    ========================================= */
    const whatsapp =
        document.getElementById("contacto-whatsapp");

    whatsapp.href =
        `https://wa.me/${contacto.whatsappNumero}`;

    whatsapp.innerHTML = `
        <span class="contacto-whatsapp-icono">
            <svg viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
            </svg>
        </span>
        ${contacto.whatsappTexto}
    `;

    /* =========================================
       EMAIL
    ========================================= */
    const email =
        document.getElementById("contacto-email");

    email.href =
        `mailto:${contacto.email}`;

    email.innerHTML = `
        <span class="material-symbols-outlined">
            mail
        </span>
        ${contacto.email}
    `;

    /* =========================================
       MARCA VISUAL / SELLO
    ========================================= */
    const marcaVisual =
        document.getElementById("contacto-marca-visual");

    if (contacto.marcaVisual?.mostrar) {
        document.getElementById("contacto-marca-img").src =
            contacto.marcaVisual.imagen;

        document.getElementById("contacto-marca-img").alt =
            contacto.marcaVisual.alt;

        document.getElementById("contacto-marca-titulo").textContent =
            contacto.marcaVisual.titulo;

        document.getElementById("contacto-marca-texto").textContent =
            contacto.marcaVisual.texto;
    } else if (marcaVisual) {
        marcaVisual.style.display = "none";
    }

    /* =========================================
       MODAL POLÍTICA DE PRIVACIDAD
    ========================================= */
    const abrirPolitica =
        document.getElementById("abrir-politica");

    const cerrarPolitica =
        document.getElementById("cerrar-politica");

    const modalPolitica =
        document.getElementById("modal-politica");

    const politicaTitulo =
        document.getElementById("politica-titulo");

    const politicaContenido =
        document.getElementById("politica-contenido");

    if (
        abrirPolitica &&
        cerrarPolitica &&
        modalPolitica &&
        politicaTitulo &&
        politicaContenido &&
        contacto.politicaPrivacidad
    ) {
        politicaTitulo.textContent =
            contacto.politicaPrivacidad.titulo;

        politicaContenido.innerHTML =
            contacto.politicaPrivacidad.texto
                .map(parrafo => `<p>${parrafo}</p>`)
                .join("");

        abrirPolitica.addEventListener("click", () => {
            modalPolitica.classList.remove("oculto");
        });

        cerrarPolitica.addEventListener("click", () => {
            modalPolitica.classList.add("oculto");
        });

        modalPolitica.addEventListener("click", (e) => {
            if (e.target === modalPolitica) {
                modalPolitica.classList.add("oculto");
            }
        });
    }

    /* =========================================
       FORMULARIO
    ========================================= */
    const formulario =
        document.getElementById("formulario-contacto");

    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const campos = [
            { id: "nombre", nombre: "Nombre" },
            { id: "email", nombre: "Email" },
            { id: "empresa", nombre: "Empresa" },
            { id: "mensaje", nombre: "Mensaje" }
        ];

        const faltantes = [];

        campos.forEach(campo => {
            const input = document.getElementById(campo.id);

            input.classList.remove("campo-error");

            if (!input.value.trim()) {
                input.classList.add("campo-error");
                faltantes.push(campo.nombre);
            }
        });

        const aceptaPolitica =
            document.getElementById("acepta-politica");

        if (aceptaPolitica && !aceptaPolitica.checked) {
            faltantes.push("Política de Privacidad");
        }

        const error =
            document.getElementById("contacto-error");

        if (faltantes.length > 0) {
            error.textContent =
                `Falta completar o aceptar: ${faltantes.join(", ")}.`;

            error.classList.remove("oculto");
            return;
        }

        error.classList.add("oculto");

        const nombre =
            document.getElementById("nombre").value.trim();

        const emailValor =
            document.getElementById("email").value.trim();

        const empresa =
            document.getElementById("empresa").value.trim();

        const mensaje =
            document.getElementById("mensaje").value.trim();

        const texto =
`Hola, te contacto desde la página web.

Nombre: ${nombre}
Email: ${emailValor}
Empresa: ${empresa}

Mensaje:
${mensaje}`;

        window.open(
            `https://wa.me/${contacto.whatsappNumero}?text=${encodeURIComponent(texto)}`,
            "_blank"
        );
    });

    document.querySelectorAll("#formulario-contacto input, #formulario-contacto textarea")
        .forEach(campo => {
            campo.addEventListener("input", () => {
                campo.classList.remove("campo-error");

                const error =
                    document.getElementById("contacto-error");

                if (error) {
                    error.classList.add("oculto");
                }
            });
        });
}