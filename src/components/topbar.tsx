import { SignInButton, SignOutButton, SignUp, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'

const TopBar = () => {
    const user = useUser();
  return (
    <>
        <div className="flex justify-between items-center pt-2 p-3 px-5">
            <div>
                <BreadCrumbs/>
            </div>
            <UserBtns/>
        </div>
    </>
  )
}

export default TopBar

export const UserBtns = ()=>{
    const user = useUser();
    if(!user) return null
    return(
        <>
            <div>
                {!user.isSignedIn ?
                    <SignInButton /> :
                    <Avatar/>
                }
                <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
            </div>
        </>
    )
}

const Avatar = ()=> {
    const {user} = useUser();
    if(!user) return null
    return(
        <>
            <div className='flex justify-around items-center  py-1.5 px-3 rounded-lg dark:bg-gray-800'>
                <div className='flex justify-center mr-2 items-center w-9 h-9 lg:w-12 lg:h-12 rounded-full border-2 border-solid border-teal-800'>
                    <div className='w-7 h-7 lg:w-10 lg:h-10 rounded-full overflow-hidden'>
                        <img src={user.profileImageUrl} alt='profile' className='w-full h-full'/>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <div className='text-sm text-gray-700 font-semibold'>{user.fullName}</div>
                    <div className='text-sm text-gray-500 font-medium'>view profile</div>
                </div>
            </div>
        </>
    )
}

const BreadCrumbs = ()=>{
    return(
        <div className="flex items-center py-4 px-4 overflow-x-auto whitespace-nowrap">
            <a href="#" className="text-gray-600 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </a>

            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </span>

            <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">
                Account
            </a>

            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </span>

            <a href="#" className="text-gray-600 dark:text-gray-200 hover:underline">
                Profile
            </a>

            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </span>

            <a href="#" className="text-teal-600 dark:text-teal-400 hover:underline">
                Settings
            </a>
        </div>
    )
}