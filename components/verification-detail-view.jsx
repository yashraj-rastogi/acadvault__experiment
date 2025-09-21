"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, CheckCircle, XCircle, FileText, ImageIcon, Download, Eye } from "lucide-react"

export function VerificationDetailView({ submission, onBack, onApprove, onReject }: VerificationDetailViewProps) {
  const [rejectComment, setRejectComment] = useState("")
  const [selectedEvidence, setSelectedEvidence] = useState(null)
  const [showRejectDialog, setShowRejectDialog] = useState(false)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year,
      month,
      day,
      hour,
      minute,
    })
  }

  const handleReject = () => {
    if (rejectComment.trim()) {
      onReject(submission.id, rejectComment)
      setShowRejectDialog(false)
      setRejectComment("")
    }
  }

  return (
    
      {/* Header */}
      
        
          
          Back to Queue
        
        
          Achievement Verification
          Review submission details and evidence
        
      

      
        {/* Main Content */}
        
          {/* Student & Achievement Info */}
          
            
              
                
                  
                    {submission.studentName}
                    {submission.rollNo}
                    {submission.priority === "high" && High Priority}
                  
                  Submitted on {formatDate(submission.submittedAt)}
                
                
                  {submission.category}
                
              
            
            
              {submission.achievement}
              {submission.description}
            
          

          {/* Evidence Files */}
          
            
              Evidence Files
              Click on any file to view or download
            
            
               (
                  
                    
                      {evidence.type === "pdf" ? (
                        
                      ) {evidence.name}
                        {evidence.type}
                      
                    
                    
                       setSelectedEvidence(evidence)}
                      >
                        
                        View
                      
                      
                        
                        Download
                      
                    
                  
                ))}
              
            
          
        

        {/* Action Panel */}
        
          
            
              Verification Actions
              Review the evidence and make your decision
            
            
               onApprove(submission.id)}>
                
                Approve Achievement
              

              
                
                  
                    
                    Reject Achievement
                  
                
                
                  
                    Reject Achievement
                    
                      Please provide feedback to help the student understand why this submission was rejected.
                    
                  
                  
                     setRejectComment(e.target.value)}
                      rows={4}
                    />
                  
                  
                     setShowRejectDialog(false)}>
                      Cancel
                    
                    
                      Reject with Feedback
                    
                  
                
              
            
          

          {/* Quick Info */}
          
            
              Submission Details
            
            
              
                Student:
                {submission.studentName}
              
              
                Roll Number:
                {submission.rollNo}
              
              
                Category:
                {submission.category}
              
              
                Evidence Files:
                {submission.evidence.length}
              
              
                Priority:
                
                  {submission.priority}
                
              
            
          
        
      

      {/* Evidence Viewer Dialog */}
      {selectedEvidence && (
         setSelectedEvidence(null)}>
          
            
              
                {selectedEvidence.type === "pdf" ?  }
                {selectedEvidence.name}
              
            
            
              {selectedEvidence.type === "image" ? (
                
              ) {selectedEvidence.name}
                  
                    
                    Open in New Tab
                  
                
              )}
            
          
        
      )}
    
  )
}
