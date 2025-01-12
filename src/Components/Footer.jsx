import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-black p-10 h-auto md:h-58  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:mt-5">
           <div className="text-neutral-400 ">
            <h1 className="text-neutral-300 text-lg font-bold mb-1">FASHION</h1>
            <p className="mb-2">Complete your style with awesome clothes from us. </p>
            <div>
                <ul className="flex md:space-x-2">
                    <li><a href="#"></a><FaFacebookSquare className="text-3xl text-yellow-400" /></li>
                    <li><a href="#"></a><FaInstagramSquare className="text-3xl text-yellow-400" /></li>
                    <li><a href="#"></a><FaTwitterSquare className="text-3xl text-yellow-400" /></li>
                    <li><a href="#"></a><FaLinkedin className="text-3xl text-yellow-400" /></li>
                </ul>
            </div>
           </div>
           {/* Company */}
           <div>
            <h1 className="text-neutral-300 font-bold mb-2 text-lg">Company</h1>
            <div>
                <ul className="flex flex-col space-y-1 text-neutral-400 ">
                    <li className="hover:underline"><a href="">About</a></li>
                    <li className="hover:underline"><a href="">Contact us</a></li>
                    <li className="hover:underline"><a href="">Support</a></li>
                    <li className="hover:underline"><a href="">Careers</a></li>
                </ul>
            </div>
           </div>
           <div>
            <h1 className="text-neutral-300 font-bold text-lg mb-2">Legal</h1>
            <ul className="flex flex-col space-y-1 text-neutral-400 ">
                <li className="hover:underline"><a href="">Terms & Conditions</a></li>
                <li className="hover:underline"><a href="#">Privacy Policy</a></li>
            </ul>
            </div> 
        </div>
        <div className="border-t border-neutral-400 text-neutral-400 text-center mt-5 ">
            <p className="mt-8">All Rights Reserved &copy; SadiqHRH</p>
        </div>
    </footer>
  )
}

export default Footer