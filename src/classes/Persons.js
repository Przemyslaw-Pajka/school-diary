import { createIDofNewUser } from "../utilities/createIDofNewUser"
import { getStudentWithSubjects } from "../utilities/getStudentWithSubjects"
import { saveNewUserToDB } from "../utilities/saveNewUserToDB"
import { typesOfDB } from "../utilities/typesOfDB"

export class User {
    constructor(values) {

        this.newUser = createIDofNewUser(values)
        saveNewUserToDB(this.newUser, typesOfDB.users)
        return this.newUser
    }
}
export class Student {
    constructor(values) {
        this.newUser = new User(values)

        this.newStudent = getStudentWithSubjects(this.newUser)


        saveNewUserToDB(this.newStudent, typesOfDB.studentJournal)
    }
}
export class Teacher extends User {
    constructor(values) {
        new User(values)
    }
}