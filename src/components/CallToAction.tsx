"use client"
import HelixImage from '../assets/images/helix2.png'
import EmojiImage from '../assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { use, useRef, useState } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5fac1d3a-c902-43ba-a802-d18637a53b84",
          name,
          message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.message || 'Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  }

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <div className="bg-black text-white py-[72px] sm:py-24" ref={containerRef} id="contact">
      
      <div className="container max-w-xl relative">
      <motion.div style={{translateY}}>
      <Image src={HelixImage} alt="helix" className="absolute top-6 left-[calc(100%+36px)]" />
      </motion.div>
      <motion.div style={{translateY}}>
      <Image src={EmojiImage} alt="emoji" className="absolute -top-[120px] right-[calc(100%+30px)]" />
      </motion.div>
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get Instant Connect</h2>
        <p className="text-xl text-white/70  mt-5">Let's Connect & Grow Together in AI and Blockchain Era.</p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 max-w-xl mx-auto"
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Enter Your Name"
              className="h-12 w-full bg-white/20 text-white placeholder:text-[#9CA3AF] rounded-lg px-4 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter Your Email"
              className="h-12 w-full bg-white/20 text-white placeholder:text-[#9CA3AF] rounded-lg px-4 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400"
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              required
              placeholder="Drop your Message here"
              className="w-full h-32 bg-white/20 text-white placeholder:text-[#9CA3AF] rounded-lg px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            className="h-12 bg-white text-black font-semibold rounded-lg px-6 w-full hover:bg-yellow-300 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Connect Now'}
          </button>
        </form>
        {submitStatus === 'success' && (
          <p className="text-green-400 mt-4 text-center">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-400 mt-4 text-center">{errorMessage}</p>
        )}
      </div>
    </div>
  )
};
