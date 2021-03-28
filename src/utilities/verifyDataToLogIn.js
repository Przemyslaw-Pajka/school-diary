const verifyDataToLogIn = () => {
    const users = JSON.parse(localStorage.getItem('users'));
   
    if(users===null)
    return false;
    
    const userDataEnteredByUser = {
        id: document.getElementById('user-id').value,
        password: document.getElementById('user-password').value
    
    }
    const user = users.filter(user => {
        if (user.id == userDataEnteredByUser.id && user.password == userDataEnteredByUser.password) {
            return user
        }
    })
    return user[0]
}

export default verifyDataToLogIn;
