import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useProductsData = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async () => {
    try{
        const response = await axios.get('https://dummyjson.com/products')
        setData(response.data)
        setLoading(true)
        

    }   
    catch(error){
        console.log(error)
    }
}

    return {data, loading}


}

export default useProductsData