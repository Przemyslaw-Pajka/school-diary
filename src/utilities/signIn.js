import verifyDataToLogIn from './verifyDataToLogIn'
import { useHistory } from 'react-router-dom';
const signIn = (event,routeChange) => {
    event.preventDefault();

    let user = verifyDataToLogIn();
    user = user.length == 0? false : user;

    user? routeChange(user) : console.log("BŁĘDNE DANE LOGOWANIA")
}

export default signIn;
