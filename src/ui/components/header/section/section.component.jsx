import { ContainerComponent } from "../../"
import "./section.component.css"
import imageMapa from '../../../../assets/imagens/mapa-atendimento.png';

export function SectionHomeComponent() {
    return (
        <>
            <section className="section-home">
                <ContainerComponent>
                    <div className="locais-atendimento-homescreen">
                        <div className="cidades-atendimento-homescreen">
                            <div className="titulo-cidades-atendimentos-homescreen">
                                <p>
                                    Realizamos atendimentos nas seguintes cidades do Rio Grande do Sul
                                </p>
                            </div>
                            <div className="opcoes-cidades-atendimentos-homescreen">
                                <p>Porto Alegre</p>
                                <p>Canoas</p>
                                <p>Esteio</p>
                                <p>Sapucaia</p>
                                <p>Sao Leopoldo</p>
                                <p>Novo Hamburgo</p>
                                <p>Cachoeirinha</p>
                            </div>
                            <div className="informacoes-cidades-atendimentos-homescreen">
                                <p>
                                    Para outras localidades, entre em contato conosco para verificar a disponibilidade.
                                </p>
                            </div>

                        </div>
                        <div className="container-imagem-mapa-homescreen">
                            <img src={imageMapa} alt="" />
                        </div>
                    </div>

                </ContainerComponent>
            </section>
        </>
    )
}