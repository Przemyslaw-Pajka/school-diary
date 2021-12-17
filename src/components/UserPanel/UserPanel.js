import { logOut } from "../../utilities/logOut"
import { useHistory } from "react-router";
import { UserPanelStyled, UserName, LogoutBtn } from "./styles/UserPanelStyled";

export const UserPanel = () => {
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem('login'))

    return (
        <UserPanelStyled>
            Cześć <UserName>{user.name} {user.surname}</UserName>
            <LogoutBtn onClick={() => logOut(history)}>Wyloguj</LogoutBtn>
        </UserPanelStyled>
    )
}