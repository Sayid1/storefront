import Providers from "@modules/providers"
import { NextUIProviders } from "./providers";
import CartDrawer from '@modules/cart/cart-drawer'
import "styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <NextUIProviders>
          <Providers>
            <main className="relative overflow-x-hidden">{children}</main>
          </Providers>
        </NextUIProviders>
      </body>
    </html>
  )
}
