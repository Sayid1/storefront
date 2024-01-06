import Image from "next/image"
import { Image as MedusaImage } from "@medusajs/medusa"
import React, { useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import classNames from "clsx"
import { motion, AnimatePresence } from "framer-motion";

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ProductImages = ({ images }: ImageGalleryProps) => {
  const [current, setCurrent] = useState(0)

  const handleInfiniteChange = (change: number) => {
    if (current + change < 0) {
      setCurrent(images.length - 1)
    } else if (current + change > images.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(current + change)
    }
  }

  return (
    <>
      <div className="rounded-lg overflow-hidden">
        <div className="w-full relative">
          {images.length > 1 && (
            <>
              <div className="absolute flex items-center justify-between h-full px-4 my-auto left-0 right-0 z-10">
                <ChevronLeftIcon
                  className="w-8 h-8 cursor-pointer"
                  aria-hidden
                  onClick={() => handleInfiniteChange(-1)}
                />
                <ChevronRightIcon
                  className="w-8 h-8 cursor-pointer"
                  aria-hidden
                  onClick={() => handleInfiniteChange(1)}
                />
              </div>
            </>
          )}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                layout="responsive"
                width={1}
                height={1}
                src={images[current].url}
                alt={`Product #${current + 1}`}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {images.length > 1 && (
        <div className="hidden lg:flex items-center justify-center mt-4">
          {images.map((image, index) => {
            return (
              <button
                key={index}
                className={classNames(
                  "w-14 h-14 relative rounded-md border overflow-hidden mr-4 last:mr-0",
                  current === index
                    ? "border-gold opacity-100 shadow-md	shadow-black"
                    : "border-[#a2a6ac] opacity-75"
                )}
                onClick={() => setCurrent(index)}
              >
                <Image
                  src={image.url}
                  alt={`Product #${index + 1}`}
                  layout="fill"
                />
              </button>
            )
          })}
        </div>
      )}
      </div>
    </>
  )
}

export default ProductImages