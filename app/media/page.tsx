"use client"
import { AnimatedCard } from "@/components/ui/animated-card"
import { motion } from "framer-motion"
import { Award, Star, Trophy, ExternalLink } from "lucide-react"

export default function MediaPage() {
  const awards = [
    {
      title: "Best Speaker, 2nd Place",
      year: "2022",
      description:
        "Awarded as Best Speaker, 2nd place during the GMCS course 2022, conducted by the Institute of Chartered Accountants of India, Mumbai.",
      icon: Trophy,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Special Mention & Best Answer",
      year: "2020",
      description:
        "Recognized with Special Mention & Best Answer at Model United Nations, 2020 and Mock Parliament 2020 conducted by the Rotaract Club of Mumbai Western Elite, Mumbai.",
      icon: Award,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Best Organizer",
      year: "2017",
      description:
        "Lauded as 'Best Organizer' for the position of Head- Marketing & Strategy at Economics Association by the NM College, Mumbai 2017.",
      icon: Star,
      color: "from-blue-600 to-blue-800",
    },
  ]

  return (
    <main className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-6 text-blue-900">Media & Recognition</h1>
        </motion.div>

        <AnimatedCard className="p-6 md:p-8 mb-8">
          <motion.p
            className="text-blue-600 mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Throughout my academic and professional journey, I've been fortunate to receive recognition for my
            contributions and achievements in various fields. These accolades reflect my commitment to excellence and
            continuous growth.
          </motion.p>
        </AnimatedCard>

        <div className="grid gap-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnimatedCard className="overflow-hidden">
                <div className={`bg-gradient-to-r ${award.color} p-6 flex items-center gap-4 text-white`}>
                  <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                    <award.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold">{award.title}</h2>
                    <p className="text-blue-100">{award.year}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-blue-600 text-lg">{award.description}</p>
                </div>
              </AnimatedCard>
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
          <AnimatedCard className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-full">
                <ExternalLink className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-900">Media Appearances</h2>
                <p className="text-blue-700 text-lg">
                  I occasionally participate in discussions and presentations related to finance, sustainability, and
                  business strategy. Check back for updates on recent media appearances and publications.
                </p>
              </div>
            </div>
          </AnimatedCard>
        </motion.div>
      </div>
    </main>
  )
}

