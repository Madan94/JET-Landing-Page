"use client";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import JET1 from "../assets/images/JET1.jpg";
import JET2 from "../assets/images/JET2.jpg";
import JET3 from "../assets/images/JET3.jpg";
import JET4 from "../assets/images/JET4.jpg";
import JET5 from "../assets/images/JET5.jpg";
import JET6 from "../assets/images/JET6.jpg";
import JET7 from "../assets/images/JET7.jpg";
const images: StaticImageData[] = [JET1, JET2, JET3, JET4, JET5, JET6, JET7];

export default function AutoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); // Change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 bg-gray-950 text-white" id="marketplace">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter text-yellow-500">JET Cargo MarketPlace</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-xl text-white/70 text-center mt-5 ">AI-Powered. Blockchain-Backed. Community-Driven.
        </p>
        <p className="text-base text-white text-center mt-5 w-auto">JET enables shippers to post loads and carriers to bid on them in real-time. It uses AI for demand forecasting, route optimization, and dynamic pricing. Blockchain ensures secure and tamper-proof transactions through smart contracts. IoT and vision sensors validate Proof-of-Work (PoW) through the DePIN model, and JET Tokens power reward systems and subscriptions.
        </p>
        </div>
      </div>
      <div className="container mt-12">
      <h2 className="text-center text-4xl font-bold mb-10 text-gray-200">
        Glimpse of JET Application
      </h2>
      <div className="relative w-full max-w-md mx-auto aspect-[9/16] overflow-hidden">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            } flex justify-center items-center`}
          >
            <Image
              src={img}
              alt={`Screenshot ${i + 1}`}
              className="rounded-lg shadow-2xl object-cover text-center border border-white p-4"
              height={200}
              width={300}
            />
            </div>
        ))}
        {/* Edge Fade */}
        <div className="absolute inset-x-0 top-0 h-full pointer-events-none bg-gradient-to-r from-gray-950 via-transparent to-gray-950 opacity-40" />
      </div>
    </div>
    </section>
  );
}
