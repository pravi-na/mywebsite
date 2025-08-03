import React from "react";

const Header = () =>{
    return (
        <header style={{backgroundImage: "url('/src/assets/tech-image2.jpg')"}} className="h-96 bg-cover bg-center flex items-center justify-center text-white">
            <h1 className="bg-black/50 text-5xl font-bold p-4 rounded-lg backdrop:blur-sm">Welcome to my website</h1>
        </header>
    )
}

export default Header