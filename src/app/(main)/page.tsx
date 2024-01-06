'use client'
import { getCollectionsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import SkeletonHomepageProducts from "@modules/skeletons/components/skeleton-homepage-products"
import { Metadata } from "next"
import { Suspense, useState } from "react"

// export const metadata: Metadata = {
//   title: "Medusa Next.js Starter Template",
//   description:
//     "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
// }

export default function Home() {
  // const { collections, count } = await getCollectionsList(0, 3)

  const [count, setCount] = useState(0);
  return (
    <>

  {/* <div onClick={() => setCount(count + 1)}>刷新</div> */}
      <Hero key={count} />
      {/* <Suspense fallback={<SkeletonHomepageProducts count={count} />}>
        <FeaturedProducts collections={collections} />
      </Suspense> */}
    </>
  )
}
