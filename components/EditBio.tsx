import React from 'react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"


const EditBio = () => {
    return (
        <div className="grid gap-4 py-4">

            <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor="name" className="text-right">Name</Label>
                <div className='flex flex-row justify-between col-span-3 gap-4'>
                    <Input id="username" placeholder='First name' className="col-span-1" />
                    <Input id="username" placeholder='Last name' className="col-span-1" />
                </div>
            </div>

            <div className='grid grid-cols-3 items-center gap-4'>
                <Separator className="bg-slate-200 my-4" />
                <Label htmlFor="name" className="text-[16px] text-center">Medical Information</Label>
                <Separator className="bg-slate-200 my-4" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                    Bio
                </Label>
                <Textarea placeholder="Type your bio here." id="message" className='col-span-3' />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Location
                </Label>
                <Input id="username" placeholder='Location' className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Status
                </Label>
                <Input id="username" placeholder='Status' className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Type of IBD
                </Label>
                <Input id="username" placeholder='Type of IBD' className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                    Numbers of Years
                </Label>
                <Input id="username" placeholder='Number of Years' className="col-span-3" />
            </div>
        </div>
    )
}

export default EditBio