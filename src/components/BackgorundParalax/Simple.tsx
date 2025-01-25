import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Simple() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ['start start', 'end start']
    })
  
    const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"] )
  
    return (
      <div className='h-screen w-[100vw] overflow-hidden -z-10' ref={container}>
        <motion.div style={{y}} className='relative h-full bg-red-200'>
          <img src="/images/2.jpg" alt="image" style={{objectFit: "cover"}} className='absolute top-0 left-0 w-full h-full'/>
        </motion.div>
      </div>
    )
}
