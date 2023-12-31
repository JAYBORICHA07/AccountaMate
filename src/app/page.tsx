/* eslint-disable @next/next/no-img-element */
"use client"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'

export default function Home() {

  const router = useRouter();

  return (
    <div className="h-screen w-full">
      <section className='flex flex-col h-full w-full justify-center items-center p-4'>
        <div className='rounded-full bg-orange-300 w-fit p-1 m-2 px-5 mb-6'>
          <p className='font-bold'>Ultimate accountability platform</p>
        </div>
        <p className='text-6xl font-bold max-w-5xl'>AccountaMate - Achieve Your</p>
        <p className='text-6xl font-bold max-w-3xl mb-7'>Goals with Accountability</p>
        <p className='font-bold max-w-6xl'>Welcome to AccountaMate, the ultimate accountability platform that turns your goals into achievements! Discover how our unique system</p>
        <p className='font-semibold max-w-7xl mb-7'>you reach your targets with the power of accountability can keep you on track and help</p>
        <div >
          <Button size={'lg'} onClick={() => (router.push('#activities'))}>Set your first goal now</Button>
        </div>
      </section>
      <section id='activities' className='flex justify-center  w-full gap-3'>
        <div className='grid grid-cols-3 grid-flow-row'>
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
    </div>
  )
}
