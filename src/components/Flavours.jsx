import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";


function Flavours() {
    return (
        <>
            <section className='min-vh-100 w-100' style={{ backgroundColor: 'white' }}>
                <div className='d-flex justify-content-center align-items-center flex-column'>

                    <h3 className='text-center pt-5 pb-2 fs-3' style={{ color: 'rgba(99, 20, 93, 0.92)', fontFamily: '"Atma", system-ui' }}>Pick Your Favorite Flavor</h3>
                    <div className='mb-5' style={{height:'2px',width:'100px',backgroundColor:'rgba(99, 20, 93, 0.92)'}}></div>
                </div>
                <div className='container-fluid mb-5' style={{ marginTop: '15px' }}>
                    <div className="row w-100">
                        <div className='col-2'></div>
                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(161, 119, 85, 0.603)' }}><img src="/choco-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Chocolate</p>
                            </div>

                        </div>

                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(129, 223, 67, 0.6)' }}><img src="/pista-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Pistachio</p>
                            </div>

                        </div>

                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(255, 187, 224, 1)' }}><img src="/strawberry-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Strawberry</p>
                            </div>

                        </div>
                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(164, 107, 64, 1)' }}><img src="/butter-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Spanish Delight</p>
                            </div>
                        </div>
                        <div className='col-2'></div>
                    </div>
                    <div className="row w-100">
                        <div className='col-2'></div>
                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(238, 218, 202, 1)' }}><img src="/spanish-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Butterscotch</p>
                            </div>
                        </div>

                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(220, 202, 238, 1)' }}><img src="/bluberry-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Blueberry</p>
                            </div>
                        </div>

                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(202, 238, 204, 1)' }}><img src="/mint-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Mint</p>
                            </div>

                        </div>
                        <div className="col-2 p-3 ">
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                                <div className='flavour-card' style={{ border: '2px solid rgba(246, 236, 152, 1)' }}><img src="/mango-f.png" alt="" /></div>
                                <p className='flavour-name text-center'>Mango</p>
                            </div>


                        </div>
                        <div className='col-2'></div>
                    </div>
                </div>



            </section>
        </>
    )
}

export default Flavours