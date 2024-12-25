import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


const DonationPage3 = () => {
  return (
    <div className='space-y-6'>
      <p className='text-14'>
        Please provide your card details to continue with your donation.
      </p>

      <div>
        <Input id="cardnumer" type="number" placeholder='Card Number' />
        <p className='text-12 text-slate-500'>required</p>
      </div>

      <div className='space-y-1'>
        <div className='flex flex-row justify-between gap-4'>
          <div>
            <Input id="expiry" type="text" placeholder='Expiration' />
            <p className='text-12 text-slate-500'>required</p>
          </div>
          <div>
            <Input id="cvc" type="text" placeholder='CVC' />
            <p className='text-12 text-slate-500'>required</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Save payment information
        </label>
      </div>
    </div>
  )
}

export default DonationPage3