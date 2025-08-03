import img1 from "../assets/img1.jpg"

const Hero = () =>{
    return(
        <section className="flex items-center flex-col gap-3 p-4 bg-purple-100">
            <img src={img1} alt="image" className="" style={{height: "400px"}} />
            <h2 className="text-2xl font-bold">Building amazing UIs with React & Vite</h2>
            <p className="text-gray-600">Fast, lightweight and frontend development</p>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-lg  hover:bg-purple-900 transistion ">Get Started</button>
        </section>
    )
}

export default Hero