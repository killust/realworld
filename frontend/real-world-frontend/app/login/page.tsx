export default function Home() {
    return(

        <>
            <div className="py-[50px] w-full h-75 bg-cover bg-center">
                <h1 className="text-[100px] font-mono text-center">Log In</h1>
                <p className="text-lg text-center">Need an Account? <a href="/signup" className="text-green-600 hover:underline hover:text-black transition-colors duration-500 ease-in-out">Sign Up</a></p>
            </div>
            <div className="grid grid-cols-12 my-[50px]">
                <div className="md:col-span-2 col-span-1"></div>
                <div className="md:col-span-8 col-span-10 py-20 md:px-20 px-5 bg-[whitesmoke] rounded-lg">
                
                </div>
                <div className="md:col-span-2 col-span-1"></div>
            </div>   
        </>
    )
}