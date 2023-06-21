// import { useNavigate } from "react-router-dom"
import path from "../../../consts/paths";

export function ErrorScreen() {
    // const navigate = useNavigate();

    // const returnToHome = () => {
    //     return navigate(path.HOME)
    // }

    return (
        <div>
            <p>Error 404! Pagina não encontrada</p>
            {/* <button onClick={returnToHome}>Retornar para home</button> */}
        </div>
    )
}

