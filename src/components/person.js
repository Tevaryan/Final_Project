import React from 'react'
import satan from '../assets/images/satan.jpg'
import './person.css'

export default (props) => {
    return (
        <div className="container">
            <img className="image" src={satan}/>
            <div className="description">
                <p className="name">Hail Satan</p>
                <p className="price">USD 1,000</p>
                <p className="descriptionOne">Description</p>
                <p className="descriptionTwo">This picture can summon demon from hell</p>
                <p className="more">more</p>
                <button className="buttonSomething">Something</button>
                <div className="favouriteAndShare">
                    <button className="buttonFavourite">Favourite</button>
                    <button className="buttonShare">Share</button>
                </div>
            </div>
        </div>
    )
}