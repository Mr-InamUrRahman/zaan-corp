import Button from "../../ui-controls/Button/Button";
import Style from './board.module.css'
import Task from '../Task/Task'
import * as Icons from '../../../resources/Icons/Icons';




const Board =(props)=> {

    return (
        <div className={`${Style.board} rounded-sm flex flex-column gap-05`}>
            <div className={`${Style.boardHeader} flex items-center justify-between`}>
                <div className={`${Style.boardTitle} flex items-center gap-05`}>
                    {props.BoardTitle?
                    <h2>{props.BoardTitle} {props.TaskQTY?<span>({props.TaskQTY})</span>:''} </h2>
                    :''}

                    <div className={`${Style.boardFilter} flex items-center gap-05`}>
                        <Button 
                            Type="button"
                            BtnStyleClass="p-0"
                            DefaultStyle={false} Icon={Icons.Filter()}
                        />
                        <Button 
                            Type="button"
                            BtnStyleClass="p-0"
                            DefaultStyle={false} Icon={Icons.Sort()}
                        />
                    </div>
                </div>
                <div className={`${Style.boardAction}`}>
                    <Button 
                        Type="button"
                        DefaultStyle={false} Icon={Icons.Dots()}
                    />
                </div>
            </div>
            <div className={`boardBody ${Style.boardBody} custom-scroll flex flex-column gap-05`}>

                {props.TaskData.map((val, I) => {
                        return(
                            <Task
                                key={I}
                                Circle={val.Circle}
                                PropjectTitle={val.PropjectTitle}
                                ProjectIcon={val.ProjectIcon}
                                Title={val.Title}
                                Tags={val.Tags}
                                Meta={val.Meta}
                                Time={val.Time}
                                ProfileImage={val.ProfileImage}
                                ProfileImageSrc={val.ProfileImageSrc}
                                ProfileImageHeight={val.ProfileImageHeight}
                                ProfileImageWidth={val.ProfileImageWidth}
                            />
                        )
                    }
                )}

            </div>
            <div className={`${Style.boardFooter}`}>
                <Button 
                    Label="Add Card"
                    Type="button"
                    IconPosition="left"
                    BtnStyleClass={`btnOutline rounded-sm w-full`}
                    DefaultStyle={false} Icon={Icons.Plus()}
                />
            </div>
        </div>
    )
  }

export default Board; 