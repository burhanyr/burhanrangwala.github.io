"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"
import { FuturisticCard } from "@/components/ui/futuristic-card"
import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, Users, ExternalLink, Award, Lightbulb, GraduationCap, Globe, MessageSquare } from "lucide-react"

export default function LeadershipExtracurricularPage() {
  const [open, setOpen] = useState<string | null>(null)

  const leadershipRoles = [
    {
      id: "ambassador",
      title: "Graduate Student Ambassador, Master of Finance Program",
      organization: "University of Illinois at Urbana-Champaign",
      period: "Jan 2025 - Present",
      description:
        "Representing the Master of Finance program as an ambassador, engaging with prospective students, and participating in program events and initiatives to enhance the student experience.",
      icon: GraduationCap,
    },
    {
      id: "intern",
      title: "Graduate Intern - International Education",
      organization: "University of Illinois at Urbana-Champaign",
      period: "Oct 2024 - Present",
      description:
        "Contributed to the Name project representing 20+ nationalities and wellness programs. Hosted Break Events and ICU Sessions that increased co-curricular engagement by 45% through implementing scalable intercultural frameworks. Facilitated cross-cultural understanding and created inclusive environments for international students.",
      icon: Globe,
    },
    {
      id: "mentor",
      title: "Mentor & Thought Leader - Six Dots",
      period: "Feb 2024 - Present",
      description:
        "Creating a financial education game for visually impaired students, spearheading an education-first empowerment initiative in collaboration with STEM professionals. Developing accessible learning tools that make financial concepts tangible for students with visual impairments.",
      icon: Lightbulb,
    },
    {
      id: "instructor",
      title: "Public Speaking Instructor",
      organization: "Planet Spark, Mumbai",
      period: "Feb 2023 - Mar 2023",
      description:
        "Elevated public speaking proficiency and self-assurance across diverse age groups (4 to 50) through engaging and innovative pedagogy in introductory public speaking sessions. Designed customized learning approaches to address varying comfort levels and communication styles.",
      icon: MessageSquare,
    },
    {
      id: "rotaract",
      title: "Member, Rotaract Club of Mumbai Western Elite",
      period: "Jun 2021 - Apr 2022",
      description:
        "Led and spearheaded impactful campaigns and programs, including Project Aagman and Udaan, aimed at fostering community development and empowerment in our adopted village in remote interiors of Mumbai. Coordinated volunteer efforts and resource allocation to maximize community impact.",
      icon: Users,
    },
    {
      id: "mad",
      title: "Academic Support Volunteer",
      organization: "Make a Difference NGO",
      period: "Jun 2019 - May 2020",
      description:
        "Accountable for tutoring and motivating high school students in 'Organization of Commerce'. Devised academic roadmaps, deployed diverse learning tools and techniques for effective delivery to improve language skills, administered tests, tracked performance, and provided content support, memory retention strategies, mentorship, and counseling.",
      icon: Award,
    },
    {
      id: "dlle",
      title: "Department of Lifelong Learning & Extension (DLLE)",
      organization: "University of Mumbai",
      period: "July 2019 - Mar 2020",
      description:
        "Participated in a project aimed at igniting ideas and dialogue on entrepreneurship and self-reliance with a focus on vocation and boosting social sensitivity among diverse disciplines. Led public relations campaigns and mentored students to serve program objectives from strategy to execution. Engaged in topical seminars and research workshops, documenting behavioral patterns, budgets, pricing, project management, and client service requirements.",
      icon: Lightbulb,
    },
    {
      id: "pr-head",
      title: "Head, Public Relations (Social Media)",
      organization: "Intent Leadership Summit",
      period: "Dec 2018 - Feb 2019",
      description:
        "Executed innovative social media campaigns, increasing event reach by 30% and attracting 1500+ attendees, surpassing projected turnout. Synergized with college leadership to streamline event promotions, communication, audience engagement, and crisis management. Leveraged analytics insights to augment digital engagement and improve content reach by 25%.",
      icon: ExternalLink,
    },
  ]

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-indigo-100">Leadership & Extracurricular</h1>
        </motion.div>

        <FuturisticCard className="p-6 md:p-8 mb-8">
          <motion.p
            className="text-indigo-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Throughout my academic and professional journey, I've actively sought leadership roles and extracurricular
            activities that allow me to make meaningful contributions while developing my skills in team management,
            strategic planning, and community engagement.
          </motion.p>
        </FuturisticCard>

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
                className="overflow-hidden cursor-pointer hover:border-indigo-400"
                hoverEffect={true}
                onClick={() => setOpen(role.id)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <div className="bg-indigo-900/50 p-3 rounded-full border border-indigo-700/30">
                        <role.icon className="h-5 w-5 text-indigo-300" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-indigo-400">{role.title}</h3>
                        {role.organization && <p className="text-indigo-300 mt-1">{role.organization}</p>}
                        <p className="flex items-center mt-2 text-indigo-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          {role.period}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-indigo-400">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-indigo-300 mt-4 line-clamp-2">{role.description}</p>
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-indigo-300 border-indigo-700/50 hover:bg-indigo-900/50"
                      onClick={() => setOpen(role.id)}
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </AnimatedCard>

              <Dialog open={open === role.id} onOpenChange={(isOpen) => !isOpen && setOpen(null)}>
                <DialogContent className="sm:max-w-[600px] bg-indigo-950 border-indigo-700/50 text-indigo-100">
                  <DialogHeader>
                    <DialogTitle className="text-indigo-400 text-xl">{role.title}</DialogTitle>
                    {role.organization && (
                      <DialogDescription className="text-indigo-300">{role.organization}</DialogDescription>
                    )}
                    <DialogDescription className="flex items-center text-indigo-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      {role.period}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-indigo-200 text-lg leading-relaxed">{role.description}</p>
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
          <SectionHeading title="Community Impact" />
          <FuturisticCard>
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-900/50 p-3 rounded-full border border-indigo-700/30">
                  <Users className="h-6 w-6 text-indigo-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-indigo-400 text-lg mb-2">Volunteer Work & Community Service</h3>
                  <p className="text-indigo-300 text-lg leading-relaxed">
                    My commitment to community service extends beyond formal roles. I've participated in various
                    volunteer initiatives focused on education, sustainability, and social empowerment. These
                    experiences have deepened my understanding of diverse communities and reinforced my belief in the
                    power of collective action to drive positive change.
                  </p>
                </div>
              </div>
            </div>
          </FuturisticCard>
        </motion.div>
      </div>
    </main>
  )
}

