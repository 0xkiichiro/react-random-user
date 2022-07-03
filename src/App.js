import "./App.css";
import Card from "./modules/Card";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [person, setPerson] = useState();
  const API_URL = "https://randomuser.me/api/";
  const fetchApi = async () => {
    try {
      const res = await axios.get(API_URL);
      const data = res.data.results[0];
      // console.log(res);
      console.log(data);
      setPerson(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="App">
      {person && <Card person={person} />}
      <button className="button" onClick={() => fetchApi()}>
        Randomize!
      </button>
    </div>
  );
}

export default App;
