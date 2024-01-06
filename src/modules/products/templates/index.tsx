"use client"

import React, { useEffect, useRef, useState } from "react"
import { ProductProvider } from "@lib/context/product-context"
import { useIntersection } from "@lib/hooks/use-in-view"
import ProductInfo from "@modules/products/templates/product-info"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ImageGallery from "@modules/products/components/image-gallery"
import MobileActions from "@modules/products/components/mobile-actions"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductActions from "../components/product-actions"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {

  const infoRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(infoRef, "0px")

  return (
    <ProductProvider product={product}>
      <div className="flex flex-wrap px-4 pt-12">

        <div className="relative px-3 w-full max-w-full flex overflow-hidden shrink-0 flex-[0_0_auto] md:w-1/2 min-[1200px]:w-1/2 mb-6 justify-end">
          <ImageGallery images={product?.images || []} />
        </div>

        <div
          className="px-3 w-full max-w-full shrink-0 flex-[0_0_auto] md:w-1/2 md:px-12 md:pb-12 min-[1200px]:w-[41%]"
          ref={infoRef}
        >
          <ProductInfo product={product} />
          <ProductActions product={product} />
          <ProductTabs product={product} />
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple productivity</h2>
          <p className="mt-4 text-gray-300">Focus allows you to plan 10 daily tasks, while also thinking ahead about what's next. Forget distracting digital apps and embrace these small, sturdy pieces of paper.</p>
        </div>
        <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div className="flex flex-col-reverse">
            <div className="mt-6">
              <h3 className="text-white font-medium text-sm">Install Screw</h3>
              <p className="mt-2 text-sm text-gray-300">Today, Next, and Someday cards allow you to defer your dreams into the future.</p>
            </div>
            <div className="overflow-hidden rounded-lg relative pb-[100%]">
              <img className="absolute inset-0 object-cover	object-center" src="/1.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <div className="mt-6">
              <h3 className="text-white font-medium text-sm">Dimmer</h3>
              <p className="mt-2 text-sm text-gray-300">Today, Next, and Someday cards allow you to defer your dreams into the future.</p>
            </div>
            <div className="overflow-hidden rounded-lg relative pb-[100%]">
              <img className="absolute inset-0 object-cover	object-center" src="/2.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <div className="mt-6">
              <h3 className="text-white font-medium text-sm">RGB Controller</h3>
              <p className="mt-2 text-sm text-gray-300">Today, Next, and Someday cards allow you to defer your dreams into the future.</p>
            </div>
            <div className="overflow-hidden rounded-lg relative pb-[100%]">
              <img className="absolute inset-0 object-cover	object-center" src="/3.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col-reverse">
            <div className="mt-6">
              <h3 className="text-white font-medium text-sm">Full Color Controller</h3>
              <p className="mt-2 text-sm text-gray-300">Today, Next, and Someday cards allow you to defer your dreams into the future.</p>
            </div>
            <div className="overflow-hidden rounded-lg relative pb-[100%]">
              <img className="absolute inset-0 object-cover	object-center" src="/4.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <section aria-labelledby="features-heading" className="relative">
        <div className="relative pb-[calc(2_/_3_*_100%)] overflow-hidden sm:relative sm:pb-[40%] lg:pb-0 lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img src="/5.png" alt="" className="absolute inset-0 w-full h-full object-cover object-center lg:static" />
        </div>
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-300">Leatherbound Daily Journal</h2>
            <p className="mt-4 text-4xl font-bold tracking-tight text-white">All in the Details</p>
            <p className="mt-4 text-gray-300">We've obsessed over every detail of this handcrafted journal to bring you the best materials for daily use.</p>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
              <div>
                <dt className="font-medium text-white">Durable</dt>
                <dd className="mt-2 text-gray-300">The leather cover and machined steel disc binding stand up to daily use for years to come.</dd>
              </div>
              <div>
                <dt className="font-medium text-white">Durable</dt>
                <dd className="mt-2 text-gray-300">The leather cover and machined steel disc binding stand up to daily use for years to come.</dd>
              </div>
              <div>
                <dt className="font-medium text-white">Durable</dt>
                <dd className="mt-2 text-gray-300">The leather cover and machined steel disc binding stand up to daily use for years to come.</dd>
              </div>
              <div>
                <dt className="font-medium text-white">Durable</dt>
                <dd className="mt-2 text-gray-300">The leather cover and machined steel disc binding stand up to daily use for years to come.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <div className="content-container my-16 px-6 small:px-8 small:my-32">
        <RelatedProducts product={product} />
      </div>
      <MobileActions product={product} show={!inView} />
    </ProductProvider>
  )
}

export default ProductTemplate
