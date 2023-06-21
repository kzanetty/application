import "./fab.component.css"

export function FabComponent() {
    function irParaWhatsappWeb() {
        console.log("implementar logica aqui - enviar para whatsapp web")
    }
    return (
        <button className="floating-button" onClick={irParaWhatsappWeb}>
        </button>
    )
}