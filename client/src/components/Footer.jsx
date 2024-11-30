import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
      <div className='bg-black-500 text-black-300 '>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 px-3 w-16' alt="" />
            <div className="flex flex-col">
        {/* Line in front of the logo */}
        <p className="w-full px-3 text-gray-600 md:w-auto">
           
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
    </div>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@trends.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer
