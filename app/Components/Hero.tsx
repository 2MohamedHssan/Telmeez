
function Hero() {
  return (
    <div>
      <div className="px-2 min-h-screen relative" style={{ backgroundSize:'cover', backgroundImage: "url(bgone.jpg)" }}>
          <div className="absolute top-0 left-0 w-full h-full bg-[#000000de]"></div>
          <div className="flex justify-center items-center h-screen text-white">
          <div className="max-w-md z-10 text-center">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 font-sans italic">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="bg-purple-600 p-3 text-white rounded-md hover:bg-purple-800">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero