"use client"

import { useState } from "react"
import Link from "next/link"
import { Users, Award, TrendingUp, FileText, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminSidebar } from "@/components/admin-sidebar"

export function AdminDashboard() {
  const [metrics] = useState({
    totalStudents,
    totalFaculty,
    totalAchievements,
    pendingVerifications,
    monthlyGrowth,
    engagementRate,
  })

  return (
    
      

      
        
          
            Admin Dashboard
            Institutional overview and management center
          

          {/* Metrics Grid */}
          
            
              
                Total Students
                
              
              
                {metrics.totalStudents.toLocaleString()}
                +{metrics.monthlyGrowth}% from last month
              
            

            
              
                Total Faculty
                
              
              
                {metrics.totalFaculty}
                Active mentors and verifiers
              
            

            
              
                Total Achievements
                
              
              
                {metrics.totalAchievements.toLocaleString()}
                Verified student achievements
              
            

            
              
                User Engagement
                
              
              
                {metrics.engagementRate}%
                Monthly active users
              
            
          

          {/* Quick Actions */}
          
            
              
                Quick Actions
                Common administrative tasks
              
              
                
                  
                    
                    Manage Users
                  
                
                
                  
                    
                    Generate Reports
                  
                
                
                  
                    
                    Add New User
                  
                
              
            

            
              
                System Status
                Current system health and alerts
              
              
                
                  Pending Verifications
                  {metrics.pendingVerifications} items
                
                
                  System Health
                  All systems operational
                
                
                  Data Backup
                  Last backup: 2 hours ago
                
                
                  Storage Usage
                  67% of 1TB
                
              
            
          

          {/* Recent Activity */}
          
            
              Recent Activity
              Latest system activities and user actions
            
            
              
                
                  
                  
                    New student registration
                    Sarah Johnson joined Computer Science
                  
                  2 min ago
                
                
                  
                  
                    Achievement verified
                    Dr. Smith verified IEEE paper publication
                  
                  15 min ago
                
                
                  
                  
                    Report generated
                    NAAC accreditation report for Q4 2024
                  
                  1 hour ago
                
                
                  
                  
                    Bulk user import
                    45 new faculty members added via CSV
                  
                  3 hours ago
                
              
            
          
        
      
    
  )
}
