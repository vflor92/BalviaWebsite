"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LinkedInFeed from "@/components/LinkedInFeed";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Placeholder for Video/Image */}
        <div className="absolute inset-0 bg-neutral-900 opacity-60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        ></div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Elevating the Standard of <br />
            <span className="text-secondary">Multifamily Living</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Balvia Properties develops and operates premier communities in high-growth markets, delivering exceptional value to residents and investors alike.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Link
              href="/developments"
              className="px-8 py-4 bg-secondary text-white font-medium rounded hover:bg-white hover:text-primary transition-colors duration-300"
            >
              View Developments
            </Link>
            <Link
              href="/investors"
              className="px-8 py-4 border border-white text-white font-medium rounded hover:bg-white hover:text-primary transition-colors duration-300"
            >
              Investor Portal
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-primary">
                The Balvia Strategy
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our strategy prioritizes investing in high-growth sunbelt markets that are experiencing population and job growth outpacing the broader United States. We target rental properties for middle-class professionals in sought-after suburbs with top-rated school districts.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe that tenants at every income level aspire to live in luxurious and comfortable homes. We furnish our affordably priced apartments with single-family style upgrades and resort-style amenities.
              </p>
              <Link href="/about" className="group flex items-center gap-2 text-secondary font-medium hover:text-primary transition-colors">
                Read More About Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/strategy.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Developments Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Featured Developments</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover our portfolio of modern, amenity-rich communities designed for today&apos;s lifestyle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, title: "Premier at Katy", location: "Houston, TX", image: "/projects/premier-at-katy.jpg", link: "https://premieratkaty.com/" },
              { id: 2, title: "Premier at Morton Ranch", location: "Houston, TX", image: "/projects/premier-at-morton-ranch.jpg", link: "https://premieratmortonranch.com/", status: "Under Construction - Opening in Q1 2026" },
              { id: 3, title: "Regalia Bella Terra", location: "Houston, TX", image: "/projects/regalia-bella-terra.jpg" },
            ].map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-md bg-white">
                <div className="h-64 bg-gray-200 overflow-hidden relative">
                  <div
                    className="h-full w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  ></div>
                  {project.status && (
                    <div className="absolute top-0 left-0 right-0 bg-secondary/90 text-white text-center py-3 px-4">
                      <p className="font-medium text-sm">{project.status}</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{project.location}</p>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary text-sm font-medium hover:text-primary transition-colors"
                    >
                      View Details
                    </a>
                  ) : (
                    <Link href="/developments" className="text-secondary text-sm font-medium hover:text-primary transition-colors">
                      View Details
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/developments"
              className="inline-block px-8 py-3 border border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* LinkedIn Feed */}
      <LinkedInFeed />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Partner With Balvia</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            Join us in creating exceptional living experiences and generating superior returns.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-secondary text-white font-medium rounded hover:bg-white hover:text-primary transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
