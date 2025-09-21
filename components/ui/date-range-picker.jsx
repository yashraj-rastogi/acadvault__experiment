"use client"

import * as React from 'react'
import { CalendarIcon } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function DatePickerWithRange({ className }: React.HTMLAttributes) {
  const [date, setDate] = React.useState({
    from, 0, 1),
    to),
  })

  return (
    
      
        
          
            
            {date?.from ? (
              date.to ? (
                
                  {date.from.toLocaleDateString()} - {date.to.toLocaleDateString()}
                
              ) {date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        
      
    
  )
}
