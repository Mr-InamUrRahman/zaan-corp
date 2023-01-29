
import BackLogsData from './BackLogsData'
import Completed from './Completed';
import InProcess from './InProcess';
import InReview from './InReview';
import ToDoData from './ToDoData';

const BoardData = [
    {  
        BoardTitle:'Back Log', 
        TaskQTY:'2',       
        TaskData: BackLogsData,
    },
    {  
        BoardTitle:'To Do', 
        TaskQTY:'5',       
        TaskData: ToDoData,
    },
    {  
        BoardTitle:'In Process', 
        TaskQTY:'35',       
        TaskData: InProcess,
    },
    {  
        BoardTitle:'In Review', 
        TaskQTY:'5',       
        TaskData: InReview,
    },
    {  
        BoardTitle:'Completed', 
        TaskQTY:'1',       
        TaskData: Completed,
    },
]
export default BoardData; 