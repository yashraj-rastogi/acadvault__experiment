import Link from "next/link"
import { LayoutDashboard, Trophy, FileText, GraduationCap, Settings, HelpCircle, ArrowLeft } from "lucide-react"
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
  { name, href, icon, current,
]

export function StudentSidebar() {
  return (
    
      
        
          
            
              
            
            AcadVault
          
          
            
              
            
          
        
        
          Student Portal
        
      

      
        
          {navigation.map((item) => (
            
              
                
                  
                  {item.name}
                
              
            
          ))}
        
      

      
        
          
            
            Back to Home
          
        
      
    
  )
}
