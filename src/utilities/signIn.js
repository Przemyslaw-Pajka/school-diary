import verifyDataToLogIn from './verifyDataToLogIn'
const signIn = (event,routeChange) => {
    event.preventDefault();

    let user = verifyDataToLogIn();
    user = user.length == 0? false : user;
    
    const {name,surname,accountType,id} = user;

    user? (()=>{ sessionStorage.setItem('login',JSON.stringify({name,surname,accountType,id}));routeChange(user)})() : console.log("BŁĘDNE DANE LOGOWANIA")
}

export default signIn;
