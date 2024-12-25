'use client'

import Blogcard from '@/components/Blogcard'
import BrowseVideoLink from '@/components/BrowseVideoLink'
import TopVideosCard from '@/components/TopVideosCard'
import VideoCard from '@/components/VideoCard'
import { blogsData, browseVideoLinks, videosData } from '@/constants'
import Image from 'next/image'
import React, { MouseEvent, useState } from 'react'

import { Input } from "@/components/ui/input"

const Video = () => {

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
        <div className='mt-2'>
            <div className='flex flex-row justify-around gap-3'>
                {/*Blog Posts*/}
                <section className="bg-[#FFFFFF] flex-1 flex-col p-4 rounded-lg">
                    <div className="flex flex-row justify-between items-center">
                        <h1 className='text-32 truncate font-bold capitalize text-blue'>Videos</h1>
                        <figure className="flex flex-col justify-center items-end rounded-xl border-l-neutral-500 gap-4">
                            <Image
                                src="/videos.png"
                                width={300}
                                height={200}
                                alt="blog image"
                                className="h-fit w-full rounded-xl 2xl:size-[300px]"
                            />
                        </figure>
                    </div>

                    <div className='flex flex-row justify-around gap-8 mt-6'>
                        {videosData.map(({ id, imgURL, title, description, date }) => (
                            <VideoCard
                                key={id}
                                imgURL={imgURL}
                                title={title}
                                description={description}
                                date={date} id={0}                            />
                        ))}
                    </div>
                </section>

                <aside className="-col w-1/4">
                    <div className="flex flex-col bg-[#FFFFFF] justify-evenly shadow h-fit rounded-lg">
                        {/*Top Posts*/}
                        <div className='space-y-2 p-5'>
                            <h2 className='mt-2 text-24'>Top Videos</h2>

                            {videosData.map(({ imgURL, title, description, date }) => (
                                <TopVideosCard
                                    title={title}
                                    description={description}
                                    date={date}
                                    imgURL={imgURL}
                                />
                            ))}
                        </div>

                        {/*Browse*/}
                        <div className='flex flex-col space-y-2 p-5'>
                            <div>
                                <h2 className='mt-2 text-24'>Browse</h2>

                                <div className='flex flex-row justify-center items-center'>
                                    <div className="flex justify-center mt-4 gap-7">
                                        {browseVideoLinks.map(({ imgURL, route, label }) => (
                                            <BrowseVideoLink
                                                imgURL={imgURL}
                                                route={route}
                                                lable={label}
                                            />
                                        ))}
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
                            <div className="bg-[#FFFFFF] mt-6 p-4 shadow rounded-lg">
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

export default Video