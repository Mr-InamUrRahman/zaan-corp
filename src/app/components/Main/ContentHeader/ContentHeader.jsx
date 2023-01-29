import Button from '../../ui-controls/Button/Button'
import Profile from '../../ui-controls/Profile/Profile'
import Style from './contentHeader.module.css'
import ProfileImage4 from '/public/images/profile4.png'
import ProfileImage5 from '/public/images/profile5.png'
import ProfileImage6 from '/public/images/profile6.png'
import ProfileImage7 from '/public/images/profile7.png'
import * as Icons from '../../../resources/Icons/Icons'

const ContentHeader =(props)=> {
    return (
        <div className={`${Style.contentHeader} contentHeader flex items-center justify-between border-b`}>
            <div className={`${Style.boardHeading} flex items-center`}>
                <h1>{props.title}</h1>

                <div className={`${Style.boardCategory} flex items-center`}>
                    <Button Type="button" BtnStyleClass="btnOutline rounded-sm rounded-full" DefaultStyle={false} Icon={Icons.Workflow()}/>
                    <Button Type="button" BtnStyleClass="btnOutline rounded-sm rounded-full" DefaultStyle={false} Icon={Icons.Design()}/>
                    <Button Type="button" BtnStyleClass="btnOutline rounded-sm rounded-full" DefaultStyle={false} Icon={Icons.Code()}/>
                    <Button Type="button" BtnStyleClass="btnOutline rounded-sm rounded-full" DefaultStyle={false} Icon={Icons.Annoucement()}/>
                </div>

                <div className={`${Style.boardAssignee} flex items-center`}>
                    <button>
                        <Profile 
                            ProfileImage={ProfileImage4} 
                            ImageHeight="30px" 
                            ImageWidth="30px"
                            Counter="2"
                        />   
                    </button>
                    <button>
                        <Profile 
                            ProfileImage={ProfileImage5} 
                            ImageHeight="30px" 
                            ImageWidth="30px"
                            Counter="5"
                        />   
                    </button>   
                    <button>
                        <Profile 
                            ProfileImage={ProfileImage6} 
                            ImageHeight="30px" 
                            ImageWidth="30px"
                            Counter="1"
                        />   
                    </button>
                    <button>
                        <Profile 
                            ProfileImage={ProfileImage7} 
                            ImageHeight="30px" 
                            ImageWidth="30px"
                            Counter="4"
                        />   
                    </button>
                </div>
            </div>
            <div className={`${Style.boardInfo} flex items-center gap-05`}>
                <Button Type="button" BtnStyleClass="btnOutline rounded-sm " DefaultStyle={false} IconPosition="left" Icon={Icons.Pinned()}/>
                <Button Type="button" BtnStyleClass="btnOutline rounded-sm " DefaultStyle={false} IconPosition="left" Icon={Icons.Folder()}/>
                <Button Type="button" Label="Views" BtnStyleClass="btnOutline rounded-sm " IconPosition="left" DefaultStyle={false} Icon={Icons.Floppy()}/>
                <Button Type="button" Label="Filter" BtnStyleClass="btnOutline rounded-sm " IconPosition="left" DefaultStyle={false} Icon={Icons.Filter()}/>
                <Button Type="button" Label="Sort by" BtnStyleClass="btnOutline rounded-sm " IconPosition="left" DefaultStyle={false} Icon={Icons.Sort()}/>
            </div>
        </div>
    )
  }
export default ContentHeader; 