"use client"

import { CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"
import { FileText, BookOpen, Lightbulb, LineChart } from "lucide-react"

export default function ResearchPage() {
  const researchPapers = [
    {
      title: "E-mat Credits: A Bait Good Enough to Go Green",
      category: "Sustainability Research",
      description:
        "A comprehensive evaluation of adoption of demat linked eco currency system to increase active ownership and boost sustainability.",
      tags: ["Sustainability", "Financial Systems", "Environmental Economics"],
      icon: Lightbulb,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Consumer Preference: Life Insurance vs Health Insurance",
      category: "Behavioral Finance Study",
      description:
        "A behavioral study comparing the choices and perceptions between two major insurance offerings, uncovering risk perceptions.",
      tags: ["Behavioral Finance", "Risk Assessment", "Consumer Psychology"],
      icon: LineChart,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Who Steers the Wheel, the Tides or Men?",
      category: "Infrastructure Development Analysis",
      description:
        "A study examining the potential relationship between investment in port-led development and operating performance at a major port in India under Sagarmala- a government initiative.",
      tags: ["Infrastructure Economics", "Public Policy", "Performance Analysis"],
      icon: BookOpen,
      color: "from-blue-600 to-blue-800",
    },
    {
      title: "The Effect of Default Framing on Individuals' Willingness to Share Their Shopping Behavior Data",
      category: "Forthcoming Research",
      description:
        "This forthcoming study explores how default options in privacy settings influence consumers' decisions to share their shopping behavior data. The research investigates whether opt-in versus opt-out frameworks significantly impact data sharing willingness, and examines the psychological mechanisms behind these decisions including trust, perceived control, and risk assessment. The findings aim to provide insights for both policy makers designing privacy regulations and businesses seeking ethical approaches to data collection.",
      tags: ["Behavioral Economics", "Data Privacy", "Consumer Behavior", "Decision Making"],
      icon: FileText,
      color: "from-blue-500 to-blue-700",
    },
  ]

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-blue-900">Research</h1>
        </motion.div>

        <AnimatedCard className="p-6 md:p-8 mb-8">
          <motion.p
            className="text-blue-600 mb-4 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I like to study how the larger variables affect businesses, and capital markets and provide a plausible
            understanding of exogenous effects. Questions that motivate my research are shaped by the advent of
            geopolitical events, corporate positions, policies, ideologies, and identities. I am intrigued by the
            creative applications of causal analysis and hope to bring a fresh perspective to the business dynamics.
          </motion.p>
          <motion.p
            className="text-blue-600 mb-4 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Another area of interest is behavioral studies, more specifically targeted to understanding choices, and
            perceptions towards financial products as well as leveraging emotions, technology, and finance to uncover
            trends in psyche, financial decision-making, and influences in various spheres.
          </motion.p>
          <motion.p
            className="text-blue-600 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I believe sustainability is a way of life and also enjoy delving into new concepts, strategies, and ideas
            that make one appreciate the gift of life and in turn cultivate a resilient thought process. Additionally,
            studies on entrepreneurship, micro-analysis of startup culture, and interconnected variables fascinate me.
          </motion.p>
        </AnimatedCard>

        <SectionHeading title="Academic Writing" subtitle="Published and forthcoming research papers" />

        <div className="grid gap-8">
          {researchPapers.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard className="overflow-hidden">
                <div className={`bg-gradient-to-r ${paper.color} p-6 flex items-center gap-4 text-white`}>
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <paper.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{paper.title}</h2>
                    <p className="text-blue-100">{paper.category}</p>
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-blue-600 text-lg">{paper.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {paper.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="https://substack.com/@burhanrangwala/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 transition-colors duration-300 text-lg font-medium"
          >
            <FileText className="h-5 w-5" />
            Visit my blog for more research insights
          </a>
        </motion.div>
      </div>
    </main>
  )
}

