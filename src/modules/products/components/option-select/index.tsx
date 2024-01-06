import { onlyUnique } from "@lib/util/only-unique"
import { ProductOption } from "@medusajs/medusa"
import clsx from "clsx"

type OptionSelectProps = {
  option: ProductOption
  current: string
  updateOption: (option: Record<string, string>) => void
  title: string
}

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique)
  return (
    <>
      <span className="text-base font-medium">{title}</span>
      <div className="flex flex-wrap gap-3">
        {filteredOptions.map((v) => {
          return (
            <button
              aria-label={v}
              onClick={() => updateOption({ [option.id]: v })}
              key={v}
              className={clsx(
                "px-4 py-1 text-sm rounded-xl border border-white font-bold text-white",
                {
                  "!border-[#ffd700] bg-[#ffd700] !text-black": v === current
                }
              )}
            >
              {v}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default OptionSelect
