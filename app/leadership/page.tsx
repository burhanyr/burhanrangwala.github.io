"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, Users, ExternalLink } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"

export default function LeadershipPage() {
  const [open, setOpen] = useState<string | null>(null)

  const leadershipRoles = [
    {
      id: "mentor",
      title: "Mentor & Thought leader - Six dots",
      period: "Feb 2024 - Present",
      description:
        "Bringing about an impact-driven education first empowerment initiative in collaboration with STEM professionals.",
    },
    {
      id: "instructor",
      title: "Public Speaking Instructor at Planet Spark, Mumbai",
      period: "Feb 2023 - Mar 2023",
      description:
        "Elevated public speaking proficiency and self-assurance across various age groups (4 to 50) through engaging and innovative pedagogy in introductory public speaking sessions.",
    },
    {
      id: "dlle",
      title: "Department of Lifelong Learning & Extension (DLLE), University of Mumbai",
      period: "July 2019 - Mar 2020",
      description:
        "A project aimed at igniting entrepreneurship and self-reliance with a focus on vocation and boosting social sensitivity. Led public relations campaigns and mentored students to attain program objectives and participated in various seminars, and research workshops on Research Report Writing.",
    },
    {
      id: "pr-head",
      title: "Head, Public Relations (social media), Intent Leadership Summit",
      period: "Dec 2018 - Feb 2019",
      description:
        "Managed social media campaigns and public relations for the Intent Leadership Summit, increasing engagement and participation through strategic communication and outreach initiatives.",
    },
    {
      id: "intern",
      title: "Graduate intern - International education",
      period: "Oct 2024 - present",
      description:
        "Working with international education initiatives to develop and implement programs that enhance cross-cultural understanding and educational opportunities for students across borders.",
    },
  ]

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-blue-900">Leadership & Volunteering</h1>
        </motion.div>

        <AnimatedCard className="p-6 md:p-8 mb-8">
          <motion.p
            className="text-blue-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Throughout my career, I've taken on various leadership roles that have allowed me to make meaningful
            contributions while developing my skills in team management, strategic planning, and community engagement.
          </motion.p>
        </AnimatedCard>

        <div className="grid gap-6">
          {leadershipRoles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard
                className="overflow-hidden cursor-pointer hover:border-blue-300"
                hoverEffect={true}
                onClick={() => setOpen(role.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-800">{role.title}</h3>
                      <p className="flex items-center mt-2 text-blue-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {role.period}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-blue-600">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-blue-600 mt-4 line-clamp-2">{role.description}</p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-blue-600 border-blue-200 hover:bg-blue-50"
                      onClick={() => setOpen(role.id)}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </AnimatedCard>

              <Dialog open={open === role.id} onOpenChange={(isOpen) => !isOpen && setOpen(null)}>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-blue-900 text-xl">{role.title}</DialogTitle>
                    <DialogDescription className="flex items-center text-blue-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {role.period}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-blue-700 text-lg">{role.description}</p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading title="Volunteering" />
          <AnimatedCard>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-800 text-lg mb-2">Academic Support and Outreach</h3>
                  <p className="text-blue-600 text-lg">
                    Volunteer for Make A Difference (MAD) and Rotaract Club in Mumbai, providing academic support and
                    mentorship to underprivileged students and participating in community outreach programs.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </main>
  )
}

