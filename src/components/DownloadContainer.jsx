

const DownloadContainer = ({ image, name, filesize, dowloadlink }) => {
    return (
        <a href={dowloadlink} download>
            <div className="grid-items">
                <div className="image-container">
                    <img className='image' src={image} alt="" />
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",

                }}>
                    <p style={{
                        margin: 0,
                        marginLeft: "20px"
                    }} >Android Version: {name}</p>
                    <p style={{
                        margin: 0,
                        marginLeft: "20px",
                        marginTop: "9px"
                    }} >File Size :  {filesize}</p>
                </div>
            </div>
        </a>
    )
}

export default DownloadContainer