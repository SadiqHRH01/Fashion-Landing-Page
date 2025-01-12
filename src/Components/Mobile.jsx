
import { MobileItems } from "../Constants"
import PlayStore from "../assets/PlayStore.png"
import AppStore from "../assets/Apple.png"

const Mobile = () => {
  return (
     <div className="grid mt-20 tracking-wide">
               {/* <h2 className="text-3xl sm:text-5xl lg:text-6xl text-start font-bold my-4 mx-5 mt-20">
                 Young Favourite
               </h2> */}
               <div className="flex flex-wrap items-center justify-center lg:mx-36">
                {MobileItems.map((item, index)=>(
                     <div key={index} className="flex items-center justify-center w-full sm:w-1/2 lg:w-1/2 px-4 py-2">
                     <div className=" rounded-md p-6 text-md  ">
                        <div>
                        <a href="#">
                         <img className="hover:scale-105 duration-300  shadow-md object-fill" src={item.image2} alt="" />
                       </a>
                        </div>
                     </div>
                   </div>
                ))}
                
                 <div className="flex flex-col mt-3 items-center justify-center w-full sm:w-1/2 lg:w-1/2 px-4 py-2 ">
                         <h2 className="ml-2 font-bold sm:text-2xl lg:text-4xl ">DOWNLOAD APP & <br/>
                         GET THE VOUCHER!</h2>
                         <div>
                             <p className="ml-5 text-sm mt-2 sm:text-sm lg:text-lg">Get 30% Off for first transaction using 
                               <br/> Sadiq Mobile app for now
                             </p>
                             <div className="flex items-center justify-center space-x-3 mt-4">
                             <a href="">
                                <img src={PlayStore} alt="" />
                             </a>
                             <a href="">
                                <img src={AppStore} alt="" />
                             </a>
                             </div>
                         </div> 
                       </div>
               </div>
             </div>
  )
}

export default Mobile