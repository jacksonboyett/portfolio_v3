"use client"

import { motion } from "framer-motion";

function ShrinkOnHover({children}: any) {
	return ( 
<motion.div
initial="normal"
whileHover="small"
transition={{ type: "linear", duration: 0.1}}
variants={{
	normal: { scale: 1 },
	small: { scale: 0.9 },
}}>
{children}
</motion.div>
	 );
}

export default ShrinkOnHover;