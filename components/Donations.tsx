'use client'

import React, { useState, MouseEvent, useEffect } from 'react'

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
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"


import Image from 'next/image'
import DonationPage1 from './DonationPage1'
import DonationPage2 from './DonationPage2'
import DonationPage3 from './DonationPage3'
import DonationPage4 from './DonationPage4'


const Donations = () => {

    const [clkValue, setClkValue] = useState(0);
    const [tabsName, setTabsName] = useState('donation1');

    useEffect(() => {
        console.log(clkValue);
        if (clkValue == 0){
            setTabsName('donation1');
        } else if (clkValue == 1) {
            setTabsName('donation2');
        } else if (clkValue == 2) {
            setTabsName('donation3');
        } else if (clkValue == 3) {
            setTabsName('donation4');
        }
      });

    const handleNextEvent = async() => {
        setClkValue(clkValue + 1);
        console.log("Next Pressd:"+clkValue);
    };

    const handleBackEvent = async() => {
        setClkValue(clkValue - 1);
        console.log("Back Pressd:"+clkValue);
    };

    return (
        <div className="bg-donate-image bg-cover">
            {/*Top*/}
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-row w-[75%] h-50'>
                    <div className='w-1/4 flex items-center'>
                        <h1 className='flex w-10 text-4xl font-bold tex text-left'>
                            Why Donate?
                        </h1>
                    </div>
                    <div className='w-3/4 flex flex-col justify-start p-4 gap-6'>
                        <h1 className='text-16'>
                            Your support can make a life-changing difference for millions living with Crohn's and Colitis. By donating to MyCCAngel, you empower patients with vital resources, connections, and hope.
                        </h1>
                        <h1 className='text-16'>
                            Your contribution helps us with maintaining a supportive online community, enhancing our platform, providing financial assistance for medications and doctor visits
                            and, hosting future events for IBD patients.
                        </h1>
                        <h1 className='text-14 italic'>
                            Join us in transforming lives—every contribution counts. Click *here* to know how we utilize your contribution
                        </h1>
                    </div>
                </div>
            </div>


            {/*Bottom*/}
            <div className='flex justify-center items-center p-4'>
                <Card className=' w-3/4  bg-[#FFFFFF]'>
                    <div className='flex flex-row justify-around items-center'>
                        <CardContent className='flex justify-center w-[50%]'>
                            <Image
                                src="/Donation_card.png"
                                alt="Donation Image"
                                width={500}
                                height={500}
                                className="mx-auto scale-95"
                            />
                        </CardContent>
                        <div className='bg-cover flex justify-center'>
                            <Tabs defaultValue="donation1" value={tabsName} className="w-[400px]">
                                <TabsList className="bg-white grid w-full grid-cols-4">
                                    <TabsTrigger value="donation1" className='flex justify-center'>
                                        <div className={`${(tabsName == 'donation1') ? 'bg-[#886A8F]' : 'bg-[#D9D9D9]'} w-[115.2px] h-[12px] rounded-tl-md rounded-bl-md data-[state=active]:shadow-none`}></div>
                                    </TabsTrigger>
                                    <TabsTrigger value="donation2" className='flex justify-center'>
                                        <div className={`${(tabsName == 'donation2') ? 'bg-[#886A8F]' : 'bg-[#D9D9D9]'} w-[115.2px] h-[12px] `}></div>
                                    </TabsTrigger>
                                    <TabsTrigger value="donation3" className='flex justify-center'>
                                        <div className={`${(tabsName == 'donation3') ? 'bg-[#886A8F]' : 'bg-[#D9D9D9]'} w-[115.2px] h-[12px] `}></div>
                                    </TabsTrigger>
                                    <TabsTrigger value="donation4" className='flex justify-center'>
                                        <div className={`${(tabsName == 'donation4') ? 'bg-[#886A8F]' : 'bg-[#D9D9D9]'} w-[115.2px] h-[12px] rounded-tr-md rounded-br-md `}></div>
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="donation1" className='h-80'>
                                    <Card className='border-none shadow-none h-[100%]'>
                                        <CardHeader>

                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <DonationPage1 />
                                        </CardContent>
                                        {/* <CardFooter className='flex justify-end'>
                                            <Button onClick={handleNextEvent} className='bg-[#33265E] w-[40%]'>
                                                <Label className='text-[#FFFF]'>Next</Label>
                                            </Button>
                                        </CardFooter> */}
                                    </Card>
                                </TabsContent>

                                <TabsContent value="donation2" className='h-80'>
                                    <Card className='border-none shadow-none h-[100%]'>
                                        <CardContent className="space-y-2">
                                            <DonationPage2 />
                                        </CardContent>
                                        {/* <CardFooter className='flex justify-between'>
                                            <Button onClick={handleBackEvent} className='w-[40%]' variant="outline">
                                            <Label className='text-slate-900'>Back</Label>
                                            </Button>
                                            <Button onClick={handleNextEvent} className='bg-[#33265E] w-[40%]'>
                                                <Label className='text-[#FFFF]'>Next</Label>
                                            </Button>
                                        </CardFooter> */}
                                    </Card>
                                </TabsContent>

                                <TabsContent value="donation3" className='h-80'>
                                    <Card className='border-none shadow-none h-[100%]'>
                                        <CardHeader></CardHeader>
                                        <CardContent className="space-y-2">
                                            <DonationPage3 />
                                        </CardContent>
                                        {/* <CardFooter className='flex justify-between'>
                                            <Button onClick={handleBackEvent} className='w-[40%]' variant="outline">
                                                <Label className='text-slate-900'>Back</Label>
                                            </Button>
                                            <Button onClick={handleNextEvent} className='bg-[#33265E] w-[40%]'>
                                                <Label className='text-[#FFFF]'>Next</Label>
                                            </Button>
                                        </CardFooter> */}
                                    </Card>
                                </TabsContent>

                                <TabsContent value="donation4" className='h-80'>
                                    <Card className='border-none shadow-none h-[100%]'>
                                        <CardHeader></CardHeader>
                                        <CardContent className="space-y-2">
                                            <DonationPage4 />
                                        </CardContent>
                                        {/* <CardFooter className='flex justify-between'>

                                        </CardFooter> */}
                                    </Card>
                                </TabsContent>

                                <div className=''>
                                    <CardFooter className={`flex ${(clkValue!=0)?'justify-between':'justify-end'}`}>
                                        {(clkValue == 1) || (clkValue == 2) ?
                                            <Button onClick={handleBackEvent} className='w-[40%]' variant="outline">
                                                <Label className='text-slate-900'>Back</Label>
                                            </Button>
                                            :
                                            null
                                        }
                                        {(clkValue != 3)
                                            ?
                                            <Button onClick={handleNextEvent} className='bg-[#33265E] w-[40%]'>
                                                <Label className='text-[#FFFF]'>Next</Label>
                                            </Button>
                                            :
                                            null
                                        }
                                        
                                    </CardFooter>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default Donations