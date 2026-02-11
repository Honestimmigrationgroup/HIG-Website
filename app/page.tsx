"use client"

import DestinationCarousel from "@/components/destination-carousel"
import FloatingNavigation from "@/components/floating-navigation"
import ServicesCarousel from "@/components/services-carousel"
import TestimonialSlider from "@/components/testimonial-slider"
import { ArrowRight, ChevronRight, MessageSquare, Star, Users, Zap, CheckCircle, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "name": "Honest Immigration Group",
      "alternateName": "HIG Rajkot",
      "url": "https://honestimmigration.com",
      "logo": "https://honestimmigration.com/logo.png",
      "description": "Honest Immigration Group in Rajkot, Gujarat, is your trusted local expert for overseas education, student visas, and study abroad guidance. Personalized support for USA, UK, Canada, Australia, and more. 1000+ Rajkot students placed.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Keshav Arcade, Main Road, Kalavad Rd, near Bonanza Salon, Royal Park Corner, Opposite State Bank Of Hyderabad",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "postalCode": "360005",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-281-258-8121",
        "contactType": "customer service",
        "email": "inquiries.hig@gmail.com",
        "availableLanguage": ["English", "Hindi", "Gujarati"]
      },
      "sameAs": [
        "https://www.facebook.com/HIGRAJKOT/",
        "https://www.instagram.com/hig_rajkot/"
      ],
      "serviceArea": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Study Abroad Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Overseas Education Counselling",
              "description": "Personalized counseling sessions for study abroad planning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Test Preparation Coaching",
              "description": "IELTS, PTE, TOEFL, SAT, GMAT, GRE coaching"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Honest Immigration Group offer in Rajkot, Gujarat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide overseas education counseling, test preparation, university selection, visa assistance, and scholarship guidance for students in Rajkot and Gujarat."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Honest Immigration Group located in Rajkot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our office is at 2nd Floor, Keshav Arcade, Main Road, Kalavad Rd, near Bonanza Salon, Royal Park Corner, Opposite State Bank Of Hyderabad, Rajkot, Gujarat 360005."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Honest Immigration Group in Rajkot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can call us at +91-281-258-8121 or email inquiries.hig@gmail.com."
          }
        }
      ]
    },
    {
      "@type": "QAPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why choose Honest Immigration Group in Rajkot for study abroad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are Rajkot's most trusted overseas education consultants with 1000+ successful students, local expertise, and personalized support for Gujarat students."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Golden Star Animation Effect
  useEffect(() => {
    const createGoldenStars = () => {
      const starsContainer = document.querySelector(".golden-stars-container")
      if (!starsContainer) return

      // Create multiple golden stars
      for (let i = 0; i < 12; i++) {
        const star = document.createElement("div")
        star.className = "golden-star"
        star.innerHTML = "★"

        // Random positioning
        star.style.left = Math.random() * 100 + "%"
        star.style.top = Math.random() * 100 + "%"
        star.style.fontSize = Math.random() * 1.5 + 0.8 + "rem"

        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + "s"

        starsContainer.appendChild(star)

        // Remove star after animation cycle
        setTimeout(() => {
          if (star.parentNode) {
            star.parentNode.removeChild(star)
          }
        }, 4000)
      }
    }

    // Create initial stars
    createGoldenStars()

    // Create stars periodically
    const starsInterval = setInterval(createGoldenStars, 2500)

    return () => {
      clearInterval(starsInterval)
    }
  }, [])

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("why-choose")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <FloatingNavigation />

      {/* Hero Section */}
      <section
        id="hero"
        className="hero-section relative min-h-screen flex items-center justify-center pt-16 pb-0 overflow-hidden"
      >
        {/* Golden Stars Animation Container */}
        <div className="golden-stars-container"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="hero-title-responsive font-bold mb-6 leading-tight">
                <span className="hero-title-1 block text-orange-500">Your Dreams,</span>
                <span className="hero-title-2 block">Our Expertise</span>
              </h1>
              <p className="hero-subtitle text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
                Transform your educational aspirations into reality with India's most trusted overseas education
                consultancy. We've guided over 1000+ students to their dream universities across 6 countries.
              </p>
              <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={scrollToNextSection}
                  className="btn-primary inline-flex items-center justify-center"
                  aria-label="Explore our services"
                >
                  Explore
                  <ArrowRight className="ml-2" size={18} aria-hidden="true" />
                </button>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex items-center justify-center"
                  aria-label="Start your study abroad journey"
                >
                  Start your Journey
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div
                  className="absolute -inset-8 bg-gradient-to-b from-orange-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse-slow transform rotate-90"
                  aria-hidden="true"
                ></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Jun%2016%2C%202025%2C%2012_13_11%20PM-jS5XtqM5XnWBKkTnRZNUKa9lNIOfTo.png"
                  alt="Students celebrating graduation - Global Education Opportunities"
                  width={450}
                  height={375}
                  className="relative z-10 enhanced-float max-w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose" className="hero-to-section-blend section-padding" aria-labelledby="why-choose-title">
        <div className="container mx-auto px-4">
          <h2 id="why-choose-title" className="section-title animate-on-scroll animate-title">
            Why Choose <span className="text-orange-500">Honest Immigration Group</span>?
          </h2>
          <p className="section-subtitle animate-on-scroll animate-subtitle">
            We are committed to providing personalized guidance and comprehensive support to help you achieve your study
            abroad dreams.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-8 stagger-children">
            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-all duration-300 group-hover:scale-110">
                <Users className="text-blue-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                Expert Guidance
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                Our experienced counselors provide personalized guidance tailored to your academic goals and career
                aspirations.
              </p>
            </article>

            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-all duration-300 group-hover:scale-110">
                <Star className="text-yellow-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                100% Success Rate
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                We have successfully helped over 1000+ students achieve their study abroad dreams with our proven
                methodology.
              </p>
            </article>

            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-all duration-300 group-hover:scale-110">
                <MessageSquare
                  className="text-green-500 group-hover:text-white transition-colors duration-300"
                  size={32}
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                End-to-End Support
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                From university selection to visa approval and post-arrival support, we are with you every step of the
                way.
              </p>
            </article>

            <article className="why-choose-card card p-6 text-center h-full group">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-all duration-300 group-hover:scale-110">
                <Zap className="text-orange-500 group-hover:text-white transition-colors duration-300" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-600 transition-colors duration-300">
                Fast Processing
              </h3>
              <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                Our streamlined processes and strong university partnerships ensure quick application processing and
                responses.
              </p>
            </article>
          </div>

          {/* Success Stories Preview */}
          <div className="mt-8 lg:mt-12 animate-on-scroll">
            <h3 className="text-2xl font-bold text-center mb-8 animate-title">Our Success Stories</h3>
            <TestimonialSlider />
            <div className="text-center mt-8">
              <Link
                href="/success-stories"
                className="inline-flex items-center text-orange-500 font-semibold hover:underline"
                aria-label="View all student success stories"
              >
                View All Success Stories
                <ChevronRight className="ml-1" size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Study Destinations Section */}
      <section id="destinations" className="py-12 lg:py-16 bg-white" aria-labelledby="destinations-title">
        <div className="container mx-auto px-4">
          <h2 id="destinations-title" className="section-title animate-on-scroll animate-title">
            Choose your <span className="text-orange-500">Study Destination</span>
          </h2>
          <p className="section-subtitle animate-on-scroll animate-subtitle">
            Explore top educational destinations around the world and find the perfect fit for your academic journey.
          </p>

          <div className="animate-on-scroll">
            <DestinationCarousel />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 lg:py-16 section-blend" aria-labelledby="services-title">
        <div className="container mx-auto px-4">
          <h2 id="services-title" className="section-title animate-on-scroll animate-title">
            Our <span className="text-orange-500">Comprehensive Services</span>
          </h2>
          <p className="section-subtitle animate-on-scroll animate-subtitle">
            Complete end-to-end support for your overseas education journey.
          </p>

          <div className="animate-on-scroll">
            <ServicesCarousel />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/services#top"
              className="inline-flex items-center text-orange-500 font-semibold hover:underline"
              aria-label="View all our services"
              onClick={() => {
                // Ensure page scrolls to top when navigating
                setTimeout(() => window.scrollTo(0, 0), 100)
              }}
            >
              View All Services
              <ChevronRight className="ml-1" size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Rajkot Office Section */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title animate-on-scroll animate-title">
            Study Abroad from <span className="text-orange-500">Rajkot, Gujarat</span>
          </h2>
          <p className="section-subtitle animate-on-scroll animate-subtitle">
            Visit our local office in Rajkot for personalized consultation and support
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Our Rajkot Office</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">2nd Floor, Keshav Arcade, Main Road, Kalavad Rd, Rajkot, Gujarat 360005</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-orange-500" size={20} />
                  <a href="tel:+912812588121" className="text-blue-600 font-semibold hover:underline">+91-281-258-8121</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-orange-500" size={20} />
                  <a href="mailto:inquiries.hig@gmail.com" className="text-blue-600 font-semibold hover:underline">inquiries.hig@gmail.com</a>
                </div>
              </div>
              <Link
                href="/rajkot"
                className="mt-6 inline-flex items-center bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Learn More About Rajkot
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Why Choose Our Rajkot Office</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Local expertise with deep understanding of Rajkot students</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">1000+ successful students from Rajkot placed globally</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Personalized counseling and face-to-face consultations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Expert guidance in IELTS, PTE, and university applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Complete support from application to visa approval</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
