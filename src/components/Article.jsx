import image from "../assets/news"
const Article = () =>{
    return(
        <article className="p-4">
            <h2 className="text-3xl font-bold p-4">Latest News</h2>
            <div className="flex items-center gap-4 shadow-[0_4px_20px_rgba(128,0,128,0.4)] p-4 rounded-lg">
                <img src={image} alt="news" className="rounded-lg" />
                <div>
                    <h2 className="font-bold text-2xl">Vite is Revolutioning Frintend</h2>
                    <p className=" text-xl text-gray-400 mt-2">Vite is a next-gen frontend tool that delivers fast development.</p>
                </div>
            </div>
        </article>
    )
}

export default Article