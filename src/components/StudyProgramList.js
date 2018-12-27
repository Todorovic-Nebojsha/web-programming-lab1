import React,{Component} from 'react';
import StudyProgramItem  from "./StudyProgramItem";
import ReactPaginate from 'react-paginate';
import "../style.css";
import "./Pagination.css"
class StudyProgramList extends Component{
    constructor(props){
        super(props);
        this.state={
            pageNum: 0,
            pagesSize: 5}
    }

    render(){
        const offset=this.state.pageNum*this.state.pagesSize;
        const nextPageOffset=offset+this.state.pagesSize;
        const pageCount=Math.ceil(this.props.studyPrograms.length/this.state.pagesSize);

        const items=this.getStudyProgramPage(offset, nextPageOffset);


        return(
            <div>
                <h6> List of Study Programs</h6>
                <ul>
                    {items}
                </ul>
                <ReactPaginate
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="#">...</a>}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            </div>
        );
    }
    getStudyProgramPage=(offset,nextPageOffset)=>{
        return this.props.studyPrograms.map((s,index)=>
            <StudyProgramItem
                deleteStudyProgram={this.props.deleteStudyProgram}

                key={index}
                studyProgram={s}/>)
            .filter((task,index)=> {
                return index >= offset && index < nextPageOffset;
            });
    };

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({pageNum: selected});
    };
}

export default  StudyProgramList;