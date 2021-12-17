import { useHistory } from "react-router-dom";
import { ButtonBackHomeStyled } from "./styles/ButtonBackHomeStyled";

export const ButtonBackHome = () => {
    let history = useHistory();

    const backHome = () => history.goBack()

    return (
        <ButtonBackHomeStyled onClick={backHome}>
            Powróć do strony głównej
        </ButtonBackHomeStyled>
    )
}