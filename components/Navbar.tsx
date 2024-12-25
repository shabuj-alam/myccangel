import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src="/imagepreview.png" 
            alt="User Icon"
            width={160}
            height={160}
            className="mx-auto"
          />
        </div>

        <nav className="space-x-4">
          <a href="#" className="text-blue hover:text-blue">Home</a>
          <a href="#" className="text-blue hover:text-blue">About IBD</a>
          <a href="#" className="text-blue hover:text-blue">AI Help</a>
          <a href="#" className="text-blue hover:text-blue">Resources</a>
          <a href="#" className="text-blue hover:text-blue">Contact Us</a>
        </nav>
    </header>
  )
}

export default Navbar