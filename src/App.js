import { useEffect, useState } from "react";
import { fetchData } from "./Api/index";
import "./App.css";
import { Cards, Charts, CountryPicker } from "./components";
import useFetch from "./components/Cards/hooks/useFetch";
import Image from "./images/image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  const cardsData = async () => {
    const resp = await fetchData();
    setData(resp);
  };
  console.log(data);

  const countryChange = async (country) => {
    const data = await fetchData(country);
    setCountry(data);
  };

  useEffect(() => {
    cardsData();
    countryChange();
  }, []);

  return (
    <div className="App">
      <div className="image">
        <img src={Image} alt="covid" />
      </div>
      <Cards />
      <Charts data={data} country={country} />
      {/*<CountryPicker handleCountryChange={handleCountryChange} />*/}
    </div>
  );
}

export default App;
