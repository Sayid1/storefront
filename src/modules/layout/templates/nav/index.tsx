"use client"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react"
import { useLockBodyScroll, createBreakpoint } from "react-use"
import MobileMenu from "@modules/mobile-menu/templates"
import { useState} from "react"
import CartDropdown from '@modules/layout/components/cart-dropdown'
import { ChevronDownIcon } from "@heroicons/react/24/solid"
import clsx from "clsx"

const useBreakpoint = createBreakpoint({ sm: 640, md: 768, lg: 1024 })

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  useLockBodyScroll(isOpen)
  const breakpoint = useBreakpoint()

  if (breakpoint === 'lg')
    return (
      <header className="fixed left-0 right-0 top-0 z-20" style={{backgroundColor: 'hsl(var(--nextui-background))'}}>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
          </div>
          <div className="hidden lg:flex">
            <Popover
              placement="bottom"
              onOpenChange={setIsOpen}
              containerPadding={0}
              classNames={{
                base: "w-screen",
                content: "bg-[hsl(var(--nextui-background))]",
              }}
            >
              <PopoverTrigger>
                <Button
                  variant="light"
                  color="primary"
                  className="animate--slide-in"
                  style={{'--animation-order': 0, '--translateY': '-2rem'}}
                  endContent={
                    <ChevronDownIcon
                      className={clsx("w-4 h-4 transition-transform", {
                        "rotate-180": isOpen,
                      })}
                    />
                  }
                >
                  Products
                </Button>
              </PopoverTrigger>
              <PopoverContent aria-label="Product Collections">
                <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-20 px-6 py-10 2xl:px-64">
                  <div className="grid grid-cols-2 gap-y-6 md:gap-y-2">
                    <div>
                      <h3 className="text-sm font-medium leading-6 text-gray-500">
                        business signage
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-1">
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Face Lit Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Back Lit Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Non Illuminate Metal Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Acrylic Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Light Box Signs
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium leading-6 text-gray-500">
                        led neon Signs
                      </h3>
                      <div className="mt-6 flow-root">
                        <div className="-my-1">
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Birthday Neon Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Wedding Neon Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Bar Neon Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Home Decor Neon Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Restaurant Neon Signs
                          </a>
                          <a
                            href="#"
                            className="flex gap-y-4 py-1 text-sm font-semibold leading-6 text-gray-200"
                          >
                            Beauty, Nail & Hair Salon Neon Signs
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8">
                    <h3 className="t">Recent posts</h3>
                    <article className="relative isolate flex max-w-2xl flex-col gap-y-8 gap-x-6 md:flex-row md:items-start lg:flex-col lg:items-stretch">
                      <div className="relative flex-none">
                        <img
                          className="aspect-[2/1] w-full rounded-md object-cover md:aspect-video md:h-32 h-auto"
                          src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3603&amp;q=80"
                          alt=""
                        />
                        <div className="aa ak rounded-md bbt bbx bco"></div>
                      </div>
                      <div>
                        <h4 className="mt-1 text-sm font-semibold leading-6 text-gray-200">
                          <a href="#">
                            <span className="aa ak"></span>Boost your conversion
                            rate
                          </a>
                        </h4>
                        <p className="mt-1 text-sm leading-6 axs">
                          Et et dolore officia quis nostrud esse aute cillum irure
                          do esse. Eiusmod ad deserunt cupidatat est magna Lorem.
                        </p>
                      </div>
                    </article>
                    <article className="relative isolate flex max-w-2xl flex-col gap-y-8 gap-x-6 md:flex-row md:items-start lg:flex-col lg:items-stretch">
                      <div className="relative flex-none">
                        <img
                          className="aspect-[2/1] w-full rounded-md object-cover md:aspect-video md:h-32 h-auto"
                          src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=3270&amp;q=80"
                          alt=""
                        />
                        <div className="aa ak rounded-md bbt bbx bco"></div>
                      </div>
                      <div>
                        <h4 className="mt-1 text-sm font-semibold leading-6 text-gray-200">
                          <a href="#">
                            <span className="aa ak"></span>How to use search
                            engine optimization to drive sales
                          </a>
                        </h4>
                        <p className="mt-1 text-sm leading-6 axs">
                          Optio cum necessitatibus dolor voluptatum provident
                          commodi et.
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Button as="a" href="#" className="animate--slide-in" variant="light" color="primary" style={{'--animation-order': 1, '--translateY': '-2rem'}}>
              About Us
            </Button>
            <Button as="a" href="#" className="animate--slide-in" variant="light" color="primary" style={{'--animation-order': 2, '--translateY': '-2rem'}}>
              Contact US
            </Button>
            <Button as="a" href="#" className="animate--slide-in" variant="light" color="primary" style={{'--animation-order': 3, '--translateY': '-2rem'}}>
              Customer Reviews
            </Button>
            <Button as="a" href="#" className="animate--slide-in" variant="light" color="primary" style={{'--animation-order': 4, '--translateY': '-2rem'}}>
              FAQs
            </Button>
            <Button as="a" href="#" className="animate--slide-in" variant="light" color="primary" style={{'--animation-order': 5, '--translateY': '-2rem'}}>
              Our Mission
            </Button>
            <Button as="a" href="#" className="animate--slide-in" variant="light" color="primary" style={{'--animation-order': 6, '--translateY': '-2rem'}}>
              Free Quote
            </Button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <ShoppingCartIcon className="w-6 h-6" /> */}
            <CartDropdown />
          </div>
        </nav>
      </header>
    )
  return <MobileMenu />
}

export default Nav
{/* <Popover
  placement="bottom"
  onOpenChange={setIsOpen}
  classNames={{
    content: "bg-[hsl(var(--nextui-background))]",
  }}
>
  <PopoverTrigger>
    <Button
      variant="light"
      color="primary"
      endContent={
        <ChevronDownIcon
          className={clsx("w-4 h-4 transition-transform", {
            "rotate-180": isOpen,
          })}
        />
      }
    >
      Company
    </Button>
  </PopoverTrigger>
  <PopoverContent aria-label="Product Collections">
    <div className="z-10 max-w-md overflow-hidden rounded-3xl shadow-lg ring-1 ring-gray-900/5">
      <div className="p-4">
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <UserGroupIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-auto">
            <a href="#" className="block font-semibold text-white">
              About Us
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-300">
              Get a better understanding of your traffic
            </p>
          </div>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <ChatBubbleLeftRightIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-auto">
            <a href="#" className="block font-semibold text-white">
              Contact US
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-300">
              Speak directly to your customers
            </p>
          </div>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <StarIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-auto">
            <a href="#" className="block font-semibold text-white">
              Customer Reviews
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-300">
              See what our customers really say about us
            </p>
          </div>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <QuestionMarkCircleIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-auto">
            <a href="#" className="block font-semibold text-white">
              FAQs
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-300">
              Everything you need to know.
            </p>
          </div>
        </div>
        <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
            <GlobeAltIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div className="flex-auto">
            <a href="#" className="block font-semibold text-white">
              Our Mission
              <span className="absolute inset-0"></span>
            </a>
            <p className="mt-1 text-gray-300">
              Making the Promise of Marine Protection Real.
            </p>
          </div>
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover> */}