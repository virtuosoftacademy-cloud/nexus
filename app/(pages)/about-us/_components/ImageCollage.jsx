'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function CollageSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.35 })

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: {
        duration: 2.1,
        ease: [0.19, 1, 0.22, 1],
        delay: 1.15 + custom * 1.15,
      },
    }),
  }

  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 py-20 md:py-24 overflow-hidden">
      <motion.div
        ref={ref}
        className="relative w-[1000px] max-w-[95%] mx-auto h-[580px] md:h-[620px]"
        initial={{ opacity: 0, y: 70 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Blue background shape */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[740px] h-[380px] md:w-[720px] md:h-[370px]
                     bg-blue-600 rounded-lg -translate-x-1/2 -translate-y-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Top image */}
        <motion.img
          src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/12/pexels-kampus-8353839.png"
          alt=""
          className="collage-img top absolute left-1/2 top-[25px] w-[440px] md:w-[420px] 
                     rounded-lg shadow-2xl object-cover z-20 -translate-x-1/2"
          custom={0}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        />

        {/* Left image */}
        <motion.img
          src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/12/pexels-yankrukov-7640782.png"
          alt=""
          className="collage-img left absolute left-[40px] bottom-[210px] w-[280px] md:w-[260px]
                     rounded-lg shadow-2xl object-cover z-30"
          custom={1}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        />

        {/* Right image */}
        <motion.img
          src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/pexels-yankrukov-7793999-1-300x200.png"
          alt=""
          className="collage-img right absolute right-[40px] bottom-[180px] w-[280px] md:w-[260px]
                     rounded-lg shadow-2xl object-cover z-[15]"
          custom={2}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        />

        {/* Bottom image */}
        <motion.img
          src="https://virtuosoft.pk/virtuosoft/wp-content/uploads/2025/11/pexels-rdne-7491147-300x200.png"
          alt=""
          className="collage-img bottom absolute left-1/2 bottom-[5px] w-[440px] md:w-[420px] 
                     rounded-lg shadow-2xl object-cover z-[5] -translate-x-[30px]"
          custom={3}
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        />
      </motion.div>

      {/* Mobile overlapping layout */}
      <style jsx>{`
        @media (max-width: 640px) {
          .collage-img.top {
            width: 82%;
            top: 4%;
            transform: translateX(-50%);
          }
          .collage-img.left {
            width: 68%;
            left: 4%;
            bottom: 18%;
            transform: rotate(-3deg);
          }
          .collage-img.right {
            width: 68%;
            right: 4%;
            bottom: 16%;
            transform: rotate(3deg);
          }
          .collage-img.bottom {
            width: 82%;
            bottom: 2%;
            transform: translateX(-50%);
          }
          .collage-img {
            filter: grayscale(0%) !important;
            box-shadow: 0 6px 16px rgba(0,0,0,0.18) !important;
          }
          .collage-img + .blue-bg ~ div {
            /* Ensures blue bg stays behind on mobile */
          }
        }

        @media (max-width: 400px) {
          .collage-img.top,
          .collage-img.bottom {
            width: 88%;
          }
        }
      `}</style>
    </div>
  )
}