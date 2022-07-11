import React from 'react'

const Radio = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label><br />
      <input type={props.type} name={props.name} required={true} value={props.v1} onChange={props.onChange}/>{props.v1}
      <input type={props.type} name={props.name} value={props.v2} required={true}  onChange={props.onChange}/>{props.v2}
      {/* <input type={props.type} name={props.name} value={props.v3} onChange={props.onChange}/>{props.v3}  */}
      </div>
  )
}

export default Radio;