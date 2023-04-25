
const ToolHero = () => {
  return (
    <div>
        <section className="relative pt-20 px-20 md:pt-28 md:pb-28 overflow-hidden dark:bg-slate-900">
            <div className="relative">
                <img className="hidden lg:block absolute top-1/2 right-0 max-w-lg xl:max-w-none xl:h-200 transform -translate-y-1/2" src="https://shuffle.dev/saturn-assets/images/applications/group-app-light.png" alt=""/>
                <div className="relative container px-4 mx-auto">
                <div className="max-w-xl mx-auto lg:mx-0">
                    <div className="max-w-lg mb-2">
                    <span className="inline-block py-1 px-3 mb-5 text-xs font-semibold text-teal-900 bg-teal-50 rounded-full">&#x1F44B; A SUIT OF TOOLS</span>
                    <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold mb-5">
                        <span className="dark:text-gray-200">Coming Soon</span>
                    </h1>
                    <p className="text-xl text-gray-500 font-semibold">Nisi eu pellentesque felis volutpat aliquet pulvinar sed. Vitae fames vestibulum urna vel odio mauris urna orci est.</p>
                    <img className="block ml-auto -mt-4 -mr-8" src="https://shuffle.dev/saturn-assets/images/applications/arrow-left.png" alt=""/>
                    </div>
                    <div className="sm:flex items-center mb-8">
                    <input className="w-full mb-3 sm:mb-0 sm:mr-4 py-4 px-6 text-gray-500 placeholder-gray-400 border border-gray-200 rounded-full focus:border-purple-500 focus:outline-purple" type="email" placeholder="Enter email address"/>
                    <button className="relative group sm:flex-shrink-0 inline-block w-full sm:w-auto py-4 px-6 text-center text-teal-50 bg-teal-950 font-semibold rounded-full overflow-hidden" type="submit">
                        <div className="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <span className="relative">Join the wait list</span>
                    </button>
                    </div>
                    <div className="flex flex-wrap items-center -mx-4">
                    <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                        <div className="flex items-center">
                        <img src="https://shuffle.dev/saturn-assets/images/applications/avatar-photo1.png" alt=""/>
                        <img className="-ml-3" src="https://shuffle.dev/saturn-assets/images/applications/avatar-photo2.png" alt=""/>
                        <img className="-ml-3" src="https://shuffle.dev/saturn-assets/images/applications/avatar-photo3.png" alt=""/>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4 mb-6 md:mb-0">
                        <div>
                        <span className="block text-2xl font-bold text-gray-900">500+</span>
                        <span className="text-sm text-gray-400">Happy Customers</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 px-4">
                        <div>
                        <span className="block text-2xl font-bold text-gray-900">5.0/5</span>
                        <div className="flex items-center">
                            <div className="flex items-center mr-2">
                            <img className="mr-1" src="https://shuffle.dev/saturn-assets/images/applications/star.svg" alt=""/>
                            <img className="mr-1" src="https://shuffle.dev/saturn-assets/images/applications/star.svg" alt=""/>
                            <img className="mr-1" src="https://shuffle.dev/saturn-assets/images/applications/star.svg" alt=""/>
                            <img className="mr-1" src="https://shuffle.dev/saturn-assets/images/applications/star.svg" alt=""/>
                            <img src="https://shuffle.dev/saturn-assets/images/applications/star.svg" alt=""/>
                            </div>
                            <span className="text-sm text-gray-400">Review</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <img className="block w-full pl-8 mt-20 ml-auto lg:hidden" src="https://shuffle.dev/saturn-assets/images/applications/app-full-image.png" alt=""/>
            </div>
            </section>
    </div>
  )
}

export default ToolHero