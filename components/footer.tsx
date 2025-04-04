"use client"

import Link from "next/link"
import { Mail, Linkedin, Globe, FileText } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-blue-900 border-t border-blue-800/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Burhan Rangwala</h3>
            <p className="text-blue-300 mb-4">Finance Professional • Consultant</p>
            <p className="text-blue-300">Champaign, IL, USA-61820</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "About Me", href: "/about" },
                { name: "Resume", href: "/resume" },
                { name: "Leadership & Extracurricular", href: "/leadership-extracurricular" },
                { name: "Research", href: "/research" },
                { name: "Projects", href: "/projects" },
                { name: "Skills", href: "/skills" },
                { name: "Media & Recognition", href: "/media" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link href={link.href} className="text-blue-400 hover:text-blue-200 transition-colors duration-300">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Connect</h3>
            <ul className="space-y-3">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="mailto:byr2@illinois.edu"
                  className="text-blue-400 hover:text-blue-200 flex items-center gap-2 transition-colors duration-300"
                >
                  <Mail className="h-4 w-4" />
                  byr2@illinois.edu
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="tel:+14479026971"
                  className="text-blue-400 hover:text-blue-200 flex items-center gap-2 transition-colors duration-300"
                >
                  <Globe className="h-4 w-4" />
                  +1 447 9026971
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://www.linkedin.com/in/burhanyrangwala"
                  className="text-blue-400 hover:text-blue-200 flex items-center gap-2 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                <Link
                  href="https://substack.com/@burhanrangwala/posts"
                  className="text-blue-400 hover:text-blue-200 flex items-center gap-2 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-4 w-4" />
                  Blog
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-blue-800/30 text-center text-blue-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-blue-400">© {new Date().getFullYear()} Burhan Rangwala. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

