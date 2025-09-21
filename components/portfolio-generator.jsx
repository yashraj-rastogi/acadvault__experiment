"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  FileText,
  Download,
  Share2,
  Eye,
  Palette,
  CheckCircle,
  Calendar,
  Building,
  Award,
  Trophy,
  GraduationCap,
} from "lucide-react"

// Mock approved achievements data
const approvedAchievements = [
  {
    id,
    title,
    type,
    organization,
    date,
    description, context, and state management.",
    skills, "JavaScript", "Frontend"],
  },
  {
    id,
    title,
    type,
    organization,
    date,
    description, machine learning, and statistical modeling.",
    skills, "Machine Learning", "Statistics"],
  },
  {
    id,
    title,
    type,
    organization,
    date,
    description,
    skills, "Teamwork", "Problem Solving"],
  },
  {
    id,
    title,
    type,
    organization,
    date,
    description,
    skills, "AI", "Academic Writing"],
  },
]

const portfolioTemplates = [
  {
    id,
    name,
    description, minimalist design perfect for tech and business roles",
    preview,
    color,
  },
  {
    id,
    name,
    description,
    preview,
    color,
  },
  {
    id,
    name,
    description,
    preview,
    color,
  },
  {
    id,
    name,
    description,
    preview,
    color,
  },
]

const getTypeIcon = (type) => {
  switch (type) {
    case "Workshop":
      return 
    case "Certification":
      return 
    case "Competition":
      return 
    case "Research":
      return 
    default}
}

export function PortfolioGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [selectedAchievements, setSelectedAchievements] = useState([1, 4, 5])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleAchievementToggle = (achievementId) => {
    setSelectedAchievements((prev) =>
      prev.includes(achievementId) ? prev.filter((id) => id !== achievementId) {
    setIsGenerating(true)
    // Simulate PDF generation
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsGenerating(false)
    // In a real app, this would trigger a PDF download
    alert("Portfolio PDF generated successfully!")
  }

  const handleGenerateLink = async () => {
    setIsGenerating(true)
    // Simulate link generation
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsGenerating(false)
    // In a real app, this would generate a shareable URL
    const mockUrl = `https).toString(36).substr(2, 9)}`
    navigator.clipboard.writeText(mockUrl)
    alert(`Shareable link generated and copied to clipboard)
  }

  const selectedTemplateData = portfolioTemplates.find((t) => t.id === selectedTemplate)

  return (
    
      {/* Header */}
      
        Portfolio Generator
        Create a professional portfolio from your approved achievements
      

      
        {/* Template Selection */}
        
          
            
              
                
                Choose Template
              
              Select a design template that matches your career goals
            
            
              
                 (
                    
                      
                        
                          
                          {template.name}
                        
                        
                        {template.description}
                      
                    
                  ))}
                
              
            
          

          {/* Content Selection */}
          
            
              
                
                Select Content
              
              Choose which approved achievements to include in your portfolio
            
            
              
                {approvedAchievements.map((achievement) => (
                  
                     handleAchievementToggle(achievement.id)}
                      className="mt-1"
                    />
                    
                      
                        
                          {getTypeIcon(achievement.type)}
                          {achievement.title}
                        
                        
                          
                            
                            {achievement.organization}
                          
                          
                            
                            {new Date(achievement.date).toLocaleDateString()}
                          
                        
                        {achievement.description}
                        
                          {achievement.skills.map((skill) => (
                            
                              {skill}
                            
                          ))}
                        
                      
                    
                  
                ))}
              
            
          
        

        {/* Preview and Export */}
        
          
            
              
                
                Preview
              
            
            
              
                
                  
                  {selectedTemplateData?.name}
                  
                    {selectedAchievements.length} achievements selected
                  
                  
                    
                    Full Preview
                  
                
              
            
          

          
            
              Export Options
              Generate your portfolio in different formats
            
            
              
                
                {isGenerating ? "Generating..." }
              

              
                
                {isGenerating ? "Generating..." }
              

              

              
                • PDF: Download for applications
                • Shareable Link: Public web portfolio
                • Updates automatically with new achievements
              
            
          

          {/* Portfolio Stats */}
          
            
              Portfolio Stats
            
            
              
                Total Achievements
                {approvedAchievements.length}
              
              
                Selected
                {selectedAchievements.length}
              
              
                Completeness
                
                  {Math.round((selectedAchievements.length / approvedAchievements.length) * 100)}%
                
              
            
          
        
      
    
  )
}
