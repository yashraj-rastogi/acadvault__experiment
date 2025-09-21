"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, TrendingUp, Calendar, Award, BarChart3, Download, GraduationCap, Target, Clock } from "lucide-react"

// Mock academic data
const academicData = {
  currentSemester,
  currentCGPA,
  totalCredits,
  completedCredits,
  semesters,
      name,
      gpa,
      credits,
      subjects, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
      ],
    },
    {
      id,
      name,
      gpa,
      credits,
      subjects, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
      ],
    },
    {
      id,
      name,
      gpa,
      credits,
      subjects, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
        { code, name, credits, grade, points,
      ],
    },
  ],
}

const getGradeColor = (grade) => {
  switch (grade) {
    case "A+":
      return "bg-green-100 text-green-800 border-green-200"
    case "A":
      return "bg-green-100 text-green-700 border-green-200"
    case "A-":
      return "bg-blue-100 text-blue-700 border-blue-200"
    case "B+":
      return "bg-blue-100 text-blue-600 border-blue-200"
    case "B":
      return "bg-yellow-100 text-yellow-700 border-yellow-200"
    case "B-":
      return "bg-yellow-100 text-yellow-600 border-yellow-200"
    default}
}

const getPerformanceInsight = (gpa) => {
  if (gpa >= 9.0) return { text, color}
  if (gpa >= 8.0) return { text, color}
  if (gpa >= 7.0) return { text, color, color) {
  const [selectedSemester, setSelectedSemester] = useState("all")

  const filteredSemesters =
    selectedSemester === "all"
      ? academicData.semesters) => sem.id === selectedSemester)

  const progressPercentage = (academicData.completedCredits / academicData.totalCredits) * 100
  const insight = getPerformanceInsight(academicData.currentCGPA)

  return (
    
      {/* Header */}
      
        
          Academic Records
          Track your academic performance and semester-wise progress
        
        
          
          Export Transcript
        
      

      {/* Academic Overview Cards */}
      
        
          
            Current CGPA
            
          
          
            {academicData.currentCGPA}
            {insight.text}
          
        

        
          
            Credits Completed
            
          
          
            
              {academicData.completedCredits}/{academicData.totalCredits}
            
            
            {Math.round(progressPercentage)}% Complete
          
        

        
          
            Current Semester
            
          
          
            {academicData.currentSemester}
            Active enrollment
          
        

        
          
            Academic Standing
            
          
          
            Dean's List
            Excellent standing
          
        
      

      {/* Main Content Tabs */}
      
        
          Semester Records
          Performance Analytics
          Academic Goals
        

        
          {/* Semester Filter */}
          
            
              
                Filter by Semester:
                
                  
                    
                  
                  
                    All Semesters
                    {academicData.semesters.map((semester) => (
                      
                        {semester.name}
                      
                    ))}
                  
                
              
            
          

          {/* Semester Records */}
          
            {filteredSemesters.map((semester) => (
              
                
                  
                    
                      
                        
                        {semester.name}
                      
                      
                        {semester.credits} Credits • GPA: {semester.gpa}
                      
                    
                    
                      GPA: {semester.gpa}
                    
                  
                
                
                  
                    
                      
                        
                          Course Code
                          Course Name
                          Credits
                          Grade
                          Points
                        
                      
                      
                        {semester.subjects.map((subject, index) => (
                          
                            {subject.code}
                            {subject.name}
                            {subject.credits}
                            
                              
                                {subject.grade}
                              
                            
                            {subject.points}
                          
                        ))}
                      
                    
                  
                
              
            ))}
          
        

        
          
            
              
                
                  
                  GPA Trend
                
                Semester-wise GPA performance
              
              
                
                  {academicData.semesters.reverse().map((semester, index) => (
                    
                      {semester.name}
                      
                        
                          
                        
                        {semester.gpa}
                      
                    
                  ))}
                
              
            

            
              
                Performance Summary
                Overall academic statistics
              
              
                
                  Highest Semester GPA
                  
                    8.7
                  
                
                
                  Total A+ Grades
                  2
                
                
                  Total A Grades
                  6
                
                
                  Subjects Completed
                  16
                
              
            
          
        

        
          
            
              
                
                  
                  Academic Goals
                
                Set and track your academic objectives
              
              
                
                  
                    Maintain CGPA above 8.5
                    
                      On Track
                    
                  
                  Current: 8.5 | Target: 8.5+
                  
                

                
                  
                    Complete 120 Credits
                    
                      In Progress
                    
                  
                  Completed: 90/120 Credits
                  
                

                
                  
                    Dean's List Recognition
                    
                      Achieved
                    
                  
                  Achieved in Fall 2023 semester
                
              
            

            
              
                
                  
                  Upcoming Milestones
                
                Important academic deadlines
              
              
                
                  Spring 2024 Final Exams
                  May 15-22, 2024
                

                
                  Summer Internship Application
                  Deadline, 2024
                

                
                  Graduation Requirements Review
                  Fall 2024
                
              
            
          
        
      
    
  )
}
