'use client'

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <div className="mt-[58px]">
        {children}
      </div>
      <Footer />
    </>
  )
}
