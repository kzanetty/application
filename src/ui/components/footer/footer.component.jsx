import { ContainerComponent, LogoComponent } from '../../components'
import './footer.component.css'
import iconWhatsapp from '../../../assets/imagens/icon-whatsapp.png'
import iconFacebook from '../../../assets/imagens/icon-facebook.png'
import iconInstagram from '../../../assets/imagens/icon-instagram.png'
import iconDireitoAutoral from '../../../assets/imagens/icon-direito-autoral.png'
import redes from '../../../consts/redes'

export function FooterComponent() {

    const linkWhatsappWeb = redes.WHATSAPP;
    const linkPerfilInstagram = redes.INSTAGRAM;
    const linkPerfilFacebook = redes.FACEBOOK;

    return (
        <footer className='footer'>
            <ContainerComponent>
                <div className='conteudo-footer'>
                    <div className='contatos-footer'>
                        <div>
                            <LogoComponent width={"400px"} />
                            <p className='endereco-footer'>Av. endereço aqui, 000 - bairro <br /> Canoas - RS, 00000-000</p>
                        </div>
                        <div className='informacoes-de-contato-footer'>
                            <p>Fale Conosco</p>
                            <div className='opcoes-de-contato-footer'>
                                <p>Telefone fixo: (51)0000-0000</p>
                                <p>WhatsApp/celular: (51)00000-0000</p>
                                <p>Email: contato@dominioaqui.com.br</p>
                            </div>
                        </div>
                        <div className='redes-sociais-footer'>
                            <p>Redes sociais</p>
                            <div className='icons-redes-sociais-footer'>
                                <a href={linkWhatsappWeb} target="_blank" rel="noopener noreferrer">
                                    <img src={iconWhatsapp} className="icon-rs-footer" alt="icone whatsapp" />
                                </a>
                                <a href={linkPerfilFacebook} target="_blank" rel="noopener noreferrer">
                                    <img src={iconFacebook} className="icon-rs-footer" alt="icone facebook" />
                                </a>
                                <a href={linkPerfilInstagram} target="_blank" rel="noopener noreferrer">
                                    <img src={iconInstagram} className="icon-rs-footer" alt="icone instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="politica-cnpj-footer">
                        <p>Nome Empresa Aqui LTDA -  Todos os direitos reservados 2023 <img src={iconDireitoAutoral} className='icon-direito-autoral-footer' alt="icon direito autoral" /></p>
                        <p>CNPJ: 00.000.000.0001/00 </p>
                    </div>
                </div>
            </ContainerComponent>
        </footer>
    )
}
