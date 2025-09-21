import Link from "next/link"
import { GraduationCap, Users, BookOpen, Award, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    
      
        
          
            
              
            
            AcadVault
          
          
            Your comprehensive academic achievement platform for students, faculty, and administrators
          
          
            
              Login to Your Portal
            
          
        

        
          
            
              
                
              
              Student Portal
              
                Manage achievements, build portfolios, and track your academic journey
              
            
            
              
                
                  
                  Submit and track achievements
                
                
                  
                  Build professional portfolios
                
                
                  
                  View academic records
                
              
              
                Enter Student Portal
              
            
          

          
            
              
                
              
              Faculty Portal
              
                Verify achievements, mentor students, and manage academic oversight
              
            
            
              
                
                  
                  Verify student achievements
                
                
                  
                  Manage mentee profiles
                
                
                  
                  Data-driven mentorship
                
              
              
                Enter Faculty Portal
              
            
          

          
            
              
                
              
              Admin Portal
              
                Manage users, generate reports, and oversee institutional operations
              
            
            
              
                
                  
                  Manage all users
                
                
                  
                  Generate NAAC/NIRF reports
                
                
                  
                  Institutional oversight
                
              
              
                Enter Admin Portal
              
            
          
        
      
    
  )
}
