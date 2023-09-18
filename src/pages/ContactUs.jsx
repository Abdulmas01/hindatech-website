import facebook from "../images/facebook.png";
import email from "../images/email.png";
import twitter from "../images/user-interface.png";
import whatapp from "../images/whatsapp.png";
import ticktok from "../images/tik-tok.png";
import ServicesContainer from '../components/ServicesContainer'

const ContactUs = () => {
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
        new Social("ticktok", ticktok, ""),
        new Social("WhatsApp", whatapp, ""),
        // new Social("Twitter", twitter, ""),
    ]
    return (
        <main>
            <h1 className="body-header">
                Contact Us
            </h1>
            {
                listSocial.map((value, index) => {
                    return <a key={index} href={value.socialLink}>
                        <ServicesContainer image={value.image} text={value.name} />
                    </a>
                })
            }
        </main>
    )
}

export default ContactUs