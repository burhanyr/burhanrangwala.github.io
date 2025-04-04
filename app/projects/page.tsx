"use client"
import { ProjectCard } from "@/components/ui/project-card"
import { motion } from "framer-motion"
import {
  Building,
  BrainCircuit,
  TrendingUp,
  LineChart,
  Database,
  BarChartIcon as ChartBar,
  FileText,
  Users,
} from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Analysis on the Survey of Economic Well-Being of US Households",
      description:
        "Conducted a comprehensive analysis of economic well-being indicators across US households, identifying key trends in financial stability, savings behaviors, and economic resilience factors. The study provided insights into disparities in economic security and potential policy interventions.",
      tags: ["Economic Analysis", "Survey Research", "Data Visualization", "Policy Implications"],
      icon: Users,
    },
    {
      title: "Review of The NUDGE Trial for Medication Adherence",
      description:
        "Analyzed the methodology and findings of the NUDGE pragmatic trial designed to enhance medication adherence. The review examined behavioral economics principles applied in healthcare settings and evaluated the effectiveness of various nudge interventions in improving patient outcomes.",
      tags: ["Behavioral Economics", "Healthcare Research", "Clinical Trials", "Intervention Analysis"],
      icon: FileText,
    },
    {
      title: "LBO Model for Pharmaceutical Acquisition",
      description:
        "Built an LBO model to evaluate the acquisition of a pharmaceutical company, analyzing financing, synergies and exit strategies, achieving an IRR of 19%.",
      tags: ["Leveraged Buyout", "M&A Analysis", "Financial Modeling", "Exit Strategy"],
      icon: Building,
    },
    {
      title: "Impact of AI & Technology on Valuation",
      description:
        "Conducted an in-depth analysis of ServiceNow to evaluate the impact of AI and technology on company valuation, utilizing DCF methodology and capital structure analysis to quantify the technology premium in market valuation.",
      tags: ["DCF Analysis", "Capital Structure", "Technology Valuation", "AI Impact Assessment"],
      icon: BrainCircuit,
    },
    {
      title: "Cryptocurrency Portfolio Simulation",
      description:
        "Simulated a $10,000 cryptocurrency portfolio, leveraging predictive analytics and risk management strategies to achieve a target 3x return over 2 months.",
      tags: ["Predictive Analytics", "Risk Management", "Portfolio Optimization", "Cryptocurrency"],
      icon: TrendingUp,
    },
    {
      title: "Harvard Case Competition",
      description:
        "Led a team of 5 to ascertain acquisition feasibility for a luxury automobile company, analyzing market trends and financial implications.",
      tags: ["Team Leadership", "M&A Analysis", "Market Research", "Financial Modeling"],
      icon: LineChart,
    },
    {
      title: "Financial Data Analysis",
      description:
        "Analyzed large-scale consumer datasets to identify financial trends and consumer behavior patterns, providing strategic insights for business decision-making.",
      tags: ["Data Analysis", "Consumer Behavior", "Market Trends", "Strategic Planning"],
      icon: Database,
    },
    {
      title: "Corporate Financial Performance Analysis",
      description:
        "Conducted comprehensive financial performance analysis for multiple corporations, identifying key growth drivers and areas for operational improvement.",
      tags: ["Financial Analysis", "Performance Metrics", "Trend Analysis", "Benchmarking"],
      icon: ChartBar,
    },
  ]

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-indigo-100">Projects</h1>
          <p className="text-indigo-300 mb-8 text-lg">
            Here are some of the key projects I've worked on, showcasing my expertise in financial analysis, research,
            and strategic planning.
          </p>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                icon={project.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}

