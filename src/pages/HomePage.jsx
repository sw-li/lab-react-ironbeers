
import beersImg from "../assets/beers.png"
import randomBeersImg from "../assets/random-beer.png"
import newBeerImg from "../assets/new-beer.png"

function Homepage(){
    return(
        <div>
        <br />
        <div className="pages">
            <img src={beersImg} alt="all beers" />
            <h1> <a href="/beers">All Beers</a> </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla voluptate porro amet dolores perferendis, quis consequatur quod quibusdam. Officiis architecto illo ipsum esse blanditiis recusandae iure suscipit nesciunt necessitatibus.</p>
        </div>
        <div className="pages">
            <img src={randomBeersImg} alt="all beers" />
            <h1> <a href="/random-beer"> Random Beer</a> </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla voluptate porro amet dolores perferendis, quis consequatur quod quibusdam. Officiis architecto illo ipsum esse blanditiis recusandae iure suscipit nesciunt necessitatibus.</p>
        </div>
        <div className="pages">
            <img src={newBeerImg} alt="all beers" />
            <h1> <a href="/new-beer"> New Beer </a> </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nulla voluptate porro amet dolores perferendis, quis consequatur quod quibusdam. Officiis architecto illo ipsum esse blanditiis recusandae iure suscipit nesciunt necessitatibus.</p>
        </div>
        </div>
    )
}

export default Homepage