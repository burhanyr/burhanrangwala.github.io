"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Leadership & Extracurricular", href: "/leadership-extracurricular" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Media", href: "/media" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-950/80 backdrop-blur-md shadow-md shadow-blue-900/30" : "bg-blue-950/50 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4" aria-label="Global">
        <motion.div
          className="flex lg:flex-1"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold sm:text-base mr-4 text-blue-100">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
              Burhan Rangwala
            </span>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 overflow-x-auto">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium relative px-2 py-1 transition-colors duration-300 ${
                  pathname === item.href ? "text-blue-200" : "text-blue-400 hover:text-blue-200"
                }`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 rounded-full"
                    layoutId="underline"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            asChild
            className="rounded-full bg-gradient-to-r from-blue-600/80 to-blue-700/80 hover:from-blue-700/80 hover:to-blue-800/80 text-white shadow-md backdrop-blur-sm"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="fixed inset-0 bg-blue-950/95 backdrop-blur-md"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between p-4 border-b border-blue-800/50">
                <Link href="/" className="text-xl font-bold text-blue-100" onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                    Burhan Rangwala
                  </span>
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2.5 text-blue-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root px-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                <div className="space-y-1 py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={`block py-3 text-base font-medium rounded-md px-3 ${
                          pathname === item.href
                            ? "bg-blue-900/50 text-blue-200 border-l-2 border-blue-400"
                            : "text-blue-300 hover:bg-blue-900/30 hover:text-blue-200"
                        }`}
                        onClick={() => {
                          setMobileMenuOpen(false)
                          window.scrollTo(0, 0)
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Button
                    asChild
                    className="w-full rounded-full bg-gradient-to-r from-blue-600/80 to-blue-700/80 hover:from-blue-700/80 hover:to-blue-800/80 text-white shadow-md"
                  >
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Contact Me
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

