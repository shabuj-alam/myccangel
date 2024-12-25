import React, { useEffect, useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Button } from "@/components/ui/button"
  import { Input } from "@/components/ui/input"
  import { Label } from "@/components/ui/label"
  import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"



const DonationPage1 = () => {

  const [toggValue, setToggValue] = useState('');

  const click = (value: string) => {
    console.log(+value)
  }

  return (
    <div className='flex flex-col gap-5'>
        
        <ToggleGroup type="single" className='flex flex-row justify-between mt-2' onValueChange={(value) => click(value)}>
          <ToggleGroupItem value="Once" size="lg" className='bg-[#FFFFF] shadow-md rounded-lg w-[47%]'>Give Once</ToggleGroupItem>
          <ToggleGroupItem value="Monthly" size="lg" className='bg-[#FFFFF] shadow-md rounded-lg w-[47%]'>Monthly</ToggleGroupItem>
        </ToggleGroup>
        

        <div className='flex flex-col gap-2'>
          <Label className='font-medium'>Select an Amount</Label>
          <ToggleGroup type="single" className='flex flex-row gap-2' onValueChange={(value) => click(value)}>
            <ToggleGroupItem variant="outline" value="10" className='bg-[#ECD6FB80]'>$10</ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="25" className='bg-[#ECD6FB80]'>$25</ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="50" className='bg-[#ECD6FB80]'>$50</ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="100" className='bg-[#ECD6FB80]'>$100</ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="150" className='bg-[#ECD6FB80]'>$150</ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="500" className='bg-[#ECD6FB80]'>$500</ToggleGroupItem>
            <ToggleGroupItem variant="outline" value="1000" className='bg-[#ECD6FB80]'>$1000</ToggleGroupItem>
          </ToggleGroup>
          <p className='text-12'>Select an amount to donate</p>
        </div>

        <div className='flex flex-col gap-2'>
          <Label className='font-medium'>Other Amount</Label>
          <Input id="amount" type="number" />
        </div>
    </div>
    
  )
}

export default DonationPage1