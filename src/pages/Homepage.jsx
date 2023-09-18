import React from 'react'
import Footer from '../extentions/Footer'
import mission from "../images/mission.jpg";
import target from "../images/target.png";
import ux from "../images/ux.png";
import school from "../images/education.png";
import networking from "../images/computer.png";
import help from "../images/helping.png";
import app from "../images/user-interface.png";
import ServicesContainer from '../components/ServicesContainer';
import SocialPages from '../extentions/SocialPages';

const Homepage = () => {
  return (
    <>
      <main>
        <section>
          <div className="flex-container">
            <div className='flex-content'>
              <h1 className='title'>Improving The World Through Tech</h1>
              <p className="body">
                Creating Tech Based Inovations In Nigeria, By Creating Hardwares And Software That Aid In day To Day Life
              </p>
            </div>
            <div className="flex-image-container only-web">
              <img src={help} alt="" />
            </div>
          </div>

        </section>

        <section>
          <h1 style={{
            marginLeft: "20px"
          }} className='vision-header'>Our Services</h1>
          <div className="grid-container">
            <ServicesContainer image={app} text={"App Development"} />
            <ServicesContainer image={school} text={"Web Development"} />
            <ServicesContainer image={networking} text={"Networking"} />
            <ServicesContainer image={ux} text={"Ui/Ux Design"} />
            <ServicesContainer image={school} text={"School Management"} />
            <ServicesContainer image={app} text={"Modelling And Animation"} />
          </div>
        </section>



        <section>
          <h1 className='align-goal'>Mission</h1>
          <div className='mission-container'>

            <div className="mission-content">
              <p><q>Provide Solution To All Nigeria Tech related problem</q></p>
            </div>
            <div className="mission-image-container">
              <img src={mission} alt="" />
            </div>
          </div>

        </section>

        <section>
          <h1 className='vision-header'>Vision</h1>
          <div className='mission-container'>
            <div style={{
              paddingLeft: "20px"
            }} className="mission-image-container">
              <img src={target} alt="" />
            </div>
            <div className="mission-content">
              <p><q>To Be The Best Tech Company That Provide Solution To Day To Day Problem</q></p>
            </div>

          </div>
        </section>
        <section>
          <h1
            style={{
              marginTop: "60px",
              marginLeft: "20px"
            }}
            className='vision-header'
          >
            Contact Us
          </h1>
          <SocialPages />
        </section>

      </main>
      <Footer />
    </>

  )
}

export default Homepage