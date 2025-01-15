'use client'
import ProducetList from './ProducetList'

function ProducetSection() {
  return (
    <div className='px-6 md:px-20 py-10'>
        <h2 className='text-xl my-4 md:text-4xl font-bold'>Our Letast Products</h2>
        <ProducetList />
    </div>
  )
}

export default ProducetSection
