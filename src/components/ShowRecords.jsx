import React, { useState, useEffect } from "react";
import "./showRecords.css";
import axios from "axios";
import { Link } from "react-router-dom";

const ShowRecords = (props) => {
  const [acceptId, setAcceptId] = useState([]);
  let data = props.acceptData;

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async (e) => {
    const result = await axios.get("http://localhost:3005/posts/");
  };

  const getID = (id) => {
    setAcceptId((pre) => [...pre, id]);
  };

  const deleteUser = async (acceptId) => {
    acceptId.forEach(async (id) => {
      console.info({ id });
      await axios.delete(`http://localhost:3005/posts/${id}`);
      props.refresh();
    });
  };

  return (
    <div>
      <p>
        ----User Records---- <br />
        <input
          type="button"
          value="Delete"
          onClick={deleteUser.bind(null, acceptId)}
        />
      </p>

      {data.map((i) => {
        return (
          <p>
            <table className="recordCss">
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Id</label>
                </td>
                <td className="recordCss">{i.id}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Name</label>
                </td>
                <td className="recordCss">{i.Name}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Company Name</label>
                </td>
                <td className="recordCss">{i.Company_Name}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Ex-Employee</label>
                </td>
                <td className="recordCss">{i.Ex_Employee}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Date of Birth</label>
                </td>
                <td className="recordCss">{i.Date_of_Birth}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Date of Joing</label>
                </td>
                <td className="recordCss">{i.Date_of_Joining} </td>
              </tr>

              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Gender</label>
                </td>
                <td className="recordCss">{i.Gender}</td>
              </tr>

              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Intrested Languages</label>
                </td>
                <td className="recordCss">{i.Language + " "}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Vehicles</label>
                </td>
                <td className="recordCss">{i.Vehicles + " "}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">State</label>
                </td>
                <td className="recordCss">{i.State}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">District</label>
                </td>
                <td className="recordCss">{i.District}</td>
              </tr>
              <tr className="recordCss">
                <td className="recordCss">
                  <label htmlFor="">Department</label>
                </td>
                <td className="recordCss">{i.Department}</td>
              </tr>

              <tr className="recordCss">
                <td>
                  <Link to={`/edit/${i.id}`} style={{textDecoration:"none"}}> Edit</Link>
                </td>
                <td>
                  <input
                    type="checkbox"
                    name=""
                    value={i.id}
                    onChange={() => {
                      getID(i.id);
                    }}
                  />
                </td>
              </tr>
            </table>
          </p>
        );
      })}
    </div>
  );
};

export default ShowRecords;
