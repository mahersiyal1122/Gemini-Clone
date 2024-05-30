import React, { useContext } from 'react'
import { MdOutlineArrowDropDown } from "react-icons/md";
import { assets } from '../assets/assets.jsx';
import { Context } from '../context/context.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const Navbar = () => {
  const { sideBarAbsolute, showSidebarAbsolute, setShowSidebarAbsolute } = useContext(Context)
  return (
    <nav className='p-6 py-4 bg-[#131314] flex items-center justify-between max-[1148px]:w-screen dark:text-black dark:bg-white '>
      <div className='flex gap-[2px] items-center'>
        {sideBarAbsolute && <div onClick={()=>setShowSidebarAbsolute(!showSidebarAbsolute)} className='p-2 box-border hover:bg-[#37393bee] dark:hover:bg-[#e5e7e9e4] w-max rounded-full cursor-pointer mr-3 '>
          <img className='invert-[1] w-[25px] dark:invert-0 ' src={assets.menu_icon} alt="" />
        </div>}
        <div className='text-xl'>Gemini</div>
        <div className='text-2xl'><MdOutlineArrowDropDown /></div>
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2 cursor-pointer p-2 px-4 bg-[#37393b] dark:bg-[#dde3ea] rounded-lg hover:bg-[#4d4f51] dark:hover:bg-[#e5e7e9e4] max-[600px]:hidden'>
          <img className='w-5' src={assets.gemini_icon} alt="" />
          <div className='text-xs font-medium'>Try Gemini Advanced</div>
        </div>
        <ThemeToggle/>
        <div className='p-[5px] hover:bg-[#37393b90] dark:hover:bg-[#e5e7e9e4] rounded-full'><img className='w-8 rounded-full cursor-pointer' src={assets.user_icon} alt="" /></div>
      </div>
    </nav>
  )
}

export default Navbar
