// import React, {useState} from "react"
// import "./text.css"

// const EzeApp = () => {

//     const [showImage, setShowImage] = useState();

//     const uploadImage = (e) => {
//         const file = e.target.files[0];
//         const res = URL.createObjectURL(file);
//         setShowImage(res);
//       };

//     return (
//         <div className="mainContainer">
//             <div className="loadImagContainer">
//                 <div className="inputContainer"><input type="file" onChange={uploadImage}></input></div>
//                 <div className="imageContanter">
//                     <img src={showImage}/>
//                 </div>
//                 <button className="BtnContainer">Add profile</button>
//             </div>


//         </div>
//     );
// };

// export default EzeApp;