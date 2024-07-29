import React from 'react'
import { CurrentProjectCard } from '../components/StudentComp/CurrentProjectCard'
import NewProjectComp from '../components/StudentComp/NewProjectComp'
const StudentDashboard = () => {
  return (
    <div className='bg-whitesmoke min-w-[100vw] min-h-[100vh] relative'>
      <div className='px-10 py-10'>
        <h2>Current Projects</h2>
        <CurrentProjectCard/>
      </div>
      <div className='px-5 py-10'>
      <h2>New Projects</h2>
      <NewProjectComp/>
      </div>
    </div>

  )
}

export default StudentDashboard