import Board from "../Board/Board";
import Style from './content.module.css'


const Content =(props)=> {
    return (
      
      <Board BoardTitle={props.BoardTitle} TaskQTY={props.TaskQTY} TaskData={props.TaskData}/>
       
    )
  }
export default Content; 