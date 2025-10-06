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
                <div className='mb-16 bg-black text-white'>
                <div className="intro-data text-4xl">Check Now!</div>
                <div className="common-heading text-3xl">Our Featre Services</div>
                </div>
            <div className="grid grid-cols-3 m-auto">
                {
                    featureProducts.map((curElem)=>{
                        console.log("🚀 ~ FeatureProdcut ~ curElm:", curElem)
                        return <Product key={curElem._id}{...curElem}/>
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default FeatureProdcut