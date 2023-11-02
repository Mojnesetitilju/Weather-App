import Input from "./Input";
import { useState, useEffect } from "react";
import Data from "./Data";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  const appId = `bbfd7105c71848dbb1573919232809`;

  useEffect(() => {
    if (!input) {
      return;
    } else {
      fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${appId}&q=${input}&days=7&aqi=no&alerts=no`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(setError("Check Your Spelling"), setData());
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
        });
    }
  }, [input]);

  function inputProp(input) {
    setInput(input);
  }
  return (
    <div className="bg-slate-300 bg-cover h-screen font-sans text-lg">
      <Input handleInput={inputProp} />
      {error && <p className="text-red-500 text-center">{error}</p>}
      <Data props={data} />
    </div>
  );
}

export default App;
