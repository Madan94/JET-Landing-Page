export default function LogoCarousel() {
  const logos = [
    { Tool: "Polygon" },
    { Tool: "IoTex-DePIN" },
    { Tool: "AI Agents" },
    { Tool: "Escrow Payments" },
    { Tool: "Supply Chain Finance" },
    { Tool: "AWS" },
    { Tool: "Metamask" },
    { Tool: "Google Maps" },
  ];

  const repeatedLogos = [...logos, ...logos]; // Duplicate logos for seamless looping

  return (
    <div className="relative bg-black py-6 flex justify-center overflow-hidden group">
      {/* Edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-20 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-20 bg-gradient-to-l from-black to-transparent" />

      {/* Carousel container */}
      <div className="w-[80%] overflow-hidden relative z-10">
        <div className="flex space-x-20 px-4 animate-marquee group-hover:[animation-play-state:paused] transition-all duration-1000 ease-in-out">
          {repeatedLogos.map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 w-64 text-center">
              <p className="text-[#00FFC2] font-bold text-xl md:text-3xl tracking-wide">
                {logo.Tool}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
