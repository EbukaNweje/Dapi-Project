import React, { useState, useEffect} from "react";
import "./game2.css"

const Game2 = () =>{
    return(
        <div className="Container1">
            <div className="containerTitle">CodeLab</div>
            <div className="containerDic">My first Build Game</div>

            <div className="containerBox">
                <div className="containerBox11">
                     <div className="containerBoxes">
                         <div className="containerBoxesHeader">0</div>
                         <div className="containerBoxesHeader">1</div>
                         <div className="containerBoxesHeader">2</div>
                         <div className="containerBoxesHeader">3</div>
                         <div className="containerBoxesHeader">4</div>
                         <div className="containerBoxesHeader">5</div>
                     </div>
                     <div className="containerBoxesTitle">Me</div>
                 </div>
                <div className="containerBox11">
                     <div className="containerBoxes">
                         <div className="containerBoxesHeader">Comp</div>
                     </div>
                     <div className="containerBoxesTitle">Computer</div>
                 </div>
            </div>
            <div className="containerResuit">
                <div className="containerResuitOutput">Resuit</div>
                <div className="containerResuitOutput"></div>
            </div>

        </div>
    );
};

export default Game2