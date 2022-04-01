import { useState } from "react"
import { typesOfDB } from "../config/typesOfDB"

const calculateNewGradeAverage = (sum, selectedStudent, subject) => (sum / selectedStudent.subjects[subject].oceny.length).toFixed(1)

const getJournalAfterCalculatedAverage = (studentJournal, selectedStudent, subject, dataFromAddingGradeForm) => {
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

const addGrade = (event, studentJournal) => {
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
}

export const useAddGrade = (element) => {
    const [studentJournal, setStudentJournal] = useState(JSON.parse(localStorage.getItem(typesOfDB.studentJournal)));

    element.current.addEventListener('click', (event) => {
        addGrade(event, studentJournal);
        event.target[0].selectedIndex = 0
    })
}