import { calculateNewGradeAverage } from "./calculateNewGradeAverage"

export const getJournalAfterCalculatedAverage = (studentJournal, selectedStudent, subject, dataFromAddingGradeForm) => {
    return studentJournal.map(student => {
        if (student.id === dataFromAddingGradeForm.studentID) {
            const sum = selectedStudent.subjects[subject].oceny.reduce((accumulator, current) => {
                return accumulator + current
            })
            selectedStudent.subjects[subject].srednia = calculateNewGradeAverage(sum, selectedStudent, subject)
            student = selectedStudent
        }
        return student;
    })
}