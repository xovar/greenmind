import React from 'react';

function Home() {
  return (
    <>
        <div className='container h-[512px] flex bg-primary rounded-[24px]'>
            <div  className='w-[497px] mt-[48px] ml-[48px]'>
                <h1 className='w-[512px] font-poppins font-extrabold leading-[64px] text-[64px]'>Buy your dream plants</h1>
                <div className='flex w-[318px] justify-between mt-[24px]'>
                    <div>
                        <p className='font-poppins font-medium text-[32px]'>50+</p>
                        <p className='font-poppins font-medium text-[18px]'>Plant Species</p>
                    </div>
                    <div className='border-r-[1px] h-[64px] border-solid border-black'></div>
                    <div>
                        <p className='font-poppins font-medium text-[32px]'>100+</p>
                        <p className='font-poppins font-medium text-[18px]'>Customers</p>
                    </div>
                </div>
            </div>
            <div  className='w-[747px] relative'>
                <img src="./img/arrow-1.png" className='absolute top-[319.91px]' alt="" />
                <img src="./img/arrow-2.png" className='absolute top-[13px] right-[3.81px]' alt="" />
                <img src="./img/tree.png" className='z-10 absolute left-[269px] bottom-[0px]' alt="" />
                <img src="./img/Rectangle.png" className='absolute top-[123px] z-0 right-[72px]' alt="" />
            </div>
        </div> 
    </>
  );
}

export default Home;
