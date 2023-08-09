import "./Header.css"
import React from 'react';
import {ReactComponent as TrollFace} from '../assets/Troll Face.svg';
import {ReactComponent as MemeGenerator} from '../assets/Meme Generator.svg';

export function Header(){
    return (
        <div className="Header">
            <TrollFace className="Header-trollface"/>
            <MemeGenerator className="Header-memegenerator"/>
            <h3>React Course Project-3</h3>
        </div>
    )
}