// import React from 'react'
import BannerPng from "../../assets/food/banner.png";
import { motion } from 'framer-motion';
import { SideUp } from "../hero/Hero.jsx";
const Banner = () => {
    return <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
                {/* image section  */}
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, x: -100, y: 100 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
                        transition={{ duration: 0.6, delay: 0.5, scale: { duration: 0.5 } }}
                        src={BannerPng} alt="banner" className="relative z-10 w-full lg:max-w-[350px] image-shadow" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute bg-lightYellow md:w-[400px] md:h-[400px] w-[320px] h-[320px] top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] rounded-full"></motion.div>
                </div>
                {/* text content section */}
                <div className="space-y-5 lg:max-w-[400px]">
                    <motion.h1
                        variants={SideUp(1)}
                        initial="initial"
                        whileInView="animate"
                        className="text-6xl font-semibold uppercase font-leagueGothic">The Best yummy food in the town</motion.h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum obcaecati repellat!</p>
                    <motion.button
                        variants={SideUp(1)}
                        initial="initial"
                        whileInView="animate"
                        className="btn-primary">Order Now</motion.button>
                </div>

            </div>
        </div>
    </section>
}

export default Banner
