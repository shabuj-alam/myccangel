"use client";
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link';


const Blogcard = ({
    imgUrl, title, description, date
  }: {
    imgUrl: string,
    title: string,
    description: string,
    date: string,
    }) => {

  return (
    <div className="cursor-pointer" >
      <figure className="flex flex-col justify-center items-center rounded-lg gap-4">
        <Image
          src={imgUrl}
          width={135}
          height={135}
          alt={title}

          className="aspect-square h-fit w-full shadow rounded-xl 2xl:size-[200px]"
        />
        <div className="flex flex-col h-40 w-48 gap-2">
            <p className="flex text-xs italic justify-end from-neutral-500">{date}</p>
            <h1 className="text-16 truncate font-bold text-blue">{title}</h1>
            <h2 className="text-12 truncate font-normal text-blue">{description}</h2>
            <Button className='bg-purple-100' variant="outline">Read More</Button>
        </div>
      </figure>
    </div>
  )
}

export default Blogcard