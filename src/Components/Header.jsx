import './Styles/Header.css'
import logo from '../assets/logo.svg'
import ActionBTN from './ActionBtn'
export default function Header()
{
    return(
        <>
        <header className="header">
            <section><img className='headerLogo' src={logo} alt="logo" /></section>
            <section style={{display: "flex", gap: "20px", alignItems: 'center' }}>
                <nav>
                    <ul>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#howitworks">How It Works</a></li>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#faq">FAQs</a></li>
                        <li><a href="#contacts">Contact</a></li>
                    </ul>
                </nav>
                <ActionBTN btnWidth={190} content='Get Started' />
            </section>
        </header>
        </>
    )
}