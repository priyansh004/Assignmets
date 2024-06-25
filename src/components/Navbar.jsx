import React from 'react'
import Image from 'next/image'
import bell from '@/assets/iamges/bell.png';
import iconlogo from '@/assets/iamges/iconlogo.png';
import downarrow from '@/assets/iamges/downarrow.png';
import briefcase from '@/assets/iamges/briefcase.png';
import message from '@/assets/iamges/message.png';
import hand from '@/assets/iamges/hand.png';
import dot from '@/assets/iamges/dot.png';
import people from '@/assets/iamges/people.png';
const Navbar = () => {
  return (
    <div className='flex flex-row align-middle justify-between mx-[40px] my-[25px]  '>
      <div className='bg-[#E7E7E7] w-[100px] h-[61px] py-[9px] px-[28px] flex flex-row justify-center'>
        <p className='text-[20px] text-[#DC4A2D] font-bold leading-[30px] self-center'>Logo</p>
      </div>



      <div className='flex flex-row gap-[16px]'>
        <div className='flex flex-row justify-center w-[109px] h-[58px] bg-[#DC4A2D] border-[2px] rounded-[49px] '
          style={{ boxShadow: '0px 4px 4px 0px #00000040' }}
        >
          <div className='flex flex-row align-middle gap-[8px] '>
            <Image
              src={briefcase}
              alt="briefcase"
              className="w-[24px]  self-center h-[24px] "
            />
            <p className='font-normal  self-center text-[20px] leading-[30px] text-white' >Jobs</p>
          </div>
        </div>
        <div style={{
          border: '0.5px solid #D1D1D1',
          boxShadow: 'inset 0px 4px 4px 0px #00000040'
        }}
          className='flex flex-row justify-evenly rounded-[36px] gap-[32px] px-6'
        >
          <div className='flex flex-row gap-[8px]'>
            <div className='flex flex-row self-center gap-0 space-x-0'>
              <Image
                src={message}
                alt="briefcase"
                className="w-[24px] m-0 h-[24px] "
              />
              <Image
                src={dot}
                alt="briefcase"
                className="w-[6px]  h-[6px] "
              />
            </div>
            <p className='font-normal  self-center leading-[30px] text-[20px]  text-[#B0B0B0]'>
              Messages
            </p>
          </div>
          <div className='flex flex-row gap-[8px]'>
            <Image
              src={hand}
              alt="briefcase"
              className="w-[24px]  self-center h-[24px] "
            />
            <p className='font-normal self-center  leading-[30px] text-[20px]  text-[#B0B0B0]'>
              Payments
            </p>
          </div>
          <div className='flex flex-row gap-[8px]'>
            <Image
              src={people}
              alt="briefcase"
              className="w-[24px]  self-center h-[24px] "
            />
            <p className='font-normal  self-center leading-[30px] text-[20px]  text-[#B0B0B0]'>
              Application
            </p>
          </div>
        </div>
      </div>




      <div className='flex flex-row gap-[16px] align-middle'>
        <div className='flex flex-row self-center gap-0 space-x-0'>
          <Image
            src={bell}
            alt="coffeCup"
            className="w-[32px]  h-[32px]"
          />
          <Image
            src={dot}
            alt="briefcase"
            className="w-[6px]  h-[6px] "
          />
        </div>

        <div className='flex flex-row gap-[6px] align-middle'>
          <Image
            src={iconlogo}
            alt="coffeCup"
            className="w-[40px] self-center  h-[40px]"
          />
          <Image
            src={downarrow}
            alt="coffeCup"
            className="w-[20px]  self-center h-[20px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar