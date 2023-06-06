import React from 'react';

function Home() {
  return (
    <>
        <div className='container h-[512px] flex bg-primary rounded-[24px]'>
            <div  className='w-[497px]'>
                <div>kldkdlklk</div>
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
