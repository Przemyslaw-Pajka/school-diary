import React from 'react';

const SubjectGradesSquare = (props) => {
    return(
        <>
            {props.subject.oceny.map((ocena,index) => {
                if(ocena==1){
                    return (<span className="subject-grades__square red-grade" key={index}>{ocena}</span>)
                }
                else if(ocena==2){
                    return (<span className="subject-grades__square orange-grade" key={index}>{ocena}</span>)
                }
                else if(ocena==3){
                    return (<span className="subject-grades__square yellow-grade" key={index}>{ocena}</span>)
                }
                else if(ocena==4){
                    return (<span className="subject-grades__square lightgreen-grade" key={index}>{ocena}</span>)
                }
                else if(ocena>4){
                    return (<span className="subject-grades__square green-grade" key={index}>{ocena}</span>)
                }
            })}
        </>
    )
}

export default SubjectGradesSquare;
