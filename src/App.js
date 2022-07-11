import "./App.css";
import ShowRecords from "./components/ShowRecords";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from "./Form";
import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="App">
      <Form refresh={getToDb}/>
      <ShowRecords acceptData={jsonGet} refresh={getToDb}/>
    </div>
  );
}

export default App;
