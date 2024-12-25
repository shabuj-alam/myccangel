import Image from 'next/image'
import React from 'react'

const VideoCard = ({
    id, title, description, date, imgURL
}: {
    id: number,
    title: string,
    description: string,
    date: string,
    imgURL: string,
}) => {
  return (
    <div className="relative w-[300px] h-[180px] bg-gray-200 rounded-md shadow-md overflow-hidden">
        {/* Background Image */}
        <Image
          src={imgURL} // Replace with your image path
          alt="Card"
          layout="fill"
          objectFit="cover"
        />
        {/* Play Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-md">
          <div className="border-l-[12px] border-l-gray-800 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
        </div>
        {/* Text Overlay */}
        <div className="absolute bottom-0 bg-purple-200 bg-opacity-80 w-full p-2">
          <p className="text-gray-800 font-medium">{title}</p>
        </div>
      </div>
  )
}

export default VideoCard