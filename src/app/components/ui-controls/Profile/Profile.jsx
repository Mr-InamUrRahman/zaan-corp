import Style from './profile.module.css'
import Image from 'next/image'

const Profile =(props)=> {
    return (
        <div className={`flex items-center gap-1 ${props.ProfileWapperClass?props.ProfileWapperClass:''} ${Style.ProfileWapperClass}`}>
            <div className={`${props.ProfileClass?props.ProfileClass:''}  ${Style.profile}`}>

                <figure style={{width: `${props.ImageWidth? props.ImageWidth : ''}`, height: `${props.ImageHeight? props.ImageHeight : ''}`, }}>
                    {props.ProfileImage?<Image src={props.ProfileImage} alt="" placeholder="blur" />:''}
                </figure>

                {props.Counter?<span className={`${Style.counter} ${props.CounterStyleClass? props.CounterStyleClass:''} flex items-center justify-center`}>{props.Counter}</span>:''}
            </div>
            {props.ProfileName?<h6>{props.ProfileName}</h6>:''}
        </div>
    )
  }
export default Profile; 