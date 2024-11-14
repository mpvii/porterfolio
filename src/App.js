import React, { useEffect, useState } from "react";
import './App.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';


function App() {
    return (
        <Router >
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>

        </Router>
    );
}
export default App;
