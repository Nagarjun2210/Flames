import React from 'react';
import { useState, useRef } from "react";
import find_final_letter from './logic.js';
import './style.css';
import ReactGA from "react-ga4";

const TRACKING_ID = "G-QNJGYBD076";
ReactGA.initialize(TRACKING_ID);
console.log("outside layout");


function Layout(){
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
    });
    var [name_1, sn1] = useState("");
    var [name_2, sn2] = useState("");
    var output = useRef("");
    function setOutput(name_1, name_2) {
        output.current = find_final_letter(name_1, name_2);
        document.getElementById("output").innerText = output.current;
    };
    
    const layout = (
        <div >
            <div>
            <h1>FLAMES</h1>
                <label>Enter name 1
                    <input id="name_1" type="text" onChange={(e) => sn1(e.target.value)} />
                </label>
                <label>Enter name 2
                    <input id="name_2" type="text" onChange={(e) => sn2(e.target.value)} />
                </label>
                <button type="button" onClick={() => setOutput(name_1, name_2)}> Submit</button>
            <p id="output"></p>
            </div>
        </div>
    );
return layout;
};

export default Layout;
