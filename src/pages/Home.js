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
import SkillsGallery from "../components/SkillsGallery";
import Footer from "../components/Footer";
import WaterDropHero from "../components/WaterDropHero";
import CardCarousel from "../components/CardCarousel";



// import { Link } from "react-router-dom";



function Home() {
    const [selected, setSelected] = useState("light");
     
        return (
        <div className="App">
             
            <div className="Background">
                <Background/>
            </div>
            <Hero/>
            <div id="about-section">
            <WaterDropHero/>
            </div>

            <CardCarousel/>
          
            {/* <Navbar /> */}
            {/* <div className="Card">
                <Card/>
            </div> */}
            
            <SkillsGallery/>

            <div className="px-36 py-20">
                <CarouselBasicExample/>
            </div>
        
            {/* <ClassSelect/> */}
           
            {/* <SkillTreeCust/> */}
            {/* <Skills/> */}
            <Footer/>
        </div>
        );
    }


export default Home;
