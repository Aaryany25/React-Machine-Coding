import React, { useEffect, useState } from 'react'
import Page from './components/page'
const ProductCard =({images,title})=>{
  return <div className='product-card'>
    <img src={images} alt={title} />
    <span>{title}</span>
  </div>
}
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
  
  return !products.length ? (<h1>No Products Found</h1>):(
    <div>
   {
    products.map(p=><ProductCard key={p.id} images={p.thumbnail} title={p.title}/>)
   }
    </div>
  )
}

export default App
