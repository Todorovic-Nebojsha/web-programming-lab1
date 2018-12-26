export const getStudyPrograms=()=>{
    return fetch('http://localhost:8080/study_programs').then(response=>response.json());
};