'use client'
import { motion } from "framer-motion"
import MainPageText from './MainPageText';
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import MainImg from '@/utils/mainIconsdark.svg'
import Image from 'next/image'


const SlideInComponent = () => {
  return (
    <motion.div id="main" className="main"
      initial="hidden"
      animate="visible" 
      
    >
       <motion.div
        variants={slideInFromTop}
        >
        <MainPageText/> 
        </motion.div >


        <motion.div
        variants={slideInFromRight(0.5)}
        >
        <Image className='main-img' src={MainImg} alt='icons-main'/>
        </motion.div>
    </motion.div>
  );
};

export default SlideInComponent;
