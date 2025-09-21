'use client'

import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps & {
  buttonVariant}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    
          date.toLocaleString('default', { month),
        ...formatters,
      }}
      classNames={{
        root, defaultClassNames.root),
        months,
          defaultClassNames.months,
        ),
        month, defaultClassNames.month),
        nav,
          defaultClassNames.nav,
        ),
        button_previous),
          'size-(--cell-size) aria-disabled,
          defaultClassNames.button_previous,
        ),
        button_next),
          'size-(--cell-size) aria-disabled,
          defaultClassNames.button_next,
        ),
        month_caption) w-full px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns) gap-1.5',
          defaultClassNames.dropdowns,
        ),
        dropdown_root,
          defaultClassNames.dropdown_root,
        ),
        dropdown,
          defaultClassNames.dropdown,
        ),
        caption_label,
          captionLayout === 'label'
            ? 'text-sm'
            : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table,
        weekdays, defaultClassNames.weekdays),
        weekday,
          defaultClassNames.weekday,
        ),
        week, defaultClassNames.week),
        week_number_header)',
          defaultClassNames.week_number_header,
        ),
        week_number,
          defaultClassNames.week_number,
        ),
        day: cn(
          'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
          defaultClassNames.day,
        ),
        range_start,
          defaultClassNames.range_start,
        ),
        range_middle, defaultClassNames.range_middle),
        range_end, defaultClassNames.range_end),
        today: cn(
          'bg-accent text-accent-foreground rounded-md data-[selected=true],
          defaultClassNames.today,
        ),
        outside,
          defaultClassNames.outside,
        ),
        disabled,
          defaultClassNames.disabled,
        ),
        hidden, defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root, rootRef, ...props }) => {
          return (
            
          )
        },
        Chevron, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              
            )
          }

          if (orientation === 'right') {
            return (
              
            )
          }

          return (
            
          )
        },
        DayButton,
        WeekNumber, ...props }) => {
          return (
            
              
                {children}
              
            
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }
