import React from 'react'

function About() {
  return (
    <>
      <section className="about-section py-4" id='about' >
        <div className="container">

          <div className='row'>
            <div className="col-6">
              <img id='about-img' src="/about-st.png" alt=""/>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <p id='about-head'>ABOUT</p>
              <p id='about-frozz'>
                Frozzie Ice Cream
              </p>
              <p id='about-para'>
                At Frozzie, we believe ice cream is more than just a dessert - it’s a
                little scoop of happiness. Made with the freshest ingredients,
                creamy textures, and unique flavors, every bite is crafted to bring
                joy to your taste buds.
              </p>
              <p >
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