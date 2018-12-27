import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentsList from "./components/StudentsList";
import StudentItem from "./components/StudentItem";
import CreateNewStudent from"./components/CreateNewStudent"
import {listStudents}  from "./repository/studentRepository";
import EditStudentDetails from "./components/EditStudentDetails";
import "./style.css";
import {getAllStudents,deleteStudent,getStudentByIndex,updateStudentApi,createNewStudentApi} from "./repository/studentApi"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {getStudyPrograms,deleteStudyProgramApi,createNewStudyProgramApi}  from "./repository/studyProgramApi"
import StudyProgramList from "./components/StudyProgramList";
import CreateNewStudyProgram from "./components/CreateNewStudyProgram";


class App extends Component {
  constructor(props){
    super(props);
    let Students=listStudents();
    //console.log(Students.length)
    this.state={students:[],studentSelected:null,createNew:null,
        studyPrograms:[],showStudentList:false,showStudyPrograms:false,
        createNewStudyProgram:null
    };
  }

  componentDidMount(){
      this.loadStudents();
      this.loadStudyPrograms();
  }
  loadStudents=()=>{
      getAllStudents()
          .then((data)=>{
          //console.log('data: ',data);
              this.setState({students:data})
          });
  };

  loadStudyPrograms=()=>{
      getStudyPrograms().then(data=>this.setState({studyPrograms:data}));
  };

    deleteStudyProgram=(e)=>{
        deleteStudyProgramApi(e.id).then(response=> {
            this.loadStudyPrograms();
            if (!response.ok)
                alert("study program has students and cannot be deleted!")

        })
    };

  studentClicked=(e)=>{
      this.loadStudyPrograms();
      console.log("APP JS"+e.name);
      getStudentByIndex(e.index).then(response=>response.json()).then(data=>
          this.setState((prevState, props) => ({
              studentSelected:data
          }))
      );


  };


    updateStudent=(updatedStudent)=>{
        updateStudentApi(updatedStudent).then(response=>
            this.loadStudents(),
            this.setState({studentSelected:null})
            );
        // this.setState((state,props) => {
        //     let studentList=[...state.students];
        //     let studentIndeks = studentList
        //         .findIndex((obj)=>
        //             obj.name==state.studentSelected.name&&
        //             obj.surename==state.studentSelected.surename&&
        //             obj.indeks==state.studentSelected.indeks&&
        //             obj.nasoka==state.studentSelected.nasoka
        //     );
        //     console.log(studentIndeks);
        //     studentList[studentIndeks]=updatedStudent;
        //     return {
        //         students: studentList,
        //         studentSelected: null
        //     }
        // });


    };

    deleteStudent=(e)=>{
        deleteStudent(e.index).then(response=> this.loadStudents());
        //console.log(e);
        // this.setState((oldState,props)=>{
        //     let studentList=[...oldState.students];
        //     console.log(studentList);
        //     let studentIndeks = studentList
        //         .findIndex((obj)=>
        //             obj.name===e.name&&
        //             obj.surename===e.surename&&
        //             obj.indeks===e.indeks&&
        //             obj.nasoka===e.nasoka
        //         );
        //     studentList.splice(studentIndeks,1);
        //     return{
        //         students:studentList
        //     }
        // });


    };

    cancelUpdate=(e)=>{
        this.setState((state,props)=>{
           return{
               studentSelected:null
           }
        });
    };
    addNewStudent=(e)=>{
        createNewStudentApi(e).then(response=> {
            this.loadStudents();
                this.setState({createNew: null});
            if (!response.ok)
                alert("student already exists or you have entered invalid parametars")
        });
      // this.setState((oldState,props)=>{
      //     return{
      //         students:[e,...oldState.students],
      //         createNew:null
      //     }
      // })
    };
    addNewStudyProgram=(e)=>{
        createNewStudyProgramApi(e).then(response=>this.loadStudyPrograms(),this.setState({createNewStudyProgram:null}));
    };
    cancelAddNew=(e)=>
    {
        this.setState((state,props)=>{
            return{
                createNew:null
            }
        });
    };
    cancelAddNewStudyProgram=(e)=>{
        this.setState((state,props)=>{
            return{
                createNewStudyProgram:null
            }
        });
    };
    openCreateNew=(e)=>{
        this.loadStudyPrograms();
        console.log("openCreateNew");
        this.setState((state,props)=>{
            return{
                createNew:true
            }
        });
    };
    openCreateNewStudyProgram=(e)=>{
        console.log("openCreateNew");
        this.setState((state,props)=>{
            return{
                createNewStudyProgram:true
            }
        });
    };
    toggleStudentList=()=>{
      this.setState((state,props)=>{
          return {showStudentList:!state.showStudentList}
      });
    };
    toggleStudyPrograms=()=>
    {
        this.setState((state,props)=>{
            return {showStudyPrograms:!state.showStudyPrograms}
        });
    };
  render() {
    return (

        <div>
            <button onClick={()=>this.toggleStudentList()}>Show/Hide Student List</button> <br/>
            <button onClick={()=>this.toggleStudyPrograms()}>Show/Hide Study Program List</button>

            {/*student Options*/}
        {this.state.showStudentList &&
        <div className="leftMargin">
        <StudentsList students={this.state.students}
                      deleteStudent={this.deleteStudent}
                      studentClicked={this.studentClicked}/>
            {this.state.studentSelected !=null &&
            <EditStudentDetails  updateStudent={this.updateStudent}
                                 cancelUpdate={this.cancelUpdate}
                                 student={this.state.studentSelected}
                                 studyPrograms={this.state.studyPrograms}
            /> }
           <button onClick={()=>this.openCreateNew()}> Create new Student</button>
            {this.state.createNew &&
            <CreateNewStudent
                addNewStudent={this.addNewStudent}
                cancelAddNew={this.cancelAddNew}
                studyPrograms={this.state.studyPrograms}
            />
            }
        </div>
        }
        {/*study program options*/}


            {this.state.showStudyPrograms &&
                <div className="leftMargin">
                    <StudyProgramList studyPrograms={this.state.studyPrograms}
                                      deleteStudyProgram={this.deleteStudyProgram}
                    />
                    <button onClick={()=>this.openCreateNewStudyProgram()}> Create new Study Program</button>
                    {this.state.createNewStudyProgram &&
                    <CreateNewStudyProgram
                        addNewStudyProgram={this.addNewStudyProgram}
                        cancelAddNew={this.cancelAddNewStudyProgram}

                    />
                    }
                </div>

            }
        </div>
    );
  }
}

export default App;
