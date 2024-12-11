import { Link } from 'react-router-dom'
import counterImg from '../assets/images/sofa-2.png'
import Clock from '../components/Products/Clock'

const Counter = () => {
  return (
   <section className='relative pt-10 pb-10 bg-[#03597e]'>
      <div className="grid lg:grid-cols-2 grid-cols-1 place-items-center">
        <div className='p-2'> 
          <h4 className='text-white text-xl leading-5 mb-2'>Limited Offers</h4>
          <h4 className='text-white h5 mb-4'>Quality Armchair</h4>
          <Clock/>
          <button className='main-btn'><Link to="/shop">Visit Us</Link></button>
        </div>
        <div className='me-52 max-lg:hidden'>
          <img src={counterImg} alt="countimg" className=' object-contain '/>
        </div>
      </div>
      <div className='absolute max-lg:top-0 -bottom-10 max-lg:-bottom-2 right-2 z-10'>
      <h2 className='brandTitle text-[8rem] max-lg:text-[4rem] font-extrabold stroke-gray-500 tracking-wider opacity-10'>Limited Offer</h2>
      </div>
   </section>
  )
}

export default Counter
