import React, { useEffect, useState } from 'react'
import Page from './components/page'

function App() {
  const [products, setproducts] = useState([])
  
  const FetchData = async()=>{
    const data = await fetch("https://dummyjson.com/products")
    const json = await data.json()
    setproducts(json.products)
// json.products
  }
  useEffect(() => {
  
  FetchData()
    
  }, [])
  
  return (
    <div>
   
    </div>
  )
}

export default App
