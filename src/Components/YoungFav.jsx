
import {favoriteItems} from "../Constants"

const YoungFav = () => {
  return (
   <>
     <div className="mt-20 tracking-wide">
           <h2 className="text-3xl sm:text-5xl lg:text-6xl text-start font-bold my-4 mx-5 mt-20">
             Young Favourite
           </h2>
           <div className="flex flex-wrap items-center justify-center">
            {favoriteItems.map((item, index)=>(
                 <div key={index} className="flex items-center justify-center w-full sm:w-1/2 lg:w-1/2 px-4 py-2">
                 <div className=" rounded-md p-6 text-md  ">
                   <a href="#">
                     <img className="hover:scale-105 duration-300  shadow-md object-fill" src={item.image} alt="" />
                   </a>
                   <div className="flex mt-3 items-start ">
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
   
  )
}

export default YoungFav