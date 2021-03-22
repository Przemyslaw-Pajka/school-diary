const verifyDataToLogIn = () => {
    const users = JSON.parse(localStorage.getItem('users'));
   
    if(users===null)
    return false;
    
    const userDataEnteredByUser = {
        id: document.getElementById('user-id').value,
        password: document.getElementById('user-password').value
    }
    return users.some(user => {
        return ((user.id == userDataEnteredByUser.id && user.password == userDataEnteredByUser.password) ? true :  false)
    })
}

export default verifyDataToLogIn;
