"use client"

import { CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { SkillBadge } from "@/components/ui/skill-badge"
import { FuturisticCard } from "@/components/ui/futuristic-card"
import { motion } from "framer-motion"
import {
  Code,
  BarChart,
  FileSpreadsheet,
  FileText,
  PresentationIcon,
  Database,
  Calculator,
  Building,
  LineChart,
} from "lucide-react"

export default function SkillsPage() {
  const technicalSkills = [
    { name: "SQL", icon: Database },
    { name: "Microsoft Excel", icon: FileSpreadsheet },
    { name: "VBA", icon: Code },
    { name: "Microsoft Word", icon: FileText },
    { name: "Microsoft PowerPoint", icon: PresentationIcon },
    { name: "Capital IQ", icon: BarChart },
    { name: "Bloomberg terminal", icon: LineChart },
    { name: "Python", icon: Code },
    { name: "SAP", icon: Building },
    { name: "Power BI", icon: BarChart },
    { name: "Tally ERP 9", icon: Calculator },
    { name: "Genius", icon: Database },
    { name: "Qualtrics", icon: BarChart },
  ]

  const financialSkills = [
    { name: "Financial Modeling", level: 90 },
    { name: "Valuation (DCF, Comparable, LBO)", level: 85 },
    { name: "Financial Statement Analysis", level: 95 },
    { name: "Budgeting & Forecasting", level: 85 },
    { name: "Risk Assessment", level: 80 },
    { name: "M&A, Due Diligence", level: 85 },
  ]

  const consultingSkills = [
    { name: "Market Research", level: 85 },
    { name: "Data Analysis", level: 90 },
    { name: "Strategic Planning", level: 80 },
    { name: "Business Process Improvement", level: 85 },
    { name: "Research Methodology", level: 90 },
    { name: "Report Writing", level: 95 },
  ]

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-blue-100">Skills</h1>
        </motion.div>

        <FuturisticCard className="p-6 md:p-8 mb-8">
          <motion.p
            className="text-blue-300 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            With a diverse background in finance, consulting, and research, I've developed a comprehensive skill set
            that enables me to tackle complex challenges and deliver impactful solutions.
          </motion.p>
        </FuturisticCard>

        <div className="space-y-16">
          {/* Technical Skills */}
          <section>
            <SectionHeading title="Technical Skills" subtitle="Tools and technologies I work with" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <SkillBadge name={skill.name} icon={skill.icon} />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Financial Analysis */}
          <section>
            <SectionHeading title="Financial Analysis" subtitle="Core financial competencies" />
            <FuturisticCard>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {financialSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between">
                        <span className="text-blue-200 font-medium">{skill.name}</span>
                        <span className="text-blue-300">{skill.level}%</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-900/50">
                          <motion.div
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500/80 to-blue-600/80"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </FuturisticCard>
          </section>

          {/* Consulting & Research */}
          <section>
            <SectionHeading title="Consulting & Research" subtitle="Strategic and analytical capabilities" />
            <FuturisticCard>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {consultingSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between">
                        <span className="text-blue-200 font-medium">{skill.name}</span>
                        <span className="text-blue-300">{skill.level}%</span>
                      </div>
                      <div className="relative pt-1">
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-900/50">
                          <motion.div
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-indigo-600/80 to-indigo-500/80"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </FuturisticCard>
          </section>

          {/* Soft Skills */}
          <section>
            <SectionHeading title="Soft Skills" subtitle="Interpersonal and leadership abilities" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <FuturisticCard className="h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-100">Communication & Leadership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc pl-5 text-blue-300">
                      <li>Public Speaking</li>
                      <li>Team Leadership</li>
                      <li>Written Communication</li>
                      <li>Presentation Skills</li>
                      <li>Negotiation</li>
                      <li>Conflict Resolution</li>
                    </ul>
                  </CardContent>
                </FuturisticCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FuturisticCard className="h-full">
                  <CardHeader>
                    <CardTitle className="text-blue-100">Problem Solving & Adaptability</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 list-disc pl-5 text-blue-300">
                      <li>Critical Thinking</li>
                      <li>Analytical Reasoning</li>
                      <li>Adaptability</li>
                      <li>Time Management</li>
                      <li>Attention to Detail</li>
                      <li>Cultural Intelligence</li>
                    </ul>
                  </CardContent>
                </FuturisticCard>
              </motion.div>
            </div>
          </section>

          {/* Professional Knowledge */}
          <section>
            <SectionHeading title="Professional Knowledge" subtitle="Domain expertise and industry knowledge" />
            <FuturisticCard>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-semibold text-blue-100 mb-3">Accounting & Taxation</h3>
                    <ul className="space-y-2 list-disc pl-5 text-blue-300">
                      <li>Financial Accounting</li>
                      <li>Cost Accounting</li>
                      <li>Audit Procedures</li>
                      <li>Direct & Indirect Taxation</li>
                      <li>Regulatory Compliance</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="font-semibold text-blue-100 mb-3">Finance & Banking</h3>
                    <ul className="space-y-2 list-disc pl-5 text-blue-300">
                      <li>Corporate Finance</li>
                      <li>Investment Analysis</li>
                      <li>Banking Operations</li>
                      <li>Risk Management</li>
                      <li>Financial Markets</li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <h3 className="font-semibold text-blue-100 mb-3">Consulting</h3>
                    <ul className="space-y-2 list-disc pl-5 text-blue-300">
                      <li>Strategic Planning</li>
                      <li>Change Management</li>
                      <li>Business Analysis</li>
                      <li>Process Improvement</li>
                      <li>Stakeholder Management</li>
                    </ul>
                  </motion.div>
                </div>
              </CardContent>
            </FuturisticCard>
          </section>
        </div>
      </div>
    </main>
  )
}

