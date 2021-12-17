import { typesOfDB } from "./typesOfDB"
import { getJournalAfterCalculatedAverage } from "./getJournalAfterCalculatedAverage"

export const addGrade = (event, studentJournal) => {
    event.preventDefault()
    const user = JSON.parse(sessionStorage.getItem('login'))
    const subjectTaughtByTeacher = user.teacherType.split(' ')[1];

    const dataFromAddingGradeForm = {
        grade: document.getElementById('adding-box__grades').value,
        studentID: Number(document.getElementById('adding-box__student-name').value)
    }

    const selectedStudent = studentJournal.find(student => student.id === dataFromAddingGradeForm.studentID)
    selectedStudent.subjects[subjectTaughtByTeacher].oceny.push(parseInt(dataFromAddingGradeForm.grade))
    const newStudentJournal = getJournalAfterCalculatedAverage(studentJournal, selectedStudent, subjectTaughtByTeacher, dataFromAddingGradeForm)

    localStorage.setItem(typesOfDB.studentJournal, JSON.stringify(newStudentJournal));

    var event = document.createEvent("Event");
    event.initEvent("storage", true, true);
    window.dispatchEvent(event);
}