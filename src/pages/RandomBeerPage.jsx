import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";

function OneBeerPage() {
  const [beer, setBeer] = useState([]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers`)
      .then((result) => {
        const randomIndex = Math.floor(Math.random()*result.data.length)
        console.log(result.data.length)
        console.log(randomIndex)
        setBeer(result.data[randomIndex]);
      })
      .catch((err) => console.log("error in retriving all beers", err));
  }, []);

  return (
    <div className="centeredColumn">
      <Header></Header>

      <div className="oneBeerPage">
        <div className="beerImg">
          {" "}
          <img src={beer.image_url} alt="" />
        </div>
        <div className="beerInfo">
          <div className="oneLine">
            <h1>{beer.name}</h1>{" "}
            <h1 className="txtColorGray">{beer.attenuation_level}</h1>
          </div>
          <div className="oneLine">
            <h2 className="txtColorGray">{beer.tagline} </h2>
            <h2>{beer.first_brewed}</h2>
          </div>
          <p>{beer.description}</p>
          <h3>Created by : {beer.contributed_by}</h3>
        </div>
      </div>
    </div>
  );
}

export default OneBeerPage;
