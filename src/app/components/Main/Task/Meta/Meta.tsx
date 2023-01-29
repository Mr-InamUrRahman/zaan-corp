import Button from "../../../ui-controls/Button/Button";
import Style from '../task.module.css'
import * as Icons from '../../../../resources/Icons/Icons';

const Meta =()=> {
    return (
        <ul className={`${Style.taskMeta} flex items-center gap-05`}>
            <li>
                <Button
                    Type="button"
                    IconPosition="left"
                    BtnStyleClass="p-0"
                    DefaultStyle={false} Icon={Icons.List()}
                />
            </li>
            <li>
                <Button
                    Label="12"
                    Type="button"
                    IconPosition="left"
                    BtnStyleClass="p-0"
                    DefaultStyle={false} Icon={Icons.Comment()}
                />
            </li>
            <li>
                <Button
                    Label="8/9"
                    Type="button"
                    IconPosition="left"
                    BtnStyleClass="p-0"
                    DefaultStyle={false} 
                    Icon={Icons.CheckList()}
                />
            </li>
            <li>
                <Button
                    Label="2"
                    Type="button"
                    IconPosition="left"
                    BtnStyleClass="p-0"
                    DefaultStyle={false} 
                    Icon={Icons.Link()}
                />
            </li>
        </ul>
    )
  }
export default Meta; 