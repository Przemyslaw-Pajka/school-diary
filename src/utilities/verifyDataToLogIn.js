import { typesOfDB } from './typesOfDB'
import { getUserIfCorrectDataLogin } from './getUserIfCorrectDataLogin';

export const verifyDataToLogIn = (dataForm) => {
    const users = JSON.parse(localStorage.getItem(typesOfDB.users));
    const isUsersExist = users === null;

    if (!isUsersExist === false) {
        return false;
    }

    return getUserIfCorrectDataLogin(users, dataForm)
}

