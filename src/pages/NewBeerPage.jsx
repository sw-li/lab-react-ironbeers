import { useState } from "react";
import Header from "../components/Header"
import axios from "axios";
import {useNavigate} from "react-router-dom"
function NewBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [atenuation_level, setAtenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate()

  const handleSubmit = e=>{
    e.preventDefault()
    // get all the information from form and send it to api
    
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new",{name, tagline, description, first_brewed,brewers_tips,atenuation_level,contributed_by})
    .then(()=>{
      setName("")
      setTagline("")
      setDescription("")
      setFirstBrewed("")
      setBrewersTips("")
      setAtenuationLevel(0)
      setContributedBy("")
      navigate("/all-beers")
    })
  }
  return (
    <div className="newBeerPage">
      <Header></Header>
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={e=>setName(e.target.value)} />
        <br />
        <label htmlFor="tagline">Tagline</label>
        <input type="text" id="tagline" value={tagline} onChange={e=>setTagline(e.target.value)} />
        <br />
        <label htmlFor="description">Description</label>
        <textarea type="text" id="descripiton" value={description} onChange={e=>setDescription(e.target.value)} />
        <br />
        <label htmlFor="firstBrewed">First Brewed</label>
        <input type="text" id="firstBrewed" value={first_brewed} onChange={e=>setFirstBrewed(e.target.value)} />
        <br />
        <label htmlFor="brewersTips">Brewers Tips</label>
        <input type="text" id="brewersTips" value={brewers_tips} onChange={e=>setBrewersTips(e.target.value)} />
        <br />
        <label htmlFor="atenuationLevel">Attenuation Level</label>
        <input type="text" id="atenuationLevel" value={atenuation_level} onChange={e=>setAtenuationLevel(e.target.value)} />
        <br />
        <label htmlFor="contributedBy">Contributed By</label>
        <input type="text" id="contributedBy" value={contributed_by} onChange={e=>setContributedBy(e.target.value)} />
        <br />
        <button type="submit" >ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeerPage;
