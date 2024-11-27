import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <>


      <div className="flex justify-center flex-col gap-4 items-center p-6  my-10 md:my-0 space-y-2  text-white h-[44vh]">






        <div className="font-bold text-5xl flex items-center text-center gap-0 justify-center">Donate me Some Amount </div>

        <p className="text-center">Please Donate me some Amount. Any sum of money will help you earn Akhirah!</p>

        <div>



         <Link href={"/Organizations"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button> </Link>

        <Link href={"/About"} >  <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button> </Link>

        </div>


      </div>



      <div className="bg-white h-1 opacity-10">


      </div>


      <div className="text-white container mx-auto py-5 md:p-2 my-0 md:my-10" >
        <h2 className="text-3xl font-bold text-center my-4 md:my-14">People Can Now Donate You Money</h2>


        <div className="flex gap-5 justify-around flex-col md:flex-row p-6  my-0 md:p-0">

          <div className="border p-6 rounded-lg pb-2  hover:cursor-pointer item space-y-3 flex flex-col items-center justify-center">

            <img src="/pay.gif" className="bg-white rounded-full p-3" width={88} alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">People are available to help you</p>

            <Link href={"/About"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Read More</button> </Link>

          </div>

          <div className="border hover:cursor-pointer pb-2 item p-6 rounded-lg space-y-3 flex flex-col items-center justify-center">

            <img src="/pay.png" className="bg-white rounded-full p-[-29px] " width={88} alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className=" text-center">People are available to help you</p>

            <Link href={"/About"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Read More</button> </Link>

          </div>

          <div className=" border p-6 pb-2 hover:cursor-pointer item rounded-lg space-y-3 flex flex-col items-center justify-center">

            <img src="/group.png" className="bg-white rounded-full p-3" width={88} alt="" />
            <p className="font-bold">People Want to Help</p>
            <p className=" text-center">People are available to help you</p>

            <Link href={"/About"}> <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2">Read More</button> </Link>

          </div>
        </div>
      </div>


      <div className="bg-white h-1 opacity-10 pt-0 ">


      </div>

      <div className="text-white container mx-auto py-10 flex flex-col items-center justify-center" >
        <h2 className="text-3xl font-bold text-center my-14">Learn More About Us</h2>


      <iframe className="md:w-[400px] md:h-[200px] " src="https://www.youtube.com/embed/GV9MylCmrl0?si=uElTwaEahS8k0o2O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        
      </div>
    </>
  );
}
