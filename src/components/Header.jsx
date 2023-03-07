import homelogo from "../assets/icons8-home-page-24.png"

function Header() {
    return ( 
        <div className="header">
            <a href="/"><img src={homelogo} alt="" /></a>
        </div>
     );
}

export default Header;