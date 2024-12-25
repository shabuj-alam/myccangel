import React from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import MainSection from '@/components/MainSection'

import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"





const page = () => {
  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="flex p-8 space-x-8">
        {/* Left Sidebar */}
        <aside className="bg-purple-100 flex flex-col justify-between p-4 rounded-lg shadow w-1/4">
          <div className=''>
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full">
                <Image
                    src="/add user 1.png" 
                    alt="User Icon"
                    width={45}
                    height={45}
                    className="mx-auto"
                  />
              </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white rounded-lg shadow p-4 mt-6 flex justify-between text-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">0</h2>
                <p className="text-sm text-gray-500">posts</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">0</h2>
                <p className="text-sm text-gray-500">connections</p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">0</h2>
                <p className="text-sm text-gray-500">groups</p>
              </div>
            </div>
          </div>

          <div className='flex'>
            {/* Illustration */}
            <div className="flex -ml-4 -mb-4">
              <Image
                src="/user profile 1.png" 
                alt="Angel Icon"
                width={600}
                height={600}
                className="mx-auto"
              />
            </div>

            {/* Settings Icon */}
            <div className="content-end ">
              <Image
                src="/settings button 1.png" 
                alt="settings Icon"
                width={45}
                height={45}
                className="mx-auto"
              />
            </div>
          </div>
          
        </aside>

        <section className="flex-1 flex-col">
          {/* Shearchbar Content */}
          <div className="bg-purple-100 rounded-lg flex items-center justify-center p-2 mx-auto">
            {/* Search Input */}
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder=" Search"
                  className="w-5/6 rounded-full bg-white px-4 py-2 text-gray-800 outline-none"
                />
                {/* <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <Image
                    src="/search.png" 
                    alt="User Icon"
                    width={30}
                    height={30}
                    className="mx-auto"
                  />
                </span> */}
              </div>
            </div>

            {/* Icons Section */}
            <div className="flex items-center space-x-4 text-purple-800">
              <span className="cursor-pointer">
                <Image
                  src="/icon _bell_.png" 
                  alt="User Icon"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </span>
              <span className="cursor-pointer">
                <Image
                  src="/icon _message circle_.png" 
                  alt="User Icon"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </span>
              <span className="cursor-pointer">
                <Image
                  src="/icon _home_.png" 
                  alt="User Icon"
                  width={30}
                  height={30}
                  className="mx-auto"
                />
              </span>
            </div>
          </div>

          <div className='flex flex-row gap-4 mt-4'>
            {/* Main Profile Section */}
            <section className="flex-1">
              <div className="bg-white p-6 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-blue">Hello Declan!</h2>
                <p className="text-gray-500">20 September, Friday</p>
                <div className="flex m-4 gap-12 content-center">
                  <button className="flex flex-col justify-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/blog icon 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-1">Blogs</p>
                  </button>
                  <button className="flex flex-col justify-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/icon _video outline_.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-1">Videos</p>
                  </button>
                  <button className="flex flex-col content-center ">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/icon _image_.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className='text-sm text-blue mt-1'>Photos</p>
                  </button>
                </div>
                <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                  <h2 className="font-semibold text-blue text-xl">Medical Information</h2>
                  <h3 className="mt-5 font-semibold text-blue text-lg">Bio</h3>
                  <p className='text-sm text-blue mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper vehicula
                    diam. Pellentesque eget egestas nulla.
                  </p>
                  <div className='flex content-center gap-16 mt-5'>
                    <h3 className="font-semibold text-blue text-lg">Location</h3>
                    <p className="text-sm text-blue">
                      City, Country
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-blue text-base'>Status</CardTitle>
                        {/* <CardDescription>(Flare up/Remission)</CardDescription> */}
                      </CardHeader>
                      <CardContent className='text-blue  text-base'>
                        <p className='text-sm text-blue'>Lorem Ipsum</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-blue text-base'>Type of IBD</CardTitle>
                        <CardDescription></CardDescription>
                      </CardHeader>
                      <CardContent className='text-blue  text-base'>
                        <p className='text-sm text-blue'>Lorem Ipsum</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className='text-blue text-base'>Numbers of Years</CardTitle>
                      </CardHeader>
                      <CardContent className='text-blue  text-base'>
                        <p className='text-sm text-blue'>Lorem Ipsum</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Sidebar */}
            <aside className="-col w-1/4">
              {/* Connections Section */}
              <div className="bg-white p-5 shadow rounded-lg">
                <h3 className="text-lg font-semibold text-blue">Connections</h3>
                {/* <ul className="mt-5 space-y-2">
                  <li className="flex items-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/add user 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-2">Emilia Clarke</p>
                  </li>
                  <li className="flex items-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/add user 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-2">Ray Pearce</p>
                  </li>
                  <li className="pt-2 flex flex-row justify-normal content-center">
                    <p className='text-sm text-blue'>View all connections</p>
                    <div className='w-10 h-10 p-1 ml-4 rounded-full'>
                      <Image src="/arrow down 2.png" alt="User Icon" width={15} height={15} className="mx-auto" />
                    </div>
                  </li>
                </ul> */}
                <div className="flex flex-col items-start m-4 gap-4">
                  <div className="flex flex-row justify-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/add user 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-2">Emilia Clarke</p>
                  </div>
                  <div className="flex flex-row justify-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/add user 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-2">Emilia Clarke</p>
                  </div>
                </div>
                <div className="pt-2 flex flex-row justify-normal content-center">
                  <p className='text-sm text-blue'>View all connections</p>
                  <div className='w-10 h-10 p-1 ml-4 rounded-full'>
                    <Image src="/arrow down 2.png" alt="User Icon" width={15} height={15} className="mx-auto" />
                  </div>
                </div>
              </div>

              {/* Recommendations Section */}
              <div className="bg-white mt-6 p-4 shadow rounded-lg">
                <h3 className="text-lg font-semibold text-blue">Recommendations</h3>
                <div className="flex justify-center m-4 gap-4">
                  <div className="flex flex-col items-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/add user 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-2">Emilia Clarke</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/add user 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-2">Emilia Clarke</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className='w-10 h-10 mr-3 rounded-full'>
                      <Image src="/add user 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                    </div>
                    <p className="text-sm text-blue mt-2">Emilia Clarke</p>
                  </div>
                </div>

                <div className="pt-2 flex flex-row justify-normal content-center">
                  <p className='text-sm text-blue mt-1'>View all recommendations</p>
                  <div className='w-10 h-10 p-1 ml-4 rounded-full'>
                    <Image src="/arrow down 2.png" alt="User Icon" width={15} height={15} className="mx-auto" />
                  </div>
                </div>

                <div className="bg-purple-100 rounded-lg flex items-center justify-end p-2 mx-auto">
                  <div className="flex items-center space-x-4 text-purple-800">
                    <span className="cursor-pointer">
                      <Image
                        src="/Ellipsis button 1.png" 
                        alt="User Icon"
                        width={20}
                        height={20}
                        className="mx-auto"
                      />
                    </span>
                    <span className="cursor-pointer">
                      <Image
                        src="/arrow up 1.png" 
                        alt="User Icon"
                        width={15}
                        height={15}
                        className="mx-auto"
                      />
                    </span>
                    <span className="cursor-pointer">
                      <Image
                        src="/close button 1.png" 
                        alt="User Icon"
                        width={15}
                        height={15}
                        className="mx-auto"
                      />
                    </span>
                  </div>
                </div>
              </div>
              
              {/* messaging sections*/}
              {/* <div className=" flex flex-col bg-white mt-6 p-4 shadow rounded-lg">
                <div className="bg-purple-100 rounded-lg flex items-center justify-end p-2 mx-auto">
                  <div className="flex items-center space-x-4 text-purple-800">
                    <span className="cursor-pointer">
                      <Image
                        src="/Ellipsis button 1.png" 
                        alt="User Icon"
                        width={20}
                        height={20}
                        className="mx-auto"
                      />
                    </span>
                    <span className="cursor-pointer">
                      <Image
                        src="/arrow down 2.png" 
                        alt="User Icon"
                        width={15}
                        height={15}
                        className="mx-auto"
                      />
                    </span>
                    <span className="cursor-pointer">
                      <Image
                        src="/close button 1.png" 
                        alt="User Icon"
                        width={15}
                        height={15}
                        className="mx-auto"
                      />
                    </span>
                  </div>
                </div>

                <div className='flex flex-row items-center'>
                  <div className="flex items-center">
                    <Popover>
                      <PopoverTrigger>
                        <div className='w-10 h-10 mr-3 rounded-full'>
                          <Image src="/arrow up 1.png" alt="User Icon" width={15} height={15} className="mx-auto" />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent>Place content for the popover here.</PopoverContent>
                    </Popover>

                  </div>
                  <Input />

                  <span className="cursor-pointer">
                    <Image
                      src="/Arrow 2.png"
                      alt="User Icon"
                      width={20}
                      height={20}
                      className="mx-auto"
                    />
                  </span>
                </div>
              </div> */}
              
            </aside>
          </div>
          
        </section>

        
      </div>
    </div>
  )
}

export default page