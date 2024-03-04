import React from "react";
import './cardjs.css'

const CardJs = ({id, text, image, price, onDelete}) => {
    const handleClick = () => {
        onDelete(id);
    }
    return(
        <div className="cardss">
            <img src={image} alt="" />
            <h4>{price}</h4>
            <p>{text}</p>
            <button onClick={handleClick} className="delete">DELETE</button>
        </div>
    )
}

export default CardJs