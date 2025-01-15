import React from 'react'
import ProductItem from './ProductItem'
// import img from '/public/neingh.jpg';

function ProducetList() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default ProducetList
