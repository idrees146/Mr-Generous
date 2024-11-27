"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSession } from "next-auth/react";

const Username = ({ params }) => {
    const [payments, setPayments] = useState([]); // Store fetched payments
    const { data: session } = useSession();
    const [user, setUser] = useState(params.username);

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [amount, setAmount] = useState("");

    // Replace %20 with spaces on initial load
    useEffect(() => {
        if (user.includes("%20")) {
            setUser(user.replace(/%20/g, " "));
        }
    }, [user]);

    // Fetch payments from the database on component mount
  
 

    const handlePayment = async () => {
        if (!session) {
            toast.error("You must log in to your account for paying donations!");
            return;
        }

        if (!name || !message || !amount) {
            toast.error("Please fill in all fields.");
            return;
        }

        
    };

    return (
        <>
            <div className="cover w-full relative">
                <img className="w-full h-[250px] main object-cover md:h-[70vh]" src="main.jpeg" alt="" />
                <div className="relative -top-14 flex justify-center">
                    <img
                        width={100}
                        height={100}
                        className="border-4 border-white rounded-full"
                        src={`${user}.jpeg`}
                        alt=""
                    />
                </div>
            </div>

            <div className="info flex flex-col justify-center items-center pb-20 gap-2 -my-12">
                <h1 className="text-3xl font-bold text-center">{user}</h1>
                <div className="text-slate-400 w-[70vw] md:w-full text-center">1.3M Members, 2k Posts, 1000 $+ Donations</div>
                <div className="w-[90vw] md:w-full text-center">Your Little Amount Can Create a Huge Impact for Your Akhirah</div>






                <div className="payment flex gap-3 py-6 justify-center items-center w-[80%] flex-col md:flex-row">


                    {/* Make Payment Section */}
                    <div className="makepayment w-[90vw] md:w-1/2  bg-slate-900 p-6 md:p-14 rounded-lg">
                        <h2 className="mb-5 text-2xl font-bold">Make a payment</h2>
                        <div className="flex gap-3 flex-col">
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-2 rounded-lg bg-slate-800"
                            />
                            <input
                                type="text"
                                placeholder="Enter Your Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full p-2 rounded-lg bg-slate-800"
                            />
                            <input
                                type="text"
                                placeholder="Enter Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="w-full p-2 rounded-lg bg-slate-800"
                            />
                            <ToastContainer
                                position="bottom-left"
                                autoClose={3000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="dark"
                            />
                            <button
                                onClick={handlePayment}
                                className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-2 text-center me-2 mb-2"
                            >
                                Pay Now
                            </button>
                        </div>
                    </div>




                   

                </div>
            </div>
        </>
    );
};

export default Username;


