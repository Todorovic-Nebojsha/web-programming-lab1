import React,{Component} from 'react';

class StudyProgramItem extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <li
                    className="d-inline-block">
                    {this.props.studyProgram.name}
                </li>
                &nbsp;&nbsp;
                <button className="alert-danger"
                        onClick={()=>this.props.deleteStudyProgram(this.props.studyProgram)}>Delete</button>
            </div>
        );
    }
}
export default StudyProgramItem;
