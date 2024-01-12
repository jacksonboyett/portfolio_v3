"use client"

import { motion } from "framer-motion";

function AnimateLeftOnView({children}: any) {
	return ( 
<motion.div
initial="hidden"
whileInView="visible"
viewport={{ once: true }}
transition={{ type: "linear", duration: 0.5, delay: 0.2}}
variants={{
	visible: { opacity: 1, x: 0 },
	hidden: { opacity: 0, x: "60%" },
}}>
{children}
</motion.div>
	 );
}

export default AnimateLeftOnView;