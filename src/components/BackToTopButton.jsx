import React, { useEffect, useState } from 'react'

const BackToTopButton = () => {

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) {
        setVisible(true)
    } else if (scrolled <= 300) {
        setVisible(false)
    }
  }

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible)
  },[])
  
  return (
    <button 
        className={`${visible ? "fixed" : "hidden"} w-12 h-12 bottom-5 right-5 bg-yellow-200 rounded-full border-2 border-red-500`}
        onClick={scrollToTop}
    >
        <div className='flex w-full items-center justify-center'>
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="35" 
                height="35"
                viewBox="0 0 24 24" 
                style={{fill: "rgba(239, 68, 68, 1)"}}
            >
                <path d="m6.293 11.293 1.414 1.414L12 8.414l4.293 4.293 1.414-1.414L12 5.586z"></path>
                <path d="m6.293 16.293 1.414 1.414L12 13.414l4.293 4.293 1.414-1.414L12 10.586z"></path>
            </svg>
        </div>
    </button>
  )
}

export default BackToTopButton