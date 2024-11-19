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
import SkillsFuture from "../components/SkillsFuture";
import SpinningBox from "../components/SpinningBox";



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
            <span className="flex flex-col items-center justify-center gap-6 text-5xl font-semibold py-12 text-white md:flex-row md:gap-4">
                "If I don't know it, I can <SpinningBox front="Study" bottom="Learn" back="Practice" top="Master" /> it."
            </span>
            {/* <Navbar /> */}
            {/* <div className="Card">
                <Card/>
            </div> */}
            
            <SkillsGallery/>
            <span className="flex flex-col items-center justify-center gap-6 text-5xl font-semibold py-12 text-white md:flex-row md:gap-4">
                Next on my list..
            </span>
            <SkillsFuture/>
{/* 
            <div className="px-36 py-20">
                <CarouselBasicExample/>
            </div>
         */}
            {/* <ClassSelect/> */}
           
            {/* <SkillTreeCust/> */}
            {/* <Skills/> */}
            <Footer/>
        </div>
        );
    }


export default Home;
