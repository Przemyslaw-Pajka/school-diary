const users = JSON.parse(localStorage.getItem('users'));
const verifyRepeatabilityID = id => {
    //if users are not exist
    if(users===null)
    return false;

    return users.some(user => {
        return (user.id===id? true: false) 
    })
}

const generateNumber = length => {
    return Math.floor(Math.pow(10, length-1) + Math.random() * 9 * Math.pow(10, length-1));
}

const getRandomNumber = length => {
  const randomNumber = generateNumber(length)
  const isRepeating = verifyRepeatabilityID(randomNumber)

  return (isRepeating? getRandomNumber(length) : randomNumber);
}

export default getRandomNumber;