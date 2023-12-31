/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <div className="h-screen w-full">
      <section className='flex flex-col h-full w-full justify-center items-center p-4'>
        <div className='rounded-full bg-orange-300 w-fit p-1 m-2 px-5 mb-6'>
          <p className='font-bold'>Ultimate accountability platform</p>
        </div>
        <p className='text-6xl font-bold max-w-5xl text-center mb-7'>AccountaMate Achieve Your Goals with Accountability</p>
        <p className='font-bold max-w-6xl mb-7 text-center'>Welcome to AccountaMate, the ultimate accountability platform that turns your goals into achievements! Discover how our unique system you reach your targets with the power of accountability can keep you on track and help</p>
        <div >
          <Button size={'lg'} onClick={() => (router.push('#activities'))}>Set your first goal now</Button>
        </div>
      </section>
      <section id='activities' className='flex justify-center  w-full'>
        <div className='grid grid-cols-3 grid-flow-row gap-1'>
          <figure className="max-w-sm flex justify-center items-center transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
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
      <section id='challenge_form' className='bg-orange-300 flex flex-col h-fit w-full justify-center items-center p-4 mt-20'>
        <div className='max-w-4xl'>
          <p className='text-6xl font-bold text-center'>Challenge Yourself</p>
          <p className='font-semibold w-full text-center m-5'>Ready to transform your goals into reality? Join the AccountaMate community today and experience the power of accountability. Set your goals, invite friends as supervisors, and embark on a journey of achievement. Become a part of the accountability revolution that is changing the way we approach our aspirations.</p>
        </div>
          <div className='flex m-5'>
            <Input placeholder='Eneter your Goal' className='max-w-md'/>
          </div>
          <div className='flex max-w-6xl'>
            <div>
              <Input placeholder='Your Name' className='max-w-md'/>
              <Input placeholder='Your Email' className='max-w-md'/>
            </div>
            <div>
              <Input placeholder='Your friends name' className='max-w-md'/>
              <Input placeholder='Your friends email' className='max-w-md'/>
            </div>
          </div>
      </section>
    </div>
  )
}
