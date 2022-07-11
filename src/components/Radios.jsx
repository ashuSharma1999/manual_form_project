import React from 'react'

const Radios = (props) => {


  return (
    <div>
        <input type="radio" name={props.backendName} value={props.value} onChange= {props.onChange}/>
      <label> {props.displayText}</label> <br/>
     
      </div>
  )
}

export default Radios;