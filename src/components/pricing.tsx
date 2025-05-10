'use client'

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import gopal from "../assets/images/gopal.jpg";
import madhan from "../assets/images/madhan.jpg";
import steve from "../assets/images/steve.jpg";
import {AiOutlineLinkedin} from "react-icons/ai";

interface PricingTabProps {
  name: string,
  role: string,
  url: StaticImageData,
  link:string,
}

export function PricingTab(props: PricingTabProps) {
  return (
    <div className={`h-full`}>
      <div className="relative flex flex-col  p-6 rounded-2xl bg-[rgb(59 130 246 / 0.5)] border border-white shadow shadow-black/80">
        <div className="mb-5">
          <Image className="text-center h-45 w-45 rounded-2xl object-cover" src={props.url} alt={props.name}/>
          <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#5D2CA8] mt-3 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-[#5D2CA2] focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
            {props.name}
          </a>
          <p className="text-center pt-2 mb-5">{props.role}</p>
          <div className="text-center">
          <a
                            href={props.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 hover:bg-white bg-blue-500 text-white p-2 rounded-md w-full text-center px-4"
                        >
                          Connect on Linkedin
                        </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PricingTable() {
  return (
    <div>
      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
        {/* Founder & CEO Tab */}
        <PricingTab
          name="Gopal Miriyalu Dhanasekar"
          role="Founder & CEO"
          url={gopal} 
          link="https://www.linkedin.com/in/gopaal-miriyalu-dhanasekar-2b0995137/"/>

        {/* Co-Founder && CTO Tab */}
        <PricingTab
          name="Madhanraj M"
          role="Co-Founder & CTO"
          url={madhan}
          link="https://www.linkedin.com/in/madhan-fullstack-developer/"
          />

        {/* Co-Founder & Advisor Tab */}
        <PricingTab
          name="Steven Pisciotta"
          role="Co-Founder & Advisor"
          url={steve}
          link="https://www.linkedin.com/in/steve-pisciotta-338385/"
        />
      </div>
    </div>
  )
}
