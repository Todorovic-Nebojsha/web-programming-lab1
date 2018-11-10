import React,{Component} from 'react';
import StudentItem from "./StudentItem";
import ReactPaginate from 'react-paginate';
import "../style.css";
import "./Pagination.css"
class StudentsList extends Component{
    constructor(props){
        super(props);
        this.state={
            pageNum: 0,
            pagesSize: 5}
    }

   render(){
       const offset=this.state.pageNum*this.state.pagesSize;
       const nextPageOffset=offset+this.state.pagesSize;
       const pageCount=Math.ceil(this.props.students.length/this.state.pagesSize);

       const items=this.getStudentsPage(offset, nextPageOffset);


        return(
            <div>
                <h6> List of students</h6>
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
   getStudentsPage=(offset,nextPageOffset)=>{
      return this.props.students.map((s,index)=>
          <StudentItem
              deleteStudent={this.props.deleteStudent}
              studentClicked={this.props.studentClicked}
              key={index}
              student={s}/>)
          .filter((task,index)=> {
              return index >= offset && index < nextPageOffset;
          });
   };

    handlePageClick = (data) => {
        let selected = data.selected;
        this.setState({pageNum: selected});
    };
}

export default  StudentsList;