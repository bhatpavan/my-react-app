import { useState } from "react"
import "./Main.css"
import memeData from "./memeData";


export function Main() {
    const [url, setUrl] = useState()
    function getMemeImage() {
        const memeArray = memeData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length);
        const img = <img className="main-image" src={memeArray[randomNumber].url}></img>;
        setUrl(img)
        console.log(randomNumber)
    }
    return (
        <div className="main">
            <div className="main-input">
                <input placeholder="TopText"></input>
                <input placeholder="BottomText"></input>
            </div>
            <button onClick={getMemeImage} className="main-button">Get a new meme image 🖼</button>
            {url != undefined && url}
        </div>
    )
}

