import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Form";

import { useParams, useNavigate } from "react-router-dom";
import Textbox from "./components/Textbox";
import DatePicker from "./components/DatePicker";

const Edit = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const [user, setUser] = useState({
    Name: "",
    Company_Name: "",
    Gender: "",
    Ex_Employyee: "",
    Date_of_Birth: "",
    Date_of_Joining: "",
    Language: [],
    Vehicles: [],
    state: "",
  });
  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:3005/posts/${id}`);
    setUser(result.data);
  };
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3005/posts/${id}`, user);
    navigate("/");
    loadUser();
  };

  return (
    <>
      <Textbox
        labe="Name"
        placeholder={"Enter your name"}
        type="text"
        value={user.Name}
        name="Name"
        onChange={(e) => {
          onInputChange(e);
        }}
      />
      <Textbox
        labe="Company Name"
        placeholder={"Enter company name"}
        type="text"
        value={user.Company_Name}
        name="Company_Name"
        onChange={(e) => {
          onInputChange(e);
        }}
      />
      <DatePicker
        label="Date of Birth"
        type="date"
        required={true}
        value={user.Date_of_Birth}
        name="Date_of_Birth"
        onChange={(e) => {
          onInputChange(e);
        }}
      />
      <DatePicker
        label="Date of Joining"
        type="date"
        required={true}
        value={user.Date_of_Joining}
        name="Date_of_Joining"
        onChange={(e) => {
          onInputChange(e);
        }}
      />
      <input
        style={{ margin: "15px", padding: "5px" }}
        type="submit"
        value="Update"
        onClick={(e) => {
          onSubmit(e);
        }}
      />
    </>
  );
};
export default Edit;
