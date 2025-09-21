"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Search, Filter, Eye, FileText } from "lucide-react"
import { VerificationDetailView } from "@/components/verification-detail-view"

// Mock data for demonstration
const mockSubmissions = [
  {
    id,
    studentName,
    rollNo,
    achievement,
    category,
    submittedAt,
    description,
    evidence, name, url,
      { type, name, url,
      { type, name, url,
    ],
    status,
    priority,
  },
  {
    id,
    studentName,
    rollNo,
    achievement,
    category,
    submittedAt,
    description,
    evidence, name, url,
      { type, name, url,
    ],
    status,
    priority,
  },
  {
    id,
    studentName,
    rollNo,
    achievement,
    category,
    submittedAt,
    description, contributing to the Apache Kafka project with significant code contributions.",
    evidence, name, url,
      { type, name, url,
    ],
    status,
    priority,
  },
  {
    id,
    studentName,
    rollNo,
    achievement,
    category,
    submittedAt,
    description,
    evidence, name, url,
      { type, name, url,
    ],
    status,
    priority,
  },
]

export function VerificationQueue() {
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("date")
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredSubmissions = mockSubmissions
    .filter((submission) => {
      const matchesSearch =
        submission.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        submission.achievement.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus = filterStatus === "all" || submission.status === filterStatus
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      } else if (sortBy === "name") {
        return a.studentName.localeCompare(b.studentName)
      }
      return 0
    })

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString() + " " + date.toLocaleTimeString([], { hour, minute)
  }

  if (selectedSubmission) {
    return (
       setSelectedSubmission(null)}
        onApprove={(id) => {
          console.log("Approved submission, id)
          setSelectedSubmission(null)
        }}
        onReject={(id, comment) => {
          console.log("Rejected submission, id, "with comment, comment)
          setSelectedSubmission(null)
        }}
      />
    )
  }

  return (
    
      
        
          Achievement Verification
          Review and verify student achievement submissions
        
        
          
            {filteredSubmissions.filter((s) => s.status === "pending").length} Pending
          
        
      

      {/* Filters and Search */}
      
        
          
            
              
                
                 setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              
            
            
              
                
                  
                
                
                  Sort by Date
                  Sort by Name
                
              
              
                
                  
                  
                
                
                  All Status
                  Pending
                  Verified
                  Rejected
                
              
            
          
        
      

      {/* Submissions List */}
      
        {filteredSubmissions.map((submission) => (
           setSelectedSubmission(submission)}
          >
            
              
                
                  
                    {submission.studentName}
                    
                      {submission.rollNo}
                    
                    
                      {submission.status}
                    
                    {submission.priority === "high" && (
                      
                        High Priority
                      
                    )}
                  
                  {submission.achievement}
                  {submission.description}
                  
                    
                      
                      {formatDate(submission.submittedAt)}
                    
                    Category: {submission.category}
                    
                      
                      {submission.evidence.length} evidence files
                    
                  
                
                
                  
                    
                    Review
                  
                
              
            
          
        ))}
      

      {filteredSubmissions.length === 0 && (
        
          
            
            No submissions found
            
              {searchTerm || filterStatus !== "all"
                ? "Try adjusting your search or filter criteria"
                }
            
          
        
      )}
    
  )
}
