import React from 'react'
import SideBar from './sidebar'

const LayoutDesktop = ({children}:{children: React.ReactNode}) => {
  return (
    <>  
        <div className='flex justify-between w-full dark:bg-gray-900'>
            <SideBar />
            <div className='w-4/5'>
              {children}
            </div>
        </div>
    </>
  )
}

export default LayoutDesktop