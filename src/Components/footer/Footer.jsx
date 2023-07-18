import {
    FaLinkedin,
} from "react-icons/fa";


import {
    AiOutlineMail
} from "react-icons/Ai"

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {


const handleIcon=(platform)=>{
    if(platform==="Portfolio")
    {
        window.open("https://myportfolio-ten-inky.vercel.app/")
    }
    if(platform==="linkedIn")
    {
        window.open("https://www.linkedin.com/in/tushar-bhatt-59b64623b")
    }
    else{
        window.open("mailto:tusharbhatt0135@gmail.com")

    }
}

    return (
        <footer className="footer">
            <ContentWrapper>
             <div className="menuItems">
            <p >Creator : <span style={{fontWeight:"800"}}>Tushar Bhatt</span> </p>
            </div>
         
                <div className="socialIcons">
                  
                    <span className="icon"  onClick={()=>handleIcon("Portfolio")}>
                       W
                    </span>
                    <span className="icon"  onClick={()=>handleIcon("linkedIn")} >
                        <FaLinkedin />
                    </span>
                    <span className="icon"  onClick={()=>handleIcon("email")} >
                        <AiOutlineMail />
                    </span>
    
                </div>
                <div className="infoText">
                 Hey, I am a skilled front-end developer with expertise in React. 
                 With a passion for creating user-friendly and interactive web applications, I excel in 
                 turning design mockups into fully functional and responsive React components.
                 Having a strong foundation in HTML, CSS, and JavaScript, I have have honed my skills in building engaging user interfaces and seamless user experiences. His extensive knowledge of React allows him to efficiently manage state, handle component lifecycles, 
                 and utilize React's powerful ecosystem of libraries and tools.
                </div>
                
            </ContentWrapper>
        </footer>
    );
};

export default Footer;