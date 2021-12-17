const users = JSON.parse(localStorage.getItem('users'));
const verifyRepeatabilityID = id => {
    const isUsersExist = Boolean(users);

    if (isUsersExist === false) {
        return false;
    }

    return users.some(user => user.id === id ? true : false)
}

const generateNumber = length => Math.floor(Math.pow(10, length - 1) + Math.random() * 9 * Math.pow(10, length - 1));

export const getRandomNumber = length => {
    const randomNumber = generateNumber(length)
    const isRepeating = verifyRepeatabilityID(randomNumber)

    return (isRepeating ? getRandomNumber(length) : randomNumber);
}