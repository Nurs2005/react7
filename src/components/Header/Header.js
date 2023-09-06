import './Header.css'
import Navbar from '../Navbar/Navbar'
export default function Header(){
    return(
        <div className="Header">
            <div>
            <img src='./Logo.png' alt='mops'/>
            </div>
            <Navbar/>
        </div>
    )
}