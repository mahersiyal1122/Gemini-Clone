import React, { useContext } from 'react'
import { assets, data } from '../assets/assets.jsx'
import { Context } from '../context/context.jsx'

const Hero = () => {

    const {sideBarExtend}=useContext(Context)

    return (
        <section className={`h-[65vh] max-[1300px]:h-[62vh] max-[1000px]:h-[60vh] max-[500px]:h-[57vh] w-[60vw] max-[1000px]:w-[80vw] max-[500px]:w-[90vw] mx-auto mt-5 flex flex-col justify-between overflow-y-auto  heroSuggestionBox `}>
            <div className='flex flex-col text-[max(3.8vw,36px)] leading-[64px] max-[430px]:leading-[44px] font-medium'>
                <span className='heroHeading'>Hello, Dev</span>
                <span className='text-[#444746] dark:text-[#c4c7c5]'>How can I help you today?</span>
            </div>
            <div className={`heroSuggestionBox ${sideBarExtend?"max-w-[900px]":"max-w-[1000px]"} overflow-x-auto flex gap-5 `}>
                {data.map((boxData, i) => {
                    return <div key={i} className='relative min-w-[200px] max-w-[200px] min-h-[180px] max-h-[180px] max-[1000px]:min-w-[max(20vw,160px)] max-[1000px]:min-h-[max(20vh,160px)] max-[430px]:min-w-[max(15vw,140px)] max-[430px]:min-h-[max(15vh,140px)] rounded-xl bg-[#222323] dark:bg-[#f0f4f9] cursor-pointer hover:bg-[#4d4f51] dark:hover:bg-[#d6d8da] '>
                        <p className='p-[10px] text-[#ffffffe2] dark:text-[#1f1f1f]'>{boxData.suggestion}</p>
                        <div className='absolute bottom-3 right-3 w-max h-max p-[10px] rounded-full bg-black dark:bg-white max-[430px]:p-[5px]'>{!boxData.reactIcon
                        ?<img className='invert-[100%] dark:invert-0 w-5 max-[430px]:w-[14px]' src={assets.bulb_icon} alt="" />
                        :<div className='text-xl max-[430px]:text-sm '>{boxData.icon}</div>
                        }
                        </div>
                    </div>
                })}
            </div>
        </section>
    )
}

export default Hero
