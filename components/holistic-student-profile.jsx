"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Mail, Phone, Calendar, GraduationCap, BookOpen, Users, FileText } from "lucide-react"

// Mock data for detailed student profile
const mockAcademicData = {
  semesters, gpa, credits, subjects,
    { semester, gpa, credits, subjects,
    { semester, gpa, credits, subjects,
    { semester, gpa, credits, subjects,
    { semester, gpa, credits, subjects,
    { semester, gpa, credits, subjects,
  ],
  currentSubjects, grade, credits,
    { name, grade, credits,
    { name, grade, credits,
    { name, grade, credits,
    { name, grade, credits,
  ],
}

const mockAchievements = [
  {
    id,
    title,
    category,
    date,
    status,
    description,
  },
  {
    id,
    title,
    category,
    date,
    status,
    description,
  },
  {
    id,
    title,
    category,
    date,
    status,
    description,
  },
  {
    id,
    title,
    category,
    date,
    status,
    description,
  },
]

export function HolisticStudentProfile({ student, onBack }: HolisticStudentProfileProps) {
  return (
    
      {/* Header */}
      
        
          
          Back to Students
        
        
          Student Profile
          Holistic view of academic and co-curricular performance
        
      

      {/* Student Header Card */}
      
        
          
            
              
              
                {student.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              
            
            
              
                {student.name}
                {student.status}
              
              
                
                  
                    
                    Roll Number:
                    {student.rollNo}
                  
                  
                    
                    Branch:
                    {student.branch}
                  
                  
                    
                    Year:
                    {student.year}
                  
                
                
                  
                    
                    Email:
                    {student.email}
                  
                  
                    
                    Phone:
                    {student.phone}
                  
                  
                    
                    Mentor:
                    {student.mentor}
                  
                
              
            
            
              
                
                Email
              
              
                
                Generate Report
              
            
          
        
      

      {/* Quick Stats */}
      
        
          
            {student.cgpa}
            Overall CGPA
          
        
        
          
            {student.attendance}%
            Attendance
          
        
        
          
            {student.achievements}
            Achievements
          
        
        
          
            142
            Total Credits
          
        
      

      {/* Detailed Information Tabs */}
      
        
          Academic Records
          Achievements
          Performance Analytics
        

        
          
            {/* Semester-wise Performance */}
            
              
                Semester-wise Performance
                GPA trend across semesters
              
              
                
                  {mockAcademicData.semesters.map((sem, index) => (
                    
                      
                        {sem.semester}
                        
                          {sem.subjects} subjects, {sem.credits} credits
                        
                      
                      
                        {sem.gpa}
                        GPA
                      
                    
                  ))}
                
              
            

            {/* Current Subjects */}
            
              
                Current Semester Subjects
                Ongoing courses and grades
              
              
                
                  {mockAcademicData.currentSubjects.map((subject, index) => (
                    
                      
                        {subject.name}
                        {subject.credits} credits
                      
                      {subject.grade}
                    
                  ))}
                
              
            
          
        

        
          
            
              Co-curricular & Extracurricular Achievements
              Verified achievements and pending submissions
            
            
              
                {mockAchievements.map((achievement) => (
                  
                    
                      
                        {achievement.title}
                        {achievement.description}
                      
                      
                        {achievement.category}
                        
                          {achievement.status}
                        
                      
                    
                    
                      
                        
                        {new Date(achievement.date).toLocaleDateString()}
                      
                    
                  
                ))}
              
            
          
        

        
          
            
              
                Performance Metrics
                Key performance indicators
              
              
                
                  
                    Academic Performance
                    92%
                  
                  
                
                
                  
                    Attendance Rate
                    {student.attendance}%
                  
                  
                
                
                  
                    Co-curricular Engagement
                    85%
                  
                  
                
                
                  
                    Overall Development
                    89%
                  
                  
                
              
            

            
              
                Mentorship Notes
                Track mentoring sessions and progress
              
              
                
                  
                    Excellent research potential
                    Jan 10, 2024
                    
                      Shows strong analytical skills and research aptitude. Recommended for advanced research projects.
                    
                  
                  
                    Career guidance session
                    Dec 15, 2023
                    
                      Discussed graduate school options and industry opportunities in AI/ML.
                    
                  
                  
                    Achievement milestone
                    Nov 20, 2023
                    
                      Successfully completed major hackathon. Shows excellent teamwork and technical skills.
                    
                  
                
              
            
          
        
      
    
  )
}
