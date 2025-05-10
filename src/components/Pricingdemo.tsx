import PricingTable, { PricingTab } from './pricing';

export const Team = () => {
  return (

    <div className="bg-black text-white  bg-gradient-to-b from-black via-[#5D2CA8] to-black py-[72px] sm:py-24 " id="team">

      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">Meet Our Team</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-center mt-5 text-xl text-white/70">
        Building the Future, Block by Block.
        </p>
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 px-24 py-[72px] sm:py-24  ">
          <PricingTable/>
        </div>
      </div>
    </div>
  )
}
