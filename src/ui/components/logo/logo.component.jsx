import logo from '../../../assets/imagens/LOGO-JR-ASSISTENCIA-SEM-FUNDO.webp'
import "./logo.component.css"
export function LogoComponent({ width }) {
    const tamanhoLogo = {
        maxWidth: width,
    };

    return (
        <div className='logo-componente'>
            <img src={logo} style={tamanhoLogo} alt="Logo da empresa" />
        </div>
    );
}