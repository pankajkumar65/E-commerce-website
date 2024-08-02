import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import all_product from '../Components/Assets/all_product'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import Productdisp from '../Components/ProductDisplay/Productdisp';
import DescriptionBox from '../Components/ProductDisplay/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';
 
const Product = () => {
  // const{all_product} =  useContext(ShopContext);
  const{productId} = useParams()
  const product = all_product.find((e)=> e.id === Number(productId));   
  return (
    <div>
      <Breadcrum product={product}/>
        <Productdisp product={product}/>
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )
}

export default Product