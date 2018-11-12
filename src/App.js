import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StudentsList from "./components/StudentsList";
import StudentItem from "./components/StudentItem";
import CreateNewStudent from"./components/CreateNewStudent"
import {listStudents}  from "./repository/studentRepository";
import EditStudentDetails from "./components/EditStudentDetails";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    let Students=listStudents();
    //console.log(Students.length)
    this.state={students:Students,studentSelected:null,createNew:null};
  }


  studentClicked=(e)=>{
      console.log("APP JS"+e.name);
      this.setState((prevState, props) => ({
          studentSelected:e
      }));

        };


    updateStudent=(updatedStudent)=>{

        this.setState((state,props) => {
            let studentList=[...state.students];
            let studentIndeks = studentList
                .findIndex((obj)=>
                    obj.name==state.studentSelected.name&&
                    obj.surename==state.studentSelected.surename&&
                    obj.indeks==state.studentSelected.indeks&&
                    obj.nasoka==state.studentSelected.nasoka
            );
            console.log(studentIndeks);
            studentList[studentIndeks]=updatedStudent;
            return {
                students: studentList,
                studentSelected: null
            }
        });
    };

    deleteStudent=(e)=>{
        //console.log(e);
        this.setState((oldState,props)=>{
            let studentList=[...oldState.students];
            console.log(studentList);
            let studentIndeks = studentList
                .findIndex((obj)=>
                    obj.name===e.name&&
                    obj.surename===e.surename&&
                    obj.indeks===e.indeks&&
                    obj.nasoka===e.nasoka
                );
            studentList.splice(studentIndeks,1);
            return{
                students:studentList
            }
        });
    };
    cancelUpdate=(e)=>{
        this.setState((state,props)=>{
           return{
               studentSelected:null
           }
        });
    };
    addNewStudent=(e)=>{
      this.setState((oldState,props)=>{
          return{
              students:[e,...oldState.students],
              createNew:null
          }
      })
    };
    cancelAddNew=(e)=>
    {
        this.setState((state,props)=>{
            return{
                createNew:null
            }
        });
    };

    openCreateNew=(e)=>{
        console.log("openCreateNew");
        this.setState((state,props)=>{
            return{
                createNew:true
            }
        });
    };
  render() {
    return (
        <div className="leftMargin">
        <StudentsList students={this.state.students}
                      deleteStudent={this.deleteStudent}
                      studentClicked={this.studentClicked}/>
            {this.state.studentSelected !=null &&
            <EditStudentDetails  updateStudent={this.updateStudent}
                                 cancelUpdate={this.cancelUpdate}
                                 student={this.state.studentSelected}/> }
           <button onClick={()=>this.openCreateNew()}> Create new Student</button>
            {this.state.createNew &&
            <CreateNewStudent
                addNewStudent={this.addNewStudent}
                cancelAddNew={this.cancelAddNew}/>
            }



        </div>
    );
  }
}

export default App;
