import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Context } from './context/context'
import PromptSection from './components/PromptSection'
import Result from './components/Result'
import SidebarAbsolute from './components/SidebarAbsolute'

const App = () => {
  const {sideBarExtend, showResult, sideBarAbsolute}=useContext(Context)
  return (
    <main className='flex w-screen h-screen'>
      {!sideBarAbsolute?<Sidebar/>:<SidebarAbsolute/>}
      <div className={`h-screen ${sideBarExtend ? "w-[calc(100vw-278px)]":"w-[calc(100vw-75px)]"} transition-all duration-[1s] ease-in-out bg-[#131314] dark:bg-white flex flex-col relative max-[1148px]:w-screen`}>
        <Navbar/>
        {!showResult?<Hero/>:<Result/>}
        <PromptSection/>
      </div>
    </main>
  )
}

export default App
