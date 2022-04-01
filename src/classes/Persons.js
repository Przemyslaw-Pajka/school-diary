import { schoolSubjects } from '../config/schoolSubjects';
import { typesOfDB } from '../config/typesOfDB';
export class User {
    numberOfDigitsInID = 6;

    constructor(values) {
        return {
            ...values,
            id: parseInt(Date.now() * Math.random())
        }
    }
    getUser() {
        return this.user
    }
    static signIn(user, history) {
        sessionStorage.setItem('login', JSON.stringify(user));
        const role = user.role.toLowerCase();
        const path = `/${role}`

        history.push(path);
    }
    static logOut(history) {
        sessionStorage.setItem('login', null)
        history.goBack()
    }
    static saveUserToDB(newUser, typeOfDB) {
        const users = localStorage.getItem(typeOfDB) ? JSON.parse(localStorage.getItem(typeOfDB)) : [];
        console.log("SAVE USER TO DB")
        users.push(newUser)
        localStorage.setItem(typeOfDB, JSON.stringify(users))
    }
}
export class Student {
    allSubjects = schoolSubjects.reduce((prev, current) => {
        return {
            ...prev,
            [current]: { oceny: [], srednia: null }
        }
    }, {})

    constructor(values) {
        this.newUser = new User(values)
        this.newStudent = {
            ...this.newUser,
            subjects: { ...this.allSubjects }
        }

        User.saveUserToDB(this.newStudent, typesOfDB.studentJournal);

        return {
            ...this.newUser
        }
    }
}
export class Teacher {
    constructor(values) {
        return {
            ...new User(values)
        }
    }
}