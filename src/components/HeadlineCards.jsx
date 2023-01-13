import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>ข้าวไก่อบ</p>
          <p className='px-2'>Every day</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.wongnai.com/p/800x0/2021/05/20/71e26e25473d4817a64a242f26d3df26.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>ไก่ทอดชมเฌย</p>
          <p className='px-2'>only on Saturday - Sunday</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.wongnai.com/p/800x0/2019/05/21/804dae922253428192237cdf1e6f3302.jpg'
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>ต้มยำกุ้งน้ำข้น</p>
          <p className='px-2'>Every day</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://img.wongnai.com/p/1920x0/2019/05/21/cacd4c9f6f7144beaa57258478fe148c.jpg'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
