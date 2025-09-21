import *
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible,
  {
    variants: {
      variant: {
        default,
        destructive,
        outline,
        secondary,
        ghost,
        link,
      },
      size: {
        default,
        sm,
        lg,
        icon,
      },
    },
    defaultVariants: {
      variant,
      size,
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
