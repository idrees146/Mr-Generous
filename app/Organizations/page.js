import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: 'Organizations - Mr. Generous',
  };

const page = () => {
    return (
        <>

            <h1 className='text-3xl text-center mt-10 font-bold'>List of Available Organizations</h1>
            <p className='text-center mb-6 mt-4 text-xl'>You can donate and create a difference</p>

            <div className="org  flex justify-center flex-col md:flex-row items-center ">


                
                    <div className="space-y-2 md:space-y-0 item w-[80vw] md:w-1/4 flex flex-col gap-2 border p-2 m-2 items-center">

                        <Image

                            className='rounded-full'
                            src="/Alkhidmat Foundation.jpeg"
                            alt="Alkhidmat foundation"
                            width={100}
                            height={100}
                        />

                        <h2 className='text-xl font-bold text-center '>Alkhidmat Foundation</h2>

                        <Link href={"/Alkhidmat Foundation"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Donate</button> </Link>

                    </div>

            


                <div className="space-y-2 md:space-y-0 item w-[80vw] md:w-1/4 flex flex-col gap-2 border p-2 m-2 items-center">

                    <Image

                        className='rounded-full'
                        src="/World Health organization.jpeg"
                        alt="who"
                        width={100}
                        height={100}
                    />

                    <h2 className='text-xl font-bold text-center '>World Health organization</h2>


                    <Link href={"/World Health organization"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Donate</button> </Link>

                </div>


                <div className=" space-y-2 md:space-y-0 item  w-[80vw] md:w-1/4 flex flex-col gap-2 border p-2 m-2 items-center">

                    <Image

                        className='rounded-full'
                        src="/Eidhi Foundation.jpeg"
                        alt="eidhi center"
                        width={100}
                        height={100}
                    />

                    <h2 className='text-xl font-bold text-center '>Eidhi Foundation</h2>

                    <Link href={"/Eidhi Foundation"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Donate</button> </Link>

                </div>




            </div>


            <div className="org  flex justify-center flex-col md:flex-row items-center mb-10 md:mb-10">


                <div className="space-y-2 md:space-y-0 item  w-[80vw] md:w-1/4 flex flex-col gap-2 border md:p-2 m-2 items-center">

                    <Image

                        className='rounded-full'
                        src="/Pak Aid Welfare Trust.jpeg"
                        alt="Alkhidmat foundation"
                        width={100}
                        height={100}
                    />

                    <h2 className='text-xl font-bold text-center '>Pak Aid Welfare Trust</h2>

                    <Link href={"/Pak Aid Welfare Trust"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Donate</button> </Link>

                </div>


                <div className="space-y-2 md:space-y-0 item  w-[80vw] md:w-1/4 flex flex-col gap-2 border md:p-2 m-2 items-center">

                    <Image

                        className='rounded-full'
                        src="/Chipha Welfare.jpeg"
                        alt="Chipha Welfare"
                        width={100}
                        height={100}
                    />

                    <h2 className='text-xl font-bold text-center '>Chipha Welfare</h2>

                    <Link href={"/Chipha Welfare"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Donate</button> </Link>

                </div>


                <div className="space-y-2 md:space-y-0 item  w-[80vw] md:w-1/4 flex flex-col gap-2 border md:p-2 m-2 items-center">

                    <Image

                        className='rounded-full'
                        src="/Shaukat Khanum Hospital.jpeg"
                        alt="Alkhidmat foundation"
                        width={100}
                        height={100}
                    />

                    <h2 className='text-xl font-bold text-center '>Shaukat Khanum Hospital</h2>

                    <Link href={"/Shaukat Khanum Hospital"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Donate</button> </Link>

                </div>




            </div>

        </>
    )
}

export default page