import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import travoltaGif from '/public/images/travolta.gif'

const NotFound = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  })
  return (
    <div className='flex justify-center items-center h-screen text-[#008139] text-center'>
      <div>
        <h1>404</h1>
        <p>
          Rick opened a portal and this page was sucked into an unknown
          dimension
        </p>

        <Image
          src={travoltaGif}
          alt='John Travolta looking around in pulp fiction'
          layout='responsive'
          className='py-2'
          priority={true}
        />
      </div>
    </div>
  )
}

export default NotFound
