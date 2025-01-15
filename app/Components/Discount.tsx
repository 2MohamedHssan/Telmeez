import React from 'react'
function Discount() {
  return (
    <div>
        <div className='flex min-h-[400px]'>
            <div className='bg-[#9333ea] text-white px-4 md:px-10 py-4 md:py-20 italic font-bold'>
                <h1 className='text-4xl md:text-6xl my-8'>Start the New Year by investing in yourself.</h1>
                <p className='font-bold text-lg md:text-xl mb-8'>Fuel your success in 2025 and save up to 30% with code NYEDX25. Offer ends January 29, 2025</p>
                <button className='px-10 py-4 rounded-md bg-purple-700 hover:bg-white hover:text-purple-700 hover:border-2 hover:border-purple-700'>learn more</button>
            </div>
            <div className='w-full hidden md:block' style={{ backgroundSize:'cover', backgroundImage: "url(bgdisc.webp)" }}>
            </div>
        </div>
    </div>
  )
}

export default Discount