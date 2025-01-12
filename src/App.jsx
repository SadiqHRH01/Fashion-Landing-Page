import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Mobile from "./Components/Mobile";
import NavBar from "./Components/NavBar";
import NewArrival from "./Components/NewArrival";
import NewsLetter from "./Components/NewsLetter";
import PayDay from "./Components/PayDay";
import YoungFav from "./Components/YoungFav";

export default function App() {
  return (
    <>
    <NavBar />
    <Hero />
   <div className="max-w-7xl mx-auto pt-10 px-6">
   <NewArrival />
   <YoungFav/>
   <PayDay />
   <div className="sm:mt-10 mt-80">
   <Mobile />
   </div>
   </div>
   <div className="">
   <NewsLetter />
   </div>
    <Footer/>
   </>
  )
}