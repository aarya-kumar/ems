import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)

  return (
    <div id='tasklist' className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-red-400 mb-2 py-2 px-4 rounded flex justify-between text-center text-xs md:text-sm lg:text-lg gap-x-2'>
            <h2 className='font-medium w-1/5'>Employee Name</h2>
            <h3 className='font-medium w-1/5'>New Task</h3>
            <h5 className='font-medium w-1/5'>Active Task</h5>
            <h5 className='font-medium w-1/5'>Completed</h5>
            <h5 className='font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
        {authData.employees.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 py-2 px-4 rounded flex justify-between text-center text-xs md:text-sm lg:text-lg gap-x-2'>
            <h2 className='font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='font-medium w-1/5 text-white'>{elem.taskCounts.completed}</h5>
            <h5 className='font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask
