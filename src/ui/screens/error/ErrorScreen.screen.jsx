import path from "../../../consts/paths";
import iconSeta from '../../../assets/imagens/arrow-saiba-mais.svg'
import { Link } from 'react-router-dom';
import './ErrorScreen.screen.css'
export function ErrorScreen() {

    return (
        <div className="pagina-error">
            <p>Error 404</p>
            <p>Pagina não encontrada</p>
            <Link to={path.HOME} className="link-retornar-home">
                <p>VOLTAR PARA HOME</p>
                <img src={iconSeta} alt="seta" />
            </Link>
        </div>
    )
}

