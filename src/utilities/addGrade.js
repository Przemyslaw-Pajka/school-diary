const addGrade = (event,studentJournal,subject) =>{
    event.preventDefault()
    const newGrade = {
        grade: document.getElementById('adding-box__grades').value,
        studentID: document.getElementById('adding-box__student-name').value
    }
    const wanted = studentJournal.filter((student)=>{
        return student.id == newGrade.studentID;
    })
   
    wanted[0].subjects[subject].oceny.push(parseInt(newGrade.grade))
    const newStudentJournal = studentJournal.map((student,index)=>{
        if(student.id == newGrade.studentID)
        student = wanted[0]

        return student;
    })
    
    localStorage.setItem('studentJournal',JSON.stringify(newStudentJournal));
    var event = document.createEvent("Event");
    event.initEvent("storage", true, true);
    window.dispatchEvent(event);
}

export default addGrade;
