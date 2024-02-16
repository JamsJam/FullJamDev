import React,{useState} from 'react'
import './ChoiceInput.css'

export default function ChoiceInput({
  inputType, 
  inputId, 
  inputName, 
  inputClass,
  label
}){

  const [isCheck, setIsCheck] = useState(false)

  const handleClick =()=> {
    setIsCheck(!isCheck)
  }
  const handleChange = ()=>{
    
  }

  return (
    <div>
        <input type={inputType || 'radio'} name={inputName} id={inputId} className={`${inputClass} texte-13-m`} checked={isCheck} onChange={()=>handleChange}/>
        
        <div className={`${inputClass}--div texte-13-m ${isCheck && 'check'}` } onClick={()=>handleClick()}>
          {label}
        </div>
    </div>
  )
}
