const CartDrawer = () => {
  return (
    <div className="z-[99999] fixed inset-0 overflow-y-scroll bg-white transition-transform duration-300 ease-out min-[576px]:w-[500px] min-[576px]:translate-x-[500px] md:w-[600px] md:translate-x-[600px]">
      <div className="flex w-full h-full flex-col px-3">
        <div className="flex flex-wrap">
          <div className="hidden md:flex justify-center items-center bg-[gold]">
            <h4 className="text-sm font-bold">FREE INSURED SHIPPING  |  2 YEAR WARRANTY</h4>
            <span className="absolute right-4">X</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartDrawer