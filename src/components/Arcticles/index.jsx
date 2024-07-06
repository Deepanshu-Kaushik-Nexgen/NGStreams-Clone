import React, { useState } from 'react'
import './style.scss'
import ADInsertion from '../../Assets/ClientSec/qosss.webp'

export default function Index() {
  const [accordian1, setAccordian1] = useState(true)
  const [accordian2, setAccordian2] = useState(false)
  const [accordian3, setAccordian3] = useState(false)
  const [accordian4, setAccordian4] = useState(false)
  const [accordian5, setAccordian5] = useState(false)
  const [accordian6, setAccordian6] = useState(false)
  const [accordian7, setAccordian7] = useState(false)

  function toggleAccordian1() {

  }
  return (
    <>
      <div className="ArticlesComponentContainer">
        <h2>Accelerate to a digital future with our products</h2>
        <p>Customer centricity, innovation and ethical corporate governance are at our core.</p>

        <div className="articleSection">
          <div className="articleSecBtn">
            <div className="btn">Ad Insertion and Targeting</div>
            <div className="btn">QoS/Qc For VOD OTT Platforms</div>
            <div className="btn">Transcoding and Adaptive Streaming</div>
            <div className="btn">Smart Meta Data</div>
            <div className="btn">CRA</div>
            <div className="btn">VR OTT Watch</div>
            <div className="btn">Personalisation and Recommendation</div>
            <div className="btn">SetTop Box</div>
          </div>
          <div className="articleSecData">
            <div className="articleSecText">
              <h2>Unlocking Audience Engagement:</h2>
              <h2 className="ColorHeading">Precision Ad Insertion & Targeting</h2>
              <p>Gain unparalleled understanding of audience sentiments and trends with our social analytics tool. Harness data-driven insights to optimize engagement, elevate brand presence, and drive meaningful interactions.</p>
              <div className='button'>Discover More</div>
            </div>
            <div className="articleSecImg">
              <img src={ADInsertion} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
