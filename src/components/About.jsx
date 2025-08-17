import React from 'react'

function About() {
    return (
        <>
            <section className="about-section py-4 vh-100" >
                <div className="container">

                    <div className='row'>
                        <div className="col-6">
                            <img src="/about-st.png" alt="" width={'460'} style={{marginLeft:'30px'}}/>
                        </div>
                        <div className="col-6 d-flex flex-column justify-content-center">
  <p className='aboutText'>ABOUT</p>
  <p style={{marginTop:'-16px', fontSize:'25px', color:'rgba(99, 20, 93, 0.92)'}}>
    Frozzie Ice Cream
  </p>
  <p style={{fontSize:'17px', lineHeight:'2', color:'#444'}}>
    At Frozzie, we believe ice cream is more than just a dessert - it’s a 
    little scoop of happiness. Made with the freshest ingredients, 
    creamy textures, and unique flavors, every bite is crafted to bring 
    joy to your taste buds.
  </p>
  <p style={{fontSize:'17px', lineHeight:'2', color:'#444'}}>
    From timeless classics to bold new blends, Frozzie is here to 
    make your sweet moments unforgettable. Whether it’s a sunny day, 
    a family gathering, or just a craving, we’ve got the perfect flavor for you.
  </p>
  
</div>

                    </div>


                </div>
            </section>

        </>
    )
}

export default About