
import React, {useState, useEffect} from "react";
import "./game.css"

const Game = () =>{
    const [count, setCount] = useState(0)
    const [click, setClick] = useState(0)
    const genRand = (min, max) =>{
        const myVel = Math.floor(Math.random()*(max-min+1)) + min
        setCount(myVel)
    };

    useEffect(()=>{
        setInterval(()=>{
            genRand(0, 5)
        },3000)
    },[])
    return(

        <div className="mainContainer">
            <div className="HeaderContainer">
                <h1>CodeLab</h1>
            </div>
            <div className="HeaderContainerp">
                <p>My First Game Build</p>
            </div>


            <div className="gameContainer">
                <div className="myBox">
                    <div className="Box">
                        <div className="rod" 
                        onClick={ () =>{
                            setClick(0)
                            console.log(click)
                        }}
                        >
                            0
                        </div>
                        <div className="rod"
                        onClick={ () =>{
                            setClick(1)
                            console.log(click)
                        }}
                        >1</div>
                        <div className="rod"
                        onClick={ () =>{
                            setClick(2)
                            console.log(click)
                        }}
                        >2</div>
                    </div>
                    <div className="Box">box2</div>
                </div>
                <div className="myBox2">
                    <div>Me</div>
                <div>Computer</div>
                </div>

                <div className="result">
                    <div className="erro"></div>
                    <div>{count}</div>
                    </div>
                
               
            </div>

        </div>
    );
};

export default Game;