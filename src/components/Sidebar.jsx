import React from 'react'
import Image from 'next/image';
import edit from '@/assets/iamges/edit.png';
import deletee from '@/assets/iamges/delete.png';
import people from '@/assets/iamges/people.png';
import eye from '@/assets/iamges/eye.png';
import message from '@/assets/iamges/message.png';
import match from '@/assets/iamges/match.png';
import profile from '@/assets/iamges/profile.png';

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-[36px]">
      <div className="flex flex-col gap-[24px] mt-[36px] mx-[36px] w-[360px]">
        <div className="flex flex-row  justify-between gap-[16px] item-center">
          <div className='items-center  justify-center w-[172px] flex flex-row gap-[16px] px-[12px] py-[24px] bg-[#FEF4F2] border-[0.8px] border-[#DC4A2D] rounded-[8px]'>
            <Image
              src={deletee}
              alt="briefcase"
              className="w-[20px]  self-center h-[20px] "
            />
            <p className='font-normal text-[16px] self-center  text-[#DC4A2D] leading-[24px]'>Delete job</p>
          </div>
          <div className=' items-center justify-center  w-[172px] flex flex-row gap-[16px] px-[12px] py-[24px] bg-[#DC4A2D] border-[0.8px] border-[#FEF4F2] rounded-[8px]'>
            <Image
              src={edit}
              alt="briefcase"
              className="w-[20px]  self-center h-[20px] "
            />
            <p className='font-normal self-center text-[16px] text-white leading-[24px]'>Edit job</p>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex flex-row w-[336px] justify-between items-center'>
            <div className='flex flex-row gap-[10px] p-[10px]'>
              <Image
                src={people}
                alt="briefcase"
                className="w-[20px]  self-center h-[20px] "
              />
              <p className='font-normal text-[16px] text-[#4F4F4F] leading-[24px]'>Applicants</p>

            </div>
            <p className='font-normal text-[20px] text-[#3D3D3D] leading-[30px]'>400</p>
          </div>
          <div className=' h-[1px]  bg-[#E7E7E7]'></div>

          <div className='flex flex-row w-[336px] justify-between items-center'>
            <div className='flex flex-row gap-[10px] p-[10px]'>
              <Image
                src={match}
                alt="briefcase"
                className="w-[20px]  self-center h-[20px] "
              />
              <p className='font-normal text-[16px] text-[#4F4F4F] leading-[24px]'>Matches</p>

            </div>
            <p className='font-normal text-[20px] text-[#3D3D3D] leading-[30px]'>100</p>
          </div>
          <div className=' h-[1px]  bg-[#E7E7E7]'></div>

          <div className='flex flex-row w-[336px] justify-between items-center'>
            <div className='flex flex-row gap-[10px] p-[10px]'>
              <Image
                src={message}
                alt="briefcase"
                className="w-[20px]  self-center h-[20px] "
              />
              <p className='font-normal text-[16px] text-[#4F4F4F] leading-[24px]'>Messages</p>

            </div>
            <p className='font-normal text-[20px] text-[#3D3D3D] leading-[30px]'>147</p>
          </div>
          <div className=' h-[1px]  bg-[#E7E7E7]'></div>

          <div className='flex flex-row w-[336px] justify-between items-center'>
            <div className='flex flex-row gap-[10px] p-[10px]'>
              <Image
                src={eye}
                alt="briefcase"
                className="w-[20px]  self-center h-[20px] "
              />
              <p className='font-normal text-[16px] text-[#4F4F4F] leading-[24px]'>Views</p>

            </div>
            <p className='font-normal text-[20px] text-[#3D3D3D] leading-[30px]'>800</p>
          </div>

        </div>
      </div>
      <div style={{ boxShadow: '-4px 8px 20px 0px rgba(0, 0, 0, 0.1)' }}
        className="flex flex-col  rounded-[12px] w-[385px] h-[196px] border-[1px] p-[32px] gap-[48px] mt-[36px] mx-[18px]">
        <p className='font-medium text-[20px] text-[rgba(0, 0, 0, 1)] leading-[30px]'>“A quote from a Atlassian.”</p>
        <div className="flex flex-row  gap-[16px]">
          <Image
            src={profile}
            alt="briefcase"
            className="w-[45px]  self-center h-[45px] "
          />
          <div className='flex flex-col  gap-[2px] '>
          <p className='font-normal text-[16px] text-[rgba(0, 0, 0, 1)] leading-[24px]'>Name</p>
          <p className='font-normal text-[20px] text-[rgba(130, 130, 130, 1)] leading-[30px]'>Description</p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar