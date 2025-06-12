"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingIndicator() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const handleStart = (url: string) => {
      // Solo mostrar el indicador si es una nueva ruta
      if (url !== pathname) {
        timeout = setTimeout(() => setIsLoading(true), 100) // Pequeño retraso para evitar parpadeos
      }
    }

    const handleComplete = () => {
      clearTimeout(timeout)
      setIsLoading(false)
    }

    router.events?.on("routeChangeStart", handleStart)
    router.events?.on("routeChangeComplete", handleComplete)
    router.events?.on("routeChangeError", handleComplete)

    return () => {
      router.events?.off("routeChangeStart", handleStart)
      router.events?.off("routeChangeComplete", handleComplete)
      router.events?.off("routeChangeError", handleComplete)
      clearTimeout(timeout)
    }
  }, [router, pathname])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-pastel-red to-pastel-red-dark"
        >
          <motion.div
            className="h-full bg-white/30"
            animate={{
              width: ["0%", "100%"],
              transition: { duration: 1, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
