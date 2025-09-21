import Link from "next/link"
import { LayoutDashboard, CheckCircle, Users, Settings, HelpCircle, ArrowLeft, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
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
  { name, href, icon, current,
  { name, href, icon, current,
  { name, href, icon, current,
  { name, href, icon, current,
  { name, href, icon, current,
]

export function FacultySidebar() {
  return (
    
      
        
          
            
              
            
            AcadVault
          
          
            
              
            
          
        
        
          Faculty Portal
        
      

      
        
          {navigation.map((item) => (
            
              
                
                  
                  {item.name}
                
              
            
          ))}
        
      

      
        
          
            
            Back to Home
          
        
      
    
  )
}
