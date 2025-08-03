import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Aside from './components/Aside'
import Hero from './components/Hero'
import Article from './components/Article'
import Tables from './components/Tables'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Header />
      <Hero />
      
      <div className='flex mx-auto flex-col md:flex-row'>
        <main className='flex-1'>
          <Article /> 
      <Tables />
        </main>
         <Aside />
      </div>
      <Footer />
    </>
  )
}

export default App
