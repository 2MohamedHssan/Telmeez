import { List } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


const products = [
  {
    url:'/tow.jpg',
    coursName:'Reactjs',
    category:'Teach',
    price:'79.99',
  },
  {
    url:'/bgone.jpg',
    coursName:'SEO',
    price:'59.99',
    category:'Teach'
  },
  {
    url:'/one.jpg',
    coursName:'Anguler',
    price:'89.99',
    category:'Teach'
  },
  {
    url:'/neingh.jpg',
    coursName:'IT',
    price:'69.99',
    category:'Network'
  },
  {
    url:'/three.jpg',
    coursName:'Back End',
    price:'99.99',
    category:'Teach'
  },
  {
    url:'/bgtow.jpg',
    coursName:'Flutter',
    price:'79.99',
    category:'Teach'
  },
  {
    url:'/four.jpg',
    coursName:'AI',
    price:'109.99',
    category:'Teach'
  },
  {
    url:'/four.jpg',
    price:'99.99',
    coursName:'Cyber Security',
    category:'Security'
  },
]
function ProductItem() {
  return (
   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
    { products.map((product,index)=>(
        <div key={index} className='cursor-pointer transition-all duration-200 hover:shadow-md hover:border p-1 hover:border-teal-500 rounded-lg'>
          <Image src={`${product.url}`} alt={`${product.coursName} Img`} width={400} height={350} className='rounded-t-lg h-[190px] w-full object-cover'/>
          <div className='flex justify-between rounded-b-lg p-3 bg-gray-50 items-center'> 
              <div>
                  <h2 className='font-bold w-full line-clamp-1 text-[14px]'>{product.coursName}</h2>
                  <div className='text-[#777] flex items-center gap-1'>
                      <List className='w-4 h-4'/>
                      <p className='text-[12px] font-bold'>{product.category}</p>
                  </div>
              </div>
              <h2>${product.price}</h2>
          </div>
      </div>
    ))}
    </div>
  )
}

export default ProductItem
