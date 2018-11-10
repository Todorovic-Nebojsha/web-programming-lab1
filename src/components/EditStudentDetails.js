import React,{Component} from 'react';
import "../style.css";

class EditStudentDetails extends Component{
    constructor(props){
        super(props);
       // this.state={student:props.student};
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
    onFormSubmit=(e)=>
    {
        e.preventDefault();
        let s=this.cloneStudent(this.props.student);
        if(e.target.name.value.length!==0){
            s.name=e.target.name.value;
        }
        if(e.target.surename.value.length!==0){
            s.surename=e.target.surename.value;
        }
        if(e.target.indeks.value.length!==0){
            s.indeks =e.target.indeks.value;
        }
        if(e.target.module.value.length!==0){
            s.nasoka=e.target.module.value;
        }
        e.target.reset();
        this.props.updateStudent(s);

    }
    onFormCancel=(e)=>{
        e.preventDefault();
        e.target.reset();
        this.props.cancelUpdate();
    }

    render(){
        return(

            <form onSubmit={this.onFormSubmit}>
                <div className="form-group">
                <h6 className="d-inline-block">Name: &nbsp;&nbsp;</h6>
                <h6 className="d-inline-block">{this.props.student.name} &nbsp;&nbsp; </h6>
                <input type="text" placeholder="Enter new name" className="form-control d-inline-block input"
                       name="name" id="name" />

                </div>
                <div className="form-group">
                <h6 className="d-inline-block">Surename: &nbsp;&nbsp; </h6>
                <h6 className="d-inline-block">{this.props.student.surename} &nbsp;&nbsp;</h6>
                <input type="text" placeholder="Enter new surename" className="form-control d-inline-block input"
                       name="surename" id="surename" />
                </div>

                <div className="form-group">
                <h6 className="d-inline-block">Index: &nbsp;&nbsp; </h6>
                <h6 className="d-inline-block">{this.props.student.indeks} &nbsp;&nbsp;</h6>
                <input type="text" placeholder="Enter new index" className="form-control d-inline-block input"
                       name="indeks" id="indeks" />
                </div>

                <div className="form-group">
                <h6 className="d-inline-block">Module: &nbsp;&nbsp; </h6>
                <h6 className="d-inline-block">{this.props.student.nasoka} &nbsp;&nbsp;</h6>
                <input type="text" placeholder="Enter new module" className="form-control d-inline-block input"
                       name="module" id="module" />
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