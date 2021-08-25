import "./intro.scss";
import Particles from "react-particles-js";
import { init } from 'ityped'
import { useEffect,useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
       strings: ['Web Application Developer',' Mobile Application Developer', 'Web Designer' ] });

  },[])

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
                <div className="imgContainer">
                    <img src="assets/prog.png" alt="my_photo" />
                </div>
                    <h2>Hi There, I'm'</h2>
                    <h1>Mohammad Fahad Uddin</h1>
                    <h3>i-am <span ref={textRef}></span></h3>
                </div>
                <a href="#about" >
                    <img src="assets/down.png" alt="down"/>
                </a>
            </div>
            
        </div>
    )
}
