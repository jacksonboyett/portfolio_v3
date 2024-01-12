"use client"

import { motion } from "framer-motion";

function AnimateDownOnView({children}: any) {
	return ( 
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
transition={{ type: "linear", duration: 0.5, delay: 0.5}}
variants={{
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: "-100%" },
}}>
{children}
</motion.div>
	 );
}

export default AnimateDownOnView;