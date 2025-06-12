import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Target,
  Eye,
  MessageCircle,
  Award,
  BookOpen,
  Users,
  Heart,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-light via-white to-rose-light/50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-dark mb-6 leading-tight">
              Quiénes somos
            </h1>
            <p className="text-xl sm:text-2xl text-charcoal mb-8 leading-relaxed max-w-3xl mx-auto">
              Enseñar inglés es nuestra pasión.{" "}
              <span className="text-pastel-red font-semibold">Acompañarte a dominarlo, nuestra misión.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Historia de la Escuela */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-8 text-center">Nuestra historia</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="prose prose-lg max-w-none text-charcoal leading-relaxed">
                <p className="text-lg mb-4">
                  Alexandria Language nació con un propósito claro: acercar el inglés a personas reales, con métodos
                  actuales, docentes apasionados y un ambiente acogedor.
                </p>
                <p className="text-lg mb-4">
                  Fundada en 2019, nuestra escuela se ha convertido en un espacio donde aprender inglés no solo es
                  efectivo, sino también inspirador. Creemos que cada estudiante tiene un potencial único, y nuestro
                  trabajo es ayudarle a descubrirlo y desarrollarlo.
                </p>
                <p className="text-lg">
                  A lo largo de estos años, hemos acompañado a cientos de estudiantes en su viaje hacia el dominio del
                  inglés, viendo cómo transforman no solo su nivel del idioma, sino también su confianza y sus
                  oportunidades profesionales.
                </p>
              </div>
              <Card className="bg-rose-light/50 border-rose-100 shadow-lg relative h-full flex items-center justify-center aspect-square rounded-3xl max-w-sm mx-auto">
                <CardContent className="p-0 flex items-center justify-center h-full w-full">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Alexandria Language School"
                    className="object-cover w-full h-full"
                  />
                </CardContent>
                <div className="absolute bottom-[-20px] right-[-20px] bg-white px-6 py-4 rounded-lg shadow-md text-center">
                  <p className="text-2xl font-bold text-pastel-red">2019</p>
                  <p className="text-base text-charcoal">Año de fundación</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-rose-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-2">Nuestra Misión y Visión</h2>
            <div className="w-24 h-1 bg-pastel-red mx-auto mt-4 mb-4" />
            <p className="text-gray-500 text-lg mt-4">
              Descubre los pilares que guían nuestra enseñanza y nuestro futuro.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Misión */}
              <Card className="bg-white shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu">
                <CardContent className="px-6 py-10 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">Nuestra Misión</h3>
                  <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto">
                    Nuestra misión es empoderar a jóvenes y adultos a través del dominio del inglés, con una enseñanza
                    cercana, personalizada y orientada a objetivos.
                  </p>
                </CardContent>
              </Card>

              {/* Visión */}
              <Card className="bg-white shadow-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu">
                <CardContent className="px-6 py-10 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-3">Nuestra Visión</h3>
                  <p className="text-gray-700 text-base leading-relaxed max-w-md mx-auto">
                    Queremos ser un referente en la enseñanza del inglés en España, ofreciendo calidad, innovación y
                    resultados reales en cada clase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Enfoque Educativo */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-12 text-center">¿Cómo enseñamos?</h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">Comunicación real</h3>
                  <p className="text-charcoal">
                    Clases enfocadas en la comunicación práctica y situaciones de la vida real.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">Profesores certificados</h3>
                  <p className="text-charcoal">Docentes con certificación internacional y experiencia comprobada.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">Materiales dinámicos</h3>
                  <p className="text-charcoal">Recursos actualizados y tecnología educativa de vanguardia.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">Seguimiento personalizado</h3>
                  <p className="text-charcoal">Monitoreo individual del progreso y adaptación a tu ritmo.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">Entorno motivador</h3>
                  <p className="text-charcoal">Ambiente cercano y sin miedo a equivocarse, donde todos aprenden.</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-pastel-red" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-3">Grupos reducidos</h3>
                  <p className="text-charcoal">Máximo 8 estudiantes por clase para atención personalizada.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-16 lg:py-24 bg-rose-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal-dark mb-12 text-center">
              Conoce a nuestro equipo
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-pastel-red/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Laura - Coordinadora académica"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-2">Laura García</h3>
                  <p className="text-pastel-red font-medium mb-3">Coordinadora Académica</p>
                  <p className="text-charcoal italic">
                    "Creo en una enseñanza que transforma vidas y abre puertas al mundo."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="James - Profesor nativo"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-2">James Wilson</h3>
                  <p className="text-pastel-red font-medium mb-3">Profesor Nativo</p>
                  <p className="text-charcoal italic">
                    "El inglés es más que gramática, es cultura, expresión y conexión."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-rose-100 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Carmen - Especialista en conversación"
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal-dark mb-2">Carmen Ruiz</h3>
                  <p className="text-pastel-red font-medium mb-3">Especialista en Conversación</p>
                  <p className="text-charcoal italic">"Cada estudiante tiene su ritmo, y mi trabajo es encontrarlo."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action final */}
      <section className="py-16 lg:py-24 bg-charcoal">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ahora que nos conoces, ¿estás listo para <span className="text-pastel-red">dar el paso</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Descubre nuestros programas y comienza tu viaje hacia el dominio del inglés.
            </p>
            <Button
              size="lg"
              className="bg-pastel-red hover:bg-pastel-red-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Link href="/cursos">Ver nuestros cursos</Link>
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
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/cursos" className="text-gray-300 hover:text-white transition-colors">
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                    Contacto
                  </Link>
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
