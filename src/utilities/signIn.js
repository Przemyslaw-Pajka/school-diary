import verifyDataToLogIn from './verifyDataToLogIn'
const signIn = (event) => {
    event.preventDefault();
 
    const isSomeone = verifyDataToLogIn()
  isSomeone? console.log("ZALOGOWANO") : console.log("BŁĘDNE DANE LOGOWANIA")
}

export default signIn;
