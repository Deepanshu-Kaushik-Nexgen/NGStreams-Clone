import React from 'react'
import './style.scss'
import NgStreams from '../../Assets/NGSlogo.c9d0f1eb.svg'
import Twitter from '../../Assets/icons/Twitter.svg'
import Instagram from '../../Assets/icons/Instagram.svg'
import Youtube from '../../Assets/icons/Youtube.svg'
import Linkedin from '../../Assets/icons/Linkedin.svg'

const index = () => {
  return (
    <>
    <div className="footerContainer">
        <div className="footerItem-1">
            <img src={NgStreams} alt="" style={{height: "30px"}} />
            <p style={{fontSize: "14px"}}>We help startups and enterprises to drive digital engineering initiatives by helping them provide a rich, seamless experience to their customers across digital channels resulting in higher engagement, efficiency, and profitability.</p>
            <div className="icons">
            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Youtube} alt="" />
            <img src={Twitter} alt="" />
            </div>
           <p className='copyRight'>Copyright 2023 © NGStreams. All right reserved. </p>
        </div>
        <div className="footerItem-2">
            <h4>Products</h4>
            <ul>
                <li>QoE/ QoS</li>
                <li>Transcoding</li>
                <li>Content Enrichment</li>
                <li>Social Analytics</li>
                <li>SetTop Box</li>
                <li>Traffic Management</li>
            </ul>
        </div>
        <div className="footerItem-3">
        <h4>Services</h4>
            <ul>
                <li>IPTV/OTT Platform</li>
                
            </ul>
        </div>
        <div className="footerItem-4">
        <h4>Company</h4>
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
            </ul>
        </div>
        <div className="footerItem-5">
        <h4>Other Links</h4>
            <ul>
                <li>Policy</li>
            </ul>
        </div>
        <div className="footerItem-6">
            <h4>Quick Connect</h4>
            <h5>Call Us</h5>
            <p>+91-9319765541</p>
            <h5>Email Us</h5>
            <p>sales@nexgeniots.com</p>
            <p>support@nexgeniots.com</p>
        </div>
    </div>
    </>
  )
}

export default index