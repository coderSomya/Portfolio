import { Experiences } from '@/components/Experiences'
import { Projects } from '@/components/Projects'
import Technologies from '@/components/Technologies'
import React from 'react'

const page = () => {
  return (
    <div>
          <Experiences/>
        <Projects/>
        <Technologies/>
    </div>
  )
}

export default page