import './banner.component.css'
import { ContainerComponent } from '../../'
import iconSeta from '../../../../assets/imagens/arrow-saiba-mais.svg'
import path from '../../../../consts/paths'
import { useHistory } from 'react-router-dom';


const pathServico = "/servico#/servico"
export function BannerHomeComponent() {
    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/servico');
    };

    return (
        <section className="banner">
            <ContainerComponent>
                <div className='conteudo-banner'>
                    <div>
                        <div>
                            <h1>JR Assistencia Tecnica</h1>
                        </div>
                        <p>Somos uma empresa experiente, comprometida em oferecer produtos e serviços de alta qualidade e confiabilidade.<br /><br /> Temos um longo histórico de excelência, garantindo que atendemos às necessidades e expectativas dos nossos clientes. Nosso objetivo é fornecer soluções de ponta, combinando nossa experiência com o mais alto padrão de qualidade, para garantir a satisfação e confiança de todos os nossos clientes.</p>
                        <button className="button-saiba-mais" onClick={handleButtonClick}>
                            <p>SAIBA MAIS</p>
                            <img src={iconSeta} alt="seta" />
                        </button>
                    </div>
                </div>
            </ContainerComponent>
        </section>
    )
}