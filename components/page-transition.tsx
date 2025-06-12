'use client'

import type React from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()

  // Reset scroll when pathname changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className='relative flex flex-col min-h-screen'
    >
      {children}
    </motion.div>
  )
}
