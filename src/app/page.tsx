/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Calendar } from '@/components/ui/calendar';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { userObj } from '../../types/userType';
const data = [
  {
    Amount: 400,
  },
  {
    amount: 300,
  },
  {
    amount: 200,
  },
  {
    amount: 300,
  },
  {
    amount: 200,
  },
  {
    amount: 278,
  },
  {
    amount: 189,
  },
  {
    amount: 239,
  },
  {
    amount: 300,
  },
  {
    amount: 200,
  },
  {
    amount: 278,
  },
  {
    amount: 189,
  },
  {
    amount: 349,
  },
]

export default function Home() {
  const router = useRouter();
  const [userObj, setUserObj] = useState<userObj>({
    userName : '',
    userEmail : '',
    friendsEmail : '',
    friendsName : '',
    amount : 100,
    goal :'',
    date : new Date()
  })

  function onClick(adjustment: number) {
    setUserObj({...userObj, amount : (Math.max(100, Math.min(1000, userObj.amount + adjustment))) })
  }

  return (
    <div className=" h-screen w-screen">
      <section className='flex flex-col h-full justify-center items-center m-0'>
        <div className='rounded-full bg-orange-300 p-1 px-5 mb-6'>
          <p className='font-bold'>Ultimate accountability platform</p>
        </div>
        <p className='text-4xl md:text-5xl font-bold max-w-5xl text-center mb-7'>AccountaMate Achieve Your Goals with Accountability</p>
        <p className='font-bold max-w-6xl mb-7 text-center'>Welcome to AccountaMate, the ultimate accountability platform that turns your goals into achievements! Discover how our unique system you reach your targets with the power of accountability can keep you on track and help</p>
        <div >
          <Button size={'lg'} onClick={() => (router.push('#challenge_form'))}>Set your first goal now</Button>
        </div>
      </section>
      <section id='activities' className='flex justify-center m-0'>
        <div className='grid grid-cols-1 md:grid-cols-3 md:gap-1 grid-flow-row gap-y-1'>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ">
            <img className="rounded-lg hover:opacity-80" src='/images/travelv2.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Travell world</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/codingv1.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Code Everyday</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/coffeev0.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Quit Coffee</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/cookingv0.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Cook Everyday</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/weightlossv1.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Loss 10kg</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/gymv0.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Hit Gym</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/journelv0.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Write Journal</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/running.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Run 5km</p>
            </figcaption>
          </figure>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <img className="rounded-lg hover:opacity-80" src='/images/startupv0.jpeg' alt="image description" />
            <figcaption className="absolute px-4 text-4xl font-extrabold text-white">
              <p>Build Startup</p>
            </figcaption>
          </figure>
        </div>
      </section>
      <section id='challenge_form' className='bg-orange-300 flex flex-col justify-center items-center m-0 mt-20'>
        <div className='max-w-4xl mt-3'>
          <p className='text-6xl font-bold text-center'>Challenge Yourself</p>
          <p className='font-semibold w-full text-center my-5'>Ready to transform your goals into reality? Join the AccountaMate community today and experience the power of accountability. Set your goals, invite friends as supervisors, and embark on a journey of achievement. Become a part of the accountability revolution that is changing the way we approach our aspirations.</p>
        </div>
        <div className='flex flex-col md:flex-row max-w-4xl'>
          <div>
            <Input placeholder='Eneter your Goal' className='w-80 p-8 m-3' onChange={(e: any) => {setUserObj({...userObj, goal : e.target.value })}}/>
          </div>
          <div className='flex max-w-4xl'>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-80 p-8 m-3 justify-start text-left font-normal",
                    !userObj.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {userObj.date ? format(userObj.date, "PPP") : <span>Achive Goal by/Practise Goal Everyday till</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={userObj.date}
                  onSelect={(newDate : any) =>{newDate > userObj.date ? setUserObj({...userObj, date : newDate}) : alert("Can not select Past Dates")}}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className='flex flex-col max-w-4xl justify-evenly'>
          <div className='flex flex-col md:flex-row justify-evenly p-1'>
            <Input placeholder='Your Name' className='w-80 p-8 m-3' onChange={(e: any) => {setUserObj({...userObj, userName: e.target.value })}} />
            <Input placeholder='Your Email' className='w-80 p-8 m-3' onChange={(e: any) => {setUserObj({...userObj, userEmail : e.target.value })}} />
          </div>
          <div className='flex flex-col md:flex-row justify-evenly p-1'>
            <Input placeholder='Your friends name' className='w-80 p-8 m-3' onChange={(e: any) => {setUserObj({...userObj, friendsName : e.target.value })}}/>
            <Input placeholder='Your friends email' className='w-80 p-8 m-3' onChange={(e: any) => {setUserObj({...userObj, friendsEmail : e.target.value })}}/>
          </div>
        </div>
        <div className='mb-8'>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Create Challenge</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Select Amount</DrawerTitle>
                  <DrawerDescription>If you fail you will not get this amount back.</DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => onClick(-10)}
                      disabled={userObj.amount <= 200}
                    >
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        {userObj.amount}
                      </div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Rupees
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => onClick(10)}
                      disabled={userObj.amount >= 1000}
                    >
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase</span>
                    </Button>
                  </div>
                  <div className="mt-3 h-[120px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data}>
                        <Bar
                          dataKey="amount"
                          style={
                            {
                              fill: "hsl(var(--foreground))",
                              opacity: 0.9,
                            } as React.CSSProperties
                          }
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <DrawerFooter>
                  <Button onClick={()=>(console.log(userObj))}>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </section>
    </div>
  )
}
