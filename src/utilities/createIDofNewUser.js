import { getRandomNumber } from './getRandomNumber'

export const createIDofNewUser = (newUser) => {
    const numberOfDigitsInID = 6;

    newUser.id = getRandomNumber(numberOfDigitsInID)

    alert(`Pilnie zapisz na kartce to ID, bedzie Ci potrzebne do logowania ${newUser.id}`)

    return newUser;
}

