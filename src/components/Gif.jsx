import React from "react";
import  "./Gif.css";

export default function Gif({title,url}){
    return  <div className="Gif">
                <h3>{title}</h3>
                <img alt={title} src={url}/>
            </div>
}