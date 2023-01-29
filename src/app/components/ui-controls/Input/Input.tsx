
import Style from './input.module.css'

const Input =(Input)=> {
  return (

   
    <div className={`inputWraper`}>
        {Input.Label? <label className={`${Input.LabelStyleClass}`}>{Input.Label}</label> : ''}
        <div className={`flex gap-05 items-center ${Input.DefaultStyle? Style.inputTheme : ''} ${Input.IconPosition? `icon-`+Input.IconPosition : ''}`}>
            {Input.Icon? <i className={`${Input.IconStyleClass}`}>{Input.Icon}</i> : ''}
            <input type={Input.Type} placeholder={Input.Placeholder} className={`${Input.InputStyleClass? Input.InputStyleClass : ''}`}/>
        </div>
    </div>
    
        
       

  )

}

export default Input;