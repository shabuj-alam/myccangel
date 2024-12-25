'use client'

import Blogcard from '@/components/Blogcard'
import ToppostCard from '@/components/ToppostCard'
import { blogsData, imagesdata, postData } from '@/constants'
import Image from 'next/image'
import React, { MouseEvent, useState } from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'

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
    <div className='mt-4'>

      <div className='flex flex-row justify-around gap-3'>
        {/*Blog Posts*/}
        <section className="bg-[#FFFFFF] flex-1 flex-col p-4 shadow rounded-lg">
          <div className="flex flex-row justify-between items-center">
            <h1 className='text-32 truncate font-bold capitalize text-blue  ml-6'>PHOTOS</h1>
            <figure className="flex flex-col justify-center items-end rounded-xl border-l-neutral-500 gap-4 mr-6">
              <Image
                src="/GALLERY.png"
                width={300}
                height={300}
                alt="blog image"
                className="scale-100 h-fit w-full rounded-xl 2xl:size-[300px]"
              />
            </figure>
          </div>

          <div className='podcast_grid'>
            {/* {blogsData.map(({ id, imgURL, title, description, date }) => (
              <Blogcard
                key={id}
                imgUrl={imgURL}
                title={title}
                description={description}
                date={date}
              />
            ))} */}
            {imagesdata.map((x) => {
              return (
                  <figure
                    key={x.id}
                    className="p-1 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-md rounded-2xl cursor-pointer"
                  >
                    <Link
                      href={x.link}
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    />
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="h-fit rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                      {/* <Link
                        className="flex justify-center items-center bg-purple-500 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visite Website
                      </Link> */}
                    </div>
                    {/* <h3 className="font-medium text-xl leading-8">
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="block relative group-hover:text-purple-500 transition-colors duration-200"
                      >
                        <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                      </Link>
                    </h3> */}
                  </figure>
              );
            })}
          </div>
        </section>

        <aside className="-col w-1/4">
          <div className="flex flex-col bg-[#FFFFFF] justify-evenly shadow h-fit rounded-lg">
            {/*Top Posts*/}
            <div className='space-y-2 p-5'>
              <h2 className='mt-2 text-24'>Top Post</h2>

              {postData.map(({ id, imgURL, title, description, date }) => (
                <ToppostCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  date={date}
                />
              ))}
            </div>

            {/*Browse*/}
            <div className='flex flex-col p-5 space-y-2'>
              <div>
                <h2 className='mt-2 text-24'>Browse</h2>
                <div className='flex flex-row justify-center items-center'>
                  <div className="flex justify-center mt-4 gap-7">
                    <Link href="/video" className="flex flex-col items-center">
                      <div className='w-10 h-10 mr-3 rounded-full'>
                        <Image src="/icon _video outline_.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                      </div>
                      <p className="text-sm text-blue mt-2">Videos</p>
                    </Link>
                    <Link href="/blog" className="flex flex-col items-center">
                      <div className='w-10 h-10 mr-3 rounded-full'>
                        <Image src="/blog icon 1.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                      </div>
                      <p className="text-sm text-blue mt-2">Blogs</p>
                    </Link>
                    <Link href="/" className="flex flex-col items-center">
                      <div className='w-10 h-10 mr-3 rounded-full'>
                        <Image src="/profile.png" alt="User Icon" width={30} height={30} className="mx-auto scale-150" />
                      </div>
                      <p className="text-sm text-blue mt-2">Profile</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>


            {(user == 0) ?
              /*message*/
              < div className='h-full flex mt-12 items-end'>
                <div className="bg-purple-100 w-full rounded-lg flex items-center justify-end p-2 mx-auto">
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
                    <span className="cursor-pointer" onClick={handleChatOpenEvent}>
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
            }
          </div>
        </aside>
      </div>


    </div>
  )
}

export default page
