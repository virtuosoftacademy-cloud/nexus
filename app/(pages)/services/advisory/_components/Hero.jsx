'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Src from '@/public/assets/Images/service/as_service.png'

export default function Hero(heroData ) {
    const { title, topDescription, bottomDescription, btnTitle } = heroData
  return (
        /* Alignment Logic:
           Niche wale cards hamesha 'max-w-7xl' (1280px) ya 'max-w-6xl' use karte hain.
           Humne yahan 'max-w-[1240px]' rakha hai jo standard laptop screens par 
           cards aur hero box ke edges ko aik line mein le aayega.
        */
        <div className="w-full flex justify-center px-4 md:px-10 lg:px-12">
            <section
                className="relative w-full max-w-[1240px] py-12 md:py-16 px-10 md:px-16 lg:px-20 
                           text-left overflow-hidden shadow-2xl shadow-black/15
                           bg-linear-to-br from-[#084387] to-[#021021] text-white"
            >
                {/* Image Fix: 
                   Laptop screen par isay 'opacity-30' se 'opacity-80' ke beech rakha hai 
                   taake text readable rahe aur alignment balanced lage.
                */}
                <Image
                    width={400} 
                    height={400}
                    src={Src}
                    alt="AI Agents"
                    className="absolute -top-6 -right-6 w-[220px] md:w-[320px] lg:w-[400px] 
                               hidden lg:block object-contain opacity-50 xl:opacity-90 
                               pointer-events-none z-0 transition-transform duration-700 hover:scale-105" 
                    aria-hidden="true"
                />

                <div className="relative z-20">
                    <div className="max-w-full lg:max-w-[62%] text-center md:text-left">
                        <p className="text-base md:text-xl lg:text-2xl font-light opacity-90 tracking-wide">
                            {topDescription}
                        </p>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold italic my-4 leading-tight">
                            {title}
                        </h2>
                        
                        <p className="text-xs md:text-sm lg:text-[15px] opacity-80 max-w-lg mx-auto md:mx-0 font-light leading-relaxed mb-10">
                            {bottomDescription}
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        {/* Compact and Balanced Button */}
                        <Button 
                            asChild 
                            className="bg-white text-[#084387] hover:bg-[#084387] hover:text-white 
                                       font-bold capitalize text-sm md:text-base px-6 h-11 
                                       transition-all shadow-lg"
                        >
                            <Link href="/contact">
                                {btnTitle}
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}