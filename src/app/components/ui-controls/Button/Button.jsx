
import Style from './button.module.css'

const Button =(Button)=> {
  return (

    <button onClick={Button.Click} type={Button.Type} className={`btn ${Button.DefaultStyle? Style.btnTheme : ''} ${Button.BtnStyleClass? Button.BtnStyleClass : ''} ${Button.IconPosition? `icon-`+Button.IconPosition : ''} `}>
        {Button.Label? <span className={`${Button.LabelStyleClass}`}>{Button.Label}</span> : ''}
        {Button.Icon? <i className={`${Button.IconStyleClass}`}>{Button.Icon}</i> : ''}
    </button>

  )

}

export default Button;