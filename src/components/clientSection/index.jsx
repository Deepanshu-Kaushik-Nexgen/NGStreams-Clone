import React from 'react'
import './style.scss'

export default function index() {
    let client = [
        {
            index: 1,
            title: (
                <>
                    Increased viewing<br/> sessions upto {<span className='WordColor'><br/>72%<br/></span>} and managing over {<span className='WordColor'>72 million+<br/></span>} streaming sessions annually
                </>
            )
        },
        {
            index: 2,
            title: (
                <>
                    Transcoded <br/> more than {<span className='WordColor'><br/>5 million+<br/></span>} hours of media content in multiple formats in <br/>{<span className='WordColor'>HDR10</span>}
                </>
            )

        },
        {
            index: 3,
            title: (
                <>
                    Enriched <br/>{<span className='WordColor'>20 million +<br/></span>} metadata entries resulting in fantastic user engagement up to{<span className='WordColor'><br/>93%</span>}
                </>
            )
        },
        {
            index: 4,
            title: (
                <>
                    Enabled seamless streaming for{<span className='WordColor'><br/>10 million +<br/></span>} households with {<span className='WordColor'><br/>45%<br/></span>} increase in user satisfaction
                </>
            )
        },
        {
            index: 5,
            title: (
                <>
                    Analyzed over <br/>{<span className='WordColor'>17 million +<br/></span>} social interactions, contributing to a {<span className='WordColor'><br/>96%<br/></span>} efficiency in platform strategies
                </>
            )
        },
        {
            index: 6,
            title: (
                <>
                    Handled over{<span className='WordColor'><br/>5 billion+ <br/></span>} concurrent sessions, ensuring{<span className='WordColor'><br/>88%<br/></span>} less zaptime during peak loads
                </>
            )
        },
        {
            index: 7,
            title: (
                <>
                    Delivering to <br/>{<span className='WordColor'>10 million +<br/></span>} global users, providing a <br/>{<span className='WordColor'>58% <br/></span>} increase in content consumptions
                </>
            )
        },
    ]
    return (
        <>
            <div className="clientMain-Container">
                <div className="client-Container">
                    {client.map((item) => {
                        return <div key={item.index} className="client-Card">
                            <p>{item.title}</p>
                        </div>
                    })}
                </div>
                <div className="eclipse">
                    <div className="halfCircle"></div>
                </div>
            </div>
        </>
    )
}
