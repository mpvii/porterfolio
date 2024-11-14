import React, { useEffect, useState } from "react";
import '../App.css';
import Portfolio from '../components/Portfolio'
import Hero from '../components/Hero';
import DarkMode from '../components/DarkMode';
import Card from "../components/Card";
import Skills from "../components/SkillsCarousel";
import Navbar from "../components/NavBar";
import SkillTreeCust from "../components/SkillTree";
import ClassSelect from "../components/ClassSelect";
import Background from "../components/Background";
import CarouselBasicExample from "../components/Carousel";



// import { Link } from "react-router-dom";



function Home() {
    const words = ["React", "JavaScript", "CSS", "HTML", "Node.js", "Python", "Flask"];

    

    const [selected, setSelected] = useState("light");
     
        return (
        <div className="App">
            
            {/* <div className="Background">
            <Background/>
            </div> */}

            <div className="Background">
                <Background/>
            </div>
            <Hero/>
            <Navbar/>
            <div className="Card">
                <Card/>
            </div>
            
            

            <div className="px-48 py-20">
            <CarouselBasicExample/>
            </div>
             <div className="Portfolio">
             <Portfolio/>
            </div>         
            {/* <ClassSelect/> */}
           
            <SkillTreeCust/>
            <Skills/>
            
        </div>
        );
    }


export default Home;
