'use client'

import * as React from 'react'
import * as React from 'react'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function DropdownMenu({
  ...props
}: React.ComponentProps) {
  return 
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps) {
  return (
    
      
    
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps & {
  inset: boolean
  variant}) {
  return (
    
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps) {
  return (
    
      
        
          
        
      
      {children}
    
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps) {
  return (
    
      
        
          
        
      
      {children}
    
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps & {
  inset}) {
  return (
    
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps) {
  return 
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps & {
  inset}) {
  return (
    
      {children}
      
    
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}
