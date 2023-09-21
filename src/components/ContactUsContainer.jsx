import React from 'react'

const ContactUsContainer = ({ image, text, link }) => {
    return (
        <div style={{
            height: "70px"
        }} className="grid-items">
            <div className="image-container">
                <img className='image' src={image} alt="" />
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "50%"
            }}>
                <p style={{
                    margin: 0,
                    marginLeft: "20px"
                }} >{text}</p>
                <p style={{
                    margin: 0,
                    marginLeft: "20px",
                    marginTop: "9px"
                }} >{link}</p>
            </div>
            <p ></p>
        </div>)
}

export default ContactUsContainer