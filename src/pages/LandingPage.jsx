import React from 'react'

function LandingPage() {
  return (
    <>
   <div id='main-div-landing'>
        <p id='cursive-text' className='text-center' style={{marginTop:'-25px'}}>Choose your taste</p>
        <div className='d-flex justify-content-center align-items-center' style={{marginTop:'-90px'}}> 
            <img src="/landing-img.png" alt="" width={'550px'} />
        </div>
        <img src="/mulberry.png" alt="" width={'100px'} id='leaf1-img'/>
        <img src="/mulberry.png" alt="" width={'60px'} id='leaf2-img'/>
         <img src="/mulberry.png" alt="" width={'60px'} id='leaf3-img'/>
                <img src="/mulberry.png" alt="" width={'60px'} id='leaf4-img'/>
   </div>
   
    </>
  )
}

export default LandingPage