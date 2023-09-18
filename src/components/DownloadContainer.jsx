import React from 'react'

const DownloadContainer = ({ image, name, filesize, dowloadlink }) => {
    return (
        <a href={dowloadlink} download>
            <div className="grid-items">
                <div className="image-container">
                    <img className='image' src={image} alt="" />
                </div>
                <p >{name}</p>
                <p >{filesize}</p>
            </div>
        </a>
    )
}

export default DownloadContainer