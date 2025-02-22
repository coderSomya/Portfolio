import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import { StickyScrollReveal } from '@/components/StickyScrollReveal'
import Technologies from '@/components/Technologies'
import React from 'react'

const page = () => {
  return (
    <div>
          <Experiences/>
        <Projects/>
        <Technologies/>
        <StickyScrollReveal/>
    </div>
  )
}

export default page