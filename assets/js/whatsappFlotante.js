function inicializarWhatsappFlotante() {
    const config = CONFIG.whatsappFlotante;

    if (!config) return;

    const boton = document.getElementById("whatsapp-flotante-boton");

    if (!boton) return;

    if (!config.visible) {
        boton.classList.add("whatsapp-flotante-oculto");
        return;
    }

    boton.href = `https://wa.me/${config.numero}`;

    if (config.mensajeInicial) {
        boton.href += `?text=${encodeURIComponent(config.mensajeInicial)}`;
    }
}