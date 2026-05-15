'use client'

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import Src from '@/public/assets/Images/service/ai_data_service.png'

export default function Hero(heroData ) {
    const { title, topDescription, bottomDescription, btnTitle } = heroData
    return (
        /* Alignment Container: 
           'max-w-[1240px]' cards ke grid ke saath edge-to-edge alignment ensure karta hai.
        */
        <div className="w-full flex justify-center px-6 md:px-10 lg:px-12">
            <section
                className="relative w-full max-w-[1240px] py-12 md:py-16 px-8 md:px-16 lg:px-20 
                           text-left overflow-hidden shadow-2xl shadow-black/15
                           bg-linear-to-br from-primary to-[#084387] text-white border-white/5"
            >
                {/* Image Section: 
                   Laptop par size ko adjust kiya gaya hai taake content area balance rahe aur overlap na ho.
                */}
                <Image
                    width={400} 
                    height={400}
                    src={Src}
                    alt="AI Agents"
                    className="absolute -top-10 -right-10 w-[220px] md:w-[320px] lg:w-[420px] 
                               hidden lg:block object-contain opacity-50 xl:opacity-90 
                               pointer-events-none z-0 transition-transform duration-700 hover:scale-105" 
                    aria-hidden="true"
                />

                {/* Content Section: 62% width limit laptop alignment aur readability ke liye */}
                <div className="relative z-20">
                    <div className="max-w-full lg:max-w-[62%] text-center md:text-left">
                        <p className="text-base md:text-xl lg:text-2xl font-light opacity-90 tracking-wide">
                            {topDescription}
                        </p>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold italic my-4 leading-tight tracking-tight">
                            {title}
                        </h2>
                        
                        <p className="text-xs md:text-sm lg:text-[15px] opacity-80 max-w-lg mx-auto md:mx-0 font-light leading-relaxed mb-10">
                            {bottomDescription}
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        {/* Button: Original Colors Preserved (White BG, Blue Text) */}
                        <Button 
                            asChild
                            className="bg-white text-[#084387] hover:bg-[#084387] hover:text-accent 
                                       font-bold capitalize text-sm md:text-base px-8 h-12 
                                       transition-all duration-300 shadow-xl rounded-lg active:scale-95"
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