import React from "react";

const Checkbox = (props) => {
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <br />
      <input
        type="checkbox"
        name={props.name}
        id=""
        value={props.v1}
        onChange={props.onChange}
      />
      {props.v1}
      <input
        type="checkbox"
        name=""
        id=""
        value={props.v2}
        onChange={props.onChange}
      />
      {props.v2}
      <input
        type="checkbox"
        name=""
        id=""
        value={props.v3}
        onChange={props.onChange}
      />
      {props.v3}
      <input
        type="checkbox"
        name=""
        id=""
        value={props.v4}
        onChange={props.onChange}
      />
      {props.v4}
    </div>
  );
};

export default Checkbox;
