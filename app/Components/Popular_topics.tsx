import React from 'react'
import Image from 'next/image'
function Popular_topics() {
  return (
    <div className='container mx-auto pt-20'>
        <h1 className='py-6 px-4 text-3xl md:text-5xl font-bold'>Popular topics</h1>
        <div className='container mx-auto px-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5'>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="ai.svg" alt='ai' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'>Artificial Intelligence </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="leadership.svg" alt='leadership' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Leadership </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="slpay.svg" alt='slpay' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Supply Chain </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="computer.svg" alt='computer' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Computer Programming </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="proprty.svg" alt='proprty' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Probability </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="python.svg" alt='python' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Python </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="machen.svg" alt='machen' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Machine Learning </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="sc.svg" alt='sc' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Computer Science </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="writing.svg" alt='writing' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Writing </div>
            </div>
            <div className='flex md:flex-col items-center md:gap-0 gap-2 bg-gray-100 hover:shadow-lg hover:shadow-gray-400 cursor-pointer border-2 border-gray-100 p-2 rounded-md'>
                <Image src="statis.svg" alt='statis' width={100} height={100}/>
                <div className='text-black flex-1 text-start text-xl font-bold md:text-2xl md:text-center'> Statistics </div>
            </div>
        </div>
    </div>
  )
}

export default Popular_topics