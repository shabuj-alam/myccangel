import React from 'react'

const Profiledetails = ({ params }: { params: {userId: string}}) => {
  return (
    <div>Profiledetails for {params.userId}</div>
  )
}

export default Profiledetails