export const saveNewUserToDB = (newUser, typeOfDB) => {
    const users = localStorage.getItem(typeOfDB) ? JSON.parse(localStorage.getItem(typeOfDB)) : [];

    users.push(newUser)

    localStorage.setItem(typeOfDB, JSON.stringify(users))
}
