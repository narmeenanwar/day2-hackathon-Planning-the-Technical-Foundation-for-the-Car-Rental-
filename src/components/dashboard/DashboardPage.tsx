// import * as React from 'react';
// import { MenuItem } from './components/MenuItem';
// import { TransactionItem } from './components/TransactionItem';
// import { CarStats } from './components/CarStats';
// import { RentalDetails } from './components/RentalDetails';
// import Image from 'next/image';

// const menuItems = [
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b468061c88c473e2854323999929941958da2bcfbbe539f7c99d81cde8f954a5?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Dashboard", isActive: true },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/44b6e9efcb2f610513e3d3302431abb419d7a4a90b76eb2be9ce0ade400394de?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Car Rent" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1c152e746b4f632d31611b8dc4029b5ac4d2f2a84f83c8636f7ef24ca27440fd?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Insight" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7378232c71ed4e5f564ff83c430b02c8f5cd78cc4c42607b14bb770ae3269ebd?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Reimburse" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd9ab3f7100da400834934a4e5d8446c60203a3a62249dd6ae7bda152e84d238?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Inbox" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eb28cac505e76d9636e26b49b7666062120336329b809d643900ab8a8b2a4e6f?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Calender" }
// ];

// const preferenceItems = [
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/62dd602cc501d92771e231c967cc5fa8bd03d069a1fe537106e56836b897b7e2?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Settings" },
//   { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/79ec339f04cf44b7c450998d891e0ad53e55b6443c6528f46571511c693e3b00?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df", label: "Help & Center" }
// ];

// const transactions = [
//   {
//     image: "/images/p4.png",
//     title: "Nissan GT - R",
//     type: "Sport Car",
//     date: "20 July",
//     amount: "$80.00"
//   },
//   {
//     image: "/images/p1.png",
//     title: "Koegnigsegg",
//     type: "Sport Car",
//     date: "19 July",
//     amount: "$99.00"
//   },
//   {
//     image: "/images/p3.png",
//     title: "Rolls - Royce",
//     type: "Sport Car",
//     date: "18 July",
//     amount: "$96.00"
//   },
//   {
//     image: "/images/r2.png",
//     title: "CR - V",
//     type: "SUV",
//     date: "17 July",
//     amount: "$80.00"
//   }
// ];

// const carStats = [
//   { color: "bg-sky-950", type: "Sport Car", count: "17,439" },
//   { color: "bg-sky-700", type: "SUV", count: "9,478" },
//   { color: "bg-blue-500", type: "Coupe", count: "18,197" },
//   { color: "bg-blue-400", type: "Hatchback", count: "12,510" },
//   { color: "bg-blue-300", type: "MPV", count: "14,406" }
// ];

// export default function DashboardPage() {
//   return (
//     <div className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
//       <div className="flex gap-5 max-md:flex-col">
//         {/* Left Sidebar */}
//         <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
//           <div className="flex overflow-hidden flex-col px-4 pt-20 pb-12 mx-auto w-full text-justify bg-white border-r border-solid border-r-gray-100 max-md:mt-8"> 
//           <div className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
//                   M A I N M E N U
//                 </div> <br />
//             <div className="flex items-center justify-center h-14 bg-blue-600 text-white font-bold rounded-xl" />
           
//             <div className="flex z-10 flex-col self-center mt-0">
//               <div className="flex flex-col self-start"> 
//               </div>
//                 <div className="flex flex-col items-start mt-11 text-base font-medium tracking-tight leading-6 text-slate-400 max-md:mt-10">
//                   {menuItems.map((item, index) => (
//                     <MenuItem key={index} {...item} />
//                   ))}
//                 </div>
              




//               <div className="flex flex-col mt-16 max-md:mt-10">
//                 <div className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
//                   P R E F E R E N C E S
//                 </div>
//                 <div className="flex flex-col items-start mt-7 text-base font-medium tracking-tight leading-6 text-slate-400">
//                   {preferenceItems.map((item, index) => (
//                     <MenuItem key={index} {...item} />
//                   ))}
//                   <div className="flex gap-6 items-center self-stretch mt-8">
//                     <div className="flex gap-3 items-center self-stretch my-auto">
//                       <Image
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8dd20c5a8db1087eb20ccd045cd29e436e8e5371a20c61d940d859fa095b1bb?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//                         alt="Dark mode icon"
//                         height={6}
//                         width={6}
//                         className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
//                       />
//                       <div className="self-stretch my-auto w-[92px]">
//                         Dark Mode
//                       </div>
//                     </div>
//                     <Image
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad9c6b63ef42da545e6b674b916a591438472ec8a57bda3d23238b5a02b4e15?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//                       alt=""
//                       height={6}
//                       width={6}
//                       className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2] w-[68px]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <MenuItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7c387cd41b8fc9c8b10d633af0d49b63e9cbfccc431d0c6cc1fb64b31e73fa26?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df" label="Log Out" />
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
//           <div className="flex overflow-hidden flex-col self-stretch px-6 py-7 m-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
//             <div className="self-start text-xl font-bold tracking-tight text-gray-900">
//               Details Rental
//             </div>
//             <Image
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/c17db80a7af9a9bc1b8b8a7521cd69cf0872305115c457d43f1fa3d4e3823449?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//               alt="Rental car details"
//               height={6}
//               width={6}
//               className="object-contain mt-7 w-full rounded-xl aspect-[1.79] max-md:max-w-full"
//             />
//             <div className="flex flex-wrap gap-5 justify-between mt-8 w-full max-md:max-w-full">
//               <div className="flex gap-4">
//                 <Image
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e40bb8e5b5ddc439af38dd53cd1fb93ad79293a8b6b5cace24a67f45f2b20bd?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//                   alt="Nissan GT-R"
//                   height={6}
//                   width={6}
//                   className="object-contain shrink-0 max-w-full aspect-[1.83] w-[132px]"
//                 />
//                 <div className="flex flex-col my-auto">
//                   <div className="text-2xl font-bold tracking-tighter text-gray-900">
//                     Nissan GT - R
//                   </div>
//                   <div className="mt-2 text-sm font-medium tracking-tight text-slate-600">
//                     Sport Car
//                   </div>
//                 </div>
//               </div>
//               <div className="self-start mt-4 text-sm font-medium tracking-tight text-right text-slate-600">
//                 #9761
//               </div>
//             </div>

//             {/* Pick-up Details */}
//             <div className="flex gap-2 items-center self-start mt-8">
//               <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-600 bg-opacity-30 rounded-[70px]">
//                 <div className="flex self-stretch my-auto w-2 h-2 bg-blue-600 rounded-full fill-blue-600 min-h-[8px]" />
//               </div>
//               <div className="self-stretch my-auto text-base font-semibold tracking-tight text-gray-900 w-[68px]">
//                 Pick - Up
//               </div>
//             </div>
//             <RentalDetails
//               location="Kota Semarang"
//               date="20 July 2022"
//               time="07.00"
//             />

//             {/* Drop-off Details */}
//             <div className="flex gap-2 items-center self-start mt-8">
//               <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px]">
//                 <div className="flex self-stretch my-auto w-2 h-2 bg-blue-400 rounded-full fill-blue-400 min-h-[8px]" />
//               </div>
//               <div className="self-stretch my-auto w-20 text-base font-semibold tracking-tight text-gray-900">
//                 Drop - Off
//               </div>
//             </div>
//             <RentalDetails
//               location="Kota Semarang"
//               date="21 July 2022"
//               time="01.00"
//             />

//             <div className="shrink-0 mt-10 h-px border border-solid border-slate-300 border-opacity-40 max-md:max-w-full" />
//             <div className="flex flex-wrap gap-10 items-start mt-9 max-md:max-w-full">
//               <div className="flex flex-col min-w-[240px] w-[284px]">
//                 <div className="text-xl font-bold tracking-tight text-gray-900">
//                   Total Rental Price
//                 </div>
//                 <div className="mt-1 text-sm font-medium tracking-tight text-slate-400">
//                   Overall price and includes rental discount
//                 </div>
//               </div>
//               <div className="w-32 text-3xl font-bold text-right text-gray-900">
//                 $80.00
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
//           <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
//             <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
//               <div className="flex gap-10 items-start text-xl font-bold tracking-tight text-gray-900 max-md:max-w-full">
//                 <div className="w-48">Top 5 Car Rental </div>
//                 <Image
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/b45a559e22eab88a7ef41214fd110ccca8bdb141a203ffc348c913235ab7d636?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//                   alt=""
//                   height={6}
//                   width={6}
//                   className="object-contain shrink-0 w-6 aspect-square"
//                 />
//               </div>
//               <div className="mt-8 max-md:max-w-full">
//                 <div className="flex gap-5 max-md:flex-col">
//                   <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
//                     <div className="flex relative flex-col justify-center items-center px-11 py-20 text-center rounded-md aspect-square max-md:px-5 max-md:mt-6">
//                       <Image
//                         loading="lazy"
//                         src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b9ba1c69c975d8f978cfe9c002309164391c56ddf4b7ca16bfafb290cda8c68?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//                         alt="Car rental statistics"
//                         height={6}
//                         width={6}
//                         className="object-cover absolute inset-0 size-full"
//                       />
//                       <div className="flex relative flex-col items-start max-w-full w-[100px]">
//                         <div className="text-2xl font-bold tracking-tighter text-gray-900">
//                           72,030
//                         </div>
//                         <div className="mt-1 text-sm font-medium tracking-tight text-slate-400">
//                           Rental Car
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
//                     <div className="flex flex-col w-full text-sm font-semibold tracking-tight max-md:mt-6">
//                       {carStats.map((stat, index) => (
//                         <div key={index} className={index > 0 ? "mt-6" : ""}>
//                           <CarStats {...stat} />
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex overflow-hidden flex-col justify-center p-6 mt-8 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
//               <div className="flex gap-10 items-start max-md:max-w-full">
//                 <div className="w-48 text-xl font-bold tracking-tight text-gray-900">
//                   Recent Transaction
//                 </div>
//                 <div className="text-xs font-medium leading-6 text-right text-blue-600 w-[68px]">
//                   View All
//                 </div>
//               </div>
//               <div className="flex flex-col mt-8 w-full max-md:max-w-full">
//                 {transactions.map((transaction, index) => (
//                   <TransactionItem key={index} {...transaction} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



















import * as React from 'react';
import { MenuItem } from './components/MenuItem';
import { TransactionItem } from './components/TransactionItem';
import { CarStats } from './components/CarStats';
import { RentalDetails } from './components/RentalDetails';
import Image from 'next/image';

const menuItems = [
  { icon: "/images/d1.png", label: "Dashboard", isActive: true },
  { icon: "/images/d1.png", label: "Car Rent" },
  { icon: "/images/d3.png", label: "Insight" },
  { icon: "/images/d3.png", label: "Reimburse" },
  { icon: "/images/d3.png", label: "Inbox" },
  { icon: "/images/d3.png", label: "Calender" }
];

const preferenceItems = [
  { icon: "/images/d1.png", label: "Settings" },
  { icon: "/images/d3.png", label: "Help & Center" }
];

const transactions = [
  {
    image: "/images/p4.png",
    title: "Nissan GT - R",
    type: "Sport Car",
    date: "20 July",
    amount: "$80.00"
  },
  {
    image: "/images/p1.png",
    title: "Koegnigsegg",
    type: "Sport Car",
    date: "19 July",
    amount: "$99.00"
  },
  {
    image: "/images/p3.png",
    title: "Rolls - Royce",
    type: "Sport Car",
    date: "18 July",
    amount: "$96.00"
  },
  {
    image: "/images/r2.png",
    title: "CR - V",
    type: "SUV",
    date: "17 July",
    amount: "$80.00"
  }
];

const carStats = [
  { color: "bg-sky-950", type: "Sport Car", count: "17,439" },
  { color: "bg-sky-700", type: "SUV", count: "9,478" },
  { color: "bg-blue-500", type: "Coupe", count: "18,197" },
  { color: "bg-blue-400", type: "Hatchback", count: "12,510" },
  { color: "bg-blue-300", type: "MPV", count: "14,406" }
];

export default function DashboardPage() {
  return (
    <div className="overflow-hidden pr-8 bg-neutral-100 max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        {/* Left Sidebar */}
        <div className="flex flex-col w-[21%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col px-4 pt-20 pb-12 mx-auto w-full text-justify bg-white border-r border-solid border-r-gray-100 max-md:mt-8"> 
          <div className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
                  M A I N M E N U
                </div> <br />
            <div className="flex items-center justify-center h-14 bg-blue-600 text-white font-bold rounded-xl" />
           
            <div className="flex z-10 flex-col self-center mt-0">
              <div className="flex flex-col self-start"> 
              </div>
                <div className="flex flex-col items-start mt-11 text-base font-medium tracking-tight leading-6 text-slate-400 max-md:mt-10">
                  {menuItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                </div>
              




              <div className="flex flex-col mt-16 max-md:mt-10">
                <div className="text-xs font-semibold tracking-tight text-slate-400 text-opacity-40">
                  P R E F E R E N C E S
                </div>
                <div className="flex flex-col items-start mt-7 text-base font-medium tracking-tight leading-6 text-slate-400">
                  {preferenceItems.map((item, index) => (
                    <MenuItem key={index} {...item} />
                  ))}
                  <div className="flex gap-6 items-center self-stretch mt-8">
                    <div className="flex gap-3 items-center self-stretch my-auto">
                      <Image
                        loading="lazy"
                        src="/images/10.svg"
                        alt="Dark mode icon"
                        height={6}
                        width={6}
                        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                      />
                      <div className="self-stretch my-auto w-[92px]">
                        Dark Mode
                      </div>
                    </div>
                    <Image
                      loading="lazy"
                      src="/images/8.svg"
                      alt=""
                      height={6}
                      width={6}
                      className="object-contain shrink-0 self-stretch my-auto rounded-none aspect-[2] w-[68px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            <MenuItem icon="/images/9.svg" label="Log Out" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col self-stretch px-6 py-7 m-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="self-start text-xl font-bold tracking-tight text-gray-900">
              Details Rental
            </div>
            <Image
              loading="lazy"
              src="/images/12.svg"
              alt="Rental car details"
              height={6}
              width={6}
              className="object-contain mt-7 w-full rounded-xl aspect-[1.79] max-md:max-w-full"
            />
            <div className="flex flex-wrap gap-5 justify-between mt-8 w-full max-md:max-w-full">
              <div className="flex gap-4">
                <Image
                  loading="lazy"
                  src="/images/13.png"
                  alt="Nissan GT-R"
                  height={132}
                  width={132}
                  className="object-contain shrink-0 max-w-full aspect-[1.83] w-[132px]"
                />
                <div className="flex flex-col my-auto">
                  <div className="text-2xl font-bold tracking-tighter text-gray-900">
                    Nissan GT - R
                  </div>
                  <div className="mt-2 text-sm font-medium tracking-tight text-slate-600">
                    Sport Car
                  </div>
                </div>
              </div>
              <div className="self-start mt-4 text-sm font-medium tracking-tight text-right text-slate-600">
                #9761
              </div>
            </div>

            {/* Pick-up Details */}
            <div className="flex gap-2 items-center self-start mt-8">
              <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-600 bg-opacity-30 rounded-[70px]">
                <div className="flex self-stretch my-auto w-2 h-2 bg-blue-600 rounded-full fill-blue-600 min-h-[8px]" />
              </div>
              <div className="self-stretch my-auto text-base font-semibold tracking-tight text-gray-900 w-[68px]">
                Pick - Up
              </div>
            </div>
            <RentalDetails
              location="Kota Semarang"
              date="20 July 2022"
              time="07.00"
            />

            {/* Drop-off Details */}
            <div className="flex gap-2 items-center self-start mt-8">
              <div className="flex justify-center items-center self-stretch px-1 my-auto w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px]">
                <div className="flex self-stretch my-auto w-2 h-2 bg-blue-400 rounded-full fill-blue-400 min-h-[8px]" />
              </div>
              <div className="self-stretch my-auto w-20 text-base font-semibold tracking-tight text-gray-900">
                Drop - Off
              </div>
            </div>
            <RentalDetails
              location="Kota Semarang"
              date="21 July 2022"
              time="01.00"
            />

            <div className="shrink-0 mt-10 h-px border border-solid border-slate-300 border-opacity-40 max-md:max-w-full" />
            <div className="flex flex-wrap gap-10 items-start mt-9 max-md:max-w-full">
              <div className="flex flex-col min-w-[240px] w-[284px]">
                <div className="text-xl font-bold tracking-tight text-gray-900">
                  Total Rental Price
                </div>
                <div className="mt-1 text-sm font-medium tracking-tight text-slate-400">
                  Overall price and includes rental discount
                </div>
              </div>
              <div className="w-32 text-3xl font-bold text-right text-gray-900">
                $80.00
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
              <div className="flex gap-10 items-start text-xl font-bold tracking-tight text-gray-900 max-md:max-w-full">
                <div className="w-48">Top 5 Car Rental </div>
                <Image
                  loading="lazy"
                  src="/images/14.svg"
                  alt=""
                  height={6}
                  width={6}
                  className="object-contain shrink-0 w-6 aspect-square"
                />
              </div>
              <div className="mt-8 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex relative flex-col justify-center items-center px-11 py-20 text-center rounded-md aspect-square max-md:px-5 max-md:mt-6">
                      <Image
                        loading="lazy"
                        src="/images/Chart.png"
                        alt="Car rental statistics"
                        height={220}
                        width={220}
                        className="object-cover absolute inset-0 size-full"
                      />
                      <div className="flex relative flex-col items-start max-w-full w-[100px]">
                        <div className="text-2xl font-bold tracking-tighter text-gray-900">
                          72,030
                        </div>
                        <div className="mt-1 text-sm font-medium tracking-tight text-slate-400">
                          Rental Car
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col w-full text-sm font-semibold tracking-tight max-md:mt-6">
                      {carStats.map((stat, index) => (
                        <div key={index} className={index > 0 ? "mt-6" : ""}>
                          <CarStats {...stat} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex overflow-hidden flex-col justify-center p-6 mt-8 w-full bg-white rounded-xl max-md:px-5 max-md:max-w-full">
              <div className="flex gap-10 items-start max-md:max-w-full">
                <div className="w-48 text-xl font-bold tracking-tight text-gray-900">
                  Recent Transaction
                </div>
                <div className="text-xs font-medium leading-6 text-right text-blue-600 w-[68px]">
                  View All
                </div>
              </div>
              <div className="flex flex-col mt-8 w-full max-md:max-w-full">
                {transactions.map((transaction, index) => (
                  <TransactionItem key={index} {...transaction} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}