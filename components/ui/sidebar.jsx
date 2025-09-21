'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { PanelLeftIcon } from 'lucide-react'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

  state) => void
  openMobile) => void
  isMobile) => void
}

const SidebarContext = React.createContext(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open,
  onOpenChange,
  className,
  style,
  children,
  ...props
}: React.ComponentProps & {
  defaultOpen: boolean
  open: boolean
  onOpenChange: (open) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open],
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) {
    const handleKeyDown = (event) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  )

  return (
    
      
        
          {children}
        
      
    
  )
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps & {
  side: 'left' | 'right'
  variant: 'sidebar' | 'floating' | 'inset'
  collapsible}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      
        {children}
      
    )
  }

  if (isMobile) {
    return (
      
        button]:hidden"
          style={
            {
              '--sidebar-width',
            }
          }
          side={side}
        >
          
            Sidebar
            Displays the mobile sidebar.
          
          {children}
        
      
    )
  }

  return (
    
      {/* This is what handles the sidebar gap on desktop */}
      
      
        
          {children}
        
      
    
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps) {
  const { toggleSidebar } = useSidebar()

  return (
     {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      
      Toggle Sidebar
    
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps) {
  const { toggleSidebar } = useSidebar()

  return (
    
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps & { asChild}) {
  const Comp = asChild ? Slot }

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps & { asChild}) {
  const Comp = asChild ? Slot }

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span,
  {
    variants,
        outline))] hover))]',
      },
      size,
        sm,
        lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants,
      size,
    },
  },
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps & {
  asChild: boolean
  isActive: boolean
  tooltip} & VariantProps) {
  const Comp = asChild ? Slot, state } = useSidebar()

  const button = (
    
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children,
    }
  }

  return (
    
      {button}
      
    
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps & {
  asChild: boolean
  showOnHover}) {
  const Comp = asChild ? Slot }

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps & {
  showIcon}) {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`
  }, [])

  return (
    
      {showIcon && (
        
      )}
      
    
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps) {
  return (
    
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps) {
  return (
    
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps & {
  asChild: boolean
  size: 'sm' | 'md'
  isActive}) {
  const Comp = asChild ? Slot }

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}
