import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, TrendingUp, AlertCircle, Eye } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"

// Mock data for demonstration
const pendingVerifications = 12
const recentSubmissions = [
  {
    id,
    studentName,
    rollNo,
    achievement,
    submittedAt,
    category,
    status,
  },
  {
    id,
    studentName,
    rollNo,
    achievement,
    submittedAt,
    category,
    status,
  },
  {
    id,
    studentName,
    rollNo,
    achievement,
    submittedAt,
    category,
    status,
  },
  {
    id,
    studentName,
    rollNo,
    achievement,
    submittedAt,
    category,
    status,
  },
]

const stats = [
  {
    title,
    value,
    icon,
    color,
    bgColor,
    href,
  },
  {
    title,
    value,
    icon,
    color,
    bgColor,
    href,
  },
  {
    title,
    value,
    icon,
    color,
    bgColor,
  },
  {
    title,
    value,
    icon,
    color,
    bgColor,
  },
]

export function FacultyDashboard() {
  return (
    
      
        
          
          
            Faculty Dashboard
            
              Welcome back! Here's an overview of your mentorship activities.
            
          
        
      

      {/* Stats Grid */}
       (
          
            
              
                
                  {stat.title}
                  {stat.value}
                
                
                  
                
              
              {stat.href && (
                
                  View Details →
                
              )}
            
          
        ))}
      

      {/* Pending Verifications Alert */}
      {pendingVerifications > 0 && (
        
          
            
              
              
                
                  {pendingVerifications} achievements awaiting verification
                
                
                  Students are waiting for your review. Quick verification helps maintain engagement.
                
              
              
                Review Now
              
            
          
        
      )}

      {/* Recent Submissions */}
      
        
          
            
              Recent Submissions
              Latest achievement submissions from your mentees
            
            
              View All
            
          
        
        
          
            {recentSubmissions.map((submission) => (
              
                
                  
                    {submission.studentName}
                    
                      {submission.rollNo}
                    
                    
                      {submission.status}
                    
                  
                  {submission.achievement}
                  
                    Category: {submission.category}
                    Submitted: {submission.submittedAt}
                  
                
                
                  
                  Review
                
              
            ))}
          
        
      
    
  )
}
