import Image from 'next/image'
import React, {MouseEvent} from 'react'
import { Input } from "@/components/ui/input"

const MessagingCard = ( closeTab :{
    
}) => {

    return (
        <div className="bg-white mt-6 p-4 shadow rounded-lg">
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
                  <span className="cursor-pointer" onClick={closeTab}>
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

              <div className='flex flex-row gap-2 items-center'>
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
    )
}

export default MessagingCard