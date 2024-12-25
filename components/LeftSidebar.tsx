import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <aside className="bg-purple-200 opacity-80 flex flex-col justify-between p-4 h-[600px] rounded-lg shadow w-[22%]">
          <div className=''>
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full">
                <Image
                    src="/profile.png" 
                    alt="User Icon"
                    width={85}
                    height={85}
                    className="mx-auto"
                  />
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-[#FFFF] bg-opacity-100 rounded-lg shadow p-4 mt-6 flex justify-between text-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">0</h2>
                <p className="text-sm text-gray-500">Posts</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">0</h2>
                <p className="text-sm text-gray-500">Connections</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">0</h2>
                <p className="text-sm text-gray-500">Groups</p>
              </div>
            </div>
          </div>

          <div className='flex'>
            {/* Illustration */}
            <div className="flex ml-3 mb-4">
              <Image
                src="/user profile 1.png" 
                alt="Angel Icon"
                width={600}
                height={600}
                className="mx-auto scale-125"
              />
            </div>

            {/* Settings Icon */}           
            <Link href="/" className="content-end ">
              <Image
                src="/settings button 1.png" 
                alt="settings Icon"
                width={55}
                height={55}
                className="mx-auto"
              />
            </Link>
          </div>
          
        </aside>
  )
}

export default LeftSidebar