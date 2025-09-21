"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  HelpCircle,
  Send,
  MessageSquare,
  Clock,
  ChevronDown,
  Search,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react"

// Mock FAQ data
const faqs = [
  {
    id,
    category,
    question,
    answer,
  },
  {
    id,
    category,
    question,
    answer), photos (JPG, PNG), documentation, and URLs to online portfolios or project repositories. Make sure all evidence clearly demonstrates your achievement.",
  },
  {
    id,
    category,
    question,
    answer, select a template, choose which approved achievements to include, and click 'Generate PDF' or 'Get Shareable Link' to create your portfolio.",
  },
  {
    id,
    category,
    question,
    answer, you can choose from pre-designed templates and select which achievements to include. Custom template creation is planned for future updates.",
  },
  {
    id,
    category,
    question,
    answer, they may not have been updated by faculty yet. Contact your academic advisor if grades are missing after the official posting date.",
  },
  {
    id,
    category,
    question,
    answer, JPG, PNG). Clear your browser cache and try again. If the problem persists, contact technical support.",
  },
  {
    id,
    category,
    question,
    answer,
  },
  {
    id,
    category,
    question,
    answer), University (only university members), or Private (only you).",
  },
]

// Mock support tickets
const supportTickets = [
  {
    id,
    subject,
    status,
    priority,
    created,
    lastUpdate,
  },
  {
    id,
    subject,
    status,
    priority,
    created,
    lastUpdate,
  },
  {
    id,
    subject,
    status,
    priority,
    created,
    lastUpdate,
  },
]

const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "bg-red-100 text-red-800 border-red-200"
    case "In Progress":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Resolved":
      return "bg-green-100 text-green-800 border-green-200"
    default}
}

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-800 border-red-200"
    case "Medium":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Low", setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [ticketForm, setTicketForm] = useState({
    subject,
    category,
    priority,
    description,
  })

  const categories = ["all", "Achievements", "Portfolio", "Academic Records", "Technical", "Account", "Privacy"]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleTicketSubmit = (e) => {
    e.preventDefault()
    // Handle ticket submission
    console.log("Ticket submitted, ticketForm)
    alert("Support ticket submitted successfully! You'll receive updates via email.")
    setTicketForm({ subject, category, priority, description)
  }

  return (
    
      {/* Header */}
      
        Support & Help
        Find answers to common questions or get help from our support team
      

      
        
          FAQ
          Support Tickets
          Contact
        

        
          {/* Search and Filter */}
          
            
              
                
                  
                    
                     setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  
                
                
                  
                    
                  
                  
                    {categories.map((category) => (
                      
                        {category === "all" ? "All Categories" }
                      
                    ))}
                  
                
              
            
          

          {/* FAQ List */}
          
            {filteredFAQs.map((faq) => (
              
                
                  
                    
                      
                        
                          
                          
                            {faq.question}
                            
                              {faq.category}
                            
                          
                        
                        
                      
                    
                  
                  
                    
                      {faq.answer}
                    
                  
                
              
            ))}
          
        

        
          {/* Create New Ticket */}
          
            
              
                
                Create Support Ticket
              
              Can't find an answer? Submit a support ticket and we'll help you out.
            
            
              
                
                  
                    Subject *
                     setTicketForm({ ...ticketForm, subject)}
                      placeholder="Brief description of your issue"
                      required
                    />
                  
                  
                    Category *
                     setTicketForm({ ...ticketForm, category)}
                    >
                      
                        
                      
                      
                        Achievements
                        Portfolio
                        Academic Records
                        Technical Issue
                        Account
                        Other
                      
                    
                  
                

                
                  Priority
                   setTicketForm({ ...ticketForm, priority)}
                  >
                    
                      
                    
                    
                      Low
                      Medium
                      High
                    
                  
                

                
                  Description *
                   setTicketForm({ ...ticketForm, description)}
                    placeholder="Please provide detailed information about your issue..."
                    rows={4}
                    required
                  />
                

                
                  
                  Submit Ticket
                
              
            
          

          {/* Existing Tickets */}
          
            
              Your Support Tickets
              Track the status of your submitted tickets
            
            
              
                {supportTickets.map((ticket) => (
                  
                    
                      
                        {ticket.id}
                        {ticket.subject}
                      
                      
                        
                          
                          Created).toLocaleDateString()}
                        
                        
                          
                          Updated).toLocaleDateString()}
                        
                      
                    
                    
                      
                        {ticket.priority}
                      
                      
                        {ticket.status}
                      
                    
                  
                ))}
              
            
          
        

        
          
            
              
                Contact Information
                Get in touch with our support team
              
              
                
                  
                  
                    Email Support
                    support@university.edu
                  
                

                
                  
                  
                    Phone Support
                    +1 (555) 123-4567
                    Mon-Fri, 9AM-5PM EST
                  
                

                
                  
                  
                    Office Location
                    
                      Student Services Building
                      
                      Room 201, University Campus
                    
                  
                
              
            

            
              
                Additional Resources
                Helpful links and documentation
              
              
                
                  
                  Student Handbook
                
                
                  
                  Academic Calendar
                
                
                  
                  University Policies
                
                
                  
                  Technical Requirements
                
              
            
          

          
            
              Office Hours
              When you can reach us for immediate assistance
            
            
              
                
                  Academic Support
                  
                    Monday - Friday: 9:00 AM - 5:00 PM
                    Saturday: 10:00 AM - 2:00 PM
                    Sunday: Closed
                  
                
                
                  Technical Support
                  
                    Monday - Friday)
}
