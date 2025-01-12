
import Hero1 from "../assets/hero1.png"
import Sponsors from "../assets/Frame 8.png"
const Hero = () => {
  return (
    <>
    <div className="grid grid-cols-1 mx-5 sm:grid-cols-2  gap-5 border border-slate-100 bg-slate-100 rounded-lg">
      <div className="h-72 w-auto min-[100px] flex flex-col items-center justify-center">
      <p className="text-7xl sm:text-6xl font-bold">
         LET'S
         <br/>
          EXPLORE<br/>
          <span className="text-2xl sm:text-5xl italics text-amber-300 font-bold ">
            <p>Unique Clothes</p>
          </span>
        </p>

      </div>
      <div className="h-72 w-auto min-[100px] flex items-center justify-center">
        <div className=" w-80 h-72 min-[100px]: pt-2">
        <img src={Hero1} alt="" />
        </div>
      </div>
    </div>
    <div className="max-w-full mt-4 py-5 bg-amber-300 flex justify-center">
        <img src={Sponsors} alt="" />
      </div>
    </>
  )
}

export default Hero





{/* <div className="flex items-center justify-center mx-20 my-10">
    <div className="w-full h-96 border border-neutral-200 bg-neutral-200 rounded-lg">
      <div>
      <div className="flex flex-col items-start justify-center  p-10 ml-20">
        <p className="text-4xl sm:text-5xl font-bold">
         LET'S
         <br/>
          EXPLORE
        </p>
        <p className="text-4xl sm:text-5xl font-bold my-2 ">
          <span className="text-yellow-800 hover:text-yellow-400 transition-all duration-300 ease-in-out  ">UNIQUE </span><br/>
           {" "}CLOTHES.
        </p>
        <div>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="border border-neutral-950 bg-black rounded font-bold text-white py-2 px-5 my-3">SHOP</button>
          <div className="flex justify-end">
            <img src={Hero1} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-end">
          <div className="border border-neutral-950 p-2">
            <img src={Hero1} alt="" />
          </div>
        </div>
     </div>
    </div>
    </div */}