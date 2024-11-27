"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


const page = () => {

    const { data: session } = useSession()

    if (session) {
        const router = useRouter()
        router.push('/Organizations')
    }

useEffect(() => {
  document.title = "Login - Mr. Generous"


}, [])



    return (
        <div classNameName='container text-black mx-auto'>



            <div className=" py-10 w-screen flex justify-center items-center dark:bg-gray-900">
                <div className="grid gap-8">
                    <div
                        id="back-div"
                        className=" rounded-[26px] m-4"
                    >
                        <div
                            className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2"
                        >
                            <h1 className="pt-8 pb-6 font-bold text-blue-950 text-3xl text-center cursor-default">
                                Login To Support our Cause!
                            </h1>
                            <form action="#" method="post" className="space-y-4">
                                <div>
                                    <label for="email" className="mb-2  dark:text-gray-400 text-lg">Email</label>
                                    <input
                                        id="email"
                                        className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full text-black"
                                        type="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                                <div>
                                    <label for="password" className="mb-2 dark:text-gray-400 text-lg">Password</label>
                                    <input
                                        id="password"
                                        className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full text-black"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <a
                                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                                    href="#"
                                >
                                    <span
                                        className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                    >
                                        Forget your password?
                                    </span>
                                </a>
                                <button
                                    className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                                    type="submit"
                                >
                                    LOG IN
                                </button>
                            </form>
                            <div className="flex flex-col mt-4 items-center justify-center text-sm">
                                <h3 className="text-black">
                                   Or Directly Sign in/Sign up through your Below Accounts
                                    
                                </h3>
                            </div>

                            <div
                                id="third-party-auth"
                                className="  mt-5"
                            >
                                <div className="px-6 sm:px-0 md:w-3/4 m-auto">
                                    <button onClick={() => { signIn("github") }} type="button" class="text-white w-full  bg-black hover:bg-gray-800   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                                    <img
                                        className="max-w-[25px] filter dark:invert"
                                        src="/github.svg"
                                        alt="Github"
                                        width={25}
                                    />Continue with GitHub<div></div></button>
                                </div>

                                <div className="px-6 sm:px-0 md:w-3/4 m-auto">
                                    <button onClick={() => signIn("google")}  type="button" class="text-gray-800 w-full border-solid border-2 bg-white hover:bg-gray-300   font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">

                                   <img src="/google.svg" width={25} alt="" />
                                    
                                    Continue with Google<div></div></button>
                                </div>

                               

                            </div>

                            <div
                                className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm"
                            >
                                <p className="cursor-default">
                                    By signing in, you agree to our
                                    <a
                                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                                        href="#"
                                    >
                                        <span
                                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Terms
                                        </span>
                                    </a>
                                    and
                                    <a
                                        className="group text-blue-400 transition-all duration-100 ease-in-out"
                                        href="#"
                                    >
                                        <span
                                            className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                                        >
                                            Privacy Policy
                                        </span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default page