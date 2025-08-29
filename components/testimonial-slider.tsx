"use client"

import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Zuveriya Kashmani",
    university: "Nottingham Trent University",
    country: "UK",
    quote:
      "Successfully achieved UK Student Visa approval for BSc (Hons) Construction Management. The guidance throughout the process was invaluable.",
  },
  {
    name: "Dharmik Dhudhat",
    university: "RMIT University",
    country: "Australia",
    quote:
      "Got my Australia Student Visa approved for Master of Information Technology. HIG supported me at every step of my journey!",
  },
  {
    name: "Insiya Makda",
    university: "RMIT University",
    country: "Australia",
    quote:
      "Thanks to HIG's expert guidance, I received my Australia Student Visa for Master in Professional Accounting. Forever grateful!",
  },
  {
    name: "Devanshi Makwana",
    university: "Ulster University",
    country: "UK",
    quote:
      "The counselors at HIG are extremely knowledgeable. They helped me secure UK Student Visa for MSc International Business with Data Analytics.",
  },
  {
    name: "Meet Vaghani",
    university: "Queensland University of Technology",
    country: "Australia",
    quote:
      "My Australia Student Visa was approved for Masters in Advanced Robotics and AI thanks to the expert guidance from the HIG team.",
  },
  {
    name: "Manan Bechra",
    university: "De Montfort University",
    country: "UK",
    quote:
      "HIG made the entire UK Student Visa process smooth and stress-free for my BA (Hons) Business Management program. Highly recommend their services!",
  },
]

const TestimonialSlider = () => {
  const [slidesToShow, setSlidesToShow] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1)
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2)
      } else {
        setSlidesToShow(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Create multiple copies for seamless infinite scroll
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="relative overflow-hidden testimonial-container">
      <div
        className="flex animate-scroll-testimonials"
        style={{
          width: `${(extendedTestimonials.length / slidesToShow) * 100}%`,
        }}
      >
        {extendedTestimonials.map((testimonial, index) => (
          <div
            key={`${testimonial.name}-${index}`}
            className="flex-shrink-0 px-3"
            style={{ width: `${100 / extendedTestimonials.length}%` }}
          >
            <div className="bg-gray-900 text-white rounded-xl p-4 h-full flex flex-col">
              <div className="flex items-center mb-3">
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-300">{testimonial.university}</p>
                  <p className="text-xs text-orange-500">{testimonial.country}</p>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-300 italic text-sm">"{testimonial.quote}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
