import React from 'react'
import GlobePage from './GlobePage/GlobePage'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
        <div className="bg-white dark:bg-gray-900 p-6 lg:px-16 sm:pb-8 lg:pb-12 h-screen">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 h-full">
                <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row h-full">
                    <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                        <h1 className="text-black-800 mb-8 text-4xl dark:text-gray-200 font-bold sm:text-5xl md:mb-12 md:text-6xl">Transcribe in to infinite possibilities</h1>

                        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random.</p>

                        <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                        <Link href="#" className="inline-block rounded-lg bg-teal-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-teal-300 transition duration-100 hover:bg-teal-600 focus-visible:ring active:bg-teal-700 md:text-base">Start now</Link>

                        <Link href="#" className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-teal-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</Link>
                        </div>
                    </div>
                    <div className="h-50 overflow-hidden lg:h-auto xl:w-5/12">
                        <GlobePage className='relative w-full h-full'/>
                    </div>
                </section>
            </div>
        </div>
    </>
  )
}

export default Hero