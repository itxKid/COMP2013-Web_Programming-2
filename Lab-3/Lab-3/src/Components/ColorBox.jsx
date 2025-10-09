import { useState } from "react";
import colors from '../data/data';

export default function ColorBox( color ) {

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    const [currentColor, setCurrentColor] = useState(getRandomColor())

    return(
        <div onClick={() => {
                setCurrentColor(getRandomColor())
            }}
            style={{
            backgroundColor: currentColor,
            width: "50px",
            height: "50px"
        }}>
        </div>
    )
}