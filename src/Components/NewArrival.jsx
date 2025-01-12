import { productItems } from "../Constants"

const NewArrival = () => {
  return (
        <>
       <div className="mt-5 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-start font-bold my-4 mx-5">
          New Arrival
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          {productItems.map((item, index) => (
            <div key={index} className="flex items-center justify-center w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-white rounded-md p-6 text-md border border-white">
                <a href="#">
                  <img className="hover:scale-105 duration-300 bg-white shadow-md object-fill" src={item.image} alt="" />
                </a>
                <div className="flex mt-3 items-start">
                  <h2 className="ml-2 font-bold">{item.title}</h2>
                </div>
                <div>
                    <h5 className="ml-2 text-sm">{item.explore}</h5>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrival



{/* <div className="flex items-start text-black mt-5 ml-5 text-3xl font-bold">
<h1>NEW ARRIVAL</h1>
</div>
<div className="flex items-center justify-center">
<div className="flex items-center justify-center grid grid-cols-1 sm:grid-cols-3 gap-10">
  {productItems.map((item, index)=>(
    <a key={index} className="hover:scale-105 duration-300 h-96 w-96" href="#">
      <img className="bg-white shadow-md object-cover" src={item.image} alt="" />
    </a>
  ))}
</div>
<div>
  <p>hello</p>
</div>
</div> */}