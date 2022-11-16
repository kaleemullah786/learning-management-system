import React from 'react'
import One from "../../src/img/bgscreen.png";
import Two from "../../src/img/logo.png";
import Three from "../../src/img/LMS-Assets/amazon.jpg";

var Orderdetails=() =>{
  return (
    <div>
         <div class=" bg-sky-50 bg-fixed">
            <img  alt='waiting for image' src={One} />
         </div>
         <div class="flex absolute top-[1%] left-[40%] mt-12">
        <img alt='waiting for image' src={Two} class="h-20 w-68" />
      </div>
      <form class=" absolute top-[20%] left-[20%] bg-white w-[60%] h-[70%] justify-center shadow-2xl">
        <div class="bg-[#707070] h-[14%] w-[100%]">
             <p class="text-left font-semibold text-2xl text-white pt-4 pl-5">ORDER DETAILS</p>
        </div>
        <div class="bg-[#F5F5F5] h-[10%] w-[90%] absolute left-9 top-28 flex justify-center pt-2 gap-[60%]">
               <p class="text-1xl text-gray-500 ">COURCE</p>
               <p class="text-1xl text-gray-500 ">PRICE</p>
        </div>
        <div class="grid grid-cols-3 flex">
             <div>
                   <img src={Three} class="h-20 w-32 absolute top-[40%] left-[12%]"></img>
             </div>
             <div >
                 <p class="bg-grey-50 absolute top-[46%]  ">AWS</p> 
                
             </div>
             <div class="bg-grey-50 absolute top-[46%] left-[75%]">
             ₹ 34,999.00
             </div>
        </div>
       {/* <div class=""> </div> */}
        <div  class="bg-grey-50 absolute top-[57%] left-[75%]">Total : ₹ 34,999.00</div>
        <div class="flex gap-8 absolute top-[65%] left-[70%]">
            <input class="border-b-2 w-[30%] " type="text" placeholder='Coupon' />
            <button class="border-2 w-[30%] "  >Apply</button>
        </div>
        <div class="absolute top-[80%] left-[63%] text-2xl"><p>Grand Total :<b>₹ 34,999.00</b></p></div>
        <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-10 rounded-[10px] absolute top-[90%] left-[63%]">PROCEED FOR PAYMENT</button>
        </div>

      </form>
    </div>
  )
}

export default Orderdetails