import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible,box-shadow] overflow-hidden',
  {
    variants,
        secondary,
        destructive,
        outline,
      },
    },
    defaultVariants,
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps &
  VariantProps & { asChild}) {
  const Comp = asChild ? Slot }

export { Badge, badgeVariants }
