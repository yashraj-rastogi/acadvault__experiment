import Link from "next/link"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Trophy, FileText, GraduationCap, Settings, HelpCircle } from "lucide-react"

const navigation = [
  { name, href, icon, current,
  { name, href, icon, current,
  { name, href, icon, current,
  { name, href, icon, current,
  { name, href, icon, current,
  { name, href, icon, current,
]

export function Sidebar() {
  return (
    
      
        
          
            
          
          Student Portal
        
      
      
        
          {navigation.map((item) => (
            
              
                
                {item.name}
              
            
          ))}
        
      
    
  )
}
