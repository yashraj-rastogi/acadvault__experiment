"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { GraduationCap, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [role, setRole] = useState("")
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Redirect based on role
    switch (role) {
      case "student":
        router.push("/student")
        break
      case "faculty":
        router.push("/faculty")
        break
      case "admin"}

    setIsLoading(false)
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // For demo, redirect to login
    setIsLoading(false)
  }

  return (
    
      
        
          
            
          
          AcadVault
        
        Welcome Back
        Sign in to your account or create a new one
      
      
        
          
            Login
            Sign Up
          

          
            
              
                Email
                
              

              
                Password
                
                  
                   setShowPassword(!showPassword)}
                  >
                    {showPassword ?  }
                  
                
              

              
                Role
                
                  
                    
                  
                  
                    Student
                    Faculty
                    Administrator
                  
                
              

              
                {isLoading ? "Signing in..." }
              
            
          

          
            
              
                
                  First Name
                  
                
                
                  Last Name
                  
                
              

              
                Email
                
              

              
                Password
                
                  
                   setShowPassword(!showPassword)}
                  >
                    {showPassword ?  }
                  
                
              

              
                Role
                
                  
                    
                  
                  
                    Student
                    Faculty
                    Administrator
                  
                
              

              
                {isLoading ? "Creating account..." }
              
            
          
        

        
          <Link href="/" className="hover)
}
