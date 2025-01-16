import * as React from 'react';
import { RentalSummaryProps } from '../types';
import Image from 'next/image';

export const RentalSummary: React.FC<RentalSummaryProps> = ({
  carName,
  carImage,
  rating,
  reviews,
  subtotal,
  tax,
  total
}) => {
  return (
    <div className="flex overflow-hidden flex-col p-6 mx-auto w-full bg-white rounded-xl">
      <div className="flex flex-col max-md:max-w-full">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          Rental Summary
        </h2>
        <p className="mt-1 text-sm font-medium tracking-tight leading-5 text-slate-400">
          Prices may change depending on the length of the rental and the price of your rental car.
        </p>
      </div>
      
      <div className="flex gap-4 self-start mt-8">
        <Image
          loading="lazy"
          src={carImage}
          alt={carName}
          height={108}
          width={132}
          className="object-contain shrink-0 max-w-full aspect-[1.22] w-[132px]"
        />
        <div className="flex overflow-hidden flex-col my-auto">
          <h3 className="text-3xl font-bold tracking-tighter text-gray-900">
            {carName}
          </h3>
          <div className="flex overflow-hidden gap-2 items-center mt-2 min-h-[24px]">
            <div className="flex overflow-hidden gap-0.5 items-center self-stretch my-auto">
              {[...Array(rating)].map((_, i) => (
                <Image
                  key={i}
                  loading="lazy"
                  src="/images/f.svg"
                  alt=""
                  height={6}
                  width={6}
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
              ))}
              {[...Array(5-rating)].map((_, i) => (
                <Image
                  key={i+rating}
                  loading="lazy"
                  src="/images/f2.svg"
                  alt=""
                  height={6}
                  width={6}
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                />
              ))}
            </div>
            <div className="self-stretch my-auto text-sm font-medium tracking-tight text-slate-500">
              {reviews}+ Reviewer
            </div>
          </div>
        </div>
      </div>

      <hr className="shrink-0 mt-8 h-px border border-solid border-slate-300 border-opacity-40" />
      
      <div className="flex gap-10 items-start mt-8 text-base tracking-tight whitespace-nowrap">
        <div className="font-medium text-slate-400 w-[116px]">Subtotal</div>
        <div className="font-semibold text-right text-gray-900 w-[116px]">
          ${subtotal.toFixed(2)}
        </div>
      </div>
      
      <div className="flex gap-10 items-start mt-6 text-base tracking-tight whitespace-nowrap">
        <div className="font-medium text-slate-400 w-[116px]">Tax</div>
        <div className="font-semibold text-right text-gray-900 w-[116px]">
          ${tax.toFixed(2)}
        </div>
      </div>

      <div className="flex gap-5 justify-between px-8 py-5 mt-8 rounded-xl bg-neutral-100">
        <div className="text-sm font-medium tracking-tight text-slate-400">
          Apply promo code
        </div>
        <button className="text-base font-semibold tracking-tight text-right text-gray-900">
          Apply now
        </button>
      </div>

      <div className="flex gap-8 items-start mt-8">
        <div className="flex flex-col min-w-[240px] w-[284px]">
          <h4 className="text-xl font-bold tracking-tight text-gray-900">
            Total Rental Price
          </h4>
          <p className="mt-1 text-sm font-medium tracking-tight text-slate-400">
            Overall price and includes rental discount
          </p>
        </div>
        <div className="w-32 text-3xl font-bold text-right text-gray-900">
          ${total.toFixed(2)}
        </div>
      </div>
    </div>
  );
};