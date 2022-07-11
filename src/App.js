import "./App.css";
import Edit from "./Edit";
import ShowRecords from "./components/ShowRecords";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from "./Form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  const [jsonGet, setJsonGet] = useState([]);
 

  useEffect(() => {
    getToDb();
  }, []);
  const getToDb = () => {
    axios.get("http://localhost:3005/posts").then((res) => {
      setJsonGet(res.data);
    });
    // console.log(jsonGet);
  };
  return (
    <BrowserRouter>
    <div className="App">
<Routes>
  <Route path="/" element={
    <>
      <Form refresh={getToDb}/> 
      <ShowRecords acceptData={jsonGet} refresh={getToDb}/>
    </>
}
  />
<Route path = "/edit/:id" element= {<Edit />}/>

</Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
