export default function Home() {
    return(

        <>
            <div className="py-[50px] w-full h-65 bg-cover bg-center">
                <h1 className="text-[100px] font-mono text-center">Sign Up</h1>
                <p className="text-lg text-center">Already have an Account? <a href="/login" className="text-green-600 hover:underline hover:text-black transition-colors duration-500 ease-in-out">Log In</a></p>
            </div>
            <div className="grid grid-cols-12 my-[50px]">
                <div className="md:col-span-4 col-span-1"></div>
                <div className="md:col-span-4 col-span-10 md:px-5 px-5 rounded-lg bg-[white]">
                    <div className="flex flex-col gap-4">
                        <div className="pt-10 flex flex-col gap-4">
                            <label htmlFor="username" className="text-lg">Username</label>
                            <input type="text" id="username" className="w-full bg-white border-gray-200 rounded-lg px-4 py-2 border focus:outline-none" />
                        </div>
                        <div className="pt-5 flex flex-col gap-4">
                            <label htmlFor="email" className="text-lg">Email</label>
                            <input type="email" id="email" className="w-full bg-white border-gray-200 rounded-lg px-4 py-2 border focus:outline-none" />
                        </div>
                        <div className="pt-5 flex flex-col gap-4">
                            <label htmlFor="password" className="text-lg">Password</label>
                            <input type="password" id="password" className="w-full bg-white border-gray-200 rounded-lg px-4 py-3 focus:outline-none border" />
                        </div>
                        <div className="pt-5 flex flex-col sm:flex-row gap-4 pb-10 justify-end">
                            <div className="w-3/4 text-center sm:text-left ">
                                <div className="flex flex-row gap-2">
                                    <div className="text-center sm:text-left ">
                                        <input type="checkbox" className="hover:cursor-pointer" id="rememberMe" /> 
                                    </div>
                                    <div className="flex-1 text-center sm:text-left">
                                        <label htmlFor="rememberMe" className="w-full">I agree to the processing of my personal information <span className="text-green-500 hover:text-black hover:cursor-pointer">(Terms of Service)</span></label>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 text-center sm:text-right">
                                <button className="py-3 px-5 bg-green-500 text-white hover:bg-[#f5f5f500] hover:border-gray-100 hover:text-black border rounded-lg hover:cursor-pointer transition-colors duration-1000 ease-in-out">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-4 col-span-1"></div>
            </div>   
        </>
    )
}