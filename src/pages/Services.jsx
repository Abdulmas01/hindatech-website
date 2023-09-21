
import ux from "../images/ux.png";
import school from "../images/education.png";
import networking from "../images/computer.png";
import webdev from "../images/webdev.png";
import animation from "../images/animation.png";
import app from "../images/user-interface.png";
import ServicesContainer from '../components/ServicesContainer';

const Services = () => {
    return (
        <main>
            <h1>Our Services</h1>
            <div className="grid-container">
                <ServicesContainer image={app} text={"App Development"} />
                <ServicesContainer image={webdev} text={"Web Development"} />
                <ServicesContainer image={networking} text={"Networking"} />
                <ServicesContainer image={ux} text={"Ui/Ux Design"} />
                <ServicesContainer image={school} text={"School Management"} />
                <ServicesContainer image={animation} text={"Modelling And Animation"} />
            </div>
        </main>
    )
}

export default Services