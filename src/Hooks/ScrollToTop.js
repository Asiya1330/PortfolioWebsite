import React, { useState, useEffect } from 'react'
import { CgChevronDoubleUp } from 'react-icons/cg'

const ScrollToTop = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1000) {
                setShowScrollTopButton(true)
            }
            else {
                setShowScrollTopButton(false)
            }
        })
    }, [])
    const scrollToSection = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <div className='fixed bottom-[15px] right-[20px] text-white  z-10 '>
                {showScrollTopButton &&
                    <CgChevronDoubleUp className='h-8 w-8 cursor-pointer border-2' onClick={scrollToSection} />
                }
            </div>
        </>
    )
}

export default ScrollToTop
