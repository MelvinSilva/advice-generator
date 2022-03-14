import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from "../icon-dice.svg"
const Advice = () => {

    const [advice, setAdvice] = useState({})
    const [count, setCount] = useState (0)

    useEffect (() => {
        axios
            .get("https://api.adviceslip.com/advice")
            .then((res) => setAdvice(res.data.slip))


    }, [count])



    return (
            <div className="container">
                <h5>Advice #{advice.id}</h5>
                <p>{advice.advice}</p>
                <button onClick={() => setCount(count + 1)} className="logo"><Logo /></button>
            </div>
    );
};

export default Advice;