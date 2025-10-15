import React from 'react'
import { useProductContext } from '../context/productContext'
import Product from '../Pages/Product';
function FeatureProdcut() {
    const { isLoading, featureProducts } = useProductContext();
    console.log("🚀 ~ featureProducts:", featureProducts)

    if (isLoading) {
        return <div>......Loading</div>
    }
    return (
        <div className='mb-16'>
            <div className="product-container  text-center ">
                <div className='mb-16 bg-black text-white p-2'>
                    <div className="intro-data text-2xl">Check Now!</div>
                    <div className="common-heading text-xl">Our Featre Services</div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 m-auto  w-[80%] ">
                    {
                        featureProducts.map((curElem) => {
                            console.log("🚀 ~ FeatureProdcut ~ curElm:", curElem)
                            return <Product key={curElem._id}{...curElem} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FeatureProdcut