import React,{Component} from 'react';

export default class CreateNewStudent extends Component{
    constructor(props){
        super(props);
    }

    onFormSubmit=(e)=>{
        console.log("SUBMIT");
        e.preventDefault();
        let t= 1;
        let s={name:"",lastName:"",index:"",nasoka:""};
        if(e.target.name.value.length!==0){
            s.name=e.target.name.value;
        }
        if(e.target.surename.value.length!==0){
            s.lastName=e.target.surename.value;
        }
        if(e.target.indeks.value.length!==0){
            s.index =e.target.indeks.value;
        }
        if(e.target.module.value.length!==0){
            s.nasoka=e.target.module.value;
        }
        if(!(s.name===""||s.surename===""||s.indeks===""||s.nasoka==="")){
            e.target.reset();
            this.props.addNewStudent(s);
        }

    };
    onFormCancel=(e)=>{
        console.log("SUBMIT");
        e.preventDefault();
        e.target.reset();
        this.props.cancelAddNew();
    };
    render(){
        let studyPrograms=this.props.studyPrograms.map((i)=><option value={i.name}>{i.name}</option>);
        return(
        <form onSubmit={this.onFormSubmit}>
            <h2> Create new Student</h2>
            <div className="form-group">
                <h6 className="d-inline-block">Name: &nbsp;&nbsp;</h6>

                <input type="text" placeholder="Enter name" className="form-control d-inline-block input"
                       name="name" id="name" />

            </div>
            <div className="form-group">
                <h6 className="d-inline-block">Surename: &nbsp;&nbsp; </h6>

                <input type="text" placeholder="Enter surename" className="form-control d-inline-block input"
                       name="surename" id="surename" />
            </div>

            <div className="form-group">
                <h6 className="d-inline-block">Index: &nbsp;&nbsp; </h6>

                <input type="text" placeholder="Enter index" className="form-control d-inline-block input"
                       name="indeks" id="indeks" />
            </div>

            <div className="form-group">
                <h6 className="d-inline-block">Module: &nbsp;&nbsp; </h6>

                <div className="col-md-4">
                    <select name="module" id="module" className="form-control" required>
                        {studyPrograms}
                    </select>

                </div>
                {/*<input type="text" placeholder="Enter module" className="form-control d-inline-block input"*/}
                       {/*name="module" id="module" />*/}
            </div>
            <div className="d-inline-block form-group">
                <input type="submit" value="Create student"/>&nbsp;
            </div>
            <button onClick={()=>this.props.cancelAddNew()}>Cancel</button>
        </form>
        )
    };
}