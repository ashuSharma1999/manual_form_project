import React from 'react'

const DatePicker = (props) => {
  return (
    <div><label htmlFor={props.label}>{props.label}</label><br />
        <input type={props.type} value={props.value} name={props.name} onChange={props.onChange} required={true}/>
        
    </div>
  )
}

export default DatePicker