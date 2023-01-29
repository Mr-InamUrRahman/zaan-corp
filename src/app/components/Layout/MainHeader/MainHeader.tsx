import Style from './mainHeader.module.css'
import Button from '../../ui-controls/Button/Button';
import Profile from '../../ui-controls/Profile/Profile';
import Input from '../../ui-controls/Input/Input';
import ProfileImage from '/public/images/profile.jpg'
import ProfileImage2 from '/public/images/profile2.png'
import ProfileImage3 from '/public/images/profile3.png'
import * as Icons from '../../../resources/Icons/Icons';

const MainHeader =()=> {

    return (
        <header className={`${Style.mainHeader} flex items-center gap-05 border-b`}>
            <div className={`${Style.instructionBox} flex items-center gap-05`}>

                <div className={`flex items-center rounded-sm border ${Style.dropDown}`}>
                    <div className={`flex items-center gap-1 ${Style.dropDownValue}`}>
                        <Profile 
                            ProfileWapperClass={`${Style.dropDownProfileWrapper}`}
                            ProfileClass={`flex items-center gap-05 ${Style.dropDownProfile}`}  
                            ProfileImage={ProfileImage2} 
                            Counter="15" 
                            ImageHeight="30px" 
                            ImageWidth="30px"
                        />
                        <Profile 
                            ProfileWapperClass={`${Style.dropDownProfileWrapper}`} 
                            ProfileClass={`flex items-center gap-05 ${Style.dropDownProfile}`} 
                            ProfileImage={ProfileImage3} 
                            Counter="11" 
                            ImageHeight="30px" 
                            ImageWidth="30px"
                        />
                    </div>
                    <span className={`${Style.dropDownIcon} border-l`}>{Icons.AngleDown()}</span>
                </div>
                <Button 
                    Type="button" 
                    BtnStyleClass="btnOutline rounded-sm " 
                    DefaultStyle={false} 
                    Icon={Icons.Help()}
                />
                <Button 
                    Type="button" 
                    BtnStyleClass="btnOutline rounded-sm  btnOutlinePrimary bg-primary" 
                    DefaultStyle={false} 
                    Icon={Icons.Plus()}
                />
            </div>
            <div className={`${Style.searchBox}`}>
                <Input 
                    Placeholder="Search" 
                    DefaultStyle={true} 
                    Icon={Icons.Search()}
                />
            </div>  
            <div className={`infoBox flex items-center gap-05`}>
                <Button 
                    Type="button" 
                    BtnStyleClass="btnOutline rounded-sm " 
                    DefaultStyle={false} 
                    Icon={Icons.Annoucement()}
                />
                <Button 
                    Type="button" 
                    BtnStyleClass="btnOutline rounded-sm " 
                    DefaultStyle={false} 
                    Icon={Icons.Calendar()}
                />
                <Button 
                    Type="button" 
                    BtnStyleClass="btnOutline rounded-sm  btn-chat circle circle-sm circle-red" 
                    DefaultStyle={false} Icon={Icons.Chat()}
                />
                <button>
                    <Profile 
                        ProfileImage={ProfileImage} 
                        ImageHeight="40px" 
                        ImageWidth="40px"
                    />
                </button>
            </div>
        </header>
    )
  }
export default MainHeader; 