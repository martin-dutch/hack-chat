"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

type SliderProps = React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
  label: string;
}


const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, label, value, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center h-20 bg-white",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-20 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-red-100" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-20 w-[3vw] rounded-full border-2 border-primary bg-red-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" title="Populism">
      <div className="h-full flex items-center w-[3vw] pl-[0.5vw] mx-auto text-center text-[1.5vh]">
        {
          `${value}%`
        }
      </div>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
