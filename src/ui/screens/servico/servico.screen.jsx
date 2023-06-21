import { ContainerComponent, NavlistComponent } from "../../components";
import './servico.screen.css'

export function ServicoScreen() {
    return (
        <div className="servico-screen">
            <ContainerComponent boleano={true}>
                <div className="conteudo-servicoscreen">
                    <div>

                    </div>
                    <div className="lado-direito-servicoscreen">
                        <div className="opcao-servico">
                            <h2>
                                Conserto de Lavadoras, secadoras e maquinas lava e seca
                            </h2>
                            <p>
                                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.


                            </p>
                        </div>
                        <div className="opcao-servico">
                            <h2>
                                Conserto de Lavadoras, secadoras e maquinas lava e seca
                            </h2>
                            <p>
                                Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.


                            </p>
                        </div>

                    </div>

                </div>
            </ContainerComponent>
        </div>
    )
}

