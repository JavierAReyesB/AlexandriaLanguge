import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Monitor,
  Users,
  Award,
  BookOpen,
  Heart,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Quote,
  Star,
} from "lucide-react"
import Header from "@/components/header"
import TransitionLink from "@/components/transition-link"

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-light via-white to-rose-light/50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-dark mb-6 leading-tight">
              Aprende inglés. <span className="text-pastel-red">Mejora tu futuro.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-charcoal mb-8 leading-relaxed max-w-3xl mx-auto">
              Clases presenciales y online con profesores certificados y un enfoque práctico. En Alexandria Language, el
              inglés se aprende de verdad.
            </p>
            <Button
              size="lg"
              className="bg-pastel-red hover:bg-pastel-red-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Quiero mejorar mi inglés
            </Button>
          </div>
        </div>
      </section>

      {/* Mini About Teaser */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-6">¿Quiénes somos?</h2>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              Somos una escuela de idiomas moderna especializada en la enseñanza del inglés con un enfoque cercano,
              dinámico y orientado a resultados.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-pastel-red text-pastel-red hover:bg-pastel-red hover:text-white transition-all duration-300"
            >
              <TransitionLink href="/about">Conócenos mejor</TransitionLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Cursos Teaser */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-2">Nuestros cursos</h2>
            <p className="text-gray-500 text-lg mt-2">
              Programas estructurados para todos los niveles, desde principiante hasta avanzado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-10">
            {/* Beginner Course */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-green-400 relative">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-charcoal-dark">Beginner</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">A1–A2</span>
                </div>
                <p className="text-charcoal text-sm mb-6 leading-relaxed">
                  Ideal para quienes empiezan desde cero. Aprende las bases del inglés de forma sólida y divertida.
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>4 meses</span>
                  <span>Online y Presencial</span>
                </div>
              </div>
            </div>

            {/* Intermediate Course */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-red-400 relative">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-charcoal-dark">Intermediate</h3>
                  <div className="flex items-center gap-1">
                    <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                      Más popular
                    </span>
                    <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">B1–B2</span>
                  </div>
                </div>
                <p className="text-charcoal text-sm mb-6 leading-relaxed">
                  Perfecto para consolidar conocimientos y ganar fluidez en conversaciones cotidianas y profesionales.
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>4 meses</span>
                  <span>Online y Presencial</span>
                </div>
              </div>
            </div>

            {/* Advanced Course */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-400 relative">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-charcoal-dark">Advanced</h3>
                  <span className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">C1</span>
                </div>
                <p className="text-charcoal text-sm mb-6 leading-relaxed">
                  Para quienes buscan dominar el inglés a nivel profesional y académico con total confianza.
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>4 meses</span>
                  <span>Online y Presencial</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-md transition-all duration-300"
            >
              <TransitionLink href="/cursos" className="flex items-center">
                Ver todos los cursos
                <span className="ml-2">→</span>
              </TransitionLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-6">¿Por qué elegir Alexandria?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastel-red/20 transition-colors">
                <Monitor className="w-10 h-10 text-pastel-red" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Clases online y presenciales</h3>
              <p className="text-sm text-charcoal">Flexibilidad total para adaptarnos a tu horario</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastel-red/20 transition-colors">
                <Award className="w-10 h-10 text-pastel-red" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Profesores certificados</h3>
              <p className="text-sm text-charcoal">Docentes nativos y bilingües con experiencia</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastel-red/20 transition-colors">
                <Users className="w-10 h-10 text-pastel-red" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Grupos reducidos</h3>
              <p className="text-sm text-charcoal">Máximo 8 estudiantes por clase para mayor atención</p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastel-red/20 transition-colors">
                <BookOpen className="w-10 h-10 text-pastel-red" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Material actualizado</h3>
              <p className="text-sm text-charcoal">Recursos modernos y tecnología educativa</p>
            </div>

            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-20 h-20 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pastel-red/20 transition-colors">
                <Heart className="w-10 h-10 text-pastel-red" />
              </div>
              <h3 className="font-semibold text-charcoal-dark mb-2">Acompañamiento personalizado</h3>
              <p className="text-sm text-charcoal">Seguimiento individual de tu progreso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-16 lg:py-24 bg-rose-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-6">Lo que dicen nuestros alumnos</h2>
            <p className="text-gray-500 text-lg mt-2">
              Historias reales de estudiantes que han transformado su futuro con nosotros
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Quote className="w-8 h-8 text-pastel-red-light mb-4 mx-auto block" />
                <div className="flex mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal mb-4 italic">
                  "En 6 meses logré el nivel que necesitaba para mi trabajo. Los profesores son excelentes y las clases
                  muy dinámicas."
                </p>
                <div className="border-t border-rose-100 pt-4">
                  <p className="font-semibold text-charcoal-dark">María González</p>
                  <p className="text-sm text-charcoal">28 años, Ingeniera</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Quote className="w-8 h-8 text-pastel-red-light mb-4 mx-auto block" />
                <div className="flex mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal mb-4 italic">
                  "Alexandria me ayudó a conseguir la beca para estudiar en el extranjero. El enfoque práctico marca la
                  diferencia."
                </p>
                <div className="border-t border-rose-100 pt-4">
                  <p className="font-semibold text-charcoal-dark">Carlos Ruiz</p>
                  <p className="text-sm text-charcoal">22 años, Estudiante</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Quote className="w-8 h-8 text-pastel-red-light mb-4 mx-auto block" />
                <div className="flex mb-3 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-charcoal mb-4 italic">
                  "Después de años intentando aprender inglés, aquí finalmente lo conseguí. El ambiente es muy
                  motivador."
                </p>
                <div className="border-t border-rose-100 pt-4">
                  <p className="font-semibold text-charcoal-dark">Ana Martín</p>
                  <p className="text-sm text-charcoal">35 años, Ejecutiva</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 px-4 bg-[#1e1e1e]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Tu nivel de inglés puede <span className="text-[#d46a6a]">cambiar tu vida.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Descubre todo lo que puedes lograr con el dominio del inglés. Tu futuro profesional y personal te está
              esperando.
            </p>
            <Button
              size="lg"
              className="bg-[#d46a6a] hover:bg-[#c65959] text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 mx-auto"
            >
              <TransitionLink href="/contacto" className="flex items-center">
                Contáctanos hoy
                <span className="ml-2">→</span>
              </TransitionLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-dark text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and description */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Alexandria Language</h3>
              <p className="text-gray-300 mb-4">
                Tu escuela de inglés de confianza. Aprendizaje efectivo, profesores certificados y resultados
                garantizados.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2">
                <li>
                  <TransitionLink href="/about" className="text-gray-300 hover:text-white transition-colors">
                    Nosotros
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/cursos" className="text-gray-300 hover:text-white transition-colors">
                    Cursos
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                    Contacto
                  </TransitionLink>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-300">info@alexandria-language.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-300">+34 123 456 789</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} Alexandria Language. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
