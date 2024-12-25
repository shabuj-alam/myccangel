import React from 'react'

const ToppostCard = ({
    id, title, description, date
}: {
    id: number,
    title: string,
    description: string,
    date: string,
}) => {
    return (
        <div className="cursor-pointer" >
            <figure className="flex flex-row gap-2">
                <div className='flex'>
                    <h1 className='text-[36px] font-bold text-blue'>{id}</h1>
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

export default ToppostCard