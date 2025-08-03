import {FaBook, FaReact, FaRainbow} from "react-icons/fa"

const links = [
    {
        icon:<FaBook />,
        href: "#",
        name:"Vite Documentation"
    },
    {
        icon:<FaReact />,
        href: "#",
        name:"React Documentation"
    },
    {
        icon:<FaRainbow />,
        href: "#",
        name:"Frontend Trends"
    }
]
const Aside = () =>{
    return (
        <aside className="bg-gray-200 rounded shadow-sm p-6">
            <h2>Related Links</h2>
            <ul className="space-y-2 mt-2">
                {
                    links.map((link)=>(
                    <li>
                    <a href={links.href} className="flex items-center gap-2 hover:underline text-blue-600">{link.icon} {link.name}</a>
                </li>
                ))
                }
                
            </ul>
        </aside>
    )
}

export default Aside