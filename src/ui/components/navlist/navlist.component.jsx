import "./navlist.component.css"
import { NavLink } from 'react-router-dom';
import { ContainerComponent } from "../container/container.component";
import { LogoComponent } from "../logo/logo.component";
import path from "../../../consts/paths";

export function NavlistComponent() {
    return (
        <nav className="navlist">
            <ContainerComponent>
                <div className="conteudo-navlist">
                    <NavLink to={path.HOME} >
                        <LogoComponent width={"400px"} />
                    </NavLink>
                    <ul className="lista-navlist">
                        <li>
                            <NavLink exact to={path.HOME} className="item-navlist" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={path.SERVICO} className="item-navlist" activeClassName="active">Serviços</NavLink>
                        </li>
                        <li>
                            <NavLink to={path.CONTATO} className="item-navlist" activeClassName="active">Contatos</NavLink>
                        </li>
                    </ul>
                </div>
            </ContainerComponent>
        </nav>
    )
}