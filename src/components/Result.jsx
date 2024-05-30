import React, { useContext } from 'react'
import { Context } from '../context/context.jsx'
import { assets } from '../assets/assets.jsx'

const Result = () => {
    const {recentPrompt,resultData, loading}=useContext(Context)
  return (
    <section className={`h-[65vh] w-[60vw] max-[1000px]:w-[80vw] max-[500px]:w-[90vw] mx-auto mt-5 overflow-y-auto  heroSuggestionBox flex flex-col gap-10 pb-10 `}>
      <div className='flex items-center gap-4'>
        <img className='w-10 rounded-full' src={assets.user_icon} alt="" />
        <p className='text-base text-[#e3e3e3] dark:text-[#1f1f1f] '>{recentPrompt}</p>
      </div>
      <div className='flex gap-4'>
        <img className='w-10 h-10' src={assets.gemini_icon} alt="" />
        {loading
        ?<div className='w-full flex flex-col gap-[10px] loader'>
            <hr className='' />
            <hr  />
            <hr />
        </div>
        :<pre className='text-base text-wrap font-["Roboto_Condensed",_"sans-serif"] ' dangerouslySetInnerHTML={{__html:resultData}}></pre>}
      </div>
    </section>
  )
}

export default Result
