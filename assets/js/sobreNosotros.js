function inicializarSobreNosotros() {
    const sobre = CONFIG.sobreNosotros;

    if (!sobre) return;

    /* =========================================
       FRANJA DE CONFIANZA
    ========================================= */
    const confianzaContenedor = document.getElementById("confianza-contenedor");

    confianzaContenedor.innerHTML = "";

    sobre.franja.forEach(item => {
        confianzaContenedor.innerHTML += `
            <div class="confianza-item">
                <span class="material-symbols-outlined">${item.icono}</span>
                <strong>${item.texto}</strong>
            </div>
        `;
    });

    /* =========================================
       SOBRE NOSOTROS
    ========================================= */
    document.getElementById("sobre-titulo").textContent = sobre.titulo;
    document.getElementById("sobre-descripcion").textContent = sobre.descripcion;
    document.getElementById("sobre-descripcion-secundaria").textContent = sobre.descripcionSecundaria;

    const imagen = document.getElementById("sobre-imagen");
    imagen.src = sobre.imagen.src;
    imagen.alt = sobre.imagen.alt;

    const valoresContenedor = document.getElementById("sobre-valores");

    valoresContenedor.innerHTML = "";

    sobre.valores.forEach(valor => {
        valoresContenedor.innerHTML += `
            <div class="sobre-valor">
                <div class="sobre-valor-icono">
                    <span class="material-symbols-outlined">${valor.icono}</span>
                </div>

                <span>${valor.texto}</span>
            </div>
        `;
    });

    /* =========================================
       CTA FINAL
    ========================================= */
    document.getElementById("sobre-cta-titulo").textContent = sobre.cta.titulo;
    document.getElementById("sobre-cta-texto").textContent = sobre.cta.texto;

    const botonWhatsapp = document.getElementById("sobre-cta-whatsapp");
    botonWhatsapp.href = `https://wa.me/${sobre.cta.whatsappNumero}`;
    botonWhatsapp.innerHTML = `
        <span class="material-symbols-outlined">chat</span>
        ${sobre.cta.whatsappTexto}
    `;

    const botonEmail = document.getElementById("sobre-cta-email");
    botonEmail.href = `mailto:${sobre.cta.email}?subject=Consulta%20desde%20la%20p%C3%A1gina%20web`;
    botonEmail.innerHTML = `
        <span class="material-symbols-outlined">mail</span>
        ${sobre.cta.emailTexto}
    `;
}