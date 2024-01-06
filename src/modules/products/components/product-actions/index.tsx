import {
  ProductProvider,
  useProductActions,
} from "@lib/context/product-context"
import useProductPrice from "@lib/hooks/use-product-price"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/option-select"
import clsx from "clsx"
import { RadioGroup, Radio, Button } from "@nextui-org/react"
import React, { useEffect, useMemo, useState } from "react"
import styles from './index.module.css'

type ProductActionsProps = {
  product: PricedProduct
}

const colors = [
  { color: '#FFD800', value: 'Yellow'},
  { color: '#fff', value: 'White'},
  { color: '#EE2B74', value: 'Pink'},
  { color: '#FA2C2C', value: 'Red'},
  { color: '#0002E4', value: 'Dark Blue'},
  { color: '#FF8E3E', value: 'Orange'},
  { color: '#02B3F9', value: 'Light Blue'},
  { color: '#8538FF', value: 'Purple'},
  { color: '#34CC33', value: 'Green'},
]

const powerSupply = ['USA/CAN', 'US', 'EN', 'AUS/NZ']

const ProductActionsInner: React.FC<ProductActionsProps> = ({ product }) => {
  const { updateOptions, updateMetadata, metadata, addToCart, options, inStock, variant } =
    useProductActions()

  const price = useProductPrice({ id: product.id!, variantId: variant?.id })

  const selectedPrice = useMemo(() => {
    const { variantPrice, cheapestPrice } = price

    return variantPrice || cheapestPrice || null
  }, [price])
  
  useEffect(() => {
    updateMetadata({
      color: colors[0].value,
      usage: 'Indoor',
      power : powerSupply[0]
    })
  }, [])

  const updateColor = (colorValue: string) => {
    updateMetadata({
      color: colorValue
    })
  }

  const updateUsage = (usageValue: string) => {
    updateMetadata({
      usage: usageValue
    })
  }

  const updatePower = (powerValue: string) => {
    updateMetadata({
      power: powerValue
    })
  }

  return (
    <div className="flex flex-col gap-y-2">
      <div>

        {product.variants.length > 1 && (
          <div className="flex flex-col gap-y-4">
            <span className="text-base font-medium">Color: {metadata.color}</span>
            <div className="flex flex-wrap gap-5">
              {
                colors.map(color => {
                  return (
                    <button
                      aria-label={color.color}
                      onClick={() => updateColor(color.value)}
                      key={color.color}
                      style={{backgroundColor: color.color, borderColor: color.color}}
                      className={clsx(
                        `w-6 h-6 rounded-full relative`, styles.option,
                        {
                          [styles.selected]: metadata.color === color.value
                        }
                      )}
                    >
                      
                    </button>
                  )
                })
              }
            </div>
            <Divider />
            {(product.options || []).map((option) => {
              return (
                <OptionSelect
                  key={option.id}
                  option={option}
                  current={options[option.id]}
                  updateOption={updateOptions}
                  title={option.title}
                />
              )
            })}
            <Divider />
            <span className="text-base font-medium">Sign Usage</span>
            <div className="flex flex-wrap gap-5">
              <RadioGroup
                orientation="horizontal"
                value={metadata.usage as string}
                onValueChange={updateUsage}
              >
                <Radio
                  value="Indoor"
                  classNames={{
                   control: metadata.usage === 'Indoor' ?'bg-gold shadow-[0_0_4px_gold]' : '',
                   wrapper: metadata.usage === 'Indoor' ? '!border-gold' : '!border-white'
                  }}
                >Indoor</Radio>
                <Radio
                  value="Outdoor (+ $60.00)"
                  classNames={{
                    control: metadata.usage !== 'Indoor' ?'bg-gold shadow-[0_0_4px_gold]' : '',
                    wrapper: metadata.usage !== 'Indoor' ? '!border-gold' : '!border-white'
                  }}
                >Outdoor (+ $60.00)</Radio>
              </RadioGroup>
            </div>
            <Divider />
            <span className="text-base font-medium">Power Supply</span>
            <div className="flex flex-wrap gap-5">
              {
                powerSupply.map(power => {
                  return (
                    <button
                      aria-label={power}
                      onClick={() => updatePower(power)}
                      key={power}
                      className={clsx(
                        `px-4 py-1 text-sm rounded-xl border border-white font-bold text-white`, styles.option,
                        {
                          "!border-gold bg-gold !text-black": metadata.power === power
                        }
                      )}
                    >
                      {power}
                    </button>
                  )
                })
              }
            </div>
          </div>
        )}
      </div>

      {selectedPrice ? (
        <div className="flex flex-col text-ui-fg-base">
          <span
            className={clsx("text-xl-semi", {
              "text-ui-fg-interactive": selectedPrice.price_type === "sale",
            })}
          >
            {selectedPrice.calculated_price}
          </span>
          {selectedPrice.price_type === "sale" && (
            <>
              <p>
                <span className="text-ui-fg-subtle">Original: </span>
                <span className="line-through">
                  {selectedPrice.original_price}
                </span>
              </p>
              <span className="text-ui-fg-interactive">
                -{selectedPrice.percentage_diff}%
              </span>
            </>
          )}
        </div>
      ) : (
        <div></div>
      )}

      <Button
        onClick={addToCart}
        disabled={!inStock || !variant}
        radius="full"
        className="w-full h-10 bg-gold text-black text-base font-bold uppercase"
      >
        {!inStock
          ? "Out of stock"
          : !variant
          ? "Select variant"
          : "Add to cart"}
      </Button>
      <div className="my-4">
        <p className="text-gold text-base text-center">Estimated Arrival Date 01/19/24 - 01/25/24</p>
        <p className="text-sm text-center"><i>Note: Shipping may be impacted by FedEx and DHL delays</i></p>
      </div>
    </div>
  )
}

const ProductActions: React.FC<ProductActionsProps> = ({ product }) => (
  <ProductProvider product={product}>
    <ProductActionsInner product={product} />
  </ProductProvider>
)

export default ProductActions
