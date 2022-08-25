import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logoIMG from '../../../public/squanch.png'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [belowMenu, setBelowMenu] = useState(false)
  const [scrollDown, setScrollDown] = useState(false)

  useEffect(() => {
    const handleScrollDown = () => {
      if (window.scrollY >= 80) setScrollDown(true) 
      else setScrollDown(false)
    }

    window.addEventListener('scroll', handleScrollDown)
  }, [])

  const handleBelowMenu = () => {
    setBelowMenu(!belowMenu)
  }

  return (
    <div className={scrollDown ? 'fixed shadow-xl w-full md:h-20 z-[999999] bg-[#ecf0f3]' : 'fixed w-full md:h-20 z-[9999999]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='flex items-center ml-10 cursor-pointer'>
          <Image alt="Squanchy Head" src={logoIMG} className=""height={80} width={80}/>
          <span className='uppercase mt-5 tracking-widest'>Squanchy!</span>
        </div>

        <div className='hidden md:flex justify-center mr-10 tracking-widest font-bold uppercase'>
          <div className='ml-10 py-4 cursor-pointer'>
            <a href="#" className='focus:text-green-500 focus:border-b-4 focus:border-green-500 py-2'>personagens</a>
          </div>

          <div className='ml-10 py-4 cursor-pointer'>
            <a href="#" className='focus:text-green-500 focus:border-b-4 focus:border-green-500 py-2'>episódios</a>
          </div>

          <div className='ml-10 py-4 cursor-pointer'>
            <a href="#" className='focus:text-green-500 focus:border-b-4 focus:border-green-500 py-2'>locais</a>
          </div>
        </div>

        <div className='md:hidden mr-5' onClick={handleBelowMenu}>
          { belowMenu ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }
        </div>
      </div>

      <div className={belowMenu ? 'tracking-widest text-lg font-bold p-2 uppercase' : 'hidden'}>
        <ul>
          <a href="#">
            <li className='focus:text-green-500 focus:border-b-4 focus:border-green-500 py-2' tabIndex={1}>personagens</li>
          </a>

          <a href="#">
            <li className='focus:text-green-500 focus:border-b-4 focus:border-green-500 py-2' tabIndex={2}>episódios</li>
          </a>

          <a href="#">
            <li className='focus:text-green-500 focus:border-b-4 focus:border-green-500 py-2' tabIndex={3}>locais</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar