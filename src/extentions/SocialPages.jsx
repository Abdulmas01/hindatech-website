import facebook from "../images/facebook.png";
import email from "../images/email.png";
import twitter from "../images/twitter.png";
import whatapp from "../images/whatsapp.png";
import ticktok from "../images/tik-tok.png";

const SocialPages = () => {
    class Social {
        name;
        image;
        socialLink;
        socialValue;
        constructor(name, image, socialLink, socialValue) {
            this.name = name;
            this.image = image;
            this.socialLink = socialLink;
            this.socialValue = socialValue

        }
    }

    const listSocial = [
        new Social("Email", email, "hindatech01@gmail.com", "mailto:=hindatech01@gmail.com"),
        new Social("Facebook", facebook, "http://facebook.com/hindatech", "http://facebook.com/hindatech"),
        new Social("ticktok", ticktok, "http://tiktok.com/@hindatech", "http://tiktok.com/@hindatech"),
        new Social("WhatsApp", whatapp, "+2347026065634", "https://wa.me/+2347026065634"),
        new Social("Twitter", twitter, "http://twitter.com/hindatech", "http://twitter.com/hindatech"),
    ]
    return (
        <div className="social-container">
            {listSocial.map((value, index) => {
                return <a target="_blank" rel="noreferrer" key={index} href={value.socialValue}>
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