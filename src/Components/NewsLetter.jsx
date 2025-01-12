

const NewsLetter = () => {
  return (
    <div className="mt-4  flex flex-col items-center justify-center bg-yellow-500 h-48 lg:h-52">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center font-extrabold text-white mt-7">
            JOIN SHOPPING COMMUNITY TO<br/> 
            <span className="text-center">GET MONTHLY PROMO</span>
        </h1>
        <h5 className="text-center text-sm text-white ">Type your email down below and be young wild generation</h5>
        {/* Subscribe Button */}
        <div className="w-50 p-5">
    <div className="w-full rounded-md bg-neutral-100 p-2 flex items-center justify-center">
      <input className="pl-2 w-50 bg-transparent text-neutral-900 outline-none" placeholder="Add your email here" />
      <button className=" text-white rounded-md bg-neutral-800 p-2 w-[10rem]">SEND</button>
    </div>
  </div>
        
    </div>
  )
}

export default NewsLetter