import { useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Navbar = () => {
  const [belowMenu, setBelowMenu] = useState(false)
  const router = useRouter()

  const handleBelowMenu = () => {
    setBelowMenu(!belowMenu)
  }

  return (
    <div className='w-full md:h-20 z-[9999999] shadow-xl py-4 md:mb-32 lg:mb-8 sm:mb-0'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <div className='flex items-center ml-10 cursor-pointer'>
          <Link href='/'>
            <h2 className='uppercase tracking-widest font-getSchwifty text-[#00B0C8]'>Squanchy!</h2>
          </Link>
        </div>

        <div className='hidden lg:flex justify-center mr-10 tracking-widest font-bold uppercase'>
          <div className='ml-10 py-4 cursor-pointer'>
            <Link href="/" className='ml-10 py-4 cursor-pointer'>
              <p className={router.asPath == '/' || router.asPath == '/?' ? 'text-[#00B0C8] border-b-4 border-[#00B0C8] py-2' : 'py-2'}>personagens</p>
            </Link>
          </div>

          <div className='ml-10 py-4 cursor-pointer'>
            <Link href="/episodes">
              <p className={router.asPath == '/episodes' ? 'text-[#00B0C8] border-b-4 border-[#00B0C8] py-2' : 'py-2'}>episódios</p>
            </Link>
          </div>

          <div className='ml-10 py-4 cursor-pointer'>
            <Link href="/locations">
              <p className={router.asPath == '/locations' ? 'text-[#00B0C8] border-b-4 border-[#00B0C8] py-2' : 'py-2'}>locais</p>
            </Link>
          </div>
        </div>

        <div className='lg:hidden mr-5' onClick={handleBelowMenu}>
          { belowMenu ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/> }
        </div>
      </div>

      <div className={belowMenu ? 'tracking-widest text-lg font-bold uppercase z-[999999] bg-[#fff] left-0 top-20 w-[100%] sm:w-[100%] md:w-[100%] p-2 ease-in duration-500' : 'fixed left-[-100%] w-[100%] sm:w-[100%] md:w-[100%] p-2 ease-in duration-300'}>
        <ul>
          <Link href="/">
            <li className={router.asPath == '/' || router.asPath == '/?' ? 'text-[#008139] border-b-4 border-[#008139] py-2' : 'py-2'} onClick={handleBelowMenu}>personagens</li>
          </Link>

          <Link href="/episodes">
            <li className={router.asPath == '/episodes' ? 'text-[#008139] border-b-4 border-[#008139] py-2' : 'py-2'} onClick={handleBelowMenu}>episódios</li>
          </Link>

          <Link href="/locations">
            <li className={router.asPath == '/locations' ? 'text-[#008139] border-b-4 border-[#008139] py-2' : 'py-2'} onClick={handleBelowMenu}>locais</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar