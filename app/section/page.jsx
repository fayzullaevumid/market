import React from "react";
import './section.css'

const Section = () => {
    return(
        <div>
        <div className="div-1">
            <p className="text">
                <strong>Best Fashion Collection</strong>
            </p>
            <p className="text-1">
                Quisquemos sodales suscript tortor ditaemcos condimentum de cosmo <br />
                lacus meleifend menean diverra loremous.
            </p>
            <button id="button">explore shop collection</button>
        </div>
        <img className="image" src="https://nypost.com/wp-content/uploads/sites/2/2018/06/men-shopping-masculine.jpg?quality=75&strip=all" alt="" />
        </div>
    )
}

export default Section;