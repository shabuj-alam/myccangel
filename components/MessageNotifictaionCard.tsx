import Image from 'next/image'
import React from 'react'

const MessageNotifictaionCard = ({
    title, description, date
}: {
    title: string,
    description: string,
    date: string,
}) => {
    return (
        <div className="cursor-pointer" >
            <figure className="flex flex-row gap-2">
                <div className='flex-1 mt-3'>
                    <Image src="/profile2.png" alt="" width={30} height={30} className="mx-auto" />
                </div>
                <div className='flex flex-col'>
                    <h2 className="text-12 font-bold truncate text-gray-500">{title}</h2>
                    <p className="text-12 text-gray-500">.....</p>
                    <p className="flex text-xs italic justify-end text-gray-400">{date}</p>
                </div>
            </figure>
        </div>
    )
}

export default MessageNotifictaionCard