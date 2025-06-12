"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail, MapPin, BookOpen } from "lucide-react"
import { usePathname } from "next/navigation"
import TransitionLink from "./transition-link"

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActivePage = (page: string) => {
    if (page !== "/" && pathname.includes(page)) return true
    return false
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100 h-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <TransitionLink href="/" className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2e1e1e] to-[#d46a6a] flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">AL</span>
                </div>
                <span className="text-2xl font-bold text-charcoal-dark hover:text-pastel-red transition-colors">
                  Alexandria Language
                </span>
              </TransitionLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <TransitionLink
                href="/about"
                className={`transition text-gray-700 hover:text-[#d46a6a] font-medium ${
                  isActivePage("/about") ? "text-[#d46a6a] border-b-2 border-[#d46a6a] pb-[2px]" : ""
                }`}
              >
                Nosotros
              </TransitionLink>
              <TransitionLink
                href="/cursos"
                className={`transition text-gray-700 hover:text-[#d46a6a] font-medium ${
                  isActivePage("/cursos") ? "text-[#d46a6a] border-b-2 border-[#d46a6a] pb-[2px]" : ""
                }`}
              >
                Cursos
              </TransitionLink>
              <TransitionLink
                href="/contacto"
                className={`transition text-gray-700 hover:text-[#d46a6a] font-medium ${
                  isActivePage("/contacto") ? "text-[#d46a6a] border-b-2 border-[#d46a6a] pb-[2px]" : ""
                }`}
              >
                Contacto
              </TransitionLink>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-rose-100">
            <TransitionLink href="/" onClick={closeMobileMenu} className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2e1e1e] to-[#d46a6a] flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">AL</span>
              </div>
              <span className="text-xl font-bold text-charcoal-dark">Alexandria Language</span>
            </TransitionLink>
            <Button variant="ghost" size="sm" onClick={closeMobileMenu}>
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <nav className="p-6">
              <div className="space-y-2">
                <TransitionLink
                  href="/about"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    isActivePage("/about") ? "bg-pastel-red text-white" : "text-charcoal-dark hover:bg-rose-light/50"
                  }`}
                >
                  Nosotros
                </TransitionLink>
                <TransitionLink
                  href="/cursos"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    isActivePage("/cursos") ? "bg-pastel-red text-white" : "text-charcoal-dark hover:bg-rose-light/50"
                  }`}
                >
                  Cursos
                </TransitionLink>
                <TransitionLink
                  href="/contacto"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors ${
                    isActivePage("/contacto") ? "bg-pastel-red text-white" : "text-charcoal-dark hover:bg-rose-light/50"
                  }`}
                >
                  Contacto
                </TransitionLink>
              </div>
            </nav>

            {/* Quick Actions */}
            <div className="px-6 py-4 border-t border-rose-100">
              <h3 className="text-sm font-semibold text-charcoal-dark mb-4 tracking-wider">ACCIONES RÁPIDAS</h3>
              <div className="space-y-3">
                <TransitionLink href="/contacto" onClick={closeMobileMenu}>
                  <Button className="w-full bg-pastel-red hover:bg-pastel-red-dark text-white py-3 rounded-lg transition-all duration-300">
                    <Phone className="w-4 h-4 mr-2" />
                    Solicitar prueba de nivel
                  </Button>
                </TransitionLink>
                <TransitionLink href="/cursos" onClick={closeMobileMenu}>
                  <Button
                    variant="outline"
                    className="w-full border-pastel-red text-pastel-red hover:bg-pastel-red hover:text-white py-3 rounded-lg transition-all duration-300"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Ver cursos disponibles
                  </Button>
                </TransitionLink>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="p-6 border-t border-rose-100 bg-rose-light/20">
            <h3 className="text-sm font-semibold text-charcoal-dark mb-4 tracking-wider">CONTACTO</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-pastel-red flex-shrink-0" />
                <span className="text-sm text-charcoal">+34 600 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-pastel-red flex-shrink-0" />
                <span className="text-sm text-charcoal">contacto@alexandrialanguage.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-pastel-red flex-shrink-0" />
                <span className="text-sm text-charcoal">Calle Ficticia 123, Madrid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
