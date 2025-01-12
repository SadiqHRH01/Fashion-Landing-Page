import Pay from "../assets/payDay0.png"

const PayDay = () => {
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-2 mb-10  border border-amber-300 bg-amber-300 rounded-lg
    h-80 w-auto sm:mx-20 min-[100px]">
      <div className="h-72 w-auto min-[100px] mb-10 flex items-center justify-center">
        <div className=" w-80 h-72 min-[100px]: pt-2">
              <img className="h-80 w-auto min-[100px] pb-2 hover:scale-100 duration-300" src={Pay} alt="" />
                </div>
      </div>
      {/* text */}
      <div className="h-72 w-auto min-[100px] pl-10 flex flex-col items-start justify-center
       border-amber-300 bg-amber-300 rounded-lg  mb-20">
       <h1 className="text-4xl sm:text-6xl font-bold mt-6">PAYDAY <br/>
       SALE NOW
       </h1>
       <p className="text-sm font-medium my-2 pr-9 ">Spend minimal $100 get 30% off<br/>
       voucher code for your next purchase</p>
       <span className="text-md font-bold pr-32">1 june-10 june 2021</span>
       <p className="texm-sm font-medium pr-20 mb-2">Terms & Conditions apply
       </p>
       <button className="border border-neutral-950 bg-black rounded-md  text-white 
       py-2 px-3 text-2xl font-bold">SHOP</button>
        </div>
       
    </div>
    </>
  )
}

export default PayDay