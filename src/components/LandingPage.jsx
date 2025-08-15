import React from 'react'

function LandingPage() {
    return (
        <>
            <div id='main-div-landing'>
               
                <h4 id='scoop'>Scoop into</h4>
                <h4 id='happiness'>Happiness</h4>
                <div className='d-flex justify-content-center align-items-center' style={{ marginTop:'10px' }}>
                    <img id='home-img' src="/home-img.png" alt="" width={'580px'} />
                </div>
                <img src="/leaf.png" alt="" width={'100px'} id='leaf1-img' />
                <img src="/leaf.png" alt="" width={'80px'} id='leaf2-img' />
                <img src="/mulberry.png" alt="" width={'70px'} id='leaf3-img' />
                <img src="/mulberry.png" alt="" width={'85px'} id='leaf4-img' />
                 <img src="/mulberry.png" alt="" width={'60px'} id='leaf5-img' />
                
            </div>

        </>
    )
}

export default LandingPage