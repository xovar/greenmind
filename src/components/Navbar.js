import React from 'react';

export default function Navbar() {
  return (
    <>
        <div className='container items-center justify-between flex h-40'>
            <div className='flex items-center'>
                <div className='mr-[98px] font-alegreya font-normal text-[24px]'>GREENMIND</div>
                <div className='flex'>
                    <p className='mr-[48px] font-poppins font-medium text-[18px] text-muted hover:text-[black] cursor-pointer'>Home</p>
                    <p className='mr-[48px] font-poppins font-medium text-[18px] text-muted hover:text-[black] cursor-pointer'>Products</p>
                    <p className='mr-[48px] font-poppins font-medium text-[18px] text-muted hover:text-[black] cursor-pointer'>Contacts</p>
                </div>
            </div>

            <div className='flex'>
                <img src="./icons/Cart.jpg" className='w-[24px] h-[24px] mr-[48px] cursor-pointer' alt="" />
                <img src="./icons/Person.png" className='w-[24px] h-[24px] mr-[48px] cursor-pointer' alt="" />
                <div className='text-muted mr-[48px]'>|</div>
                <img src="./icons/FilterRight.png" className='w-[24px] h-[24px] cursor-pointer' alt="" />
            </div>
        </div>
    </>
  )
}
