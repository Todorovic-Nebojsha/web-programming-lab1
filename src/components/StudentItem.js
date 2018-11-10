import React,{Component} from 'react';

class StudentItem extends Component{
    constructor(props){
        super(props);
        //this.state={student:props.student};

    }
    cloneStudent=(e)=>{
        let target = {};
        for (let prop in e) {
            if (e.hasOwnProperty(prop)) {
                target[prop] = e[prop];
            }
        }
        return target;

    }
    render(){
        return (
            <div>
            <li onClick={()=>this.props.studentClicked(this.cloneStudent(this.props.student))}
                className="d-inline-block">
             {this.props.student.name} {this.props.student.surename}
            </li>
                &nbsp;&nbsp;
                <button className="alert-danger"
                        onClick={()=>this.props.deleteStudent(this.props.student)}>Delete</button>
            </div>
        );
    }
}
export default StudentItem;
