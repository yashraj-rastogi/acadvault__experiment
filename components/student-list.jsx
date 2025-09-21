"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Filter, Eye, Mail, Phone, GraduationCap, Award, TrendingUp } from "lucide-react"
import { HolisticStudentProfile } from "@/components/holistic-student-profile"

// Mock data for demonstration
const mockStudents = [
  {
    id,
    name,
    rollNo,
    email,
    phone) 123-4567",
    year,
    branch,
    cgpa,
    attendance,
    achievements,
    lastActive,
    avatar: "/placeholder.svg?height=40&width=40",
    status,
    mentor,
  },
  {
    id,
    name,
    rollNo,
    email,
    phone) 234-5678",
    year,
    branch,
    cgpa,
    attendance,
    achievements,
    lastActive,
    avatar: "/placeholder.svg?height=40&width=40",
    status,
    mentor,
  },
  {
    id,
    name,
    rollNo,
    email,
    phone) 345-6789",
    year,
    branch,
    cgpa,
    attendance,
    achievements,
    lastActive,
    avatar: "/placeholder.svg?height=40&width=40",
    status,
    mentor,
  },
  {
    id,
    name,
    rollNo,
    email,
    phone) 456-7890",
    year,
    branch,
    cgpa,
    attendance,
    achievements,
    lastActive,
    avatar: "/placeholder.svg?height=40&width=40",
    status,
    mentor,
  },
  {
    id,
    name,
    rollNo,
    email,
    phone) 567-8901",
    year,
    branch,
    cgpa,
    attendance,
    achievements,
    lastActive,
    avatar: "/placeholder.svg?height=40&width=40",
    status,
    mentor,
  },
]

export function StudentList() {
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("name")
  const [filterYear, setFilterYear] = useState("all")

  const filteredStudents = mockStudents
    .filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesYear = filterYear === "all" || student.year.includes(filterYear)
      return matchesSearch && matchesYear
    })
    .sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else if (sortBy === "rollNo") {
        return a.rollNo.localeCompare(b.rollNo)
      } else if (sortBy === "cgpa") {
        return b.cgpa - a.cgpa
      } else if (sortBy === "achievements") {
        return b.achievements - a.achievements
      }
      return 0
    })

  if (selectedStudent) {
    return  setSelectedStudent(null)} />
  }

  return (
    
      
        
          Student Management
          Manage and mentor your assigned students
        
        
          
            {filteredStudents.length} Students
          
        
      

      {/* Filters and Search */}
      
        
          
            
              
                
                 setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              
            
            
              
                
                  
                
                
                  Sort by Name
                  Sort by Roll No
                  Sort by CGPA
                  Sort by Achievements
                
              
              
                
                  
                  
                
                
                  All Years
                  1st Year
                  2nd Year
                  3rd Year
                  4th Year
                
              
            
          
        
      

      {/* Students Grid */}
       (
           setSelectedStudent(student)}
          >
            
              
                
                  
                  
                    {student.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  
                
                
                  {student.name}
                  {student.rollNo}
                  
                    
                      {student.status}
                    
                    {student.year}
                  
                
              

              
                
                  
                    
                    CGPA
                  
                  {student.cgpa}
                
                
                  
                    
                    Attendance
                  
                  {student.attendance}%
                
                
                  
                    
                    Achievements
                  
                  {student.achievements}
                
              

              
                
                  
                  View Profile
                
                
                  
                
                
                  
                
              
            
          
        ))}
      

      {filteredStudents.length === 0 && (
        
          
            
            No students found
            Try adjusting your search or filter criteria
          
        
      )}
    
  )
}
