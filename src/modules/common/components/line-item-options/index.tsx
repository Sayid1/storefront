import { ProductVariant } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

type LineItemOptionsProps = { variant: ProductVariant, metadata?: Record<string, unknown> }

const LineItemOptions = ({ variant, metadata }: LineItemOptionsProps) => {
  let metadataComp = null
  if (metadata) {
    metadataComp = (
      <Text className="txt-medium text-ui-fg-subtle">
        Color: {metadata.color}
      </Text>
    )
  }
  return (
    <>
      {variant.options?.map((option) => {
        const optionName =
          variant.product.options.find((opt) => opt.id === option.option_id)
            ?.title || "Option"
        return (
          <Text key={option.id} className="txt-medium text-ui-fg-subtle">
            {optionName}: {option.value}
          </Text>
        )
      })}
      {metadataComp}
    </>
  )
}

export default LineItemOptions
