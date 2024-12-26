"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "./ui/label"
import { Separator } from "./ui/separator"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "required",
  }),
  lastname: z.string().min(2, {
    message: "required",
  }),
  bio: z.string().min(2, {
    message: "required",
  }),
  location: z.string().min(2, {
    message: "required",
  }),
  status: z.string().min(2, {
    message: "required",
  }),
  ibd: z.string().min(2, {
    message: "required",
  }),
  years: z.string().min(2, {
    message: "required",
  }),
})

const TestComponent = () => {
  // ...

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      bio: "",
      location: "",
      status: "",
      ibd: "",
      years: ""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="grid gap-4 py-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className='grid grid-cols-4 items-center gap-2'>
            <Label htmlFor="name" className="text-right">Name</Label>
            <div className='flex flex-row justify-between col-span-3 gap-4'>

              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='First name' className="col-span-1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder='Last name' className="col-span-1" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='grid grid-cols-3 items-center gap-2'>
            <Separator className="bg-slate-200 my-4" />
            <Label htmlFor="name" className="text-[16px] text-center">Medical Information</Label>
            <Separator className="bg-slate-200 my-4" />
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="name" className="text-right">
              Bio
            </Label>
            <div className='col-span-3'>
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Type your bio here." id="message" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="username" className="text-right">
              Location
            </Label>
            <div className='col-span-3'>
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Location" className='col-span-3' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="username" className="text-right">
              Status
            </Label>
            <div className='col-span-3'>
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Status" className='col-span-3' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="username" className="text-right">
              Type of IBD
            </Label>
            <div className='col-span-3'>
              <FormField
                control={form.control}
                name="ibd"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Type of IBD" className='col-span-3' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <Label htmlFor="username" className="text-right">
              Number of Years
            </Label>
            <div className='col-span-3'>
              <FormField
                control={form.control}
                name="years"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Number of Years" className='col-span-3' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

          </div>

          <div className="grid grid-cols-4 items-center gap-2">
            <div className="flex justify-end col-span-4">
              <Button variant="outline" type="submit" className='text-black-6 hover:bg-[#33265E] hover:text-[#FFFF]'>Save changes</Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default TestComponent