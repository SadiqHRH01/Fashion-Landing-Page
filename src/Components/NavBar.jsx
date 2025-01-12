import { navItems } from "../Constants"
import logo from "../assets/Frame 8.png"

const NavBar = () => {
  return (
    
    <header className="flex justify-between items-center py-5 px-5 ">
       <div>
        <h1 className="text-2xl font-bold">
            FASHION
            </h1>
        </div>
        <nav className="">
            <img className="  sm:hidden w-10 h-10 flex justify-end mr-10" src={logo} alt="" />
          <ul className="flex justify-end mr-10 hidden sm:block">
            <li className="justify-between items-end space-x-5">
            {navItems.map((item, index)=>(
                <a href={item.href} key={index}>{item.label}</a>
            ))}
            </li>
            
          </ul>
        </nav>
  
    </header>
    
  )
}

export default NavBar