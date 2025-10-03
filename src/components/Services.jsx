import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
    return (
        <div>
            <div className="service mb-16">
                <div className="grid m-auto grid-cols-1 w-[60%] gap-10 justify-center items-center text-center md:grid-cols-3" >
                    <div className="services-1 ">
                        <div><TbTruckDelivery className='icon' /></div>
                        <h3>Super Fast and Free Delivery</h3>
                    </div>
                    <div className="services-2 ">
                        <div className="services-colum-2"> <div><MdSecurity className='icon' /></div>
                            <h3>Super Fast and Free Delivery</h3></div>
                        <div className="services-colum-2"> <div><GiReceiveMoney className='icon' /></div>
                            <h3>Super Fast and Free Delivery</h3></div>
                    </div>
                    <div className="services-3 ">
                        <div><RiSecurePaymentLine className='icon' /></div>
                        <h3>Super Secure  Payment System</h3>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Services