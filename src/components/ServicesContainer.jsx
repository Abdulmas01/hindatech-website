import React from 'react'

const ServicesContainer = ({ image, text }) => {
    return (
        <div className="grid-items">
            <div className="image-container">
                <img className='image' src={image} alt="" />
            </div>
            <p >{text}</p>
        </div>
    )
}

export default ServicesContainer