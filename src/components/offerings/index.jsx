import React from 'react'
import Image1 from '../../Assets/Offerings/img1.webp'
import Image2 from '../../Assets/Offerings/News.webp'
import Image3 from '../../Assets/Offerings/Education.webp'
import Image4 from '../../Assets/Offerings/sports.webp'
import Image5 from '../../Assets/Offerings/fitness.webp'
import './style.scss'


const index = () => {
    const Data = [
        {image: Image1, Heading: "Media & Broadcast", Desc: "Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement."},
        {image: Image2, Heading: "Media & Broadcast", Desc: "Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement."},
        {image: Image3, Heading: "Media & Broadcast", Desc: "Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement."},
        {image: Image4, Heading: "Media & Broadcast", Desc: "Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement."},
        {image: Image5, Heading: "Media & Broadcast", Desc: "Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement."}
    ]
    return (
        <>
            <div className="offeringsContainer">
                <div className="semiCircle">
                </div>
                <div className="headings">
                    <h1>Innovative solutions tailored for diverse business landscapes</h1>
                    <h4>Power up your online business on the rock-solid foundation created by NGStreams.</h4>
                </div>
                <div className="cardsRows">
                    {/* <div className="card">
                        <div className="cardBackground">
                            <img src={Image1} alt="" />
                        </div>
                        <div className="anim">
                            <div className="title">Media & Broadcast</div>
                            <div className="desc">Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement.</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardBackground">
                            <img src={Image2} alt="" />
                        </div>
                        <div className="anim">
                            <div className="title">Media & Broadcast</div>
                            <div className="desc">Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement.</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardBackground">
                            <img src={Image3} alt="" />
                        </div>
                        <div className="anim">
                            <div className="title">Media & Broadcast</div>
                            <div className="desc">Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement.</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardBackground">
                            <img src={Image4} alt="" />
                        </div>
                        <div className="anim">
                            <div className="title">Media & Broadcast</div>
                            <div className="desc">Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement.</div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cardBackground">
                            <img src={Image5} alt="" />
                        </div>
                        <div className="anim">
                            <div className="title">Media & Broadcast</div>
                            <div className="desc">Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement.</div>
                        </div>
                    </div> */}

                        {Data.map((item, index)=>{
                            return <div className="card" key={index}>
                                <img src={item.image} alt="" />
                                <div className="card-content">
                                    <h3>{item.Heading}</h3>
                                    <p>{item.Desc}</p>
                                </div>
                            </div>
                        })}
                </div>
            </div>
        </>
    )
}

export default index