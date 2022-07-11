import React from "react";


const Dropdown = (props) => {
  let optionsList = [];

  if (props.dropdownData && props.dropdownData.length > 0) {
    props.dropdownData.map((item) => {
      let option = <option key={Math.trunc(Math.random()*100000)} value={item.value}>{item.name}</option>;
      optionsList.push(option);
    });
  }
  return (
    <div>
      <label htmlFor="">{props.label}</label>
      <br />
      <select value={props.value} onChange={props.onChange}>
        <option >select</option>
        {optionsList}
      </select>
    </div>
  );
};

export default Dropdown;
