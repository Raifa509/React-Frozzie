import React from 'react'
import Rating from '@mui/material/Rating';

function Review() {
    return (
        <>
            <section>
                <div className='container-fluid p-5'>
                    {/* heading */}
                    <div className='d-flex justify-content-center align-items-center flex-column'>

                        <h3 className='text-center pb-2 fs-3 pt-3' style={{ color: 'rgba(99, 20, 93, 0.92)', fontFamily: '"Atma", system-ui' }}>   What Our Customers Say</h3>
                        <div className='mb-5' style={{ height: '2px', width: '100px', backgroundColor: 'rgba(99, 20, 93, 0.92)' }}></div>
                    </div>

                    {/* review cards */}

                    <div className="mt-4 row gap-3 d-flex justify-content-center align-items-stretch">
                        <div className="col-3 " style={{ backgroundColor: "#fff" }}>
                            <div className='p-4 shadow rounded bg-white w-100 h-100 d-flex flex-column'>
                                <Rating name="read-only" value={4} readOnly />
                                <p className="mt-3 flex-grow-1" style={{ fontSize: "14px", color: "#444" }}>
                                    “The chocolate scoop was super creamy and rich in flavor! Will definitely come back for more.”
                                </p>
                                <p className="mt-2 fw-bold" style={{ color: "rgba(99, 20, 93, 0.92)" }}>
                                    – Sarah L.
                                </p>
                            </div>
                        </div>

                        <div className="col-3" style={{ backgroundColor: "#fff" }}>
                            <div className='p-4 shadow rounded bg-white w-100 h-100 d-flex flex-column'>
                                <Rating name="read-only" value={5} readOnly />
                                <p className="mt-3 flex-grow-1" style={{ fontSize: "14px", color: "#444" }}>
                                    “The mint flavor is so refreshing, I could eat it every day. Highly recommend!”
                                </p>
                                <p className="mt-2 fw-bold" style={{ color: "rgba(99, 20, 93, 0.92)" }}>
                                    – Mark N.
                                </p>
                            </div>
                        </div>

                        <div className="col-3" style={{ backgroundColor: "#fff" }}>
                            <div className='p-4 shadow rounded bg-white w-100 h-100 d-flex flex-column'>
                                <Rating name="read-only" value={3} readOnly />
                                <p className="mt-3 flex-grow-1" style={{ fontSize: "14px", color: "#444" }}>
                                    “Absolutely loved the strawberry swirl. Perfect balance of sweet and fruity.”
                                </p>
                                <p className="mt-2 fw-bold" style={{ color: "rgba(99, 20, 93, 0.92)" }}>
                                    – John M.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Review