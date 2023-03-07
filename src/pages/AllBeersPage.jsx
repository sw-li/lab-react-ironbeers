import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";


function AllBeersPage() {
    const [beers, setBeers] = useState([])

    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(result => setBeers(result.data))
        .catch(err=>console.log("error in retriving all beers", err))
    },[])


    return ( 
        <div className="allBeersPage">
            <Header></Header>
            {beers.map(beer=>
                <div className="oneBeer">
                    <div className="beerImg"> <img src={beer.image_url} alt="" /></div>
                    <div className="beerInfo">
                        <h1>{beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <h3>Created by : {beer.contributed_by}</h3>
                    </div>
                </div>
            )}
        </div>
     );
}

export default AllBeersPage;