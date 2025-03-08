import React from 'react'
import { useEffect, useState } from 'react'
import useProductsData from '../utils/useProductsData'
import ProductCard from '../components/ProductCard'
const Home = () => {

    const cards = useProductsData()
    console.log(cards.data.products);
    


    

  return (
    <div>
        <ProductCard data={cards.data.products}/>
    </div>
  )
}

export default Home