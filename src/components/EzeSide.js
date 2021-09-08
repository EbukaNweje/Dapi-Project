import React, { useEffect, useRef, useState } from "react"
import "antd/dist/antd.css"
import {Button} from "antd"
import img from "../img/1.jpg"
import img1 from "../img/3.jpg"
import img2 from "../img/2.jpg"
import img3 from "../img/4.jpg"
import img4 from "../img/1.jpg"

const Ezeside = () => {
    const myRef = useRef()
    const myRef1 = useRef()
    const myRef2 = useRef()
    const myRef3 = useRef()
    const myRef4 = useRef()
    
    const [counter, setCounter] = useState(0)

    const [quote, setQuote] = useState([
        "Always try to make your life put smiles on people face",
        "The result of being happy can't be underunstimated",
        "Always try to make every seconds of your life count",
        "God is your constant, you are the variable",
        "No matter are shattered your dream looks, you can still patch it up"
    ])

    const [image, setImage] = useState([img, img1, img2, img3, img4])

    const [mins, setMins] = useState(0)

    const [secs, setSecs] = useState(0)

    const addCounter = () => {
        setCounter(counter +1)
    }
   
    const minusCounter = () => {
        if(counter<=0){
            setCounter(quote.length)
        }else{
            setCounter(counter -1)
        }
   }

   useEffect(() => {
       setInterval(() => {
           setCounter((e) => e + 1 )
       },3000)
   },[])

   useEffect(() => {
       setInterval(() => {
           setMins((e) => e +1)
       },60000)
   },[])

   useEffect(() => {
       setInterval(() => {
           setSecs((e) => e +1)
       },1000)
   },[])

   const myColor  = ["lightgray", "gray", "gray", "gray", "gray"]
   const myColor1 = ["gray", "lightgray", "gray", "gray", "gray"]
   const myColor2 = ["gray", "gray", "lightgray", "gray", "gray"]
   const myColor3 = ["gray", "gray", "gray", "lightgray", "gray"]
   const myColor4 = ["gray", "gray", "gray", "gray", "lightgray"]

   useEffect(() => {
       myRef.current.style.backgroundColor = myColor[counter % myColor.length]
       myRef.current.style.transition = "350ms"
   })

   useEffect(() => {
       myRef1.current.style.backgroundColor = myColor1[counter % myColor.length]
       myRef1.current.style.transition = "350ms"
   })

   useEffect(() => {
       myRef2.current.style.backgroundColor = myColor2[counter % myColor.length]
       myRef2.current.style.transition = "350ms"
   })

   useEffect(() => {
       myRef3.current.style.backgroundColor = myColor3[counter % myColor.length]
       myRef3.current.style.transition = "350ms"
   })

   useEffect(() => {
       myRef4.current.style.backgroundColor = myColor4[counter % myColor.length]
       myRef4.current.style.transition = "350ms"
   })

    return(
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"whitesmoke",
            flexDirection: "column",
        }}>
            <div>{mins % 60}mins : {secs % 60}secs</div>
            <div>
                <img style={{
                    width: "400px",
                    height: "500px",
                    objectFit: "cover",
                    borderRadius: "10px",
                }} src = {image[counter % image.length]}/>
           </div>

            <div style={{
                width: "900px",
                height: "150px",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}
            > 
            <div>
                <Button type="danger"
                onClick = {minusCounter}>-</Button>
            </div>
            <div style={{fontSize: "20px", textAlign: "center", fontWeight: "bold", width: "800px"}}>{quote[counter % quote.length]}</div>
            <div>
                <Button type="primary"
                onClick = {addCounter}>+</Button>
            </div>
            </div>
            <div style={{
                display: "flex",
            }}>           
            <div ref = {myRef}
            style={{
                width: "10px",
                height: "10px",
                borderRadius: "10px",
                margin: "0px 2.5px"
            }}/>
            <div ref = {myRef1}
             style={{
                width: "10px",
                height: "10px",
                borderRadius: "10px",
                margin: "0px 2.5px"
            }}/>
            <div ref = {myRef2}
            style={{
                width: "10px",
                height: "10px",
                borderRadius: "10px",
                margin: "0px 2.5px"
            }}/>
            <div ref = {myRef3}
             style={{
                width: "10px",
                height: "10px",
                borderRadius: "10px",
                margin: "0px 2.5px"
            }}/>
            <div ref = {myRef4}
            style={{
                width: "10px",
                height: "10px",
                borderRadius: "10px",
                margin: "0px 2.5px"
            }}/>
            </div>

        </div>
    )
}
export default Ezeside 
