import './Navbar.css'
import Button from '../Button/Button'
export default function Navbar(){
    return(
        <nav>
        <ul className="ul">
            <li className='li' >Home</li>
            <li className='li'>Services</li>
            <li className='li'>About us</li>
            <li className='li'>Extra Salespage</li>
            <li className='li'><Button valeu='Get your free guide now'/></li>
        </ul>
    </nav>
    )
}