import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex flex-wrap mt-10 justify-between gap-5 screen'>
      <div className='w-full sm:w-[48%] lg:w-[23%] px-9 py-6 rounded-xl bg-red-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-full sm:w-[48%] lg:w-[23%] px-9 py-6 rounded-xl bg-blue-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-full sm:w-[48%] lg:w-[23%] px-9 py-6 rounded-xl bg-green-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='w-full sm:w-[48%] lg:w-[23%] px-9 py-6 rounded-xl bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
