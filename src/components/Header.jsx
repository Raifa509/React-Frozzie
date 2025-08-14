import React from 'react'
import { MdShoppingCart } from "react-icons/md";

function Header() {
    return (
        <>
            <section id='landing' className='container-fluid' style={{ height: '120px' }}>

                <div className='d-flex justify-content-between align-items-center'>

                    <div className='d-flex align-items-center'>
                        <img src="/logo.png" alt="" width={'100px'} style={{ height: '100px' }} />
                        <span style={{ marginLeft: '-25px', fontSize: '25px',fontFamily:'"Atma", system-ui', color: '#502201ff'}}>Frozzie</span>
                    </div>

                    <div>
                        <ul className='list-unstyled d-flex m-0 gap-4' style={{ color: '#502201ff', fontSize: '18px' }}>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Flavours</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                      <MdShoppingCart style={{fontSize:'30px',color:'#502201ff'}}/>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Header