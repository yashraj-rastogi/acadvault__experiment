"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, MapPin, Bell, Shield, Download, Trash2, Camera, Save, Key } from "lucide-react"

export function SettingsPage() {
  const [profileData, setProfileData] = useState({
    firstName,
    lastName,
    email,
    phone) 123-4567",
    address, College Town, ST 12345",
    bio,
    studentId,
    major,
    year,
  })

  const [notifications, setNotifications] = useState({
    emailNotifications,
    pushNotifications,
    achievementUpdates,
    portfolioShares,
    academicReminders,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility,
    portfolioVisibility,
    achievementVisibility,
  })

  const handleProfileUpdate = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]}))
  }

  const handleNotificationToggle = (setting) => {
    setNotifications((prev) => ({ ...prev, [setting]}))
  }

  const handlePrivacyChange = (setting, value) => {
    setPrivacy((prev) => ({ ...prev, [setting]}))
  }

  return (
    
      {/* Header */}
      
        Settings
        Manage your account preferences and privacy settings
      

      
        
          Profile
          Notifications
          Privacy
          Account
        

        
          
            
              
                
                Profile Information
              
              Update your personal information and academic details
            
            
              {/* Profile Picture */}
              
                
                  
                  
                    {profileData.firstName[0]}
                    {profileData.lastName[0]}
                  
                
                
                  
                    
                    Change Photo
                  
                  JPG, PNG or GIF. Max size 2MB.
                
              

              

              {/* Personal Information */}
              
                
                  First Name
                   handleProfileUpdate("firstName", e.target.value)}
                  />
                
                
                  Last Name
                   handleProfileUpdate("lastName", e.target.value)}
                  />
                
              

              
                
                  Email Address
                  
                    
                     handleProfileUpdate("email", e.target.value)}
                      className="pl-10"
                    />
                  
                
                
                  Phone Number
                  
                    
                     handleProfileUpdate("phone", e.target.value)}
                      className="pl-10"
                    />
                  
                
              

              
                Address
                
                  
                   handleProfileUpdate("address", e.target.value)}
                    className="pl-10"
                    rows={2}
                  />
                
              

              
                Bio
                 handleProfileUpdate("bio", e.target.value)}
                  placeholder="Tell us about yourself..."
                  rows={3}
                />
              

              

              {/* Academic Information */}
              
                
                  Student ID
                  
                
                
                  Major
                   handleProfileUpdate("major", value)}>
                    
                      
                    
                    
                      Computer Science
                      Information Technology
                      Software Engineering
                      Data Science
                    
                  
                
                
                  Academic Year
                   handleProfileUpdate("year", value)}>
                    
                      
                    
                    
                      Freshman
                      Sophomore
                      Junior
                      Senior
                    
                  
                
              

              
                
                  
                  Save Changes
                
              
            
          
        

        
          
            
              
                
                Notification Preferences
              
              Choose how you want to be notified about updates
            
            
              
                
                  
                    Email Notifications
                    Receive notifications via email
                  
                   handleNotificationToggle("emailNotifications")}
                  />
                

                
                  
                    Push Notifications
                    Receive browser push notifications
                  
                   handleNotificationToggle("pushNotifications")}
                  />
                

                
                  
                    Achievement Updates
                    
                      Get notified when achievements are approved/rejected
                    
                  
                   handleNotificationToggle("achievementUpdates")}
                  />
                

                
                  
                    Portfolio Shares
                    Notifications when someone views your portfolio
                  
                   handleNotificationToggle("portfolioShares")}
                  />
                

                
                  
                    Academic Reminders
                    Reminders for deadlines and important dates
                  
                   handleNotificationToggle("academicReminders")}
                  />
                
              
            
          
        

        
          
            
              
                
                Privacy Settings
              
              Control who can see your information
            
            
              
                
                  Profile Visibility
                   handlePrivacyChange("profileVisibility", value)}
                  >
                    
                      
                    
                    
                      Public - Anyone can view
                      University - Only university members
                      Private - Only you
                    
                  
                

                
                  Portfolio Visibility
                   handlePrivacyChange("portfolioVisibility", value)}
                  >
                    
                      
                    
                    
                      Public - Anyone with link
                      University - Only university members
                      Private - Only you
                    
                  
                

                
                  Achievement Visibility
                   handlePrivacyChange("achievementVisibility", value)}
                  >
                    
                      
                    
                    
                      Public - Visible to all
                      University - Only university members
                      Private - Only you
                    
                  
                
              
            
          
        

        
          
            
              
                
                Password & Security
              
              Manage your account security
            
            
              
                Current Password
                
              
              
                New Password
                
              
              
                Confirm New Password
                
              
              Update Password
            
          

          
            
              
                
                Data Export
              
              Download your data
            
            
              
                Export all your achievements, academic records, and portfolio data.
              
              
                
                Export My Data
              
            
          

          
            
              
                
                Delete Account
              
              Permanently delete your account and all data
            
            
              
                This action cannot be undone. All your achievements, portfolio, and academic records will be permanently
                deleted.
              
              
                
                Delete Account
              
            
          
        
      
    
  )
}
