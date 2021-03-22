const saveNewUserToDB = (newUser) => {
    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [] ;
    users.push(newUser)

    localStorage.setItem('users',JSON.stringify(users))
}

export default saveNewUserToDB;
