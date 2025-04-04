"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Mail } from "lucide-react"
import VideoComponent from "@/components/video-component"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { HobbyCard } from "@/components/ui/hobby-card"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-blue-900">About Me</h1>
        </motion.div>

        <AnimatedCard className="p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <motion.div
              className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold shrink-0 mx-auto md:mx-0 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              BR
            </motion.div>
            <div>
              <motion.h2
                className="text-2xl font-semibold mb-4 text-blue-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Burhan Rangwala
              </motion.h2>
              <motion.p
                className="text-blue-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                I'm an enthusiast for management finance and sustainability, driven by a passion for nurturing
                change-makers and championing equal opportunities.
                <br />
                <br />
                As a Master's in Commerce graduate specializing in Banking and Finance, a Chartered Accountancy finalist
                and an aspiring USCPA candidate, my journey has traversed the vibrant landscapes of Statutory Audit,
                Risk Compliance, Direct and Indirect Taxation, Consulting, Financial Planning and Analysis, and
                Valuation.
                <br />
                <br />I bring a diverse skill set honed through active engagement in research spanning policy dynamics,
                entrepreneurship, sustainability, and behavioral analysis. My professional canvas extends to working
                with intriguing ventures including a financial advisory firm and a socio-tech startup in India.
                <br />
                <br />
                Beyond the realms of finance, my inspiration finds its roots in unwavering faith and a connection with
                nature. If you envision a collaboration, an exciting opportunity, or simply a coffee chat to explore
                possibilities, don't hesitate to reach out!
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-blue-300 text-blue-700 hover:bg-blue-100"
                >
                  <Link href="/resume">
                    <FileText className="mr-2 h-4 w-4" />
                    View Resume
                  </Link>
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedCard>

        <div className="space-y-12">
          <section>
            <SectionHeading title="Professional Journey" />
            <AnimatedCard className="p-6">
              <motion.p
                className="text-blue-600 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                My professional journey spans various roles in finance, consulting, and research. As a Consultant at
                Creative Consultancy in Mumbai, I developed pricing models using game theory and conducted in-depth
                financial analysis for multiple firms. I've also worked as a Research Assistant at the National
                Institute of Public Finance and Policy, analyzing large-scale consumer datasets to identify financial
                trends.
              </motion.p>
              <motion.p
                className="text-blue-600 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                During my three-year tenure as an Articled Apprentice at SGCO in Mumbai, I gained valuable experience in
                financial statement preparation, external statutory audits, and taxation. I've also founded Boom and
                Beacon, where I empower individuals through business awareness and skill development initiatives.
              </motion.p>
              <motion.p
                className="text-blue-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                My diverse experience has equipped me with a comprehensive understanding of financial systems, data
                analysis, and business strategy, allowing me to approach problems with a multifaceted perspective.
              </motion.p>
            </AnimatedCard>
          </section>

          <section>
            <SectionHeading title="Education & Certifications" />
            <AnimatedCard className="p-6">
              <motion.p
                className="text-blue-600 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                I hold a Master of Commerce in Banking & Institutions from the University of Mumbai, and a Bachelor of
                Commerce in Financial Accounting and Auditing. Currently, I'm pursuing a Master of Science in Finance
                with a Data Analytics track at the University of Illinois at Urbana Champaign, expected to graduate in
                December 2025.
              </motion.p>
              <motion.p
                className="text-blue-600 mb-4 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                I've qualified for the Intermediate (Level 2) of Chartered Accountancy from the Institute of Chartered
                Accountants of India. I'm also a US CPA aspirant, having cleared Financial Accounting & Reporting and
                Business & Economic concepts, with expected completion in May 2025. Additionally, I'm pursuing the CFA
                Level 1, expected to complete in November 2025.
              </motion.p>
              <motion.p
                className="text-blue-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                My educational background provides me with a strong foundation in finance and accounting, which I
                continuously enhance through professional certifications and coursework.
              </motion.p>
            </AnimatedCard>
          </section>

          <section>
            <SectionHeading title="Featured Video" />
            <AnimatedCard className="p-6">
              <VideoComponent videoId="u4ZoJKF_VuA" />
            </AnimatedCard>
          </section>

          <section>
            <SectionHeading title="My Philosophy" />
            <AnimatedCard className="p-6">
              <motion.ul
                className="space-y-4 list-disc pl-5 text-blue-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <li className="text-lg">Gratitude and faith.</li>
                <li className="text-lg">Kaizen.</li>
                <li className="text-lg">Having a strong value system.</li>
                <li className="text-lg">To live every experience and have no regrets!</li>
              </motion.ul>
            </AnimatedCard>
          </section>

          <section>
            <SectionHeading title="Personal Interests" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Public Speaking", image: "/placeholder.svg?height=200&width=300" },
                { name: "Adventure", image: "/placeholder.svg?height=200&width=300" },
                { name: "Cultural Intelligence", image: "/placeholder.svg?height=200&width=300" },
                { name: "Antiques & Currency", image: "/placeholder.svg?height=200&width=300" },
                { name: "Badminton", image: "/placeholder.svg?height=200&width=300" },
                { name: "Haiku", image: "/placeholder.svg?height=200&width=300" },
                { name: "Swimming", image: "/placeholder.svg?height=200&width=300" },
                { name: "Nature", image: "/placeholder.svg?height=200&width=300" },
                { name: "Travel", image: "/placeholder.svg?height=200&width=300" },
                { name: "Meditation", image: "/placeholder.svg?height=200&width=300" },
              ].map((hobby, index) => (
                <motion.div
                  key={hobby.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <HobbyCard name={hobby.name} image={hobby.image} />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

