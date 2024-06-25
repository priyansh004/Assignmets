import React from 'react'
import Sidebar from './Sidebar'
import coins from '@/assets/iamges/coins.png'
import location from '@/assets/iamges/location.png'
import figma from '@/assets/iamges/figma.png'
import adobe from '@/assets/iamges/adobe.png'
import adobe2 from '@/assets/iamges/adobe2.png'
import abig from '@/assets/iamges/abig.png'
import Image from 'next/image'
Image
const Infomenu = () => {
  return (
    <div className='flex flex-row justify-between align-top'>
      <div className='flex flex-col '>

        {/* company name  */}
        <div className='flex flex-col ml-[100px] mt-[36px] gap-[24px]'>
          <div className='flex flex-row gap-[16px]'>
            <div> <p className='font-bold  leading-[53px] text-[35px] text-[#3D3D3D]'>Senior Product Designer</p></div>

            <div className=" self-center rounded w-1 h-1 bg-gray-300 flex-none font-normal text-[14px] leading-[21px] text-[#888888]">
            </div>

            <div className="self-center" > <p className='self-center font-normal text-[14px] lending-[21px] text-[#888888]'>posted 2 days ago</p></div>

            <div className=' self-center flex flex-row border-[1px] border-[#ABEFC6] bg-[#ECFDF3] rounded-full gap-[8px] p-[8px]'>
              <div className=" self-center rounded w-2 h-2 bg-[#067647] flex-none font-normal text-[14px] leading-[21px] text-[#17B26A]">
              </div>

              <p className='font-medium leading-[18px] align-middle text-[12px] text-[#067647]'>Open
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-[16px]">
            <div className='flex flex-row gap-[8px] '>
              <Image
                src={location}
                alt="briefcase"
                className="w-[24px]  self-center h-[24px] "
              />
              <p className='text-[#5D5D5D] font-normal leading-[30px] text-[20px]'>
                Delaware,USA
              </p>
            </div>
            <div className=" self-center rounded w-1 h-1 bg-gray-300 flex-none font-normal text-[14px] leading-[21px] text-[#888888]">
            </div>
            <div className='flex flex-row gap-[8px] '>
              <Image
                src={coins}
                alt="briefcase"
                className="w-[24px]  self-center h-[24px] "
              />
              <p className='text-[#5D5D5D] font-normal leading-[30px] text-[20px]'>
                $300k-$400k
              </p>
            </div>
          </div>
        </div>

        {/* Skill section */}

        <div className='flex flex-row ml-[100px] mt-[36px] gap-[64px]'>
          <div className='flex flex-col gap-[8px]'>
            <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Skills Required</p>
            <div className=' flex flex-col gap-[8px]'>
              <div
                style={{ boxShadow: 'inset 0px 4px 4px 0px #00000014' }}
                className='w-[70px]  h-[26px] inline-flex flex-row border-[1px] px-[4px] py-[6px] gap-[3px] rounded-sm border-[#D0D5DD] bg-[#FFFFFF]'>
                <Image
                  src={figma}
                  alt="figma"
                  className="w-[16px] self-center h-[16px]"
                />
                <p className='font-normal self-center text-[12px] text-center leading-[18px] text-[#344054]'>Figma</p>
              </div>

              <div
                style={{ boxShadow: 'inset 0px 4px 4px 0px #00000014' }}
                className=' inline-flex flex-row border-[1px] px-[4px] py-[6px] gap-[3px] rounded-sm border-[#D0D5DD] bg-[#FFFFFF]'>
                <Image
                  src={adobe}
                  alt="figma"
                  className="w-[16px]  self-center h-[16px] "
                />
                <p className='font-normal text-[12px] text-center leading-[18px] text-[#344054]'>Adobe Illustrator</p>
              </div>
              <div
                style={{ boxShadow: 'inset 0px 4px 4px 0px #00000014' }}
                className=' w-[95px] h-[26px] inline-flex flex-row border-[1px] px-[4px] py-[6px] gap-[3px] rounded-sm border-[#D0D5DD] bg-[#FFFFFF]'>
                <Image
                  src={adobe2}
                  alt="figma"
                  className="w-[16px]  self-center h-[16px] "
                />
                <p className='font-normal text-[12px] text-center leading-[18px] text-[#344054]'>Adobe XD</p>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-[8px]'>
            <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Preferred Language</p>
            <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>English</p>
          </div>

          <div className='flex flex-col gap-[8px]'>
            <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Type</p>
            <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>Full time</p>
          </div>
          <div className='flex flex-col gap-[8px]'>
            <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Years of Experience</p>
            <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>3+ Years of Experience</p>
          </div>


        </div>

        <div className="flex flex-col ml-[100px]  mt-[36px] ">
          <p className='font-normal text-[14px] text-[#6E6D6D] leading-[21px]'>About the job</p>
          <p className='font-normal items-center text-[16px] text-[#3D3D3D] text-start leading-[28px]'>
            1. Handle the UI/UX research design <br />
            2. Work on researching on latest web applications designs & trends <br />
            3. Work on conceptualizing and visualizing <br />
            4. Work on creating graphics content and other graphic related works <br />
            Benefits: <br />
            <span className='flex flex-row items-center gap-[4px]'><span className="inline-block w-1 h-1 bg-[#3D3D3D] rounded-full flex-shrink-0"></span>
              Health insurance</span>
            <span className='flex flex-row items-center gap-[4px]'><span className="inline-block w-1 h-1 bg-[#3D3D3D] rounded-full flex-shrink-0"></span>
              Provident Fund</span>
            Schedule:<br />
            <span className='flex flex-row items-center gap-[4px]'><span className="inline-block w-1 h-1 bg-[#3D3D3D] rounded-full flex-shrink-0"></span>
              Day shift</span>
            Supplemental pay types:<br />
            <span className='flex flex-row items-center gap-[4px]'><span className="inline-block w-1 h-1 bg-[#3D3D3D] rounded-full flex-shrink-0"></span>
              Performance bonus</span>
            <span className='flex flex-row items-center gap-[4px]'><span className="inline-block w-1 h-1 bg-[#3D3D3D] rounded-full flex-shrink-0"></span>
              Yearly bonus</span>
            Work Location: In person<br />
          </p>

        </div>
        <div className='mt-[36px] h-[1px]  bg-[#E7E7E7]'></div>
        {/* company id */}

        <div className='mt-[36px] ml-[100px] flex flex-col gap-[28px] mb-[36px]'>
          <div className='flex flex-col gap-[16px]'>
            <div className='flex flex-row  items-center '>
              <div className='flex flex-row gap-[10px] pr-[10px] py-[10px]'>
                <Image
                  src={abig}
                  alt="figma"
                  className="w-[40px]  self-center h-[40px] "
                />
                <p className='font-normal  self-center text-[20px] text-[#4F4F4F] leading-[30px]'>
                  Atlassian
                </p>
              </div>
              <div className='bg-[#E0EBF9] rounded-[8px] px-[14px]  self-center py-[14px] gap-[8px]'>

                <p
                  className='text-[#003788]   leading-[16.5px] font-bold text-[11px]'>
                  Follow
                </p>
              </div>
            </div>
            <div className='flex flex-row gap-[48px]'>
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col gap-[8px]">
                  <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Company Size</p>
                  <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>1k - 2k Employess</p>

                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Sector</p>
                  <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>Information Technology, Infrastructure</p>

                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Founded In</p>
                  <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>2019</p>

                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div className="flex flex-col gap-[8px]">
                  <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Type</p>
                  <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>Private</p>

                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Funding</p>
                  <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>Bootstrapped</p>

                </div>
                <div className="flex flex-col gap-[8px]">
                  <p className='font-normal text-[14px] text-[#6E6D6D] text-start leading-[21px]'>Founded By</p>
                  <p className='font-normal text-[16px] text-[#3D3D3D] text-start leading-[24px]'>Scott Farquhar, Mike Cannon-Brookes</p>

                </div>
              </div>
            </div>
          </div>
          <div>
            <p className='underline underline-offset-1 font-normal text-[12px] leading-[18px] text-[#B0B0B0]'>Report this listing</p>
          </div>
        </div>
      </div>



      <div style={{ boxShadow: ' 0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}

        className='border-t-1 border-r-1 border-[rgba(231, 231, 231, 1)] border-solid	' >
        <Sidebar />
      </div>
    </div>
  )
}


export default Infomenu