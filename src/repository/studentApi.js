export const getAllStudents=()=>{
    return fetch('http://localhost:8080/students').then(response=>response.json());
};
export const deleteStudent=(index)=>{
    return fetch(`http://localhost:8080/students/${index}`, { method: 'DELETE' });
};
export const getStudentByIndex=(index)=>{
    return fetch(`http://localhost:8080/students/${index}`, { method: 'GET' })
};
export const updateStudentApi=(s)=>{
    let i=s.index;
    let nasoka=s.nasoka;
    if(nasoka==null)
        nasoka=s.studyProgram.name;
  return fetch('http://localhost:8080/students/'+i,{
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          lastName:s.lastName,
          name:s.name,
          index:s.index,
          studyProgramName:nasoka
      })
  });
};
export const createNewStudentApi=(s)=>{
    return fetch('http://localhost:8080/students/',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            lastName:s.lastName,
            name:s.name,
            index:s.index,
            studyProgramName:s.nasoka
        })
    });
};