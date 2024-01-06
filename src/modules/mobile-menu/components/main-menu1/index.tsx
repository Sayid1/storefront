import * as React from "react"
import { motion } from "framer-motion"
import { Button } from '@nextui-org/react'
import { MenuItem } from "./menu-item"

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const MainMenu = (props: { className?: string }) => (
  <motion.nav aria-label="Global" variants={variants} className={props.className}>
    <ul>
      {itemIds.map(i => (
        <MenuItem key={i} >
          <Button as="a" href="#" variant="light" color="primary">
            Free Quote
          </Button>
        </MenuItem>
      ))}
    </ul>
  </motion.nav>
);

const itemIds = [0, 1, 2, 3, 4];

export default MainMenu
