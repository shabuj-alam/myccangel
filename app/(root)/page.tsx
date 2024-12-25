'use client'

import React, { MouseEvent, useState } from 'react'
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
import { Button, buttonVariants } from "@/components/ui/button"
import { Pencil } from 'lucide-react';


import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"


import Link from 'next/link'

import MessagingCard from '@/components/MessagingCard'
import EditBio from '@/components/EditBio'





const page = () => {

  const [user, setUser] = useState(0);
  const [chat, setChat] = useState('');

  const handleChatOpenEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Do something
    setUser(1)
    console.log(user);
  };

  const handleChatCloseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Do something
    setUser(0)
    console.log(user);
  };

  return (
    <section className="">
      <div className='flex flex-row gap-4 mt-4'>
        {/* Main Profile Section */}
        <section className="flex-1">
          <div className="bg-[#FFFFFF] p-6 shadow rounded-lg">
            <div className='flex flex-row justify-between'>
              <h2 className="text-2xl font-semibold text-blue">Hello Declan!</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon" className='hover:bg-[#33265E]' >
                    <Pencil className='hover:bg-white-5'/>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#FFFF] sm:max-w-[700px]">
                  <DialogHeader>
                    <DialogTitle>Edit information</DialogTitle>
                    <DialogDescription>
                      Make changes to your information here. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <EditBio />
                  <DialogFooter>
                    <Button variant="outline" type="submit" className='text-black-6 hover:bg-[#33265E] hover:text-[#FFFF]'>Save changes</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <p className="text-gray-500">20 September, Friday</p>
            <div className="flex m-4 gap-12 content-center">
              <Link href="/blog" className="flex flex-col justify-center">
                <div className='w-10 h-10 mr-3 rounded-full'>
                  <Image src="/blog icon 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                </div>
                <p className="text-sm text-blue mt-1">Blogs</p>
              </Link>
              <Link href="/video" className="flex flex-col justify-center">
                <div className='w-10 h-10 mr-3 rounded-full'>
                  <Image src="/icon _video outline_.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                </div>
                <p className="text-sm text-blue mt-1">Videos</p>
              </Link>
              <Link href="/" className="flex flex-col content-center ">
                <div className='w-10 h-10 mr-3 rounded-full'>
                  <Image src="/icon _image_.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                </div>
                <p className='text-sm text-blue mt-1'>Photos</p>
              </Link>
            </div>
            <div className="mt-6 bg-purple-200 p-4 rounded-lg">
              <div className='flex flex-row justify-between'>
                <h2 className="font-semibold text-blue text-xl">Medical Information</h2>
              </div>
              
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
                <Card className='bg-[#FFFFFF]'>
                  <CardHeader>
                    <CardTitle className='text-blue text-base'>Status</CardTitle>
                    {/* <CardDescription>(Flare up/Remission)</CardDescription> */}
                  </CardHeader>
                  <CardContent className='text-blue  text-base'>
                    <p className='text-sm text-blue'>Lorem Ipsum</p>
                  </CardContent>
                </Card>
                <Card className='bg-[#FFFFFF]'>
                  <CardHeader>
                    <CardTitle className='text-blue text-base'>Type of IBD</CardTitle>
                    <CardDescription></CardDescription>
                  </CardHeader>
                  <CardContent className='text-blue  text-base'>
                    <p className='text-sm text-blue'>Lorem Ipsum</p>
                  </CardContent>
                </Card>
                <Card className='bg-[#FFFFFF]'>
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
          <div className="bg-[#FFFFFF] p-5 shadow rounded-lg">
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


          {(user==0)?

          /* Recommendations Section */
            <div className="bg-[#FFFFFF] mt-6 p-4 shadow rounded-lg">
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

              <div className="bg-purple-100 mt-4 rounded-lg flex items-center justify-end p-2 mx-auto">
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

                  <Popover>
                    <PopoverTrigger>
                      <span className="cursor-pointer" onClick={handleChatOpenEvent}>
                        <Image
                          src="/arrow up 1.png"
                          alt="User Icon"
                          width={15}
                          height={15}
                          className="mx-auto"
                        />
                      </span>
                    </PopoverTrigger>
                    <PopoverContent className="bg-[#FFFFFF]-1 mr-8 max-h-[400px] overflow-y-scroll scroll-smooth no-scrollbar">
                      <MessagingCard />
                      <MessagingCard />
                    </PopoverContent>
                  </Popover>

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
            :
            /* messaging sections*/
            <div className="bg-[#FFFFFF] mt-6 shadow rounded-lg">
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
                  <span className="cursor-pointer" onClick={handleChatCloseEvent}>
                    <Image
                      src="/arrow down 2.png"
                      alt="User Icon"
                      width={15}
                      height={15}
                      className="mx-auto"
                    />
                  </span>
                  <span className="cursor-pointer" onClick={handleChatCloseEvent}>
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

              <div className='h-[200px]'>

              </div>

              <div className='flex flex-row gap-2 p-1 items-center'>
                <span className="cursor-pointer">
                  <Image
                    src="/plus.png"
                    alt="User Icon"
                    width={25}
                    height={25}
                    className="mx-auto"
                  />
                </span>

                <Input />

                <span className="cursor-pointer">
                  <Image
                    src="/up-arrow.png"
                    alt="User Icon"
                    width={25}
                    height={25}
                    className="mx-auto"
                  />
                </span>
              </div>
            </div>
            // <MessagingCard closeTab={handleChatCloseEvent}/>
          }
          {/* <div className="bg-[#FFFFFF] mt-6 p-4 shadow rounded-lg">
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

                <Popover>
                  <PopoverTrigger>
                  <span className="cursor-pointer">
                    <Image
                      src="/arrow up 1.png"
                      alt="User Icon"
                      width={15}
                      height={15}
                      className="mx-auto"
                    />
                  </span>
                  </PopoverTrigger>
                  <PopoverContent className="bg-[#FFFFFF]-1 mr-8 max-h-[400px] overflow-y-scroll scroll-smooth no-scrollbar">
                    <MessagingCard />
                    <MessagingCard />
                  </PopoverContent>
                </Popover>

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
          </div> */}



          

        </aside>
      </div>
    </section>
  )
}

export default page