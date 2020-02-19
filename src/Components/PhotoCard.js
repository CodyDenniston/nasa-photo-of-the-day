import React, {useState, useEffect} from "react";
import Image from "./Image";
import axios from "axios";

export default function DailyPhoto(){
    const [photo, setPhoto] = useState([]);
    
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=eqRYd47dVU9Yru4v1BAT4J59uoAcBViiy75HFcgE`)
        .then(response => {
            console.log(response.data);
            setPhoto(response.data)
        })
        .catch(error => {
            console.log("THIS IS AN ERROR >:O", error);
        });
    }, []);
        return (
        <div className="container">
             <Image description={photo.explanation} image={photo.url}/>
        </div>
 )
    
}