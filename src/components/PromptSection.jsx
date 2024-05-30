import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Context } from '../context/context'

const PromptSection = () => {
    const { onSent, input, setInput } = useContext(Context)
    return (
        <div className='absolute z-10 w-full bottom-1'>
            <div className='w-[870px] max-[1200px]:w-[770px] max-[1000px]:w-[max(70vw,300px)] mx-auto'>
                <div className='bg-[#222323] dark:bg-[#f0f4f9] p-5 py-2 rounded-full flex items-center justify-between focus-within:bg-[#4f525469] dark:focus-within:bg-[#dce1e797]'>
                        <div className='w-[680px]'>
                            <input onChange={(e) => setInput(e.target.value)} value={input} onKeyUp={(e) => e.key === "Enter" && onSent()} className='bg-transparent placeholder:text-[#e3e3e3] dark:placeholder:text-[#1f1f1f] outline-none w-full ' type="text" placeholder='Enter a prompt here' />
                        </div>
                        <div className='flex items-center justify-end gap-1 w-[150px] '>
                            <div className='p-[14px] hover:bg-[#37393bee] dark:hover:bg-[#e5e7e9e4] cursor-pointer rounded-full'><img className='min-w-5 max-w-5 invert dark:invert-0' src={assets.gallery_icon} alt="" /></div>
                            <div className='p-3 hover:bg-[#37393bee] dark:hover:bg-[#e5e7e9e4] cursor-pointer rounded-full'><img className='min-w-6 max-w-6 invert dark:invert-0' src={assets.mic_icon} alt="" /></div>
                            {input && <div onClick={() => onSent()} className='p-3 hover:bg-[#37393bee] dark:hover:bg-[#e5e7e9e4] cursor-pointer rounded-full'><img className='min-w-6 max-w-6 invert dark:invert-0' src={assets.send_icon} alt="" /></div>}
                        </div>
                </div>
                <div className='text-center my-3'><p className='text-xs text-[#c4c7c5] dark:text-[#444746] '>Gemini may display inaccurate info, including about people, so double-check its responses. <span className='underline cursor-pointer'>Your privacy & Gemini Apps</span></p></div>
            </div>
        </div>
    )
}

export default PromptSection
