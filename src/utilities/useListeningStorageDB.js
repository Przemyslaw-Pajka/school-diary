import { useEffect } from "react";
import { typesOfDB } from "./typesOfDB";

export const useListeningStorageDB = (setStudentJournal) => {
    useEffect(() => {
        window.addEventListener('storage', () => {
            setStudentJournal(JSON.parse(localStorage.getItem(typesOfDB.studentJournal)) || [])
        });
    }, [])
}