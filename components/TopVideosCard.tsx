import Image from 'next/image'
import React from 'react'

const TopVideosCard = ({
    title, description, date, imgURL
}: {
    title: string,
    description: string,
    date: string,
    imgURL: string,
}) => {
    return (
        <div className="cursor-pointer" >
            <figure className="flex flex-row gap-2">
                <div className="">
                    <Image src={imgURL} alt={title} width={35} height={35} className="mt-4 mx-auto" />
                </div>
                <div className='flex flex-col p-2'>
                    <h2 className="text-14 truncate font-bold text-blue">{title}</h2>
                    <h2 className="text-12 truncate font-normal text-blue">{description}</h2>
                    <p className="flex text-xs italic justify-end from-neutral-500">{date}</p>
                </div>
            </figure>
        </div>
  )
}

export default TopVideosCard