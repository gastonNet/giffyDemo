import React, { useState, useEffect } from "react";
import Gif from "./Gif";
import GetGifs from "../services/GetGifs";

export default function ListOfGifs({ params }){
    const [loading, setLoading] = useState(false);

    const {keyword} = params;
    const [gifs, setGifs] = useState([]);

    useEffect(()=>{
        setLoading(true)
    GetGifs({ keyword })
        .then(gifs => {
             setGifs(gifs)
             setLoading(false)
            })
    }, [keyword])

    if (loading) {
        return <span>Cargando @</span>
    }

    return ( 
        gifs.map(({id,url,title}) => 
            <Gif 
              key={id}
              title={title}
              url={url}
            />
        )
    )
}