import React, { useEffect, useState } from 'react'
import './style.scss'
import ADInsertion from '../../Assets/ClientSec/qosss.webp'
import QOS from '../../Assets/ClientSec/comp.jpg'
import Transcode from '../../Assets/ClientSec/encrich.jpg'
import SmartMeta from '../../Assets/ClientSec/comp.jpg'
import CRA from '../../Assets/ClientSec/set-box.jpg'
import VROTT from '../../Assets/ClientSec/enrichment.png'
import PERSONALISATION from '../../Assets/ClientSec/cloud-tv.jpg'
import SETTOPBOX from '../../Assets/ClientSec/traffic.jpg'


export default function Index() {
  const [activeButton, setActiveButton] = useState(1)

  // useEffect(() => {
  //   let intervalId = setInterval(() => {
  //     setActiveButton(prevButton => (prevButton < 8 ? prevButton + 1 : 1));
  //   }, 1000);
  //   return () => clearInterval(intervalId);
  // },[])

  function buttonToggleFunction(id) {
    setActiveButton(id)
  }
  return (
    <>
      <div className="ArticlesComponentContainer">
        <h2>Accelerate to a digital future with our products</h2>
        <p>Customer centricity, innovation and ethical corporate governance are at our core.</p>

        <div className="articleSection">
          <div className="articleSecBtn">
            <div className={`btn ${activeButton === 1 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(1)}>Ad Insertion and Targeting</div>
            <div className={`btn ${activeButton === 2 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(2)}>QoS/Qc For VOD OTT Platforms</div>
            <div className={`btn ${activeButton === 3 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(3)}>Transcoding and Adaptive Streaming</div>
            <div className={`btn ${activeButton === 4 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(4)}>Smart Meta Data</div>
            <div className={`btn ${activeButton === 5 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(5)}>CRA</div>
            <div className={`btn ${activeButton === 6 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(6)}>VR OTT Watch</div>
            <div className={`btn ${activeButton === 7 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(7)}>Personalisation and Recommendation</div>
            <div className={`btn ${activeButton === 8 ? "activeBtn" : ""}`} onClick={() => buttonToggleFunction(8)}>SetTop Box</div>
           
          </div>
          {activeButton === 1 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2>Unlocking Audience Engagement:</h2>
              <h2 className="ColorHeading">Precision Ad Insertion & Targeting</h2>
              <p>Gain unparalleled understanding of audience sentiments and trends with our social analytics tool. Harness data-driven insights to optimize engagement, elevate brand presence, and drive meaningful interactions.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={ADInsertion} alt="" />
            </div>
          </div> : ""}

          {activeButton === 2 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2 className="ColorHeading">Delivering Seamless Streaming:</h2>
              <h2>Elevating Quality Assurance for VOD OTT Platforms</h2>
              <p>Streamlining content delivery, our QoS/QC solution ensures flawless viewing experiences on VOD OTT platforms, enhancing customer satisfaction and retention.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={QOS} alt="" />
            </div>
          </div> : ""}

          {activeButton === 3 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2 className="ColorHeading">Empowering Seamless Viewing: </h2>
              <h2>Transformative Transcoding for Adaptive Streaming</h2>
              <p>Revolutionizing content delivery, our transcoding solution optimizes media for flawless playback across devices, ensuring a seamless streaming experience. With adaptive streaming, content dynamically adjusts to network conditions, guaranteeing uninterrupted viewing for audiences worldwide.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={Transcode} alt="" />
            </div>
          </div> : ""}

          {activeButton === 4 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2>Enhance Engagement, Enrich Experience: Elevating OTT Content with Metadata <span className="ColorHeading">Mastery</span></h2>
              
              <p>Empower your OTT platform with enriched metadata, unlocking deeper engagement and personalized user experiences. Our solution ensures seamless content discovery and relevance, driving viewer satisfaction and retention.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={SmartMeta} alt="" />
            </div>
          </div> : ""}

          {activeButton === 5 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2 className="ColorHeading">Unleash Insights, Amplify Impact:</h2>
              <h2>Transforming Social Analytics into Actionable Strategies.</h2>
              <p>Gain unparalleled understanding of audience sentiments and trends with our social analytics tool. Harness data-driven insights to optimize engagement, elevate brand presence, and drive meaningful interactions.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={CRA} alt="" />
            </div>
          </div> : ""}

          {activeButton === 6 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2>Unlocking Audience Engagement:</h2>
              <h2 className="ColorHeading">Transforming Entertainment </h2>
              <h2>with VR OTT Watch.</h2>
              <p>Immerse yourself in virtual worlds with our VR OTT Watch technology, delivering high-resolution content and seamless streaming experiences. Harnessing advanced VR capabilities, it ensures compatibility across a range of devices for immersive entertainment anytime, anywhere.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={VROTT} alt="" />
            </div>
          </div> : ""}

          {activeButton === 7 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2>Tailored Experiences, Endless Discoveries: Redefining Engagement Through <span className="ColorHeading">Personalization and Recommendation</span></h2>
              <p>Elevate user satisfaction with our cutting-edge personalization and recommendation engine. Harnessing AI, it delivers curated content, enhancing engagement and driving retention.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={PERSONALISATION} alt="" />
            </div>
          </div> : ""}

          {activeButton === 8 ? <div className="articleSecData">
            <div className="articleSecText" id='AdInsertion'>
              <h2>Versatile Entertainment Hub: Home Viewing Experience with smart <span className="ColorHeading">Set-Top boxes</span></h2>
              
              <p>An all-in-one device offering diverse entertainment options and seamless connectivity for an enhanced viewing experience at the comfort of your home.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={SETTOPBOX} alt="" />
            </div>
          </div> : ""}
        </div>
      </div>
      <div className="space" style={{height: "50px", backgroundColor: "#EDEDF7"}}></div>
    </>
  )
}
