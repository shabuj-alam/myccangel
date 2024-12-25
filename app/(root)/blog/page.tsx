'use client'

import Blogcard from '@/components/Blogcard'
import ToppostCard from '@/components/ToppostCard'
import { blogsData, postData } from '@/constants'
import Image from 'next/image'
import React, { MouseEvent, useState } from 'react'
import { Input } from "@/components/ui/input"
import Link from 'next/link'

const Blog = () => {

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
                <section className="flex-1 flex-col bg-[#FFFFFF] p-4 shadow rounded-lg">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className='text-32 truncate font-bold capitalize text-blue ml-6'>BLOGS</h1>
                        <figure className="flex flex-col justify-center items-end rounded-xl border-l-neutral-500 gap-4 mr-4">
                            <Image
                                src="/blogs.png"
                                width={135}
                                height={135}
                                alt="blog image"
                                className="scale-110 aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
                            />
                        </figure>
                    </div>
                    
                    <div className='podcast_grid mt-6'>
                        {blogsData.map(({ id, imgURL, title, description, date }) => (
                            <Blogcard
                                key={id}
                                imgUrl={imgURL}
                                title={title}
                                description={description}
                                date={date}
                            />
                        ))}
                    </div>
                </section>

                <aside className="-col w-1/4">
                    <div className="flex flex-col bg-[#FFFFFF] shadow justify-evenly h-fit rounded-lg">
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
                        <div className='flex flex-col p-5  space-y-2'>
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
                                        <Link href="/photos" className="flex flex-col items-center">
                                            <div className='w-10 h-10 mr-3 rounded-full'>
                                                <Image src="/icon _image_.png" alt="User Icon" width={30} height={30} className="mx-auto" />
                                            </div>
                                            <p className="text-sm text-blue mt-2">Photos</p>
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

export default Blog