import getRandomNumber from './getRandomNumber'
import saveNewUserToDB from './saveNewUserToDB'
const createNewUser = (event) => {
    event.preventDefault();

    const newUser = {
        name: document.getElementById('user-name').value,
        surname: document.getElementById('user-surname').value,
        id: getRandomNumber(7),
        password: document.getElementById('user-password').value,
        accountType: document.getElementById('user-account-type').value
    }

    // wykonac lepszy alert ( może jakis modal ? animacja)
    alert(`Pilnie zapisz na kartce to ID, bedzie Ci potrzebne do logowania ${newUser.id}`)

    saveNewUserToDB(newUser)
}

export default createNewUser;   