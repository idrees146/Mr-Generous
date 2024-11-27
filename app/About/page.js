import React from 'react'
import Image from 'next/image'

export const metadata = {
    title: 'About - Mr. Generous',
  };

const page = () => {
    return (

      
        


        < >



           
            <h1 className='text-center text-3xl md:text-5xl font-bold p-6 pb-0 md:p-16'>About Me and Mr.Generous</h1>

            <div className='flex flex-col md:flex-row'>
                <div className="about p-10  md:w-1/2 text-justify md:ml-36 space-y-8  pb-10">


                    <p className='mb-6'>          Welcome to Mr. Generous, your gateway to supporting the world&apos;s most impactful organizations. My name is Muhammad Idrees, and I am a passionate Software Engineering student at COMSATS University Islamabad, with a deep love for creating innovative web applications.</p>

                    <p className=' mb-6'>
                        Mr. Generous was born from a vision to make it easier for people to connect with trusted NGOs like Alkhidmat Foundation, Edhi Trust, and other reputable organizations in Pakistan and around the globe. This platform empowers users to explore, learn about, and simulate contributions to these organizations, promoting generosity and goodwill.</p>

                    <h2 className='text-2xl font-bold'>What This Application Offers?</h2>
                    <ul className='list-disc'>
                        <li className='ml-6'>Interactive Experience: Easily create an account and access a curated list of trusted organizations.</li>

                        <li className='ml-6'>Seamless Simulated Donations: Select your preferred organization, simulate a contribution, and experience how simple it is to make a difference.</li>

                        <li className='ml-6'>Secure Data Management: All user data is securely stored using MongoDB, ensuring privacy and reliability.</li>
                    </ul>


                    <h2 className='text-3xl font-bold'>Why Hire me?</h2>
                    <p className='mb-6'>While Mr. Generous is a simulation-only platform, its development reflects my commitment to delivering high-quality web solutions. Built using the Next.js framework and supported by a robust MongoDB database, this application showcases the possibilities of modern web technologies.</p>

                    <p className='mb-6'>Whether you&apos;re a potential client, recruiter, or someone exploring innovative ideas, Mr. Generous is a testament to my expertise in front-end development and my drive to create meaningful, user-focused applications.</p>

                    <h2 className='text-3xl font-bold'>Let&apos;s Collaborate</h2>
                    <p className='mb-6'>As a future-ready software engineer, I am always eager to bring ideas to life. If you&apos;re looking for a developer with a proven ability to build intuitive and engaging web applications, let’s work together to create something remarkable!</p>

                    <p className='mb-6'>Feel free to explore Mr. Generous and reach out to collaborate. Together, we can build solutions that truly matter.</p>

                </div>

                <div className="me w-[300]">


                    <Image
                        className=' m-auto p-6 md:ml-14 rounded-3xl'
                        src="/me.JPEG"
                        alt="Muhammad Idrees Khan"
                        width={300}
                        height={350}
                    />

                    <div className=' md:ml-14 md:my-2 mb-10'>

                        <p className='text-center text-xl font-bold mb-2'>Muhammad Idrees Khan</p>

                        <div className='flex justify-center gap-4'>


                            <Image


                                className='hover:cursor-pointer hover:scale-110 transition-transform'
                                src="/whatsapp.PNG"
                                alt="Whatsapp Contact idrees"
                                width={40}
                                height={44}

                            />

                            <Image
                                className='hover:cursor-pointer hover:scale-110 transition-transform'
                                src="/email1.PNG"
                                alt="Email Contact idrees"
                                height={10}
                                width={40}

                            />
                        </div>
                    </div>



                </div>

            </div>
        </>


    )
}

export default page

export const Metadata = {
    title: "About - Mr.Generous",
}