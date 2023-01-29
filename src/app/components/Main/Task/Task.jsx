import Profile from '../../ui-controls/Profile/Profile'
import Style from './task.module.css'
import Meta from './Meta/Meta'
import Tags from './Tags/Tags'

const Task =(props)=> {
    return (
        <div className={`${Style.task} flex flex-column gap-05 rounded-sm`}>
           
            {props.PropjectTitle?
                <span className={`${Style.taskProject} flex items-center justify-between circle circle-sm ${props.Circle}`}>{props.PropjectTitle}<i>{props.ProjectIcon?props.ProjectIcon:''}</i></span>
            :''}

            <h3 className={`${Style.taskTitle}`}>
                {props.Title?props.Title:''}
            </h3>

            {props.Tags?<Tags/>:''}
            {props.Meta?<Meta/>:''}

            <div className={`${Style.taskTimeProfile} flex items-center justify-between`}>
                {props.Time?<time>{props.Time}</time>:''}

                {props.ProfileImage?
                <button>
                    <Profile 
                        ProfileImage={props.ProfileImageSrc?props.ProfileImageSrc:''} 
                        ImageHeight={props.ProfileImageHeight?props.ProfileImageHeight:''} 
                        ImageWidth={props.ProfileImageWidth?props.ProfileImageWidth:''} 
                    />   
                </button>
                :''}
            </div>
        </div>
    )
  }
export default Task; 