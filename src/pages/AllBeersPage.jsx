import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../components/Header";


function AllBeersPage() {
    const [beers, setBeers] = useState([])
    const [searchWord, setSearchWord] = useState("")


    useEffect(()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(result => setBeers(result.data))
        .catch(err=>console.log("error in retriving all beers", err))
    },[])

    const handleSearch = (keyword)=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then(beers => {setBeers(beers.data.filter(beer=> beer.name.toLowerCase().includes(keyword.toLowerCase())))})
        .then(()=>console.log(beers))
        .catch(err=>console.log("error on search:", err))
    }

    return ( 
        <div>
            <Header></Header>
            <div className="searchBar">
            <label htmlFor="searchBar">Search by beer name</label>
            <input type="text" id="searchBar" onChange={e=>{ setSearchWord(e.target.value); handleSearch(e.target.value)}}/>
            </div>
            <br />
            {beers.map(beer=>
                <div className="oneBeer">
                    <div className="beerImg"> <img src={beer.image_url} alt="" /></div>
                    <div className="beerInfo">
                        <h1>{beer.name}</h1>
                        <h2>{beer.tagline}</h2>
                        <h3>Created by : {beer.contributed_by}</h3>
                        <h3><a href={"/all-beers/"+beer._id}>More details</a></h3>
                    </div>
                </div>
            )}
        </div>
     );
}

export default AllBeersPage;