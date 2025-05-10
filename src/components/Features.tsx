import Image from "next/image";
import cargo from '../assets/images/cargo.jpg';

const tags = [
  "Efficient Cargo Transportation",
  "IoTex - DePIN Enabled",
  "Immutable Records",
  "Real Time Milestone Alerts",
];

export const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row-reverse items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24" id="about">
      <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 text-center md:text-left px-4 md:px-8">
        <h1 className="text-yellow-400 font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight">
          About Us
        </h1>
        <p className="text-white/90 leading-relaxed text-base sm:text-lg lg:text-xl max-w-2xl">
          Just Everything (JET) is transforming traditional logistics by eliminating inefficiencies in cargo road transportation. Through a two-sided platform powered by blockchain, AI Agents, IoT, and DePIN architecture, JET enables real-time validation, smart load matching, predictive analytics, and instant payments via JET Tokens. We democratize logistics to empower businesses of all sizes to ship smarter, faster, and securely.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mt-4">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="rounded-full px-4 py-2.5 text-sm sm:text-base font-medium text-white bg-gradient-to-r from-blue-400 to-[#5D2CA8] hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0 px-4 md:px-8">
        <div className="w-full max-w-2xl aspect-[4/3] relative rounded-xl overflow-hidden shadow-2xl">
          <Image
            src={cargo}
            alt="Cargo Transportation"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};
