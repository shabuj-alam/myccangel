import React from 'react'

const NotificationCard = ({
    id, title, description, date
}: {
    id: number,
    title: string,
    description: string,
    date: string,
}) => {
    return (
        <div className="cursor-pointer" >
            <figure className="flex flex-col">
                <h2 className="text-14 truncate font-bold text-blue">{title}</h2>
                <h2 className="text-12 truncate font-normal text-blue">{description}</h2>
                <p className="flex text-xs italic justify-end from-neutral-500">{date}</p>
            </figure>
        </div>
    )
}

export default NotificationCard