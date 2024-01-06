'use client'

import { Heading } from "@medusajs/ui"
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react"
import NextImage from "next/image";
import { useState, useRef, useEffect } from "react"
// import { useScroll, useMeasure } from 'react-use'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon'
import ArrowRightCircleIcon from '@heroicons/react/24/solid/ArrowRightCircleIcon'
import clsx from "clsx"
import styles from './index.module.css'

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
}

const list = [
  {
    title: "Orange",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$3.00",
  },
  {
    title: "Raspberry",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$15.70",
  },
  {
    title: "Lemon 2",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$12.20",
  },
]

const list2 = [
  {
    title: "Orange2",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$5.50",
  },
  {
    title: "Tangerine2",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$3.00",
  },
  {
    title: "Raspberry2",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$10.00",
  },
  {
    title: "Lemon2",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$15.70",
  },
  {
    title: "Lemon 2",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "https://acsonsigns.com/assets/imgs/grid_back_sign.webp?v=1",
    price: "$12.20",
  },
]

const Hero = () => {
  const [isOn, setIsOn] = useState(false)
  // const [scrollRef, animate] = useAnimate()
  // const toggleSwitch = (status: boolean) => setIsOn(status)
  const [products, setProducts] = useState<typeof list>(list)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const left = useRef<HTMLDivElement | null>(null)
  const right = useRef<HTMLDivElement | null>(null)
  const { scrollXProgress, scrollX } = useScroll({ container: scrollRef })

  useMotionValueEvent(scrollXProgress, "change", (latest) => {
    if (latest === 1) {
      right.current?.classList.add('translate-x-[70px]')
    } else {
      right.current?.classList.remove('translate-x-[70px]')
    }
  })

  useMotionValueEvent(scrollX, "change", (latest) => {
    if (latest >= 30) {
      left.current?.classList.remove('-translate-x-[70px]')
    } else {
      left.current?.classList.add('-translate-x-[70px]')
    }
  })

  const scrollTo = (left: boolean) => {
    if (left) scrollRef.current?.scrollTo({ left: scrollX.get() - 500, behavior: 'smooth' })
    else scrollRef.current?.scrollTo({ left: scrollX.get() + 500, behavior: 'smooth' })
  }

  const changeNeon = () => {
    setProducts(list2)
    setIsOn(true)
  }
  const changeSignage = () => {
    setProducts(list)
    setIsOn(false)
  }

  return (
    <div className={clsx("min-h-[calc(100vh_-_58px)] w-full relative overflow-hidden ", styles.section)}>
      {/* <div className="flex flex-col justify-center items-center text-center gap-6"> */}
         <div className="flex flex-col items-center">
          <Heading
            level="h1"
            className="mb-10 max-w-[24ch] px-4 text-center font-obviously text-5xl/[1.1] font-semibold md:text-6xl/[1.1]"
          >
            We create any signs you want
          </Heading>
          <p className="body body-large px-2 text-center text-gray-100 md:px-8 max-w-3xl">Elevate your brand&apos;s visibility and make a bold statement with these dynamic and eye-catching 3d signs. </p>
          <div className="mt-6 flex w-full justify-center gap-6 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28">
            <Button as="a" href="#" className="button button-white" color="primary">
              Free Quote
            </Button>
          </div>
        </div>
        
        <div className="absolute w-full bottom-0">
          <div className={styles.box}>
            <div className={clsx("w-min relative flex gap-x-4 md:text-sm mb-8 cursor-pointer")}>
              <div data-ison={isOn} className={clsx("absolute inset-0 flex rounded-full text-xs transition-colors duration-150 hover:bg-black/20 hover:text-astro-gray-200", styles.switch)}>
                <motion.div className={clsx("w-[140px] box-content h-full relative rounded-full", styles.active)} layout transition={spring}></motion.div>
              </div>
              <Button onClick={changeSignage} color="primary" variant="light" className="w-[140px] h-10 relative z-10">business signage</Button>
              <Button onClick={changeNeon} color="primary" variant="light" className="w-[140px] h-10 relative z-10">led neon signs</Button>
            </div>
          </div>
          <div ref={scrollRef} className={clsx("relative z-1 grid grid-flow-col gap-x-4 pr-4 auto-cols-min overflow-x-scroll no-scrollbar", styles.box)}>
            {products.map((item, index) => (
              <Card classNames={{ base: 'animate--slide-in'}} style={{'--animation-order': index, '--translateY': '100%'}} shadow="sm" key={item.title} isPressable onPress={() => console.log("item pressed")}>
                <CardBody className="overflow-visible p-0 w-[300px]">
                  <Image
                  
                    isZoomed
                    shadow="sm"
                    radius="lg"
                    width={300}
                    alt={item.title}
                    src={item.img}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.title}</b>
                  <p className="text-default-500">{item.price}</p>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div ref={left} className="absolute left-[15px] top-1/2 -translate-y-1/2 z-10 transition-transform -translate-x-[70px]">
            <Button onClick={() => scrollTo(true)} isIconOnly radius="full" className="bg-gray-900 w-[48px] h-[48px]" aria-label="Show previous product">
              <ArrowRightIcon className="w-4 h-4 rotate-180" />
            </Button>
          </div>
          <div ref={right} className="absolute right-[15px] top-1/2 -translate-y-1/2 z-10 transition-transform">
              <Button onClick={() => scrollTo(false)} isIconOnly radius="full" className="bg-gray-900 w-[48px] h-[48px]" aria-label="Show next product">
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
}

export default Hero
