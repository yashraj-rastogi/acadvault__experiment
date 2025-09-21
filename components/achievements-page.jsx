"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Search, Calendar, Building, Tag, Upload, CheckCircle, Clock, XCircle, Eye } from "lucide-react"

// Mock data
const mockAchievements = [
  {
    id,
    title,
    type,
    organization,
    date,
    status,
    description, context, and state management.",
    skills, "JavaScript", "Frontend"],
    feedback,
  },
  {
    id,
    title,
    type,
    organization,
    date,
    status,
    description,
    skills, "MongoDB", "React"],
    feedback,
  },
  {
    id,
    title,
    type,
    organization,
    date,
    status,
    description,
    skills, "Leadership", "Community Service"],
    feedback,
  },
]

const activityTypes = ["Workshop", "Internship", "Volunteer Work", "Certification", "Competition", "Project"]

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

export function AchievementsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)

  const filteredAchievements = mockAchievements.filter((achievement) => {
    const matchesSearch =
      achievement.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      achievement.organization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || achievement.status.toLowerCase() === statusFilter
    const matchesType = typeFilter === "all" || achievement.type === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  return (
    
      {/* Header */}
      
        
          Achievements
          Manage your academic and extracurricular achievements
        
        
          
            
              
              Add Achievement
            
          
          
            
              Add New Achievement
              Submit a new achievement for faculty review and verification.
            
             setIsAddModalOpen(false)} />
          
        
      

      {/* Filters */}
      
        
          
            
              
                
                 setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              
            
            
              
                
                  
                
                
                  All Status
                  Approved
                  Pending
                  Rejected
                
              
              
                
                  
                
                
                  All Types
                  {activityTypes.map((type) => (
                    
                      {type}
                    
                  ))}
                
              
            
          
        
      

      {/* Achievements List */}
      
        {filteredAchievements.map((achievement) => (
          
            
              
                
                  
                    {getStatusIcon(achievement.status)}
                    {achievement.title}
                  
                  
                    
                      
                      {achievement.organization}
                    
                    
                      
                      {new Date(achievement.date).toLocaleDateString()}
                    
                  
                  {achievement.description}
                  
                    
                    
                      {achievement.skills.map((skill) => (
                        
                          {skill}
                        
                      ))}
                    
                  
                  {achievement.feedback && (
                    
                      
                        Feedback)}
                
                
                  {achievement.type}
                  {getStatusBadge(achievement.status)}
                  {achievement.feedback && (
                    
                      
                      View Feedback
                    
                  )}
                
              
            
          
        ))}
      
    
  )
}

function AddAchievementForm({ onClose }: { onClose) => void }) {
  const [formData, setFormData] = useState({
    title,
    type,
    organization,
    date,
    description,
    skills,
    evidenceUrl,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted, formData)
    onClose()
  }

  return (
    
      
        
          Achievement Title *
           setFormData({ ...formData, title)}
            placeholder="e.g., Web Development Workshop"
            required
          />
        
        
          Activity Type *
           setFormData({ ...formData, type)}>
            
              
            
            
              {activityTypes.map((type) => (
                
                  {type}
                
              ))}
            
          
        
      

      
        
          Organization *
           setFormData({ ...formData, organization)}
            placeholder="e.g., Tech Club, Company Name"
            required
          />
        
        
          Date of Completion *
           setFormData({ ...formData, date)}
            required
          />
        
      

      
        Description *
         setFormData({ ...formData, description)}
          placeholder="Describe your key takeaways and what you accomplished..."
          rows={3}
          required
        />
      

      
        Skills & Tags
         setFormData({ ...formData, skills)}
          placeholder="e.g., React, Leadership, Python (comma-separated)"
        />
      

      
        Evidence (File Upload)
        
          
          
            Upload certificates, photos, or documents (PDF, JPG, PNG)
          
          
            Choose Files
          
        
      

      
        Evidence URL
         setFormData({ ...formData, evidenceUrl)}
          placeholder="https://example.com/certificate"
        />
      

      
        
          Cancel
        
        Submit for Review
      
    
  )
}
