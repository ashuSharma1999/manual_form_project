import axios from "axios";
import React, { useState, useEffect } from "react";
import Checkbox from "./components/Checkbox";
import DatePicker from "./components/DatePicker";
import Dropdown from "./components/Dropdown";
import Radio from "./components/Radio";
import ShowRecords from "./components/ShowRecords";
import Textbox from "./components/Textbox";
import State from "./State.json";

const Form = (props) => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [gender, setGender] = useState("");
  const [person, setPerson] = useState("");
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [language, setLanguage] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [getState, setGetState] = useState("");
  const [district, setDistrict] = useState("");
  const fData = {
    "Name": name,
    "Company_Name": companyName,
    "Gender": gender,
    "Ex_Employee": person,
    "Date_of_Birth": dob,
    "Date_of_Joining": doj,
    "Language": language,
    "Vehicles": vehicle,
    "State": getState,
  };
 
  // let finalData = [fData];
  // console.log(finalData);
  const saveRecord = async () => {
    const store = await axios.post("http://localhost:3005/posts", fData);
    console.log(store.data);
    props.refresh();
    setName('')
    setCompanyName("")
    setDistrict("")
    setDob("")
    setDoj("")
    setGender("")
    setLanguage([])
    setVehicle([])
    setPerson("")

  };

  const valueLanguage = (e) => {
    if (e.target.checked) {
      let langArr = language;
      langArr.push(e.target.value);
      setLanguage(langArr);
    }
  };
  const valueVehicle = (e) => {
    if (e.target.checked) {
      let vehicleArr = vehicle;
      vehicleArr.push(e.target.value);
      setVehicle(vehicleArr);
    }
  };
  // const RADIO_CONFIG = [
  //   {
  //     id: 1,
  //     name: "Male",
  //     value: "male",
  //     onChange: setGender,
  //   },
  //   {
  //     id: 2,
  //     name: "Female",
  //     value: "female",
  //     onChange: setGender,
  //   },
  //   {
  //     id: 3,
  //     name: "Other",
  //     value: "other",
  //     onChange: setGender,
  //   },
  // ];
  

  const statelist = () => {
    let drpData = [];
    State.states.map((item) => {
      drpData.push({ name: item.state, value: item.state });
    });
    return drpData;
  };
  // console.log(statelist());
  const districtlist = () => {
    if (!getState) return;
    let ret = State.states.filter(({ state }) => getState === state);
    let z = ret[0].districts;
    return [{ name: z }];
  };
  // console.log(districtlist());

  return (
    <div>
      <form action="">
        <h3>Registration Form</h3>

        <Textbox
          labe="Name"
          name={name}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required={true} 
          placeholder={"Enter your name"}
        />

        <Textbox
          labe="Company Name"
          placeholder={"Enter company name"}
          name={companyName}
          type="text"
          value={companyName}
          required={true}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        {/* <Radio label="Male" value={"male"} onChange={e => setGender(e.target.value)} /> */}
        {/* <Radio  config={RADIO_CONFIG}/> */}
        {/* <Radio
          label="Gender"
          name="Gender"
          v1="Male"
          v2="Female"
          v3="Other"
          type="radio"
          onChange={(e) => setGender(e.target.value)}
        /> */}
        <Radio
          label="Select Gender"
          name={gender}
          v1="Male"
          v2="Female"
          v3="Other"
          type="radio"
          value={gender}
          required={true}
          onChange={(e) => setGender(e.target.value)}
        />

        <Radio
          label="Are You Ex-Employee"
          name="Person"
          required={true}
          v1="Yes"
          v2="No"
          type="radio"
          value={person}
          onChange={(e) => setPerson(e.target.value)}
        />

        <DatePicker
          label="Date of Birth"
          type="date"
          required={true}
          name={dob}
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <DatePicker
          label="Date of Joining"
          type="date"
          required={true}
          name={doj}
          value={doj}
          onChange={(e) => setDoj(e.target.value)}
        />
        <Checkbox
          label="Intrested Language"
          type="checkbox"
          v1="React js"
          v2="Python"
          v3="C Language"
          v4="Java"
          value={language}
          required={true}
          onChange={(e) => {
            valueLanguage(e);
          }}
        />
        <Checkbox
          label="Have you Vehicle?"
          type="checkbox"
          required={true}
          v1="Bicycle"
          v2="Bike"
          v3="Car"
          v4="None"
          value={language}
          onChange={(e) => {
            valueVehicle(e);
          }}
        />
        <Dropdown
          label="Select State"
          type="checkbox"
          required={true}
          value={getState}
          dropdownData={statelist()}
          onChange={(e) => {
            setGetState(e.target.value);
          }}
        />
        <Dropdown
          label="Select District"
          type="checkbox"
          value={district}
          required={true}
          dropdownData={districtlist()}
          onChange={(e) => {
            setDistrict(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Submit"
          style={{
            margin: "1rem",
            padding: "5px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={saveRecord}
        />
      </form>
      
    </div>
  );
};

export default Form;
