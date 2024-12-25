import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BrowseVideoLink = ({imgURL, route, lable}:{
    imgURL: string,
    route: string,
    lable: string,
}) => {
  return (
    <Link href={route}>
        <div className="flex flex-col items-center">
            <div className='w-10 h-10 mr-3 rounded-full'>
                <Image src={imgURL} alt={imgURL} width={30} height={30} className="mx-auto" />
            </div>
            <p className="text-sm text-blue mt-2">{lable}</p>
        </div>
    </Link>
  )
}

export default BrowseVideoLink