'use client'

import Image from 'next/image'
import car from '@/utils/PerfectShine.png'
import chef from '@/utils/chef.png'
import React, { useState } from 'react'
import "./css/projetcs.css"
import { motion } from 'framer-motion'
import { useInView } from "framer-motion";
import { useRef } from "react";

import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import VideoProject from './sub/VideoProject'

function Projetcs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (

        <motion.div



        >
            <VideoProject />

            <div className='all-projetcs'>
                <h1 className='projetcs-h1'>Projects</h1>
                <motion.div
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateY(-200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        overflow: 'hidden'
                    }}
                >

                    <div className='project' >
                        <h1>Project #1</h1>
                        <div className='projects-link'>
                            <a href="https://perfectshineshop.netlify.app/" target='blank'>
                                <Image className='img-test' src={car} alt='oi' />
                            </a>
                        </div>
                        <h2>PerfectShine-Shop</h2>
                        <p>a personal project for an automotive store <br /> focused on detailing and selling accessories</p>
                    </div>
                </motion.div>

                <motion.div
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateY(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        overflow: 'hidden'

                    }}
                >

                    <div id='project' className='project' >
                        <h1>Project #2</h1>
                        <div className='projects-link'>
                            <a href="https://perfectshineshop.netlify.app/" target='blank'>
                                <Image className='img-test' src={car} alt='oi' />
                            </a>
                        </div>
                        <h2>PerfectShine-Shop</h2>
                        <p>a personal project for an automotive store <br /> focused on detailing and selling accessories</p>
                    </div>
                </motion.div>

                <motion.div className='project-3'
                    ref={ref}
                    style={{
                        transform: isInView ? "none" : "translateX(200px)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                        overflow: 'hidden'
                    }}
                >
                    <div   className='project'  >
                        <h1>Project #3</h1>
                        <div className='projects-link'>
                            <a href="https://perfectshineshop.netlify.app/" target='blank'>
                                <Image className='img-test' src={chef} alt='oi' />
                            </a>

                        </div>
                        <h2>MacielPinheiro-restaurant</h2>
                        <p>personal project made for a small restaurant with orders taken and sent <br /> to the restaurant attendant via text message on WhatsApp</p>
                    </div>
                </motion.div>
            </div>




        </motion.div>


    )
}

export default Projetcs