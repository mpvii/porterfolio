import React, { useEffect, useState } from "react";
import '../App.css';
import Hero from '../components/Hero';
import Background from "../components/Background";
import SkillsGallery from "../components/SkillsGallery";
import Footer from "../components/Footer";
import WaterDropHero from "../components/WaterDropHero";
import CardCarousel from "../components/CardCarousel";
import SkillsFuture from "../components/SkillsFuture";
import SpinningBox from "../components/SpinningBox";
import InterviewFAQ from "../components/InterviewFAQ";


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
            
            <SkillsGallery/>
            <span className="flex flex-row items-center justify-center text-5xl font-semibold py-12 text-white">
           Next on my list<span className="text-indigo-500">...</span>
            </span>
            <SkillsFuture/>
            {/* <InterviewFAQ/> */}
            <div id="footer-section">
            <Footer/>
            </div>
            
        </div>
        );
    }


export default Home;
