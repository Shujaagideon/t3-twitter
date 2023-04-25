'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  ChatBubbleIcon,
  ArchiveIcon,
  CodeSandboxLogoIcon
} from '@radix-ui/react-icons';


const exploreWorlds = [
    {
      id: 'world-1',
      imgUrl: 'https://cdn.dribbble.com/users/2782465/screenshots/13818666/media/7468de6b91689ee19d456f3367342356.jpg?compress=1&resize=1600x1200&vertical=top',
      title: 'The Hogwarts',
      icon: <ChatBubbleIcon className="w-6 h-6 text-teal-400 object-contain"/>
    },
    {
      id: 'world-2',
      imgUrl: 'https://cdn.dribbble.com/users/589596/screenshots/11099834/media/27f7b3b5ac514f3af11f2129a8c716fd.png?compress=1&resize=1600x1200&vertical=top',
      title: 'The Upside Down',
      icon: <ArchiveIcon className="w-6 h-6 text-teal-400 object-contain"/>
    },
    {
      id: 'world-3',
      imgUrl: 'https://cdn.midjourney.com/c496ca8b-0f92-4e8b-a639-eb933fc370db/0_1_640_N.webp',
      title: 'Kadirojo Permai',
      icon: <CodeSandboxLogoIcon className="w-6 h-6 text-teal-400 object-contain"/> 
    },
  ];

const fadeIn = (direction:string, type:string, delay:number, duration:number) => ({
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeInOut',
      },
    },
});


const ExploreCard = ({ id, imgUrl, title, icon, active, handleClick }:{id:any, imgUrl:string, title:string, icon:any, active:any, handleClick:any}) => (
  <div
    // variants={fadeIn('up', 'inertia', 0, 7000)}
    style={{backgroundImage: `url(${imgUrl})`}}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center bg-cover ${ active !== id ? 'brightness-50 dark:brightness-75' : 'brightness-100 bg-center'}
    min-w-[170px] h-full transition-all duration-[1s] ease-in-out cursor-pointer rounded-[24px]`}
    onClick={() => handleClick(id)}
  >
    {/* <img
      src={imgUrl}
      alt="planet-04"
      className={`absolute w-full h-full transition-all duration-[1.6s] object-cover rounded-[24px] ${ active !== id ? 'brightness-50' : 'brightness-100'}`}
    /> */}
    <div className={`${active !== id ? 'opacity-0' : 'opacity-100'} transition-all duration-[0.6s] ease-in-out absolute bottom-0 p-8 h-1/4 flex justify-start w-full flex-col bg-slate-700 rounded-b-[24px]`}>
      <div
        className='flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]'
      >
          {icon}
      </div>
      <h2 className="font-semibold  sm:text-[32px] text-[24px] text-white whitespace-nowrap">
        {title}
      </h2>
    </div>
  </div>
);



const FeaturesTemplate = () => {
    const [active, setActive] = useState('world-2');
  return (
    <>
        <section className="overflow-hidden dark:bg-gray-900 bg-gray-50 sm:grid sm:grid-cols-2 lg:px-14 min-h-screen  h-screen flex flex-col xl:flex-row items-center">
          <div className="p-6 md:p-12 lg:px-16 lg:py-24">
            <div className="mx-auto max-w-xl text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-200 md:text-3xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>

              <p className="hidden text-gray-500 md:mt-4 md:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
                tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
                fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
                duis.
              </p>

              <div className="mt-4 md:mt-8">
                <a
                  href="#"
                  className="inline-block rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>

          <div className="mt-[50px] flex lg:flex-row flex-col gap-5 h-3/4 w-[90%] lg:w-full">
              {exploreWorlds.map((world) => (
                  <ExploreCard
                      key={world.id}
                      {...world}
                      active={active}
                      handleClick={setActive}
                  />
              ))}
            </div>
        </section>

    </>
  )
}

export default FeaturesTemplate