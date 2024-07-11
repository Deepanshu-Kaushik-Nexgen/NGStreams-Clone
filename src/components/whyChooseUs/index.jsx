import React from 'react'
import './style.scss'
import Image from '../../Assets/WhyChoose/Banner.webp'

const WhyChooseUs = () => {
  return (
    <>
    <div className="whyChooseContainer">
        {/* <div className="background1"></div> */}
        <div className="background2">
        <div className="contentMainDiv">
          <div className="imageDiv">
            <img src={Image} alt="" />
          </div>
          <div className="contentDiv">
            <div className="headings">
             <h3> Why Media Houses love NGStreams</h3>
             <p>People matter more than technical specs do.We put people first.</p>
             <p className='colorGradient'>We put people first.</p>
            </div>
            <div className="contentCards">
                <div className="itemCard">
                <h3>OTT Solution Provider in India</h3>
                <p>We aid businesses in digital engineering initiatives with dependable guidance.</p>
                </div>
                <div className="itemCard">
                <h3>Best in class Quality of Service and Experience</h3>
                <p>We deliver top-tier service and exceptional experiences, setting the benchmark for excellence</p>
                </div>
                <div className="itemCard">
                <h3>Provide exceptional customer support</h3>
                <p>We offer outstanding help and assistance to ensure top-notch customer satisfaction and support.</p>
                </div>
                <div className="itemCard">
                <h3>OTT Solution Provider in India</h3>
                <p>We help startups and enterprises to drive digital engineering initiatives by helping them.</p>
                </div>
                <div className="itemCard">
                  <h3>Feature case studies and testimonials</h3>
                  <p>We help startups and enterprises to drive digital engineering initiatives by helping them.</p>
                </div>
                <div className="itemCard">
                  <h3>Provide recognition on social media</h3>
                  <p>We help you shine on visibility through social media channels for enhanced recognition.</p>
                </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default WhyChooseUs