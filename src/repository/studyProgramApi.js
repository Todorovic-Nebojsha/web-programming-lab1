export const getStudyPrograms=()=>{
    return fetch('http://localhost:8080/study_programs').then(response=>response.json());
};
export const deleteStudyProgramApi=(index)=>{
    return fetch(`http://localhost:8080/study_programs/${index}`, { method: 'DELETE' });
};
export const createNewStudyProgramApi=(s)=>{
    return fetch('http://localhost:8080/study_programs/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            studyProgram:s.name
        })
    });
};