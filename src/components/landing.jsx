import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";

const Landing = () => { 

    const [output, setOutput] = useState("");
    const [responseID, setResponseID] = useState("");

    const Navigate = useNavigate()

    const handleClickCreativeWriting = () => {
        Navigate('/creativewriting');
    }
    const handleClickMusic = () => {
        Navigate('/music');
    }
    const handleClickMovement = () => {
        Navigate('/movement');
    }
    const handleClickVisualArt = () => {
        Navigate('/visualart');
    }

return (
<div>
<div>
    <h2> {output}</h2>
</div>
<div>
    <h4>What medium are you working in today? </h4>
</div>
<div>
    <button onClick={handleClickCreativeWriting}>CREATIVE WRITING</button>
    <button onClick={handleClickMusic}>MUSIC</button>
    <button onClick={handleClickMovement}>MOVEMENT</button>
    <button onClick={handleClickVisualArt}>VISUAL ART</button>
</div>
</div>

)
}

export default Landing;