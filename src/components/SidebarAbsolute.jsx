import React, { useContext } from 'react'
import { assets } from '../assets/assets.jsx'

import { HiPlus } from "react-icons/hi";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Context } from '../context/context.jsx';

const SidebarAbsolute = () => {
    const { onSent, prevPrompts, setRecentPrompt, newChat, showSidebarAbsolute,setShowSidebarAbsolute } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }
    const decendingPrevProps=[...prevPrompts].reverse()

    const TruncateText = (text) => {
        if (text.length > 25) {
            return text.substring(0, 25) + "..."
        } else {
            return text
        }
    }

    return (
            <section className={`absolute z-20 h-screen w-[278px] p-4 overflow-hidden bg-[#262828] dark:bg-[#f0f4f9] transition-all duration-[1s] ease-in-out ${showSidebarAbsolute?"translate-x-0":"translate-x-[-300px]"} `}>
                <div className='flex gap-[2px] items-center'>
                    <div onClick={() => setShowSidebarAbsolute(!showSidebarAbsolute)} className='p-2 box-border hover:bg-[#37393bee] dark:hover:bg-[#e5e7e9e4] w-max rounded-full cursor-pointer mr-3 '>
                        <img className='invert-[1] w-[25px] dark:invert-0 ' src={assets.menu_icon} alt="" />
                    </div>
                    <div className='text-xl'>Gemini</div>
                    <div className='text-2xl'><MdOutlineArrowDropDown /></div>
                </div>
                <div className='flex flex-col gap-3 mt-8'>
                    <div onClick={() => newChat()} className={`flex items-center gap-4 bg-[#161617e5] hover:bg-[#4f525469] dark:bg-[#e5eaf1] dark:hover:bg-[#d9dee4e4] w-max h-max p-2 px-4 rounded-full text-[#79797d] cursor-pointer`}>
                        <div className='text-xl'><HiPlus /></div>
                        <div>New chat</div>
                    </div>
                    <div className='pl-3'>Recent</div>
                    <div className={`h-[max(35vh,100px)]`}>
                        {decendingPrevProps.map((item, i) => {
                            return (<div onClick={() => loadPrompt(item)} key={i}>
                                <div className='flex items-center justify-between p-1 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer group'>
                                    <div className='flex items-center gap-2'>
                                        <img className='invert-[100%] w-5 dark:invert-0' src={assets.message_icon} alt="" />
                                        <div className='text-sm'>{TruncateText(item)}</div>
                                    </div>
                                    <div className='invisible group-hover:visible p-1 rounded-full hover:bg-[#47494bee] dark:hover:bg-[#d8dde2]'><IoEllipsisVertical /></div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
                <div className={`py-2 mt-[max(3vw,20px)] max-[1100px]:mt-[max(2vw,10px)] `}>
                    <div>
                        <div className={`flex items-center justify-between p-2 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer`}>
                            <div className='flex items-center gap-2 text-sm font-medium'>
                                <img className='w-5 invert dark:invert-0' src={assets.question_icon} alt="" />
                                <div>Help</div>
                            </div>
                            <div className={`w-[9px] h-[9px] rounded-full bg-[#ff0000b7] `}></div>
                        </div>
                        <div className='flex items-center justify-between p-2 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer'>
                            <div className='flex items-center gap-2 text-sm font-medium'>
                                <img className='w-5 invert dark:invert-0' src={assets.history_icon} alt="" />
                                <div>Activity</div>
                            </div>
                        </div>
                        <div className={`flex items-center justify-between p-2 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer`}>
                            <div className='flex items-center gap-2 text-sm font-medium'>
                                <img className='w-5 invert dark:invert-0' src={assets.setting_icon} alt="" />
                                <div>Settings</div>
                            </div>
                            <div className={`w-[9px] h-[9px] rounded-full bg-[#ff0000b7] `}></div>
                        </div>
                    </div>
                    <div className='text-[11px] font-medium ml-4 mt-4'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 rounded-full bg-[#8e918f]'></div>
                            <div>Judiciary Colony, Lahore, Pakistan</div>
                        </div>
                        <div className='flex items-center gap-[6px] ml-4 text-[#a8c7fa] dark:text-[#0b57d0]'>
                            <div>From your IP address</div>
                            <div className='w-1 h-1 rounded-full bg-[#8e918f]'></div>
                            <div>Update location</div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SidebarAbsolute
