  import React, { useEffect } from 'react'
  import { useProductContext } from '../context/productContext';
  import { useParams } from 'react-router-dom';


  const API = import.meta.env.VITE_API_BASE_URL + "/product";

  function Singleproduct() {
    const { getSingleProduct, isSignleLoading, singleProduct } = useProductContext();
    console.log("🚀 ~ Singleproduct ~ singleProduct:", singleProduct)

    const{_id}=useParams();

    const{brand,design,discount,image,name
,offer,price,rating,type,size}=singleProduct

    useEffect(()=>{
      getSingleProduct(`${API}?id=${_id}`);
    },[])
    return (
      <div>
        Singlr 
        <img src={singleProduct.image} alt="" />
        <h1>{singleProduct.category.name}</h1>/
      </div>
    )
  }

  export default Singleproduct