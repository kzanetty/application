import { ContainerComponent, FormularioComponent, NavlistComponent } from "../../components";
import './contato.screen.css'

export function ContatoScreen() {
    return (
        <div className="formulario-contatoscreen">
            <ContainerComponent boleano={true}>
                <div className="conteudo-formulario-contatoscreen">
                    <div >
                    </div>
                    <div className="form-contato-screen">
                        <FormularioComponent />
                    </div>
                </div>
            </ContainerComponent>
        </div>
    )
}