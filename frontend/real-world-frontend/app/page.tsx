"use client";
import { useRouter } from "next/navigation"

export default function Home () {
  const router = useRouter()
  return(
    <>
      <div className="py-[50px] w-full h-75 bg-cover bg-center bg-[url('/conduit_header_wave_bg.png')]">
        <h1 className="text-[100px] font-mono text-white text-center">Conduit</h1>
        <p className="text-lg text-center text-white">A practice project to show case Next.js in tsx, tailwind css, django, ORM, Restful APIs, Django Restframework, and Postgresql</p>
      </div>
      <div className="grid grid-cols-12 my-[50px]">
        <div className="md:col-span-2 col-span-1"></div>
        <div className="md:col-span-8 col-span-10">
          <div onClick={() => router.push("/article")} className="grid grid-cols-12 gap-6 py-20 md:px-20 px-5 bg-[whitesmoke] rounded-lg hover:cursor-pointer hover:bg-[white] transition-colors duration-1000 ease-in-out">
            <div className="col-span-2">
              <img src="" className="md:w-25 md:h-25 w-10 h-10 border rounded-full" alt="" />
            </div>
            <div className="col-span-8">
              <div className="flex flex-col gap-2">
                  <h1 className="md:text-5xl text-lg pb-2 font-bold">title</h1>
                  <p className="line-clamp-2 md:text-lg text-[10px]">These are the 2 lines</p>
                  <div className="flex justify-between">
                    <p className="text-green-600 md:text-[12px] text-[10px]">Author Name</p>
                    <p className="text-[darkgray] md:text-[12px] text-[10px]">Date</p>
                  </div>
                </div>
            </div>
            <div className="col-span-2">
              <div className="flex flex-col items-center">
                <p className="text-[darkgray] text-[10px]">icon likes</p>
                <p className="text-[darkgray] text-[10px]">6 mins read</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 col-span-1"></div>
      </div>   
    </>
  )
}