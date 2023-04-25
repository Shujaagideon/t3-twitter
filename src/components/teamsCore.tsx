
const TeamsCore = () => {
  return (
    <div>
        <section className="py-32 bg-white overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap max-w-6xl mx-auto -m-3">
                <div className="w-full md:w-1/3 p-3">
                    <div className="flex flex-col justify-end p-10 h-full bg-teal-600 rounded-3xl">
                    <div>
                        <h3 className="mb-4 text-4xl text-white font-bold leading-snug">Who We Are</h3>
                        <p className="mb-8 text-white text-opacity-70 font-medium leading-relaxed">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat enim.</p>
                        <div className="md:max-w-max">
                        <button className="py-4 px-7 w-full font-semibold rounded-xl shadow-6xl focus:ring focus:ring-gray-300 bg-white hover:bg-gray-100 transition ease-in-out duration-200" type="button">Learn about us</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-3">
                    <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                    <img className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/team/bg.png" alt=""/>
                    <div className="bg-gradient-white absolute bottom-0 left-0 w-full p-8 pt-20 backdrop-blur-sm">
                        <h3 className="mb-1 text-2xl font-semibold leading-snug">Leslie Alexander</h3>
                        <p className="text-gray-600 font-medium">Co-Founder, CEO</p>
                    </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 p-3">
                    <div className="relative max-w-max mx-auto h-full overflow-hidden rounded-3xl">
                    <img className="h-full object-cover transform hover:scale-105 transition ease-in-out duration-1000" src="flaro-assets/images/team/bg2.png" alt=""/>
                    <div className="bg-gradient-white absolute bottom-0 left-0 w-full p-8 pt-20 backdrop-blur-sm">
                        <h3 className="mb-1 text-2xl font-semibold leading-snug">Jenny Wilson</h3>
                        <p className="text-gray-600 font-medium">Co-Founder, CEO</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
    </div>
  )
}

export default TeamsCore