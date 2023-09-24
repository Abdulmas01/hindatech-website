import facebook from "../images/facebook.png";
import email from "../images/email.png";
import whatapp from "../images/whatsapp.png";
import ticktok from "../images/tik-tok.png";
import twitter from "../images/twitter.png";
import ContactUsContainer from "../components/ContactUsContainer";

const ContactUs = () => {
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
        new Social("ticktok", ticktok, "https://www.tiktok.com/@hindatech", "http://tiktok.com/@hindatech"),
        new Social("WhatsApp", whatapp, "+2347026065634", "https://wa.me/+2347026065634"),
        new Social("Twitter", twitter, "http://twitter.com/hindatech", "http://twitter.com/hindatech"),
    ]
    return (
        <main>
            <h1 className="body-header">
                Contact Us
            </h1>
            {
                listSocial.map((value, index) => {
                    return <a key={index} href={value.socialValue} target="_blank" rel="noreferrer">
                        <ContactUsContainer image={value.image} text={value.name} link={value.socialLink} />
                    </a>
                })
            }
        </main>
    )
}

export default ContactUs