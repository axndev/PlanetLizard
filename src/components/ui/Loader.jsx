import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import React from 'react'

const Loader = () => {
    useGSAP(()=> {
        gsap.to('.loader',{
            top:'-100%',
            ease: "power1.in",
            duration:1
        })
    })
  return (
    <div className='bg-(--dark) h-screen fixed w-full z-10 loader left-0 top-0'>

    </div>
  )
}

export default Loader