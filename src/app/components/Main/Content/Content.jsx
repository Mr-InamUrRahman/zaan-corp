import Board from "../Board/Board"

const Content =(props)=> {
    return (
      
      <>
      {props.Board?
        <Board BoardTitle={props.BoardTitle} TaskQTY={props.TaskQTY} TaskData={props.TaskData}/>:''
      }
      </>
       
    )
  }
export default Content; 