import React from 'react'
import Image1 from '../../Assets/Offerings/img1.webp'
import Image2 from '../../Assets/Offerings/News.webp'
import Image3 from '../../Assets/Offerings/Education.webp'
import Image4 from '../../Assets/Offerings/sports.webp'
import Image5 from '../../Assets/Offerings/fitness.webp'
import './style.scss'


const index = () => {
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
                    <div className="card">
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default index