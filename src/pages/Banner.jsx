import heroImg from '../assets/images/hero-img.png'
import { NavLink } from 'react-router-dom'

const Banner = () => {
  const year = new Date().getFullYear()
  return (
    <section className='relative py-5 pt-20 bg-sky-100'>
    <div className="container">
         <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className='max-lg:order-last'>
            <p className='mb-2 text-xl text-p1 font-semibold'>Trending product in {year}</p>
            <h2 className='h2 capitalize font-bold py-3 max-lg:h5'>Make your interior more minimalistics & modern</h2>
            <p className='my-4 h6'>Up to 80% off</p>
            <NavLink to='/shop'>
            <button className='main-btn'>Shop Now</button></NavLink>
          </div>
          <div className='relative z-10'>
             <img src={heroImg} alt="hero image" />
             <div className='absolute max-lg:top-0 -bottom-14 right-2 -z-10'>
              <h2 className='brandTitle text-[10rem] max-lg:text-[6rem] font-extrabold stroke-cyan-500'>MultiMart</h2>
             </div>
          </div>
         </div>
       </div>
    </section>
  )
}

export default Banner
