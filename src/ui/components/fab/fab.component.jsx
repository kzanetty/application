import "./fab.component.css"
import redes from "../../../consts/redes";

export function FabComponent() {
    function irParaWhatsappWeb() {
        window.open(redes.WHATSAPP);
    }

    return (
        <button className="floating-button" onClick={irParaWhatsappWeb}>
        </button>
    )
}