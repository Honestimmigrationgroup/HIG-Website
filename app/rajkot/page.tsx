"use client"

import React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Award, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Globe,
  Clock,
  DollarSign
} from "lucide-react"
import Image from "next/image"

export default function RajkotStudyAbroad() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const rajkotBenefits = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: "Local Expertise",
      description: "Located in heart of Rajkot with deep understanding of local student needs"
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "1000+ Success Stories",
      description: "Over 1000 Rajkot students successfully placed in universities worldwide"
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Expert Consultants",
      description: "Experienced team with in-depth knowledge of admission processes"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Personalized Support",
      description: "One-on-one counseling tailored to your specific goals and profile"
    },
  ]

  const rajkotTestimonials = [
    {
      name: "Priya Sharma",
      university: "Stanford, USA",
      text: "HIG's team in Rajkot helped me navigate the entire process. Their guidance on essays and interviews was invaluable!",
      location: "Rajkot"
    },
    {
      name: "Aditya Patel",
      university: "University of Toronto, Canada",
      text: "Best decision to visit HIG's office in Rajkot. They explained everything clearly and made the visa process stress-free.",
      location: "Rajkot"
    },
    {
      name: "Nisha Desai",
      university: "University of Melbourne, Australia",
      text: "Perfect guidance from HIG Rajkot. They helped me with IELTS coaching and university selection. Top-notch service!",
      location: "Rajkot"
    },
  ]

  const whyRajkotStudents = [
    {
      title: "Proximity & Accessibility",
      description: "Visit our Rajkot office anytime for face-to-face consultations"
    },
    {
      title: "Familiar Culture",
      description: "Team understands Gujarati and local educational background"
    },
    {
      title: "Local Success Stories",
      description: "Learn from Rajkot students who have successfully studied abroad"
    },
    {
      title: "Community Support",
      description: "Strong network of HIG alumni from Rajkot region"
    },
  ]

  const services = [
    {
      title: "Study Abroad Counseling",
      description: "Personalized guidance for country selection and university shortlisting",
      icon: "🎓"
    },
    {
      title: "IELTS/PTE Coaching",
      description: "Expert coaching for English proficiency tests",
      icon: "📚"
    },
    {
      title: "Visa Assistance",
      description: "End-to-end visa application support and documentation",
      icon: "📄"
    },
    {
      title: "University Application",
      description: "Help with application, essays, and interview preparation",
      icon: "✍️"
    },
    {
      title: "Scholarship Guidance",
      description: "Identify and apply for merit-based scholarships",
      icon: "💰"
    },
    {
      title: "Pre-Departure Support",
      description: "Orientation and support before your journey abroad",
      icon: "✈️"
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Honest Immigration Group - Rajkot Branch",
        "image": "https://honestimmigrationgroup.in/logo.png",
        "description": "Study abroad consultant in Rajkot, Gujarat offering overseas education guidance, visa assistance, and test preparation",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "2nd Floor, Keshav Arcade, Main Road, Kalavad Rd, Rajkot",
          "addressLocality": "Rajkot",
          "addressRegion": "Gujarat",
          "postalCode": "360005",
          "addressCountry": "IN"
        },
        "telephone": "+91-281-258-8121",
        "email": "inquiries.hig@gmail.com",
        "url": "https://honestimmigrationgroup.in",
        "priceRange": "$$",
        "areaServed": {
          "@type": "City",
          "name": "Rajkot"
        },
        "serviceArea": {
          "@type": "City",
          "name": "Rajkot, Gujarat, India"
        }
      })}} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Study Abroad from <span className="text-blue-600">Rajkot</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Expert overseas education guidance in Rajkot, Gujarat. Your trusted consultant for USA, UK, Canada, Australia, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="tel:+912812588121" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition inline-flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +91-281-258-8121
              </a>
            </div>
          </div>

          {/* Office Info */}
          <div className="bg-blue-600 text-white rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg mb-2">Visit Our Rajkot Office</h3>
                <p>2nd Floor, Keshav Arcade, Main Road, Kalavad Rd, Rajkot, Gujarat 360005</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HIG Rajkot */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why 1000+ Rajkot Students Choose HIG</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rajkotBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services in Rajkot</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rajkot Students */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Students from Rajkot Trust HIG</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {whyRajkotStudents.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-1">{reason.title}</h3>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories from Rajkot</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-lg mb-6">"{rajkotTestimonials[currentTestimonialIndex].text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold">{rajkotTestimonials[currentTestimonialIndex].name}</p>
                <p className="text-blue-600 font-semibold">{rajkotTestimonials[currentTestimonialIndex].university}</p>
                <p className="text-gray-500 text-sm">From {rajkotTestimonials[currentTestimonialIndex].location}</p>
              </div>
              <div className="flex gap-2 justify-center mt-6">
                {rajkotTestimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonialIndex(idx)}
                    className={`w-3 h-3 rounded-full transition ${
                      idx === currentTestimonialIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Study Abroad?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Book your free consultation at our Rajkot office. Our expert consultants will guide you through every step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Book Free Consultation
            </Link>
            <a href="tel:+912812588121" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Call Now: +91-281-258-8121
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
