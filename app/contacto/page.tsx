'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/header'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es obligatorio'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido'
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = 'El teléfono es obligatorio'
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es obligatorio'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: ''
        })
      }, 3000)
    }
  }

  return (
    <div className='bg-white'>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-rose-light via-white to-rose-light/50 py-20 lg:py-32'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal-dark mb-6 leading-tight'>
              Hablemos
            </h1>
            <p className='text-xl sm:text-2xl text-charcoal mb-8 leading-relaxed max-w-3xl mx-auto'>
              ¿Tienes dudas? ¿Quieres empezar un curso o solicitar una prueba de
              nivel?{' '}
              <span className='text-pastel-red font-semibold'>
                Estamos aquí para ayudarte.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className='py-16 lg:py-24 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 items-start'>
              {/* Left side - Text content */}
              <div>
                <h2 className='text-3xl lg:text-4xl font-bold text-charcoal-dark mb-6'>
                  Cuéntanos cómo podemos ayudarte
                </h2>
                <p className='text-lg text-charcoal mb-8 leading-relaxed'>
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible. También puedes llamarnos directamente o
                  visitarnos en nuestro centro.
                </p>

                <div className='space-y-4'>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-pastel-red/10 rounded-full flex items-center justify-center mr-4'>
                      <CheckCircle className='w-6 h-6 text-pastel-red' />
                    </div>
                    <span className='text-charcoal'>
                      Respuesta en menos de 24 horas
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-pastel-red/10 rounded-full flex items-center justify-center mr-4'>
                      <CheckCircle className='w-6 h-6 text-pastel-red' />
                    </div>
                    <span className='text-charcoal'>
                      Asesoramiento personalizado
                    </span>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-12 h-12 bg-pastel-red/10 rounded-full flex items-center justify-center mr-4'>
                      <CheckCircle className='w-6 h-6 text-pastel-red' />
                    </div>
                    <span className='text-charcoal'>Sin compromiso</span>
                  </div>
                </div>
              </div>

              {/* Right side - Contact form */}
              <Card className='bg-white border-rose-100 shadow-lg'>
                <CardContent className='p-8'>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className='space-y-6'>
                      <div>
                        <Label
                          htmlFor='nombre'
                          className='text-charcoal-dark font-medium'
                        >
                          Nombre completo *
                        </Label>
                        <Input
                          id='nombre'
                          name='nombre'
                          type='text'
                          value={formData.nombre}
                          onChange={handleInputChange}
                          className={`mt-2 ${
                            errors.nombre
                              ? 'border-red-500'
                              : 'border-rose-200 focus:border-pastel-red'
                          }`}
                          placeholder='Tu nombre completo'
                        />
                        {errors.nombre && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.nombre}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor='email'
                          className='text-charcoal-dark font-medium'
                        >
                          Email *
                        </Label>
                        <Input
                          id='email'
                          name='email'
                          type='email'
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`mt-2 ${
                            errors.email
                              ? 'border-red-500'
                              : 'border-rose-200 focus:border-pastel-red'
                          }`}
                          placeholder='tu@email.com'
                        />
                        {errors.email && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor='telefono'
                          className='text-charcoal-dark font-medium'
                        >
                          Teléfono *
                        </Label>
                        <Input
                          id='telefono'
                          name='telefono'
                          type='tel'
                          value={formData.telefono}
                          onChange={handleInputChange}
                          className={`mt-2 ${
                            errors.telefono
                              ? 'border-red-500'
                              : 'border-rose-200 focus:border-pastel-red'
                          }`}
                          placeholder='+34 600 123 456'
                        />
                        {errors.telefono && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.telefono}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label
                          htmlFor='mensaje'
                          className='text-charcoal-dark font-medium'
                        >
                          Mensaje *
                        </Label>
                        <Textarea
                          id='mensaje'
                          name='mensaje'
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          className={`mt-2 min-h-[120px] ${
                            errors.mensaje
                              ? 'border-red-500'
                              : 'border-rose-200 focus:border-pastel-red'
                          }`}
                          placeholder='Cuéntanos qué necesitas o qué dudas tienes...'
                        />
                        {errors.mensaje && (
                          <p className='text-red-500 text-sm mt-1'>
                            {errors.mensaje}
                          </p>
                        )}
                      </div>

                      <Button
                        type='submit'
                        size='lg'
                        className='w-full bg-pastel-red hover:bg-pastel-red-dark text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105'
                      >
                        <Send className='w-5 h-5 mr-2' />
                        Enviar mensaje
                      </Button>
                    </form>
                  ) : (
                    <div className='text-center py-8'>
                      <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                        <CheckCircle className='w-8 h-8 text-green-600' />
                      </div>
                      <h3 className='text-xl font-semibold text-charcoal-dark mb-2'>
                        ¡Mensaje enviado!
                      </h3>
                      <p className='text-charcoal'>
                        Gracias por contactarnos. Te responderemos pronto.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className='py-16 lg:py-24 bg-rose-light/30'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl lg:text-4xl font-bold text-charcoal-dark mb-12 text-center'>
              ¡Escríbenos o llámanos cuando quieras!
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center max-w-3xl mx-auto'>
              <Card className='bg-white border-rose-100 hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Mail className='w-8 h-8 text-pastel-red' />
                  </div>
                  <h3 className='text-xl font-semibold text-charcoal-dark mb-2'>
                    Email
                  </h3>
                  <p className='text-charcoal'>
                    contacto@alexandrialanguage.com
                  </p>
                </CardContent>
              </Card>

              <Card className='bg-white border-rose-100 hover:shadow-lg transition-all duration-300'>
                <CardContent className='p-6 text-center'>
                  <div className='w-16 h-16 bg-pastel-red/10 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Phone className='w-8 h-8 text-pastel-red' />
                  </div>
                  <h3 className='text-xl font-semibold text-charcoal-dark mb-2'>
                    Teléfono
                  </h3>
                  <p className='text-charcoal'>+34 600 123 456</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 lg:py-24 bg-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <h2 className='text-3xl lg:text-4xl font-bold text-charcoal-dark mb-12 text-center'>
              Preguntas frecuentes
            </h2>

            <Accordion type='single' collapsible className='space-y-4'>
              <AccordionItem
                value='item-1'
                className='border border-rose-100 rounded-lg px-6'
              >
                <AccordionTrigger className='text-left text-charcoal-dark hover:text-pastel-red'>
                  ¿Necesito experiencia previa para comenzar?
                </AccordionTrigger>
                <AccordionContent className='text-charcoal'>
                  No, ofrecemos cursos desde nivel principiante absoluto.
                  Nuestro curso Beginner (A1-A2) está diseñado específicamente
                  para personas que nunca han estudiado inglés o tienen
                  conocimientos muy básicos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-2'
                className='border border-rose-100 rounded-lg px-6'
              >
                <AccordionTrigger className='text-left text-charcoal-dark hover:text-pastel-red'>
                  ¿Puedo cambiar de modalidad durante el curso
                  (online/presencial)?
                </AccordionTrigger>
                <AccordionContent className='text-charcoal'>
                  Sí, siempre que haya disponibilidad en el grupo equivalente.
                  Entendemos que las circunstancias pueden cambiar, por lo que
                  ofrecemos flexibilidad para adaptar la modalidad a tus
                  necesidades.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-3'
                className='border border-rose-100 rounded-lg px-6'
              >
                <AccordionTrigger className='text-left text-charcoal-dark hover:text-pastel-red'>
                  ¿Entregan certificados?
                </AccordionTrigger>
                <AccordionContent className='text-charcoal'>
                  Sí, al finalizar cada nivel recibirás un certificado oficial
                  del centro que acredita tu nivel de inglés según el Marco
                  Común Europeo de Referencia para las Lenguas (MCER).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-4'
                className='border border-rose-100 rounded-lg px-6'
              >
                <AccordionTrigger className='text-left text-charcoal-dark hover:text-pastel-red'>
                  ¿Cómo sé cuál es mi nivel de inglés?
                </AccordionTrigger>
                <AccordionContent className='text-charcoal'>
                  Puedes solicitar una prueba gratuita y te asesoramos sin
                  compromiso. Nuestros profesores evaluarán tus habilidades de
                  comprensión oral, expresión oral, comprensión escrita y
                  expresión escrita para recomendarte el curso más adecuado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value='item-5'
                className='border border-rose-100 rounded-lg px-6'
              >
                <AccordionTrigger className='text-left text-charcoal-dark hover:text-pastel-red'>
                  ¿Qué pasa si falto a una clase?
                </AccordionTrigger>
                <AccordionContent className='text-charcoal'>
                  Puedes recuperar el contenido con apoyo del profesor o
                  mediante recursos online. Además, proporcionamos material de
                  apoyo y grabaciones de las clases online para que no te
                  pierdas ningún contenido importante.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Llamada a la acción final */}
      <section className='py-16 lg:py-24 bg-charcoal'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
              Tu inglés puede cambiar tu futuro. Da el primer paso hoy.
            </h2>
            <Button
              size='lg'
              className='bg-white text-pastel-red hover:bg-gray-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'
            >
              Solicitar prueba de nivel gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-charcoal-dark text-white py-12'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
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
                <div className='flex items-center space-x-2'>
                  <Mail className='w-4 h-4' />
                  <span className='text-gray-300'>
                    contacto@alexandrialanguage.com
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Phone className='w-4 h-4' />
                  <span className='text-gray-300'>+34 600 123 456</span>
                </div>
              </div>

              {/* Social Media */}
              <div className='flex space-x-4 mt-6'>
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
