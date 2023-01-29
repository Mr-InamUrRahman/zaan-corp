import Style from '../task.module.css'

const Tags =()=> {
    return (
        <ul className={`${Style.taskTags} flex items-center gap-05`}>
            <li className="rounded-full" style={{backgroundColor: '#FFEEDE',}}>api.contactrm.com</li>
            <li className="rounded-full" style={{backgroundColor: '#FFDEFC',}}>api.contactrm</li>
        </ul>
    )
  }
export default Tags; 