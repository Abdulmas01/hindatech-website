import facebook from "../images/facebook.png";
import email from "../images/email.png";
import twitter from "../images/user-interface.png";
import whatapp from "../images/whatsapp.png";
import ticktok from "../images/tik-tok.png";

const SocialPages = () => {
    class Social {
        name;
        image;
        socialLink;
        constructor(name, image, socialLink) {
            this.name = name;
            this.image = image;
            this.socialLink = socialLink;

        }
    }

    const listSocial = [
        new Social("Email", email, "hindatech01@gmail.com", "mailto:hindatech01@gmail.com"),
        new Social("Facebook", facebook, "http://facebook.com/hindatech"),
        // new Social("ticktok", ticktok, ""),
        new Social("WhatsApp", whatapp, ""),
        // new Social("Twitter", twitter, ""),
    ]
    return (
        <div className="social-container">
            {listSocial.map((value, index) => {
                return <a key={index} href={listSocial[index].socialLink}>
                    <div className="social-item">
                        <div className="social-img-container">
                            <img className="image" src={value.image} alt="" />
                        </div>
                        <p>{value.name}</p>
                    </div>
                </a>
            })}
        </div>
    )
}

export default SocialPages