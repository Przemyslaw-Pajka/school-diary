import { useHistory } from "react-router";
import { User } from '../../classes/Persons';
import { LogoutBtn, UserName, UserPanelStyled } from "./styles/UserPanelStyled";

export const UserPanel = () => {
    const history = useHistory();
    const user = JSON.parse(sessionStorage.getItem('login'))

    return (
        <UserPanelStyled>
            Cześć <UserName>{user.name} {user.surname}</UserName>
            <LogoutBtn onClick={() => User.logOut(history)}>Wyloguj</LogoutBtn>
        </UserPanelStyled>
    )
}