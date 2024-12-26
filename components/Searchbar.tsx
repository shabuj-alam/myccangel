import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"


import { blogsData } from '@/constants'
import NotificationCard from './NotificationCard'
import MessageNotifictaionCard from './MessageNotifictaionCard'


const Searchbar = () => {
  return (
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
        <Popover>
          <PopoverTrigger>
            <Image
              src="/icon _bell_.png"
              alt="User Icon"
              width={30}
              height={30}
              className="mx-auto"
            />
          </PopoverTrigger>
          <PopoverContent className='bg-white-1 mr-8 max-h-[400px] overflow-y-scroll scroll-smooth no-scrollbar'>
            {blogsData.map(({id, title, description, date})=>(
              <div>
                <NotificationCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  date={date}/>
                <Separator className="bg-slate-200  my-4" />
              </div>
            ))}
            <Link href="/">
              <div className="flex justify-center items-center">
                <p className='text-sm font-bold text-blue mt-1'>view all notofications</p>
              </div>
            </Link>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger>
            <Image
              src="/icon _message circle_.png"
              alt="User Icon"
              width={30}
              height={30}
              className="mx-auto"
            />
          </PopoverTrigger>
          <PopoverContent className='bg-white-1 mr-8 max-h-[400px] overflow-y-scroll scroll-smooth no-scrollbar'>
            {blogsData.map(({title, description, date})=>(
              <div>
                <MessageNotifictaionCard
                  title={title}
                  description={description}
                  date={date}
                />
                <Separator className="bg-slate-200  my-4" />
              </div>
            ))}
            <Link href="/">
              <div className="flex justify-center items-center">
                <p className='text-sm font-bold text-blue mt-1'>view all notofications</p>
              </div>
            </Link>
          </PopoverContent>
        </Popover>

        <Link href="/">
          <span className="cursor-pointer">
            <Image
              src="/icon _home_.png"
              alt="User Icon"
              width={30}
              height={30}
              className="mx-auto"
            />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Searchbar