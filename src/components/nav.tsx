import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Nav = () => {
  return (
    <NavigationMenu.Root className="relative z-[1] w-screen lg:w-3/4  flex justify-center">
      <NavigationMenu.List className="center shadow-blackA7 m-0 flex list-none rounded-[6px] p-1">
        <NavigationMenu.Item className='lg:px-4'>
          <NavigationMenu.Link
            className=" dark:text-gray-100 text-gray-600 text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          >
            <Link href="/">
              Home
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className='lg:px-4'>
          <NavigationMenu.Link
            className=" dark:text-gray-100 text-gray-600 text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          >
            <Link href="/features">
              Features
            </Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className='lg:px-4'>
          <NavigationMenu.Trigger className=" dark:text-gray-100 text-gray-600 hover:text-gray-500 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            About{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="bg-slate-100 data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto shadow-xl">
            <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <Link
                    className="focus:shadow-violet7 flex 
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-t from-slate-800 to-gray-200 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                    href="/"
                  >
                    <svg width="42" height="42" viewBox="0 0 342 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M342 148.792C342 230.967 274.992 297.584 192.434 297.584C21.3694 297.584 42.8673 331.062 42.8673 148.792C42.8673 66.6164 109.83 0 192.434 0C275.037 0 342 66.6164 342 148.792Z" fill="#D4C56B"/>
                        <path d="M153.765 207.617C145.187 207.617 138.625 206.492 134.078 204.242C129.531 201.945 126.414 198.922 124.726 195.172C123.039 191.422 122.195 187.367 122.195 183.008V152.773C122.195 145.227 124.937 139.367 130.422 135.195C135.906 130.977 143.593 128.867 153.484 128.867C160.281 128.867 165.953 129.711 170.5 131.398C175.093 133.039 178.562 135.898 180.906 139.977C183.25 144.008 184.422 149.633 184.422 156.852L166.422 158.258C166.422 153.664 166.07 150.242 165.367 147.992C164.711 145.695 163.492 144.172 161.711 143.422C159.976 142.625 157.468 142.227 154.187 142.227C150.109 142.227 146.945 143.023 144.695 144.617C142.445 146.211 141.32 148.953 141.32 152.844V183.359C141.32 187.391 142.375 190.203 144.484 191.797C146.593 193.391 149.828 194.188 154.187 194.188C157.515 194.188 160.07 193.836 161.851 193.133C163.632 192.43 164.851 191.023 165.507 188.914C166.164 186.758 166.492 183.547 166.492 179.281H184.351C184.351 186.219 183.461 191.773 181.679 195.945C179.945 200.07 176.851 203.047 172.398 204.875C167.992 206.703 161.781 207.617 153.765 207.617ZM231.953 207.617C223.375 207.617 216.812 206.492 212.265 204.242C207.718 201.945 204.601 198.922 202.914 195.172C201.226 191.422 200.382 187.367 200.382 183.008V152.773C200.382 145.227 203.125 139.367 208.609 135.195C214.093 130.977 221.781 128.867 231.672 128.867C238.468 128.867 244.14 129.711 248.687 131.398C253.281 133.039 256.75 135.898 259.093 139.977C261.437 144.008 262.609 149.633 262.609 156.852L244.609 158.258C244.609 153.664 244.257 150.242 243.554 147.992C242.898 145.695 241.679 144.172 239.898 143.422C238.164 142.625 235.656 142.227 232.375 142.227C228.297 142.227 225.132 143.023 222.882 144.617C220.632 146.211 219.507 148.953 219.507 152.844V183.359C219.507 187.391 220.562 190.203 222.672 191.797C224.781 193.391 228.015 194.188 232.375 194.188C235.703 194.188 238.257 193.836 240.039 193.133C241.82 192.43 243.039 191.023 243.695 188.914C244.351 186.758 244.679 183.547 244.679 179.281H262.539C262.539 186.219 261.648 191.773 259.867 195.945C258.132 200.07 255.039 203.047 250.586 204.875C246.179 206.703 239.968 207.617 231.953 207.617Z" fill="white"/>
                        <path d="M40.0631 302.464L42.3271 230.775L111.718 299.309L40.0631 302.464Z" fill="#1B414C"/>
                    </svg>
                    <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                      Rare plug
                    </div>
                    <p className="text-neutral-300 text-[14px] leading-[1.3]">
                      Unstyled, accessible components for React.
                    </p>
                  </Link>
                </NavigationMenu.Link>
              </li>

              <ListItem to="pricing" title="Pricing">
                Find the best value for you. Choose from our curated pricing
              </ListItem>
              <ListItem to="/about" title="The Company">
                Learn about the beautifull team working behind the scenes
              </ListItem>
              <ListItem to="/questions" title="Faqs">
                A list of most asked questions and their responses
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item className='lg:px-4'>
          <NavigationMenu.Trigger className="dark:text-gray-100 text-gray-600 text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
            Overview{' '}
            <CaretDownIcon
              className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className=" bg-slate-100 absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Blog" to="/blog">
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem title="Tools" to="/tools">
                A quick tutorial to get you up and running with Radix Primitives.
              </ListItem>
              <ListItem title="Career" to="/career">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem title="Contacts" to="/contacts">
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem title="Policy" to="/policy">
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem title="Dashboard" to="/dashboard">
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(({ to, children, title, ...props }: {to:string, children: React.ReactNode, title: String}, forwardedRef:any) => (
  <li>
    <NavigationMenu.Link asChild>
      <Link
        className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors text-gray-600 hover:bg-slate-300 hover:text-slate-900 focus:bg-slate-200 focus:text-gray-600'
        href={to}
        {...props}
        ref={forwardedRef}
      >
        <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">{title}</div>
        <p className="text-mauve11 leading-[1.4]">{children}</p>
      </Link>
    </NavigationMenu.Link>
  </li>
));

export default Nav;