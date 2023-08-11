import { useEffect } from "react";
import { Link } from 'react-router-dom'
import PageNOtFound from '../assets/images/pagenotfound.webp'
import { Button } from '../components/Button'
export const PageNotFound = () => {
  useEffect(()=>{
    document.title=`page not found/PopMovies`;
})

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className='text-7xl text-gray-700 font-bold my10 dark:text-white'>404, Oops!</p>
          <div className='max-w-lg'>
            <img className='rounded' src={PageNOtFound} alt="404 Page not found" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <Button>back to PopMovies</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}


