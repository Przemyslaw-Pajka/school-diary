import styled from "styled-components"

export const TableGradesStyled = styled.table`

`
export const SubjectName = styled.td`
    padding: 0.6rem 1rem;
  text-align: center;
`
export const SubjectAverage = styled.td`
 border-right: none;
`
export const SubjectGrades = styled.td`
  min-width: 400px;
`
export const SubjectGradesSquareStyled = styled.span`
    display: inline-flex;
    margin: 5px;
    width: 25px;
    height: 25px;
    align-items: center;
    justify-content: center;
    &[data-grade="1"] {
      background-color: #ff0000;
    }
    &[data-grade="2"] {
      background-color: #ffa500;
    }
    &[data-grade="3"] {
      background-color: #ffff00;
    }
    &[data-grade="4"] {
      background-color: #adff2f;
    }
    &[data-grade="5"],
    &[data-grade="6"] {
      background-color: #008000;
    }
`