import "./topbar.scss";
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import Logo from './logo.png';

export default function Topbar({menuOpen,setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo" ><img src={Logo} alt="logo" /></a>
                <div className="itemContainer">
                    <ContactPhoneIcon className="icon"/>
                    <span>+8801609671003</span>
                </div>    
                <div className="itemContainer">
                    <EmailIcon className="icon"/>
                    <span>mdfahaduddin182803@gmail.com</span>
                </div>  
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                
                </div>
            </div>
        </div>
    )
}
