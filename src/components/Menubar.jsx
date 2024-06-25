import React from 'react'

const Menubar = () => {
  return (
    <div className='flex flex-row align-middle h-[71.39px] '>
      <div className='flex flex-row self-center  justify-between  ml-[100px] gap-[72px]'>
        <div className='relative h-full flex flex-col  '>
          <p className='font-normal text-[20px] leading-[30px] self-center text-center text-[#DC4A2D] '>Job Preview</p>
          <div className=' h-[1px] block bottom-0 absolute self-center w-[65px] bg-[#DC4A2D]'></div>

        </div>
        <div>
          <p className='font-normal text-[20px] leading-[30px] self-center text-[#888888]'>Application</p>
        </div>
        <div>
          <p className='font-normal text-[20px] leading-[30px] self-center text-[#888888]'>Match</p>
        </div>
        <div>
          <p className='font-normal text-[20px] leading-[30px] self-center text-[#888888]'>Application</p>
        </div>
      </div>
    </div>
  )
}

export default Menubar