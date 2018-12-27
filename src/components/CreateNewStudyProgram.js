import React,{Component} from 'react';

export default class CreateNewStudyProgram extends Component{
    constructor(props){
        super(props);
    }

    onFormSubmit=(e)=>{
        console.log("SUBMIT");
        e.preventDefault();
        let t= 1;
        let s={name:""};
        if(e.target.name.value.length!==0){
            s.name=e.target.name.value;
        }

        if(!(s.name==="")){
            e.target.reset();
            this.props.addNewStudyProgram(s);
        }

    };
    onFormCancel=(e)=>{
        console.log("SUBMIT");
        e.preventDefault();
        e.target.reset();
        this.props.cancelAddNew();
    };
    render(){

        return(
            <form onSubmit={this.onFormSubmit}>
                <h2> Create new Study Program</h2>
                <div className="form-group">
                    <h6 className="d-inline-block">Name: &nbsp;&nbsp;</h6>

                    <input type="text" placeholder="Enter name" className="form-control d-inline-block input"
                           name="name" id="name" />

                </div>


                    {/*<input type="text" placeholder="Enter module" className="form-control d-inline-block input"*/}
                    {/*name="module" id="module" />*/}
                <div className="d-inline-block form-group">
                    <input type="submit" value="Create Study Program"/>&nbsp;
                </div>
                <button onClick={()=>this.props.cancelAddNew()}>Cancel</button>
            </form>
        )
    };
}