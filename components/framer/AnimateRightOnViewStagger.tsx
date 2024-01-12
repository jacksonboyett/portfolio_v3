"use client"

import { motion } from "framer-motion";

function AnimateRightOnViewStagger({children}: any) {

	return ( 
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
transition={{ type: "linear", duration: 0.8, delay: Math.random() + 1}}
variants={{
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: "100%" },
}}>
{children}
</motion.div>
	 );
}

export default AnimateRightOnViewStagger;