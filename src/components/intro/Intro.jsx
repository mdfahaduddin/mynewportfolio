import "./intro.scss";
import Particles from "react-particles-js";

export default function Intro() {
    return (
        <div className="intro" id="intro">
             <Particles
    params = {{
      particles:{
        number:{
          value: 40,
          density:{
            enabled: true,
            value_area: 900
          }
        },
        shape:{
          type:"circle",
          stroke:{
            width: 6,
            color:"#00B7FF"
          }
        }
      }
    }}
    />
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt="my_photo" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm'</h2>
                    <h1>Mohammad Fahad Uddin</h1>
                    <h3>Web Application and <span> Mobile Application Developer</span></h3>
                </div>
                <a href="#portfolio" >
                    <img src="assets/down.png" alt="down"/>
                </a>
            </div>
            
        </div>
    )
}
