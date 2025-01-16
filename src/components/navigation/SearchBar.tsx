

// // Add 'use client' at the top to make the component render on the client-side
// 'use client';

// import * as React from "react";
// import { Icon } from "./Icon";
// import { SearchBarProps } from "./types";

// export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   return (
//     <div className="flex  flex-auto gap-10 px-5 py-2.5 text-sm font-medium tracking-tight text-justify bg-white border border-solid border-slate-300 border-opacity-40 rounded-[70px] text-slate-500 max-md:max-w-full">
//       <div className="flex gap-5">
//         <Icon
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad36dc19108b859ff2af2aa13a36fd05b31822bfb3bd0cd138fbb8de95842b3?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//           alt="Search icon"
//           className="w-6"
//         />
//         <label htmlFor="searchInput" className="sr-only">
//           Search something here
//         </label>
//         <input
//           id="searchInput"
//           type="text"
//           className="bg-transparent border-none outline-none basis-auto"
//           placeholder="Search something here"
//           onChange={(e) => onSearch?.(e.target.value)}
//         />
//       </div>
//       <Icon
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/83885f62305c1867957cdc81f3f4b767a0c01a4230a4fa298e916d7159190f3e?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//         alt="Filter icon"
//         className="w-6"
//       />
//     </div>
//   );
// };



















'use client';

import * as React from "react";
import { Icon } from "./Icon";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="flex  flex-auto gap-10 px-5 py-2.5 text-sm font-medium tracking-tight text-justify bg-white border border-solid border-slate-300 border-opacity-40 rounded-[70px] text-slate-500 max-w-full">
      <div className="flex gap-5 w-full md:w-auto"> {/* Make sure it is full width on mobile */}
        <Icon
          src="/images/search.png"
          alt="Search icon"
          className="w-[24px] h-[24px] "
        />
        <label htmlFor="searchInput" className="sr-only">
          Search something here
        </label>
        <input
          id="searchInput"
          type="text"
          className="bg-transparent border-none outline-none basis-auto w-full"  // Full width input
          placeholder="Search something here"
          onChange={(e) => onSearch?.(e.target.value)}
        />
      </div>
      <Icon
        src="/images/filter.png"
        alt="Filter icon"
        className="w-[24px] h-[24px]"
      />
    </div>
  );
};

















// import * as React from "react";
// import { Icon } from "./Icon";
// import { SearchBarProps } from "./types";

// export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   return (
//     <div className="flex  flex-auto gap-10 px-5 py-2.5 text-sm font-medium tracking-tight text-justify bg-white border border-solid border-slate-300 border-opacity-40 rounded-[70px] text-slate-500 max-w-full">
//       <div className="flex gap-5 w-full md:w-auto"> {/* Make sure it is full width on mobile */}
//         <Icon
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ad36dc19108b859ff2af2aa13a36fd05b31822bfb3bd0cd138fbb8de95842b3?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//           alt="Search icon"
//           className="w-6"
//         />
//         <label htmlFor="searchInput" className="sr-only">
//           Search something here
//         </label>
//         <input
//           id="searchInput"
//           type="text"
//           className="bg-transparent border-none outline-none basis-auto w-full"  // Full width input
//           placeholder="Search something here"
//           onChange={(e) => onSearch?.(e.target.value)}
//         />
//       </div>
//       <Icon
//         src="https://cdn.builder.io/api/v1/image/assets/TEMP/83885f62305c1867957cdc81f3f4b767a0c01a4230a4fa298e916d7159190f3e?placeholderIfAbsent=true&apiKey=5967db0a3a5740a580d3441f6f0ec2df"
//         alt="Filter icon"
//         className="w-6"
//       />
//     </div>
//   );
// };
