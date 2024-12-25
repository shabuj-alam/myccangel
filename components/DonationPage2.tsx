import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const DonationPage2 = () => {
  return (
    <div className='space-y-2'>
      <div className='space-y-1'>
        <Label>Name*</Label>
        <div className='flex flex-row justify-between gap-4'>
          <Input id="firstName" type="text" placeholder='First Name'/>
          <Input id="secondName" type="text" placeholder='Last Name'/>
        </div>
        <p className='text-12 text-slate-500'>required</p>
      </div>

      <div className='space-y-1'>
        <Label>Email*</Label>
        <div className='flex flex-row justify-between gap-4'>
          <Input id="email" type="email" placeholder='Email'/>
        </div>
        <p className='text-12 text-slate-500'>required</p>
      </div>

      <div className='space-y-1'>
        <Label>City, Country</Label>
        <div className='flex flex-row justify-between gap-4'>
          <Input id="city" type="text" placeholder=''/>
        </div>
        <p className='text-12 text-slate-500'>Optional</p>
      </div>
    </div>
  )
}

export default DonationPage2