import React, { useContext } from 'react'
import { assets } from '../assets/assets.jsx'

import { HiPlus } from "react-icons/hi";
import { IoEllipsisVertical } from "react-icons/io5";
import { Context } from '../context/context.jsx';


const Sidebar = () => {

    const { sideBarExtend, setSideBarExtend, onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt=async (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const decendingPrevProps=[...prevPrompts].reverse()

    const TruncateText=(text)=>{
        if (text.length>25){
            return text.substring(0,25)+"..."
        }else{
            return text
        }
    }

    return (
        <section className={`h-screen ${sideBarExtend ? "w-[278px] p-4" : "w-[75px] p-4 px-3"} overflow-hidden bg-[#262828] dark:bg-[#f0f4f9] transition-all duration-[1s] ease-in-out dark:text-black `}>
            <div onClick={() => setSideBarExtend(!sideBarExtend)} className='p-3 hover:bg-[#37393bee] dark:hover:bg-[#e5e7e9e4] w-max rounded-full cursor-pointer '>
                <img className='invert-[1] w-[25px] dark:invert-0' src={assets.menu_icon} alt="" />
            </div>
            <div className='flex flex-col gap-3 mt-8'>
                <div onClick={()=>newChat()} className={`flex items-center gap-4 bg-[#161617e5] hover:bg-[#4f525469] dark:bg-[#e5eaf1] dark:hover:bg-[#d9dee4e4] w-max h-max ${sideBarExtend ? "p-2 px-4" : "p-3"} rounded-full text-[#79797d] cursor-pointer`}>
                    <div className='text-xl'><HiPlus /></div>
                    {sideBarExtend && <div>New chat</div>}
                </div>
                {sideBarExtend && <div className='pl-3'>Recent</div>}
                <div className={`${sideBarExtend?"h-[max(35vh,100px)]":"h-[max(40vh,100px)]"}`}>
                    {decendingPrevProps.map((item, i) => {
                        return (<div onClick={()=>loadPrompt(item)} key={i}>
                            {sideBarExtend && <div className='flex items-center justify-between p-1 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer group'>
                                <div className='flex items-center gap-2'>
                                    <img className='invert-[100%] w-5 dark:invert-0' src={assets.message_icon} alt="" />
                                    <div className='text-sm'>{TruncateText(item)}</div>
                                </div>
                                <div className='invisible group-hover:visible p-1 rounded-full hover:bg-[#47494bee] dark:hover:bg-[#d8dde2]'><IoEllipsisVertical /></div>
                            </div>}
                        </div>)
                    })}
                </div>
            </div>
            <div className={`py-2 ${!sideBarExtend && "mt-[max(5vw,40px)]"} `}>
                <div>
                    <div className={`flex ${sideBarExtend ? "items-center justify-between" : "relative"} p-2 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer`}>
                        <div className='flex items-center gap-2 text-sm font-medium'>
                            <img className='w-5 invert dark:invert-0' src={assets.question_icon} alt="" />
                            {sideBarExtend && <div>Help</div>}
                        </div>
                        <div className={`w-[9px] h-[9px] rounded-full bg-[#ff0000b7] ${!sideBarExtend ? "absolute top-0 left-0 ml-[28px] mt-[2px] " : ""}`}></div>
                    </div>
                    <div className='flex items-center justify-between p-2 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer'>
                        <div className='flex items-center gap-2 text-sm font-medium'>
                            <img className='w-5 invert dark:invert-0' src={assets.history_icon} alt="" />
                            {sideBarExtend && <div>Activity</div>}
                        </div>
                    </div>
                    <div className={`flex ${sideBarExtend ? "items-center justify-between" : "relative"} p-2 px-3 hover:bg-[#37393bee] dark:hover:bg-[#e5eaf1] rounded-3xl cursor-pointer`}>
                        <div className='flex items-center gap-2 text-sm font-medium'>
                            <img className='w-5 invert dark:invert-0' src={assets.setting_icon} alt="" />
                            {sideBarExtend && <div>Settings</div>}
                        </div>
                        <div className={`w-[9px] h-[9px] rounded-full bg-[#ff0000b7] ${!sideBarExtend ? "absolute top-0 left-0 ml-[28px] mt-[2px] " : ""}`}></div>
                    </div>
                </div>
                {sideBarExtend && <div className='text-[11px] font-medium ml-4 mt-4'>
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
                }
            </div>
        </section>
    )
}

export default Sidebar
