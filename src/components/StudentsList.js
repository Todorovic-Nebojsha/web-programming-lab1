import React,{Component} from 'react';
import StudentItem from "./StudentItem";


class StudentsList extends Component{
    constructor(props){
        super(props);
        //this.state={students:props.students};

    }

   render(){
       const items=this.props.students.map((s)=>
           <StudentItem
               deleteStudent={this.props.deleteStudent}
               studentClicked={this.props.studentClicked}
               key={s.indeks}
               student={s}/>);
        return(
            <div>
                <h6> List of students</h6>
            <ul>
                {items}
            </ul>
            </div>
        );
   }
}

export default  StudentsList;