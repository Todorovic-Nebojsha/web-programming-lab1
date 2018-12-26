import React,{Component} from 'react';
import "../style.css";
import {getStudyPrograms} from "../repository/studyProgramApi"

class EditStudentDetails extends Component{
    constructor(props){
        super(props);

    }

    cloneStudent=(e)=>{
        let target = {};
        for (let prop in e) {
            if (e.hasOwnProperty(prop)) {
                target[prop] = e[prop];
            }
        }
        return target;

    };
    onFormSubmit=(e)=>
    {
        e.preventDefault();
        let s=this.cloneStudent(this.props.student);
        if(e.target.name.value.length!==0){
            s.name=e.target.name.value;
        }
        if(e.target.surename.value.length!==0){
            s.lastName=e.target.surename.value;
        }
        if(e.target.module.value.length!==0){
            s.nasoka=e.target.module.value;
        }
        e.target.reset();
        this.props.updateStudent(s);

    };
    onFormCancel=(e)=>{
        e.preventDefault();
        e.target.reset();
        this.props.cancelUpdate();
    };

    render(){
        let studyPrograms=this.props.studyPrograms.map((i)=><option value={i.name}>{i.name}</option>);
        return(

            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <div className="form-group">
                        <h6 className="d-inline-block">Index: &nbsp;&nbsp; </h6>
                        <h6 className="d-inline-block">{this.props.student.index} &nbsp;&nbsp;</h6>

                    </div>


                <h6 className="d-inline-block">Name: &nbsp;&nbsp;</h6>
                <h6 className="d-inline-block">{this.props.student.name} &nbsp;&nbsp; </h6>
                <input type="text" placeholder="Enter new name" className="form-control d-inline-block input"
                       name="name" id="name" />

                </div>
                <div className="form-group">
                <h6 className="d-inline-block">Surename: &nbsp;&nbsp; </h6>
                <h6 className="d-inline-block">{this.props.student.lastName} &nbsp;&nbsp;</h6>
                <input type="text" placeholder="Enter new surename" className="form-control d-inline-block input"
                       name="surename" id="surename" />
                </div>



                <div className="form-group">
                <h6 className="d-inline-block">Module: &nbsp;&nbsp; </h6>
                <h6 className="d-inline-block">{this.props.student.studyProgram.name} &nbsp;&nbsp;</h6>
                    <div className="col-md-4">
                        <select name="module" id="module" className="form-control" required>
                            {studyPrograms}
                        </select>

                    </div>

                        {/*<input type="text" placeholder="Enter new module" className="form-control d-inline-block input"*/}
                       {/*name="module" id="module" />*/}
                </div>
                <div className="d-inline-block form-group">
                <input type="submit" value="Save changes"/>&nbsp;
                </div>
                <button onClick={()=>this.props.cancelUpdate()}>Cancel</button>
            </form>


        );
    }
}
export default EditStudentDetails;