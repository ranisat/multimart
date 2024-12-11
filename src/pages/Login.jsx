import React, { useState } from 'react'
import Helment from '../components/Helmet/Helment'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase-config'
import { toast } from 'react-toastify'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
    const signIn = async (e)=>{
       e.preventDefault();
       setLoading(true);

       try {
         const userCredential = await signInWithEmailAndPassword(auth, email, password)

         const user = userCredential.user
         console.log(user);
         setLoading(false);
         toast.success('Successfully logged In')
         navigate('/checkout')

       } catch (error) {
        setLoading(false);
        toast.error(error.message)
       }
    }

  return (
   <Helment title="login">
     <section className='py-10 relative bg-gray-200'>
      <div className="container py-10 mx-auto">
         <div className="p-4 bg-s1 w-1/2 mx-auto mt-10 rounded-md">
        {
          loading ? <h2 className='text-center h4'>Loading...</h2> :  <form action="" className='w-full py-4 px-4' onSubmit={signIn}>
          <h4 className='mb-8 text-center h4'>Login</h4>
           <div className='mb-6'>
            <input type="text" placeholder='Enter your email' value={email} onChange={(e)=> setEmail(e.target.value)} className='border border-gray-300 w-full rounded-md px-4 py-2'/>
           </div>
           <div className='mb-2'>
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} className='border border-gray-300 w-full rounded-md px-4 py-2'/>
           </div>
           <div className='mb-6 text-right'>
           <p className='text-[12px]'> Don't  have an account? <Link to='/signup' className='text-p1 font-medium'>Create an account</Link></p>
           </div>
           <div className='mb-6 mt-3 text-center'>
            <button type="submit" className='main-btn'>Login</button>
           </div>
          
         </form>
        }
         </div>
      </div>
    </section>
   </Helment>
  )
}

export default Login
