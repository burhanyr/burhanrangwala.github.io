"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-blue-900">Contact Me</h1>
        </motion.div>

        <AnimatedCard className="p-6 md:p-8 mb-8">
          <motion.p
            className="text-blue-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm always open to discussing new projects, opportunities, and collaborations. Feel free to reach out using
            the form below or through my contact information.
          </motion.p>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <AnimatedCard>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-blue-700">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-blue-200 focus:border-blue-400 transition-colors duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-blue-700">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-blue-200 focus:border-blue-400 transition-colors duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-blue-700">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-blue-200 focus:border-blue-400 transition-colors duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-blue-700">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] border-blue-200 focus:border-blue-400 transition-colors duration-300"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>

                  {isSubmitted && (
                    <motion.div
                      className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      Thank you for your message! I'll get back to you as soon as possible.
                    </motion.div>
                  )}
                </form>
              </div>
            </AnimatedCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatedCard>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4 text-blue-900">Contact Information</h2>
                <div className="space-y-4">
                  <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Email</p>
                      <a
                        href="mailto:byr2@illinois.edu"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        byr2@illinois.edu
                      </a>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Phone</p>
                      <a
                        href="tel:+14479026971"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        +1 447 9026971
                      </a>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Linkedin className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/burhanyrangwala"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        linkedin.com/in/burhanyrangwala
                      </a>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                    <div className="bg-blue-100 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Location</p>
                      <p className="text-blue-600">Champaign, IL, USA-61820</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </AnimatedCard>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <AnimatedCard>
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-blue-900">Office Hours</h2>
                  <p className="text-blue-600 mb-2">Monday - Friday: 9:00 AM - 5:00 PM (CST)</p>
                  <p className="text-blue-600">I'll respond to your message within 24-48 hours.</p>
                </div>
              </AnimatedCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}

