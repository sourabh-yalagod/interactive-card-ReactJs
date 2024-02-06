// card.jsx
import React from 'react';

function Card({ formData }) {
  return (
    <div className="relative sm:h-screen sm:w-64">
      <img src="/images/bg-main-mobile.png" alt="bg-main-mobile" className="sm:hidden mx-auto h-[250px] w-[640px] " />
      <img src="/images/bg-main-desktop.png" alt="bg-main-desktop" className="hidden sm:block sm:w-64 sm:h-screen shadow-black shadow-sm" />
      <div className="absolute top-10 right-3 sm:top-80 sm:right-[-50px] md:right-[-80px] lg:right-[-130px]  hover:scale-95 transition-all">
        <img src="/images/bg-card-back.png" alt="bg-card-front" className="w-56 sm:w-64 md:w-72 lg:w-80 relative rounded-[11px] shadow-[0.1px_.5px_15px_1px_black] hover:scale-95 transition-all"/>
        <div className="absolute right-7 top-[39%] sm:right-9 sm:top-[41%] text-white text-[17px] font-semibold tracking-widest">
          {formData.cvv || '000'}
        </div>
      </div>
      <div className="absolute top-24 sm:top-40 left-4 sm:w-64 md:w-72 md:top-32 lg:w-80 sm:right-[-10px] md:right-[-50px] lg:right-[-100px]  hover:scale-95 transition-all">
        <img src="/images/bg-card-front.png" alt="bg-card-front" className="w-56 sm:w-64 md:w-72 lg:w-80 relative rounded-[11px] shadow-[0.1px_.5px_15px_1px_black] hover:scale-95 transition-all"/>
        <div>
          <p className="absolute  bottom-16 sm:text-[20px] text-[18px] left-4 sm:left-8 md:text-[24px] tracking-wider text-white">
            {formData.number||'0000 0000 0000 0000'}
            </p>
          <div className="absolute right-0 bottom-4 text-white flex w-full justify-between px-3 text-[11px] tracking-wider">
            <p className='absolute bottom-1 left-4'>{formData.name ||'Sourabh Yalagod'}</p>
            <p className='absolute bottom-1 right-10'><span id="month">{formData.month||'00'}</span>/<span id="year">{formData.year ||'00'}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
