import {FaHome, FaInfoCircle,FaServicestack,FaEnvelope} from "react-icons/fa"
function Navbar(){
  const navlink = [
    {
      name:"Home",
      href:"#",
      icon: <FaHome />
    },
    {
      name:"About",
      href:"/about",
      icon: <FaInfoCircle />
    },
    {
      name:"Sefvices",
      href:"/services",
      icon: <FaServicestack />
    },
    {
      name:"Contact",
      href:"/contact",
      icon: <FaEnvelope />
    }
  ]
return(
    <nav className="p-4 bg-purple-600 text-white">
        <div className="container flex items-center justify-between">
            <h1 className="text-3xl font-bold">My Websites</h1>
            <ul className="flex gap-3">
              {navlink.map((link,index)=>(
            <li key={index}><a href={link.href} className="flex items-center gap-2 hover:text-red-500 hover:font-bold">{link.icon}{link.name}</a></li>
              ))}
              
              {/* <li><a href="About" className="flex items-center gap-2 hover:text-red-500 hover:font-bold"><FaInfoCircle /> About</a></li>
              <li><a href="Services" className="flex items-center gap-2 hover:text-red-500 hover:font-bold"><FaServicestack /> Services</a></li>
              <li><a href="Contact" className="flex items-center gap-2 hover:text-red-500 hover:font-bold"><FaEnvelope /> Contact</a></li> */}
            </ul>
        </div>
      </nav>
)
}
export default Navbar