import axios from "axios";
import React, { useState } from "react";
import Checkbox from "./components/Checkbox";
import DatePicker from "./components/DatePicker";
import Dropdown from "./components/Dropdown";
import Radio from "./components/Radio";
import Textbox from "./components/Textbox";
import State from "./State.json";
import Department from "./Department.json";

const Form = (props) => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [gender, setGender] = useState(" ");
  const [person, setPerson] = useState("");
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [language, setLanguage] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [getState, setGetState] = useState("");
  const [district, setDistrict] = useState("");
  const [department, setDepartment] = useState("");
  const fData = {
    Name: name,
    Company_Name: companyName,
    Gender: gender,
    Ex_Employee: person,
    Date_of_Birth: dob,
    Date_of_Joining: doj,
    Language: language,
    Vehicles: vehicle,
    State: getState,
    District: district,
    Department: department,
  };

  const saveRecord = async (e) => {
    if (
      name === "" ||
      companyName === "" ||
      language === [] ||
      vehicle === [] ||
      getState === "" ||
      gender === "" ||
      person === "" ||
      dob === "" ||
      doj === "" ||
      district === "" ||
      department === ""
    ) {
      alert("Please fill the all Data");
      e.preventDefault();
    } else {
      e.preventDefault();
      const store = await axios.post("http://localhost:3005/posts", fData);

      alert("Successfully save your records. ");
      props.refresh();
      setName("");
      setCompanyName("");
      setDistrict("");
      setDob("");
      setDoj("");
      setGender(false);
      setLanguage("");
      setVehicle();
      setPerson("");
      setGetState("");
      setDistrict("");
      setDepartment("");
    }
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

  const statelist = () => {
    let drpData = [];
    State.states.map((item) => {
      drpData.push({ name: item.state, value: item.state });
    });
    return drpData;
  };
  const departmemntlist = () => {
    let departmentData = [];
    Department.map((item) => {
      departmentData.push({ name: item.name, value: item.name });
    });
    return departmentData;
  };

  const districtlist = () => {
    if (!getState) return;
    let drpDis = [];
    let ret = State.states.filter(({ state }) => getState === state);
    let x = ret[0].districts.map((item) => {
      drpDis.push({ name: item, value: item });
    });
    return drpDis;
  };

  let today = new Date();
  let aaj = `${("0" + today.getFullYear()).slice(-4)}-${(
    "0" +
    (today.getMonth() + 1)
  ).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
  let pahle="1900-01-01";
  return (
    <div>
      <form action="">
        <h2>Registration Form</h2>

        <Textbox
          labe="Name"
          name={name}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value.replace(/[^a-z,' ']/gi, ""))}
          required={true}
          placeholder={"Enter your name only String"}
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

        <Radio
          label="Select Gender"
          name="Gender"
          v1="Male"
          v2="Female"
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
          aaj={aaj}
          pahle={pahle}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <DatePicker
          label="Date of Joining"
          type="date"
          required={true}
          name={doj}
          pahle={pahle}
          value={doj}
          aaj={aaj}
          onChange={(e) => setDoj(e.target.value)}
        />
        <Checkbox
          label="Intrested Language"
          type="checkbox"
          v1="React js"
          v2="Python"
          v3="C Language"
          v4="Java"
          name={language}
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
          value={vehicle}
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
        <Dropdown
          label="Select Department"
          type="checkbox"
          value={department}
          required={true}
          dropdownData={departmemntlist()}
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
        />
        <input
          type="submit"
          value="Save"
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
