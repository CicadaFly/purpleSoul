import React from 'react'
import { useState, useEffect } from 'react';
import { AiOutlineWarning } from 'react-icons/ai';
const Intro = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    setShowIntro(true);
  }, []);

  return (
      <div
      className={`max-w-xl mx-auto mt-6 bg-[#8fbfdc] rounded
        transform transition-transform duration-1000 ${
        showIntro ? 'translate-y-0' : '-translate-y-10'
      }`}>
      <div className='pl-6 py-4'>
       <ul className='list-disc text-black'>
        <li className='mb-1'>請先填寫您的稱呼，以及想問的問題，問題描述盡量具體，比如：這三個月內工作運勢、換工作的機會如何、近日是否有桃花、考試運勢等等。</li>
        <li className='mb-1'>填寫完畢後，點選<span className='font-semibold underline'>"送出"</span>至選牌頁，並在3個類別內，憑直覺各選一張卡。</li>
        <li>點選<span className='font-semibold underline'>"我選好了"</span>後，即會抵達結果頁，想進一步了解結果，請截圖該頁面，至洋羽IG與占卜小姐姐預約解牌時段。</li>
       </ul>
       <div className='flex flex-row align-middle'>
       <AiOutlineWarning className='self-center text-orange-900'/>
       <AiOutlineWarning className='self-center text-orange-900'/>
        <p className='text-orange-900'>重要：占卜過程中切勿重新整理，會造成資料遺失</p>
        <AiOutlineWarning className='self-center text-orange-900'/>
        <AiOutlineWarning className='self-center text-orange-900'/>
       </div>
       
      </div>
    </div>
  )
}

export default Intro