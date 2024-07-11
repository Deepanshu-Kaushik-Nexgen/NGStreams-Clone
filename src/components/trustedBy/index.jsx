import React from 'react'
import './style.scss'
import Image1 from '../../Assets/TrustedBy/marque6.webp'

const TrustedBy = () => {
  const imageArray = [Image1, Image1, Image1, Image1, Image1, Image1, Image1]
  return (
    <>
    <div className="trustedByDiv">
      <h1 style={{ color: "red" }}>Trusted By</h1>
      <div className="sliderDiv">
        <marquee behavior="lazy" direction="left">
          {imageArray.map((item) => {
            return <img src={item} alt="" />
          })}
        </marquee>
      </div>
          </div>
    </>
  )
}

export default TrustedBy