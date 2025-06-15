import InterviewCard from '@/components/InterviewCard'
import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const page = () => {
  return (
    <>
    <section className='flex flex-row blue-gradient-dark rounded-3xl px-16 py-6 items-center justify-between max-sm:px-4'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2 className='text-3xl font-semibold'>Get Intervuew Ready with AI-powered Practice & Feedback </h2>
        <p className='text-lg'>
          Practice on real interview questions and get instant feedback 
        </p>
        <Button asChild className='btn-primary max-sm:w-full'>
         <Link href={"/interview"}> Start an Interview</Link>
        </Button>
      </div>
         <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"/>
    </section>

    <section className='flex flex-col gap-6 mt-8'>
      <h2 className='text-3xl font-semibold'>Your Interviews</h2>
      <div className='flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch'>
       {dummyInterviews.map((interview)=>(
        <InterviewCard {...interview} key={interview.id}/>
       ))}
       {/* <p>You haven't taken any Interviews yet</p> */}

      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
      <h2 className='text-3xl font-semibold'>Take an Interview</h2>
      <div className='flex flex-wrap gap-4 max-lg:flex-col w-full items-stretch'>
        {dummyInterviews.map((interview)=>(
        <InterviewCard {...interview} key={interview.id}/>
       ))}
      </div>
    </section>
    </>
  )
}

export default page