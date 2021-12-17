export const calculateNewGradeAverage = (sum, selectedStudent, subject) => (sum / selectedStudent.subjects[subject].oceny.length).toFixed(1)
