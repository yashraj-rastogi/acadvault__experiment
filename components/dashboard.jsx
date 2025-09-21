import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Plus, TrendingUp, Clock, CheckCircle, XCircle, AlertCircle, BookOpen, Award } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

// Mock data for demonstration
const mockActivities = [
  {
    id,
    title,
    type,
    date,
    status,
    organization,
  },
  {
    id,
    title,
    type,
    date,
    status,
    organization,
  },
  {
    id,
    title,
    type,
    date,
    status,
    organization,
  },
  {
    id,
    title,
    type,
    date,
    status,
    organization,
  },
]

const getStatusIcon = (status) => {
  switch (status) {
    case "Approved":
      return 
    case "Pending":
      return 
    case "Rejected":
      return 
    default}
}

const getStatusBadge = (status) => {
  const variants = {
    Approved,
    Pending,
    Rejected,
  }

  return (
    
      {status}
    
  )
}

export function Dashboard() {
  const approvedCount = mockActivities.filter((a) => a.status === "Approved").length
  const pendingCount = mockActivities.filter((a) => a.status === "Pending").length

  return (
    
      {/* Header */}
      
        
          
          
            <h1 className="text-2xl md, Student!
            
              Track your academic journey and build your professional portfolio
            
          
        
        
          
          Add Activity
          Add
        
      

      {/* Summary Cards */}
      
        
          
            Academic Performance
            
          
          
            8.5/10
            Current CGPA
            
          
        

        
          
            Pending Approvals
            
          
          
            {pendingCount}
            Awaiting review
          
        

        
          
            Approved Activities
            
          
          
            {approvedCount}
            Verified achievements
          
        

        
          
            Portfolio Score
            
          
          
            92%
            Completeness rating
          
        
      

      {/* Activity Timeline */}
      
        
          
            
            Recent Activity Timeline
          
          Your latest submissions and their approval status
        
        
          
            {mockActivities.map((activity) => (
              
                <div className="flex items-center gap-3 md)}
                  
                    {activity.title}
                    <p className="text-xs md).toLocaleDateString()}
                    
                  
                
                
                  
                    {activity.type}
                  
                  {getStatusBadge(activity.status)}
                
              
            ))}
          
        
      
    
  )
}
