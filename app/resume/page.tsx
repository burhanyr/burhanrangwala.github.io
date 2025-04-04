"use client"

import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award, Code, Globe } from "lucide-react"
import { AnimatedCard } from "@/components/ui/animated-card"
import { TimelineItem } from "@/components/ui/timeline-item"
import { motion } from "framer-motion"

export default function ResumePage() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-blue-900">Resume</h1>
          <Button className="rounded-full flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </motion.div>

        {/* Contact Information */}
        <AnimatedCard className="p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <h2 className="text-2xl font-bold text-blue-900">Burhan Rangwala</h2>
              <p className="text-blue-600">Finance Professional • Consultant</p>
            </div>
            <div className="mt-4 md:mt-0 text-blue-600">
              <p>Champaign, IL, USA-61820</p>
              <p>Phone: +1 447 9026971</p>
              <p>Email: byr2@illinois.edu</p>
            </div>
          </div>
        </AnimatedCard>

        {/* Timeline Resume */}
        <div className="relative border-l border-blue-200 ml-3 pl-8 mb-12">
          {/* Work Experience */}
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                <Briefcase className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Work Experience</h2>
            </motion.div>

            {/* Graduate Student Ambassador */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">
                    Graduate Student Ambassador, Master of Finance Program-UIUC
                  </h3>
                  <p className="text-blue-500">Jan 2025 - Present</p>
                </div>
                <p className="text-blue-600">Champaign IL</p>
              </AnimatedCard>
            </TimelineItem>

            {/* Graduate Intern */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Graduate Intern - International Education</h3>
                  <p className="text-blue-500">Oct 2024 - Present</p>
                </div>
              </AnimatedCard>
            </TimelineItem>

            {/* Consultant */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Consultant</h3>
                  <p className="text-blue-500">Dec 2022 - June 2024</p>
                </div>
                <p className="text-blue-600">Creative Consultancy, Mumbai</p>
              </AnimatedCard>
            </TimelineItem>

            {/* Founder & Content Curation */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Founder & Content Curation</h3>
                  <p className="text-blue-500">Feb 2023 - Present</p>
                </div>
                <p className="text-blue-600">Boom and Beacon</p>
              </AnimatedCard>
            </TimelineItem>

            {/* Research Assistant */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Research Assistant</h3>
                  <p className="text-blue-500">Jan 2024 - Feb 2024</p>
                </div>
                <p className="text-blue-600">
                  National Institute of Public Finance and Policy (under Ministry of Finance)
                </p>
              </AnimatedCard>
            </TimelineItem>

            {/* Financial Analyst */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Financial Analyst</h3>
                  <p className="text-blue-500">Oct 2022 - Nov 2022</p>
                </div>
                <p className="text-blue-600">Freelance, Mumbai</p>
              </AnimatedCard>
            </TimelineItem>

            {/* Articled Apprentice/Intern */}
            <TimelineItem isLast={true}>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Articled Apprentice/Intern</h3>
                  <p className="text-blue-500">Sep 2019 - Sep 2022</p>
                </div>
                <p className="text-blue-600">SGCO, Mumbai</p>
              </AnimatedCard>
            </TimelineItem>
          </div>

          {/* Education */}
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                <GraduationCap className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Education</h2>
            </motion.div>

            {/* MS Finance */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Master of Science in Finance</h3>
                  <p className="text-blue-500">Dec 2025 (Expected)</p>
                </div>
                <p className="text-blue-600">University of Illinois at Urbana Champaign, USA</p>
                <p className="text-blue-600">
                  Courses: Survey Methods & Experiments, Big data, Investments, M&A, Financial Modelling, Corporate
                  Finance
                </p>
              </AnimatedCard>
            </TimelineItem>

            {/* M.Com */}
            <TimelineItem>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">Master of Commerce, Banking & Institutions</h3>
                  <p className="text-blue-500">Apr 2022</p>
                </div>
                <p className="text-blue-600">University of Mumbai</p>
                <p className="text-blue-600">
                  Courses: Research Methodology, Audit of Banking sector, Financial Services, Commercial Bank Management
                </p>
              </AnimatedCard>
            </TimelineItem>

            {/* B.Com */}
            <TimelineItem isLast={true}>
              <AnimatedCard className="p-6">
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="font-semibold text-lg text-blue-800">
                    Bachelor of Commerce, Financial Accounting and Auditing
                  </h3>
                  <p className="text-blue-500">Oct 2020</p>
                </div>
                <p className="text-blue-600">University of Mumbai</p>
                <p className="text-blue-600">
                  Courses: Micro & Macro Economics, Computer Systems, Cost & Financial Accounting, Advertising
                </p>
              </AnimatedCard>
            </TimelineItem>
          </div>

          {/* Professional Certifications */}
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                <Award className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Professional Certifications</h2>
            </motion.div>

            <TimelineItem isLast={true}>
              <AnimatedCard className="p-6">
                <ul className="space-y-3 list-disc pl-5 text-blue-600">
                  <li>
                    Chartered Accountancy (CA) - Intermediate (Level 2) qualified, Institute of Chartered Accountants of
                    India, 2019
                  </li>
                  <li>
                    Certified Public Accountant (US CPA) Aspirant cleared Financial Accounting & Reporting and Business
                    & Economic concepts; expected completion of credential May 2025
                  </li>
                  <li>Chartered Financial Analyst (CFA) Level 1 aspirant: expected completion Nov 2025</li>
                </ul>
              </AnimatedCard>
            </TimelineItem>
          </div>

          {/* Technical Skills */}
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                <Code className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Technical Skills</h2>
            </motion.div>

            <TimelineItem isLast={true}>
              <AnimatedCard className="p-6">
                <p className="text-blue-600">
                  SQL, Microsoft Excel, VBA, Microsoft Word, Microsoft PowerPoint, Capital IQ, Bloomberg terminal,
                  Python, SAP, Power BI, Tally ERP 9, Genius, Qualtrics
                </p>
              </AnimatedCard>
            </TimelineItem>
          </div>

          {/* Projects */}
          <div className="mb-12">
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                <Award className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Projects</h2>
            </motion.div>

            <TimelineItem isLast={true}>
              <AnimatedCard className="p-6">
                <ul className="space-y-3 list-disc pl-5 text-blue-600">
                  <li>
                    Built an LBO model to evaluate the acquisition of a pharmaceutical company, analyzing financing,
                    synergies and exit strategies, achieving an IRR of 19%.
                  </li>
                  <li>
                    Impact of AI & technology on valuation - an analysis of ServiceNow using DCF, capital structure.
                  </li>
                  <li>
                    Simulating a $10,000 cryptocurrency portfolio, leveraging predictive analytics and risk management
                    strategies to achieve a target 3x return over 2 months.
                  </li>
                  <li>
                    Led a team of 5 for Harvard Case Competition to ascertain acquisition feasibility for a luxury
                    automobile company.
                  </li>
                </ul>
              </AnimatedCard>
            </TimelineItem>
          </div>

          {/* Languages & Interests */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-md">
                <Globe className="h-3 w-3 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Languages & Interests</h2>
            </motion.div>

            <TimelineItem isLast={true}>
              <AnimatedCard className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Languages</h3>
                    <p className="text-blue-600">
                      English (Fluent), Hindi, Marathi, Gujrati, Arabic (Basic), Eager to learn additional languages.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Interests</h3>
                    <p className="text-blue-600">
                      Public speaking, adventure and exploration, cultural intelligence & awareness, collecting antiques
                      and currency, badminton, haiku, swimming, nature, travel, meditation.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Volunteering</h3>
                  <p className="text-blue-600">
                    Academic support and outreach volunteer for MAD and Rotaract Club. (Mumbai)
                  </p>
                </div>
              </AnimatedCard>
            </TimelineItem>
          </div>
        </div>
      </div>
    </main>
  )
}

