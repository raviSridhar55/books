import "./App.css";
import axios from "axios";
import Books from "./Books";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://jsonblob.com/api/976791543507861504"
      );
      setData(res.data.books);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Books data={data} />;
    </div>
  );
}

export default App;
