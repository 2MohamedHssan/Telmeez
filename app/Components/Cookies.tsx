"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

function Cookies() {
  const [view, setView] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setView(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {view && (
        <div className="w-full h-full fixed bg-[#fffffff3] top-0 left-0 z-50">
          <div className="fixed bottom-1/2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white z-[200] px-6 py-10 rounded-lg shadow-lg text-lg font-semibold">
          <AiOutlineClose onClick={() => setView(false)}
            className="cursor-pointer absolute right-2 top-2 w-6 h-6 rounded-sm bg-gray-700 hover:bg-red-500"
          />
          <p> This website is under construction. Stay tuned for updates!</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default Cookies;
