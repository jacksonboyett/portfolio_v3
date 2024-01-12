"use client"

import { motion } from "framer-motion";

function AnimateUpOnViewWithDelay({children}: any) {
	return ( 
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
transition={{ type: "linear", duration: 1, delay: 3}}
variants={{
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: "150%" },
}}>
{children}
</motion.div>
	 );
}

export default AnimateUpOnViewWithDelay;