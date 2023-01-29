import Board from "../Board/Board";

const Content =(props:any)=> {
    return (
      
      <Board BoardTitle={props.BoardTitle} TaskQTY={props.TaskQTY} TaskData={props.TaskData}/>
       
    )
  }
export default Content; 