import React, { useEffect, useState } from 'react'
import './style.scss'
import frame from '../../Assets/icons/Frame.png'
import Image1 from '../../Assets/HeroSectionImg/image 1.png'
import Image2 from '../../Assets/HeroSectionImg/Frame 16.png'
import Image3 from '../../Assets/HeroSectionImg/Frame 18.png'
import Image4 from '../../Assets/HeroSectionImg/Frame 21.png'


function Index() {
  const names = [' Stream', ' Thrive', ' Boost']
  const totalNames = names.length

  const [currentIndex, setCurrentIndex] = useState(0)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setAnimate(true)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalNames);
    }, 1200);
    return () => clearInterval(intervalID);
  }, [totalNames])

  const onAnimationEnd = () => {
    setAnimate(false)
  }

  return (
    <>
      <div className="homeContainer">
        <div className="leftSide">
          <div className="heroHeading">
            <div>
              Unleash
              <span className='headGrad'> AI</span>'s
            </div>
            <div>
              prowess to
              <span className={`headGrad ${animate ? 'fade-in-image' : ''}`} onAnimationEnd={onAnimationEnd} >{names[currentIndex]}</span>
            </div>
            beyond limits !
          </div>
          <p className='textDesc'>NGStreams is a world class end-to-end product suite that enables you to step into the future where user satisfaction takes centre stage on Web, Android, iOS and Smart TVs.</p>

          <div className="features">
            <span className='featuresItems'><img src={frame} alt="" />Real Time Monitoring</span>
            <span className='featuresItems'><img src={frame} alt="" />Proactive Anomaly Detection</span>
          </div>
          <div className="features">
            <span className='featuresItems'><img src={frame} alt="" />Playback Optimisation</span>
            <span className='featuresItems'><img src={frame} alt="" />Data-Driven Decision-Making</span>
          </div>
        </div>
        <div className="hero-images">
          <img className='img2' src={Image2} alt="" />
          <img className='img3' src={Image1} alt="" />
          <img className='img1' src={Image3} alt="" />
          <img className='img4' src={Image4} alt="" />
        </div>
      </div>
    </>
  )
}

export default Index