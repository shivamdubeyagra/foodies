// import React from 'react'
import Food1 from "../../assets/food/food.png"
import Food2 from "../../assets/food/food2-plate.png"
import Food3 from "../../assets/food/banner.png"
import { motion } from 'framer-motion';
import { SideUp } from "../hero/Hero.jsx"

const HotDesserData = [
    {
        id: 1,
        name: "HotDessert",
        img: Food1,
        price: "$5.99",
        delay: 0.4
    },
    {
        id: 2,
        name: "Hot Cake",
        img: Food2,
        price: "$5.00",
        delay: 0.8
    },
    {
        id: 3,
        name: "Hot Cake",
        img: Food3,
        price: "$5.99",
        delay: 1.2
    },
]

export default function HotDessert() {
    return <section>
        <div className="container py-12">
            {/* heading section  */}
            <motion.h3
                variants={SideUp(0)}
                initial="initial"
                whileInView="animate"
                className="text-2xl font-semibold text-darkGreen py-8 uppercase">Hot Dessert</motion.h3>
            {/* grid section  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {
                    HotDesserData.map((item) => {
                        return (
                            <motion.div
                                variants={SideUp(item.delay)}
                                initial="initial"
                                whileInView="animate"
                                key={item.id} className="group bg-white/50 shadow-md p-3 flex items-center gap-3">
                                <img src={item.img} alt="img" className="w-24 rounded-full image-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]" />
                                <div>
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <p className="text-xl text-yellow-500">{item.price}</p>

                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    </section>
}
