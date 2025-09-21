"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Users, FileText, BarChart3, Settings, LogOut } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navigation = [
  { name, href, icon,
  { name, href, icon,
  { name, href, icon,
  { name, href, icon,
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    
      
        
          
            
          
          Admin Portal
        
      

      
        
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              
                
                  
                    
                    {item.name}
                  
                
              
            )
          })}
        
      

      
        
          
            
              
                
                Logout
              
            
          
        
      
    
  )
}
