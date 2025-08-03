import {FaSearchLocation, FaCheckCircle,FaEdit} from "react-icons/fa"

const tableHeader = [
    {
        colname: "Avathar",
        icon: <FaSearchLocation />  
    },
    {
        colname: "Name",
        icon: <FaEdit />  
    },
    {
        colname: "Status",
        icon: <FaCheckCircle />  
    }
]

const tabledata = [
    {
        image: "1",
        name: "pravina",
        status: "Active"
    },
    {
        image: "2",
        name: "pravina",
        status: "Inactive"
    }
]

const Tables = () =>{
    return(
        <div className="container p-2">
            <h2 className="font-bold text-2xl p-4">User Data</h2>
            <table className="border border-collapse border-black m-4 text-center min-w-full">
                <thead>
                    <tr>
                        {tableHeader.map((heading) => (
                            <th key={heading.colname} className="p-3 bg-gray-400 text-white ">
                                <div className="flex items-center justify-center gap-2">
                                    {heading.icon}
                                {heading.colname}
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tabledata.map((data) =>(
                        <tr key={data.name} className="">
                                <td className="p-3">{data.image}</td>
                                <td className="p-3"> {data.name}</td>
                                <td className={`p-3 ${data.status == "Active" ? `text-green-500`:`text-red-500`} font-bold` }>{data.status}</td>
                            </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Tables