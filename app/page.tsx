"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { StarryBackground } from "@/components/ui/starry-background"
import { FloatingParticles } from "@/components/ui/floating-particles"
import { FuturisticCard } from "@/components/ui/futuristic-card"
import { HolographicText } from "@/components/ui/holographic-text"
import { ProfileImage } from "@/components/ui/profile-image"
import { SectionHeading } from "@/components/ui/section-heading"
import { motion } from "framer-motion"
import {
  Briefcase,
  GraduationCap,
  Code,
  Mail,
  FileText,
  User,
  ExternalLink,
  ChevronRight,
  Database,
  LineChart,
  BarChart,
  FileSpreadsheet,
  PresentationIcon,
  Quote,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <StarryBackground>
          <section className="py-20 md:py-28">
            <div className="container px-4 md:px-6 mx-auto">
              <motion.div
                className="flex flex-col items-center text-center space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <ProfileImage src="/images/profile.png" alt="Burhan Rangwala" size={160} />

                <HolographicText as="h1" className="text-4xl md:text-6xl font-bold tracking-tighter">
                  Burhan Rangwala
                </HolographicText>

                <motion.p
                  className="text-xl md:text-2xl text-indigo-200 max-w-[600px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Strategist • Change Catalyst • Thought Leader
                </motion.p>

                <motion.div
                  className="mt-4 max-w-2xl mx-auto bg-indigo-900/30 backdrop-blur-sm p-4 rounded-lg border border-indigo-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="flex items-start">
                    <Quote className="h-6 w-6 text-indigo-300 mr-2 flex-shrink-0 mt-1" />
                    <p className="text-indigo-100 italic text-lg">"Bet on yourself. The best is yet to come."</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex flex-wrap gap-3 justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-indigo-500/50 text-indigo-200 hover:bg-indigo-900/50 backdrop-blur-sm"
                  >
                    <Link href="/about">
                      <User className="mr-2 h-4 w-4" />
                      About Me
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="rounded-full bg-gradient-to-r from-indigo-600/80 to-violet-700/80 hover:from-indigo-700/80 hover:to-violet-800/80 text-white shadow-md backdrop-blur-sm"
                  >
                    <Link href="/resume">
                      <FileText className="mr-2 h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-indigo-500/50 text-indigo-200 hover:bg-indigo-900/50 backdrop-blur-sm"
                  >
                    <Link href="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <FloatingParticles />
          </section>
        </StarryBackground>

        {/* Experience Highlights */}
        <section className="py-16 bg-blue-950">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeading
              title="Professional Experience"
              subtitle="My journey through various roles in finance and consulting"
              centered={true}
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FuturisticCard className="p-6 h-full">
                  <Briefcase className="h-10 w-10 text-indigo-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-indigo-100">Consultant</h3>
                  <p className="text-indigo-300 mb-2">Creative Consultancy, Mumbai</p>
                  <p className="text-indigo-400 text-sm">Dec 2022 - June 2024</p>
                </FuturisticCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FuturisticCard className="p-6 h-full">
                  <Briefcase className="h-10 w-10 text-indigo-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-indigo-100">Research Assistant</h3>
                  <p className="text-indigo-300 mb-2">National Institute of Public Finance and Policy</p>
                  <p className="text-indigo-400 text-sm">Jan 2024 - Feb 2024</p>
                </FuturisticCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <FuturisticCard className="p-6 h-full">
                  <Briefcase className="h-10 w-10 text-indigo-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-indigo-100">Articled Apprentice/Intern</h3>
                  <p className="text-indigo-300 mb-2">SGCO, Mumbai</p>
                  <p className="text-indigo-400 text-sm">Sep 2019 - Sep 2022</p>
                </FuturisticCard>
              </motion.div>
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/50"
              >
                <Link href="/resume">
                  View Full Resume
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-16 bg-gradient-to-b from-blue-950 to-indigo-950">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeading title="Education" subtitle="My academic journey and qualifications" centered={true} />

            <div className="max-w-3xl mx-auto space-y-8">
              <motion.div
                className="flex flex-col md:flex-row gap-4 items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-gradient-to-br from-indigo-500/50 to-violet-600/50 p-4 rounded-full shadow-md backdrop-blur-sm">
                  <GraduationCap className="h-8 w-8 text-indigo-100" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-100">
                    Master of Science in Finance (Data Analytics track)
                  </h3>
                  <p className="text-indigo-300">University of Illinois at Urbana Champaign, USA</p>
                  <p className="text-indigo-400">Expected Dec 2025</p>
                  <p className="text-indigo-300 mt-2">
                    Courses: Survey Methods & Experiments, Big data, Investments, M&A, Financial Modelling, Corporate
                    Finance
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row gap-4 items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-indigo-500/50 to-violet-600/50 p-4 rounded-full shadow-md backdrop-blur-sm">
                  <GraduationCap className="h-8 w-8 text-indigo-100" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-100">Master of Commerce, Banking & Institutions</h3>
                  <p className="text-indigo-300">University of Mumbai</p>
                  <p className="text-indigo-400">Apr 2022</p>
                  <p className="text-indigo-300 mt-2">
                    Courses: Research Methodology, Audit of Banking sector, Financial Services, Commercial Bank
                    Management
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row gap-4 items-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bg-gradient-to-br from-indigo-500/50 to-violet-600/50 p-4 rounded-full shadow-md backdrop-blur-sm">
                  <GraduationCap className="h-8 w-8 text-indigo-100" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-100">
                    Bachelor of Commerce, Financial Accounting and Auditing
                  </h3>
                  <p className="text-indigo-300">University of Mumbai</p>
                  <p className="text-indigo-400">Oct 2020</p>
                  <p className="text-indigo-300 mt-2">
                    Courses: Micro & Macro Economics, Computer Systems, Cost & Financial Accounting, Advertising
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-16 bg-indigo-950 relative">
          <FloatingParticles count={30} />
          <div className="container px-4 md:px-6 mx-auto relative z-10">
            <SectionHeading title="Technical Skills" subtitle="Tools and technologies I work with" centered={true} />

            <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "SQL", icon: Database },
                { name: "Microsoft Excel", icon: FileSpreadsheet },
                { name: "VBA", icon: Code },
                { name: "Microsoft PowerPoint", icon: PresentationIcon },
                { name: "Bloomberg terminal", icon: LineChart },
                { name: "Python", icon: Code },
                { name: "Power BI", icon: BarChart },
                { name: "Capital IQ", icon: BarChart },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <FuturisticCard className="p-4 flex flex-col items-center justify-center">
                    <skill.icon className="h-6 w-6 text-indigo-300 mb-2" />
                    <p className="text-indigo-100 font-medium text-center">{skill.name}</p>
                  </FuturisticCard>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/50"
              >
                <Link href="/skills">
                  View All Skills
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-16 bg-gradient-to-b from-indigo-950 to-violet-950">
          <div className="container px-4 md:px-6 mx-auto">
            <SectionHeading title="Projects" subtitle="Highlights from my portfolio of work" centered={true} />

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FuturisticCard className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-100">
                    LBO Model for Pharmaceutical Acquisition
                  </h3>
                  <p className="text-indigo-300 mb-4">
                    Built an LBO model to evaluate the acquisition of a pharmaceutical company, analyzing financing,
                    synergies and exit strategies, achieving an IRR of 19%.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-800/50 text-indigo-200 text-sm rounded-full border border-indigo-700/30">
                      Leveraged Buyout
                    </span>
                    <span className="px-3 py-1 bg-indigo-800/50 text-indigo-200 text-sm rounded-full border border-indigo-700/30">
                      M&A Analysis
                    </span>
                    <span className="px-3 py-1 bg-indigo-800/50 text-indigo-200 text-sm rounded-full border border-indigo-700/30">
                      Financial Modeling
                    </span>
                  </div>
                </FuturisticCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FuturisticCard className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-3 text-indigo-100">Cryptocurrency Portfolio Simulation</h3>
                  <p className="text-indigo-300 mb-4">
                    Simulated a $10,000 cryptocurrency portfolio, leveraging predictive analytics and risk management
                    strategies to achieve a target 3x return over 2 months.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-indigo-800/50 text-indigo-200 text-sm rounded-full border border-indigo-700/30">
                      Predictive Analytics
                    </span>
                    <span className="px-3 py-1 bg-indigo-800/50 text-indigo-200 text-sm rounded-full border border-indigo-700/30">
                      Risk Management
                    </span>
                    <span className="px-3 py-1 bg-indigo-800/50 text-indigo-200 text-sm rounded-full border border-indigo-700/30">
                      Portfolio Optimization
                    </span>
                  </div>
                </FuturisticCard>
              </motion.div>
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                variant="outline"
                className="rounded-full border-indigo-500/50 text-indigo-300 hover:bg-indigo-900/50"
              >
                <Link href="/projects">
                  View All Projects
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-indigo-900 to-violet-900 text-white relative">
          <FloatingParticles count={20} />
          <div className="container px-4 md:px-6 mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <HolographicText as="h2" className="text-3xl font-bold mb-4">
                Let's Connect
              </HolographicText>
              <p className="text-indigo-200 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, opportunities, and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-indigo-300/50 text-indigo-100 hover:bg-indigo-800/50 backdrop-blur-sm"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-indigo-500/80 to-violet-600/80 hover:from-indigo-600/80 hover:to-violet-700/80 text-white shadow-md backdrop-blur-sm"
                >
                  <Link href="https://www.linkedin.com/in/burhanyrangwala" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

