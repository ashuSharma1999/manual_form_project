import React from "react";
import { useState } from "react";

const Textbox = (props) => {
  return (
    <>
            <label htmlFor={props.label}>{props.labe}</label><br />
            <input type={props.type} name={props.name} value={props.value} onChange={props.onChange} required={true} placeholder={props.placeholder}/><br />
    
    </>
  );
};

export default Textbox;
