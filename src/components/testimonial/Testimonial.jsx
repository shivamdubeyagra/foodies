// import React from 'react'
import BannerPng from "../../assets/food/banner.png";
import { motion } from 'framer-motion';
import { SideUp } from "../hero/Hero.jsx";

const Testimonial = () => {
    return <section>
        <div className="container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
                {/* text content section */}
                <div className="space-y-5 lg:max-w-[400px]">
                    <motion.p
                        variants={SideUp(0.4)}
                        initial='initial'
                        whileInView='animate'
                        className="text-xl font-serif relative z-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam corporis perspiciatis ut, aspernatur ex nihil alias quibusdam cumque suscipit hic dolorem ipsam dicta laboriosam officiis rem, odio mollitia ad provident.</motion.p>
                    <div className="flex items-center gap-3">
                        <motion.img
                            variants={SideUp(0.8)}
                            initial='initial'
                            whileInView='animate'
                            src="https://picsum.photos/id/237/200/300" alt="image" className="w-14 h-14 rounded-full object-cover" />
                        <motion.div
                            variants={SideUp(1.2)}
                            initial='initial'
                            whileInView='show'
                            className="flex flex-col items-center space-y-1"
                        >
                            <h2 className="text-xl font-bold">Shivam Dubey</h2>
                            <p className="text-sm">Developer</p>
                        </motion.div>
                    </div>
                </div>
                {/* image section  */}
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, x: -100, y: 100 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        whileHover={{ scale: 1.2, rotate: 15, x: 50, y: -50 }}
                        transition={{ duration: 0.6, delay: 0.5, scale: { duration: 0.5 } }}
                        src={BannerPng} alt="banner" className="relative z-10 w-full lg:max-w-[280px] image-shadow" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute bg-lightYellow w-[320px] h-[320px] top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] rounded-full"></motion.div>
                </div>
            </div>
        </div>
    </section>
}

export default Testimonial
