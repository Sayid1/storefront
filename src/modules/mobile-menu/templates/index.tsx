import { useMobileMenu } from "@lib/context/mobile-menu-context"
// import Container from "@modules/mobile-menu/components/container"
// import MainMenu from "@modules/mobile-menu/components/main-menu"
// import CountryMenu from "../components/country-menu"
import Navigation from "@modules/mobile-menu/components/main-menu1"
import MenuToggle from "../components/menu-toggle"
import { motion, sync, useCycle } from "framer-motion"
import { useLockBodyScroll } from "react-use"
import { useRef } from 'react'
import useDimensions from "@lib/hooks/use-dimensions"
import clsx from "clsx"

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 48px) 29px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at calc(100% - 48px) 29px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}
const MobileMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  useLockBodyScroll(isOpen)
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.header
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div className="fixed inset-0 z-[11] " style={{backgroundColor: 'hsl(var(--nextui-background))'}} variants={sidebar} />
      <Navigation className={clsx("fixed top-[58px] left-0 z-[13] ", { 'pointer-events-none': !isOpen })} />
      <div className="fixed z-[12] left-0 top-0 right-0 flex items-center justify-between px-6 py-1 backdrop-blur-lg backdrop-saturate-150"  style={{backgroundColor: 'hsl(var(--nextui-background)/.7)'}}>
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <MenuToggle toggle={toggleOpen} className="z-[12]" />
      </div>
    </motion.header>
  )
}

export default MobileMenu
