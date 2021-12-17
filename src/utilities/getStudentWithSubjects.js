import { schoolSubjects } from '../schoolSubjects'

export const getStudentWithSubjects = (student) => {

    const allSubjects = schoolSubjects.reduce((prev, current) => {
        return Object.assign(prev, { [current]: { oceny: [], srednia: null } })
    }, {})

    const newStudent = {
        ...student,
        subjects: { ...allSubjects }
    }

    return newStudent;
}