'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Clock,
  Monitor,
  Calendar,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// Header como dynamic import con SSR desactivado
const Header = dynamic(() => import('@/components/header'), { ssr: false })

export default function CursosPage() {
  return (
    <div className='bg-white'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        className='relative bg-cover bg-center bg-no-repeat py-20 lg:py-32'
        style={{
          backgroundImage:
            "url('/primer-plano-manos-femeninas-presiona-boton-inicio-aplicacion-aprender-hablar-idiomas_151013-44104.jpg')"
        }}
      >
        {/* Overlay para contraste de texto */}
        <div className='absolute inset-0 bg-gradient-to-br from-rose-light/80 via-white/70 to-rose-light/60'></div>

        <div className='relative container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-dark mb-6 leading-tight'>
              Nuestros cursos de inglés
            </h1>
            <p className='text-xl sm:text-2xl text-charcoal mb-8 leading-relaxed max-w-3xl mx-auto'>
              Elige tu nivel, modalidad y horario.{' '}
              <span className='text-pastel-red font-semibold'>
                Nosotros ponemos el método, tú pones el propósito.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Programas por edades */}
      <section className='py-8 lg:py-8 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-charcoal-dark mb-2'>
              Programas por edades
            </h2>
            <div className='w-24 h-1 bg-pastel-red mx-auto mt-4 mb-4' />
            <p className='text-gray-500 text-lg mt-4'>
              Diseñados para niños, adolescentes y adultos, alineados con
              contenidos escolares y objetivos reales.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {/* Escuelas (Primaria, ESO y Bachillerato) */}
            <Card
              className='relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('/ninas-abrazando-sosteniendo-banderas-union-europea-britanica_329181-18946.jpg')" // usa tu imagen o cámbiala si quieres otra
              }}
            >
              {/* Overlay para mejorar legibilidad */}
              <div className='absolute inset-0 bg-white/85 pointer-events-none'></div>

              <CardContent className='relative p-6 flex flex-col flex-grow'>
                {/* Header + badges */}
                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-xl font-bold text-charcoal-dark'>
                    Escuelas (Primaria, ESO y Bachillerato)
                  </h3>
                  <div className='flex flex-wrap gap-1 justify-end'>
                    <span className='bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full'>
                      6–18
                    </span>
                    <span className='bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full'>
                      Personalizado
                    </span>
                    <span className='bg-rose-100 text-rose-700 text-xs font-medium px-2 py-1 rounded-full'>
                      Alineado al colegio
                    </span>
                  </div>
                </div>

                {/* Descripción corta */}
                <p className='text-charcoal text-base mb-6 leading-relaxed'>
                  Programas alineados con los materiales escolares
                  (personalizados por nivel).
                </p>

                {/* Icon rows (manteniendo estilo) */}
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-charcoal'>
                    <Monitor className='w-5 h-5 text-red-500 mr-3' />
                    <span>Modalidad: Online y presencial</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Calendar className='w-5 h-5 text-red-500 mr-3' />
                    <span>Horarios flexibles</span>
                  </div>
                </div>

                {/* Lista de beneficios */}
                <ul className='space-y-2 mb-6 flex-grow'>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>
                      Alineado con materiales escolares (personalizado por
                      nivel)
                    </span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Apoyo académico para exámenes y deberes</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>
                      Metodología interactiva: aprendizaje divertido y natural
                    </span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>
                      Puente hacia Cambridge: KET/PET → FCE (B2) → CAE (C1)
                    </span>
                  </li>
                </ul>

                {/* Nota de confianza */}
                <p className='text-sm text-charcoal mb-6'>
                  <span className='font-medium'>Nota:</span> Práctica de
                  comprensión y expresión oral con profesores
                  nativos/especialistas.
                </p>

                {/* CTA → WhatsApp con mensaje predefinido */}
                <a
                  href='https://wa.me/34654757792?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20los%20programas%20escolares%20(Primaria%2C%20ESO%20y%20Bachillerato)%20alineados%20con%20los%20materiales%20del%20colegio%20en%20Alexandria%20Language.'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full'
                >
                  <Button
                    className='w-full bg-black hover:bg-gray-800 text-white mt-auto'
                    size='lg'
                  >
                    Obtener información sobre programas escolares
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Preparación de Exámenes Cambridge */}
            <Card
              className='relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden bg-cover bg-center'
              style={{
                // Cambia la imagen si tienes una específica en /public
                backgroundImage:
                  "url('/chico-chica-bandera-inglesa_1149-634.jpg')"
              }}
            >
              {/* Overlay para mejorar legibilidad */}
              <div className='absolute inset-0 bg-white/80 pointer-events-none'></div>

              <CardContent className='relative p-6 flex flex-col flex-grow'>
                {/* Título + badges */}
                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-xl font-bold text-charcoal-dark'>
                    Preparación de Exámenes Cambridge
                  </h3>
                  <div className='flex flex-wrap gap-1 justify-end'>
                    <span className='bg-rose-100 text-rose-700 text-xs font-medium px-2 py-1 rounded-full'>
                      Más Popular
                    </span>
                    <span className='bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full'>
                      A2–C2
                    </span>
                  </div>
                </div>

                {/* Descripción */}
                <p className='text-charcoal text-base mb-4 leading-relaxed'>
                  Preparamos a estudiantes de todas las edades para cada examen
                  oficial de Cambridge English.
                </p>

                {/* Young Learners */}
                <div className='space-y-2 mb-4'>
                  <p className='text-charcoal-dark font-semibold'>
                    Young Learners
                  </p>
                  <p className='text-charcoal'>
                    <strong>Starters</strong>, <strong>Movers</strong>,{' '}
                    <strong>Flyers</strong> – aprendizaje divertido, interactivo
                    y sin estrés.
                  </p>
                </div>

                {/* Teens & Adults */}
                <div className='space-y-2 mb-6'>
                  <p className='text-charcoal-dark font-semibold'>
                    Adolescentes y Adultos
                  </p>
                  <p className='text-charcoal'>
                    <strong>KET (A2)</strong>, <strong>PET (B1)</strong>,{' '}
                    <strong>FCE (B2)</strong>,<strong>CAE (C1)</strong>,{' '}
                    <strong>CPE (C2)</strong> – preparación seria con
                    estrategias interactivas inteligentes.
                  </p>
                </div>

                {/* Lista de beneficios */}
                <ul className='space-y-2 mb-8 flex-grow'>
                  <li className='flex items-start text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                    <span>
                      <span className='font-medium'>Estrategias completas</span>
                      : Listening, Reading, Use of English, Writing, Speaking
                    </span>
                  </li>
                  <li className='flex items-start text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                    <span>Mock exams con retroalimentación detallada</span>
                  </li>
                  <li className='flex items-start text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5' />
                    <span>
                      Resultados probados con un alto índice de aprobados
                    </span>
                  </li>
                </ul>

                {/* CTA */}
                <div className='mt-auto'>
                  {/* Empezar tu preparación → WhatsApp */}
                  <a
                    href='https://wa.me/34654757792?text=Hola%2C%20quiero%20empezar%20mi%20preparaci%C3%B3n%20para%20un%20examen%20de%20Cambridge%20(KET%2F%20PET%2F%20FCE%2F%20CAE%2F%20CPE).%20%C2%BFPod%C3%A9is%20darme%20informaci%C3%B3n%20sobre%20fechas%20y%20precios%3F'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-full'
                  >
                    <Button
                      className='w-full bg-black hover:bg-gray-800 text-white'
                      size='lg'
                    >
                      Empezar tu preparación
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Adultos */}
            <Card
              className='relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('/hombre-guapo-sosteniendo-bandera-reino-unido_1368-9681(1).jpg')"
              }}
            >
              {/* Overlay para mejorar legibilidad */}
              <div className='absolute inset-0 bg-white/80 pointer-events-none'></div>

              <CardContent className='relative p-6 flex flex-col flex-grow'>
                {/* Título + badges */}
                <div className='flex items-start justify-between mb-4'>
                  <h3 className='text-xl font-bold text-charcoal-dark'>
                    Adultos
                  </h3>
                  <div className='flex flex-wrap gap-1 justify-end'>
                    <span className='bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full'>
                      18+
                    </span>
                    <span className='bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full'>
                      Personalizado
                    </span>
                    <span className='bg-rose-100 text-rose-700 text-xs font-medium px-2 py-1 rounded-full'>
                      Especialidades
                    </span>
                  </div>
                </div>

                {/* Descripción principal */}
                <p className='text-charcoal text-base mb-6 leading-relaxed'>
                  Cursos personalizados para{' '}
                  <span className='font-semibold'>ti</span> y tus objetivos.
                  Prueba de nivel gratuita.
                </p>

                {/* Info clave (icon rows) */}
                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-charcoal'>
                    <Monitor className='w-5 h-5 text-red-500 mr-3' />
                    <span>Modalidad: Online, horarios flexibles</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Calendar className='w-5 h-5 text-red-500 mr-3' />
                    <span>
                      Programa personalizado (opcional) adaptado a tu nivel y
                      objetivos
                    </span>
                  </div>
                </div>

                {/* Lista de beneficios */}
                <ul className='space-y-2 mb-8 flex-grow'>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Grupos de conversación</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>English gym</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Clases privadas 1:1</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>
                      Especialidades: Inglés de negocios e inglés médico
                      (profesores especialistas)
                    </span>
                  </li>
                </ul>

                {/* CTA → WhatsApp para iniciar prueba de nivel */}
                <a
                  href='https://wa.me/34654757792?text=Hola%2C%20quiero%20comenzar%20mi%20prueba%20de%20nivel%20gratuita%20para%20Adultos.%20%C2%BFPod%C3%A9is%20darme%20informaci%C3%B3n%20sobre%20horarios%20(online%2Fpresencial)%20y%20el%20programa%20personalizado%3F'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full'
                >
                  <Button
                    className='w-full bg-black hover:bg-gray-800 text-white mt-auto'
                    size='lg'
                  >
                    Comienza tu prueba de nivel gratuita
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Niveles disponibles */}
      <section className='py-8 lg:py-8 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold text-charcoal-dark mb-2'>
              Niveles disponibles
            </h2>
            <div className='w-24 h-1 bg-pastel-red mx-auto mt-4 mb-4' />
            <p className='text-gray-500 text-lg mt-4'>
              Encuentra el curso perfecto para ti, diseñado para cada etapa de
              tu aprendizaje.
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8 max-w-7xl mx-auto'>
            {/* Principiante */}
            <Card
              className='relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('/vista-superior-diccionario-ingles-herramientas_23-2149440469.jpg')"
              }}
            >
              {/* Overlay para mejorar legibilidad */}
              <div className='absolute inset-0 bg-white/70'></div>

              <CardContent className='relative p-6 flex flex-col flex-grow'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-xl font-bold text-charcoal-dark'>
                    Principiante
                  </h3>
                  <span className='bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full'>
                    A1–A2
                  </span>
                </div>
                <p className='text-charcoal text-base mb-6 leading-relaxed'>
                  Ideal para quienes empiezan desde cero o tienen conocimientos
                  muy básicos.
                </p>

                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-charcoal'>
                    <Clock className='w-5 h-5 text-red-500 mr-3' />
                    <span>Duración: 4 meses</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Monitor className='w-5 h-5 text-red-500 mr-3' />
                    <span>Modalidad: Online y Presencial</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Calendar className='w-5 h-5 text-red-500 mr-3' />
                    <span>Horarios flexibles</span>
                  </div>
                </div>

                <ul className='space-y-2 mb-8 flex-grow'>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Bases sólidas del idioma</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Vocabulario esencial</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Conversaciones cotidianas</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Pronunciación clara</span>
                  </li>
                </ul>

                <Button
                  className='w-full bg-black hover:bg-gray-800 text-white mt-auto'
                  size='lg'
                >
                  <Link href='/contacto'>Empezar ahora</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Intermedio */}
            <Card
              className='relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden bg-cover bg-center'
              style={{
                backgroundImage:
                  "url('/pilas-libros-ingles-mesa-espacio-trabajo_23-2149429598.jpg')"
              }}
            >
              {/* Overlay para mejorar legibilidad */}
              <div className='absolute inset-0 bg-white/80'></div>

              <CardContent className='relative p-6 flex flex-col flex-grow'>
                <div className='flex items-baseline justify-between mb-4'>
                  <h3 className='text-xl font-bold text-charcoal-dark'>
                    Intermedio
                  </h3>
                  <div className='flex items-baseline gap-1'>
                    <span className='bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full -mt-1'>
                      Más Popular
                    </span>
                    <span className='bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full'>
                      B1–B2
                    </span>
                  </div>
                </div>

                <p className='text-charcoal text-base mb-6 leading-relaxed'>
                  Perfecto para consolidar conocimientos y ganar fluidez en
                  conversaciones cotidianas y profesionales.
                </p>

                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-charcoal'>
                    <Clock className='w-5 h-5 text-red-500 mr-3' />
                    <span>Duración: 4 meses</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Monitor className='w-5 h-5 text-red-500 mr-3' />
                    <span>Modalidad: Online y Presencial</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Calendar className='w-5 h-5 text-red-500 mr-3' />
                    <span>Horarios flexibles</span>
                  </div>
                </div>

                <ul className='space-y-2 mb-8 flex-grow'>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Fluidez conversacional</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Comprensión avanzada</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Gramática práctica</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Preparación exámenes oficiales</span>
                  </li>
                </ul>

                <Button
                  className='w-full bg-black hover:bg-gray-800 text-white mt-auto'
                  size='lg'
                >
                  <Link href='/contacto'>Mejorar nivel</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Avanzado */}
            <Card
              className='relative rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden bg-cover'
              style={{
                backgroundImage:
                  "url('/tailandia-bangkok-1-abril-2023-libro-ingles-alcantarillado-aprendizaje-globo-tutorial_622428-6933.jpg')",
                backgroundPosition: 'left center' // mueve la imagen hacia la derecha
              }}
            >
              {/* Overlay para mejorar legibilidad */}
              <div className='absolute inset-0 bg-white/85'></div>

              <CardContent className='relative p-6 flex flex-col flex-grow'>
                <div className='flex items-center justify-between mb-4'>
                  <h3 className='text-xl font-bold text-charcoal-dark'>
                    Avanzado
                  </h3>
                  <span className='bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full'>
                    C1
                  </span>
                </div>
                <p className='text-charcoal text-base mb-6 leading-relaxed'>
                  Para quienes buscan dominar el inglés a nivel profesional y
                  académico con total confianza.
                </p>

                <div className='space-y-3 mb-6'>
                  <div className='flex items-center text-charcoal'>
                    <Clock className='w-5 h-5 text-red-500 mr-3' />
                    <span>Duración: 4 meses</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Monitor className='w-5 h-5 text-red-500 mr-3' />
                    <span>Modalidad: Online y Presencial</span>
                  </div>
                  <div className='flex items-center text-charcoal'>
                    <Calendar className='w-5 h-5 text-red-500 mr-3' />
                    <span>Horarios flexibles</span>
                  </div>
                </div>

                <ul className='space-y-2 mb-8 flex-grow'>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Dominio profesional</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Expresión sofisticada</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Inglés académico</span>
                  </li>
                  <li className='flex items-center text-charcoal'>
                    <CheckCircle className='w-5 h-5 text-green-500 mr-2 flex-shrink-0' />
                    <span>Debate y argumentación</span>
                  </li>
                </ul>

                <Button
                  className='w-full bg-black hover:bg-gray-800 text-white mt-auto'
                  size='lg'
                >
                  <Link href='/contacto'>Dominar inglés</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparativa visual de cursos */}
      <section className='py-8 lg:py-8 bg-rose-light/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl lg:text-4xl font-bold text-charcoal-dark mb-12 text-center'>
              Comparativa de cursos
            </h2>

            {/* --- Vista móvil: tarjetas apiladas (mejor UX que tabla recortada) --- */}
            <div className='md:hidden space-y-4'>
              {/* Beginner */}
              <div className='bg-white rounded-lg shadow-lg p-4'>
                <div className='flex items-start mb-3'>
                  <BookOpen className='w-5 h-5 text-pastel-red mr-2 mt-0.5' />
                  <div>
                    <p className='font-semibold text-charcoal-dark'>Beginner</p>
                    <p className='text-sm text-charcoal'>A1 – A2</p>
                  </div>
                </div>
                <div className='space-y-2 text-sm'>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Enfoque
                    </span>
                    <span className='text-charcoal flex-1'>
                      Comunicación básica y vocabulario esencial
                    </span>
                  </div>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Duración
                    </span>
                    <span className='text-charcoal flex-1'>4 meses</span>
                  </div>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Objetivo
                    </span>
                    <span className='text-charcoal flex-1'>
                      Conversaciones cotidianas simples
                    </span>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className='bg-white rounded-lg shadow-lg p-4'>
                <div className='flex items-start mb-3'>
                  <Users className='w-5 h-5 text-pastel-red mr-2 mt-0.5' />
                  <div>
                    <p className='font-semibold text-charcoal-dark'>
                      Intermediate
                    </p>
                    <p className='text-sm text-charcoal'>B1 – B2</p>
                  </div>
                </div>
                <div className='space-y-2 text-sm'>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Enfoque
                    </span>
                    <span className='text-charcoal flex-1'>
                      Fluidez y comprensión avanzada
                    </span>
                  </div>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Duración
                    </span>
                    <span className='text-charcoal flex-1'>4 meses</span>
                  </div>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Objetivo
                    </span>
                    <span className='text-charcoal flex-1'>
                      Comunicación profesional y social
                    </span>
                  </div>
                </div>
              </div>

              {/* Advanced */}
              <div className='bg-white rounded-lg shadow-lg p-4'>
                <div className='flex items-start mb-3'>
                  <Award className='w-5 h-5 text-pastel-red mr-2 mt-0.5' />
                  <div>
                    <p className='font-semibold text-charcoal-dark'>Advanced</p>
                    <p className='text-sm text-charcoal'>C1</p>
                  </div>
                </div>
                <div className='space-y-2 text-sm'>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Enfoque
                    </span>
                    <span className='text-charcoal flex-1'>
                      Perfeccionamiento académico y profesional
                    </span>
                  </div>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Duración
                    </span>
                    <span className='text-charcoal flex-1'>4 meses</span>
                  </div>
                  <div className='flex'>
                    <span className='w-24 text-charcoal-dark font-medium'>
                      Objetivo
                    </span>
                    <span className='text-charcoal flex-1'>
                      Dominio completo del idioma
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* --- Vista escritorio/tablet: tu tabla original --- */}
            <div className='hidden md:block overflow-x-auto'>
              <div className='min-w-full bg-white rounded-lg shadow-lg overflow-hidden'>
                <table className='min-w-full'>
                  <thead className='bg-pastel-red/10'>
                    <tr>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-charcoal-dark'>
                        Nivel
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-charcoal-dark'>
                        Enfoque
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-charcoal-dark'>
                        Duración
                      </th>
                      <th className='px-6 py-4 text-left text-sm font-semibold text-charcoal-dark'>
                        Objetivo
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-rose-100'>
                    <tr className='hover:bg-rose-light/20 transition-colors'>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <BookOpen className='w-5 h-5 text-pastel-red mr-2' />
                          <div>
                            <p className='font-semibold text-charcoal-dark'>
                              Beginner
                            </p>
                            <p className='text-sm text-charcoal'>A1 – A2</p>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-charcoal'>
                        Comunicación básica y vocabulario esencial
                      </td>
                      <td className='px-6 py-4 text-charcoal'>4 meses</td>
                      <td className='px-6 py-4 text-charcoal'>
                        Conversaciones cotidianas simples
                      </td>
                    </tr>
                    <tr className='hover:bg-rose-light/20 transition-colors'>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <Users className='w-5 h-5 text-pastel-red mr-2' />
                          <div>
                            <p className='font-semibold text-charcoal-dark'>
                              Intermediate
                            </p>
                            <p className='text-sm text-charcoal'>B1 – B2</p>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-charcoal'>
                        Fluidez y comprensión avanzada
                      </td>
                      <td className='px-6 py-4 text-charcoal'>4 meses</td>
                      <td className='px-6 py-4 text-charcoal'>
                        Comunicación profesional y social
                      </td>
                    </tr>
                    <tr className='hover:bg-rose-light/20 transition-colors'>
                      <td className='px-6 py-4'>
                        <div className='flex items-center'>
                          <Award className='w-5 h-5 text-pastel-red mr-2' />
                          <div>
                            <p className='font-semibold text-charcoal-dark'>
                              Advanced
                            </p>
                            <p className='text-sm text-charcoal'>C1</p>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4 text-charcoal'>
                        Perfeccionamiento académico y profesional
                      </td>
                      <td className='px-6 py-4 text-charcoal'>4 meses</td>
                      <td className='px-6 py-4 text-charcoal'>
                        Dominio completo del idioma
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Cómo elijo mi nivel? - Rediseñado */}
      <section className='py-8 lg:py-8 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
            {/* Columna izquierda: Contenido textual */}
            <div>
              <h2 className='text-3xl lg:text-4xl font-bold text-charcoal-dark mb-6'>
                ❓ ¿Cómo elijo mi nivel?
              </h2>
              <p className='text-lg text-charcoal mb-6 leading-relaxed'>
                Si no estás seguro de tu nivel actual de inglés, no te
                preocupes.
                <br />
                En Alexandria Language ofrecemos una prueba de nivel
                completamente gratuita y sin compromiso.
              </p>
              <p className='text-lg text-charcoal mb-8 leading-relaxed'>
                Nuestros profesores evaluarán tus habilidades en expresión oral,
                comprensión auditiva, lectura y escritura para recomendarte el
                curso que mejor se adapte a tus necesidades y objetivos.
              </p>

              <h3 className='text-xl font-bold text-charcoal-dark mb-4'>
                La prueba de nivel incluye:
              </h3>
              <ul className='space-y-3 mb-10'>
                <li className='flex items-center text-charcoal text-lg'>
                  <CheckCircle className='w-6 h-6 text-green-500 mr-3 flex-shrink-0' />
                  <span>Evaluación escrita (20 minutos)</span>
                </li>
                <li className='flex items-center text-charcoal text-lg'>
                  <CheckCircle className='w-6 h-6 text-green-500 mr-3 flex-shrink-0' />
                  <span>Entrevista oral con un profesor (15 minutos)</span>
                </li>
                <li className='flex items-center text-charcoal text-lg'>
                  <CheckCircle className='w-6 h-6 text-green-500 mr-3 flex-shrink-0' />
                  <span>
                    Análisis personalizado de tus fortalezas y áreas de mejora
                  </span>
                </li>
                <li className='flex items-center text-charcoal text-lg'>
                  <CheckCircle className='w-6 h-6 text-green-500 mr-3 flex-shrink-0' />
                  <span>Recomendación del curso más adecuado para ti</span>
                </li>
                <li className='flex items-center text-charcoal text-lg'>
                  <CheckCircle className='w-6 h-6 text-green-500 mr-3 flex-shrink-0' />
                  <span>Asesoramiento sobre objetivos y expectativas</span>
                </li>
              </ul>

              {/* <Button
                size='lg'
                className='bg-pastel-red hover:bg-pastel-red-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                <Link href='/contacto' className='flex items-center'>
                  Solicita tu prueba de nivel{' '}
                  <ArrowRight className='ml-2 w-5 h-5' />
                </Link>
              </Button> */}
            </div>

            {/* Columna derecha: Imagen + Tarjeta "Gratis" */}
            <div className='flex flex-col items-center justify-center relative'>
              <div className='relative'>
                <img
                  src='/chica-joven-jengibre-gafas-escuchando-texto_357704-1561.jpg'
                  alt='Chica joven pelirroja con gafas escuchando un texto - Prueba de nivel gratuita'
                  className='rounded-lg shadow-lg object-cover w-full h-auto max-w-md md:max-w-none'
                />
                <div className='absolute bottom-4 right-4'>
                  <Card className='bg-pastel-red text-white px-6 py-3 rounded-lg shadow-md'>
                    <CardContent className='p-0 text-xl font-bold'>
                      Gratis
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner final */}
      <section className='py-8 lg:py-8 bg-[#1e1e1e]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
              No importa dónde empiezas. Importa dónde quieres llegar.
            </h2>
            <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
              Nuestro equipo está listo para ayudarte a alcanzar tus objetivos
              con el inglés. Da el primer paso hoy.
            </p>
            <Button
              size='lg'
              className='bg-pastel-red hover:bg-pastel-red-dark text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              <Link href='/contacto'>Contáctanos hoy →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-charcoal-dark text-white py-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8 text-center md:text-left'>
            {/* Logo and description */}
            <div className='md:col-span-2'>
              <h3 className='text-2xl font-bold mb-4'>Alexandria Language</h3>
              <p className='text-gray-300 mb-4'>
                Tu escuela de inglés de confianza. Aprendizaje efectivo,
                profesores certificados y resultados garantizados.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className='font-semibold mb-4'>Navegación</h4>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/about'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href='/cursos'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    Cursos
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contacto'
                    className='text-gray-300 hover:text-white transition-colors'
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className='font-semibold mb-4'>Contacto</h4>
              <div className='space-y-2'>
                <div className='flex items-center justify-center md:justify-start space-x-2'>
                  <Mail className='w-4 h-4' />
                  <span className='text-gray-300'>
                    contacto@alexandrialanguage.com
                  </span>
                </div>
                <div className='flex items-center justify-center md:justify-start space-x-2'>
                  <Phone className='w-4 h-4' />
                  <span className='text-gray-300'>+34 654 757 792</span>
                </div>
              </div>

              {/* Social Media */}
              <div className='flex justify-center md:justify-start space-x-4 mt-6'>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-gray-300 hover:text-white p-2'
                >
                  <Facebook className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-gray-300 hover:text-white p-2'
                >
                  <Instagram className='w-5 h-5' />
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='text-gray-300 hover:text-white p-2'
                >
                  <Twitter className='w-5 h-5' />
                </Button>
              </div>
            </div>
          </div>

          <div className='border-t border-gray-700 mt-8 pt-8 text-center'>
            <p className='text-gray-300'>
              © {new Date().getFullYear()} Stella Group. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
