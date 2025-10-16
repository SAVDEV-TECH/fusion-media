 'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// import {Link} from 'next'
import {
  Sparkles,
  Palette,
  Rocket,
  Star,
  MessageCircle,
  Menu,
  X,
} from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ContactForm = dynamic(() => import('@/components/contact/ContactForm'), {
  ssr: false,
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <main className="min-h-screen bg-white text-blue-900 overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-blue-900 text-white fixed top-0 left-0 z-50 shadow-md">
        <div className="flex justify-between items-center h-20 px-6 md:px-12">
          {/* Logo */}
          <div className="flex items-center gap-3">
          <div className='w-[50px] h-[50px] rounded-full bg-blue-700'>  <Image
              src="/FUSION MIDEA BRANDING3.png"
              alt="Fusion Media logo"
              width={48}
              height={48}
              className="rounded-full"
              priority
            />
            </div>
            <h1 className="font-bold text-xl">Fusion Midea</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-blue-300 transition"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-blue-800 transition"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-blue-800 border-t border-blue-700"
            >
              <ul className="flex flex-col items-center py-4 space-y-3">
                {menuLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-lg text-white hover:text-blue-300 transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen relative px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-blue-600 mb-4"
        >
          We Propel  The Growth Of Brands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-2xl text-blue-800 max-w-2xl mb-8"
        >
          Elevate your business with strategy, design, and storytelling that
          stand out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link href='#contact' className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full">
            Let’s Build Your Brand
          </Link>
        </motion.div>

        {/* Animated Background */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ top: '10%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-50"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          style={{ bottom: '10%', right: '-10%' }}
        />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
            <p className="text-lg text-blue-800 leading-relaxed">
              Fusion Midea is a digital growth agency that helps brands dominate
              their market. We combine creative branding with data-driven
              marketing and storytelling to propel businesses forward.
               
            </p>

        <div className='my-10'> <strong>OUR MISSION :</strong>
          To propel the growth of brands in the digital space by providing comprehensive solutions in branding, marketing, advertising, sales, and social media management.
          </div>

           <div className='my-10'> <strong>OUR VISION :</strong>  To be the leading digital growth partner for businesses, known for our innovative strategies and measurable results that transform brands and accelerate their success in the digital world.</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
             {/* responsive container with 16:9 aspect ratio using Tailwind */}
<div className="max-w-4xl mx-auto aspect-[16/9]">
  <video
    src="/fm video.mp4"
    poster="/fm br.png"       // optional poster in public/
    controls
    playsInline
    autoPlay
    className="w-full h-full object-cover rounded-lg"
  />
</div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-700 mb-12"
          >
            Our Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Innovation',
                text: ' We constantly evolve our strategies and embrace new technologies to stay ahead of the curve..',
              },
              {
                icon: Palette,
                title: 'Design & Identity',
                text: ' We work as a unified team and in partnership with our clients to achieve shared goals.',
              },
              {
                icon: Rocket,
                title: 'Client Success',
                text: ' The growth and success of our clients are the ultimate measure of our own.',
              },
               {
                icon: Rocket,
                title: 'Integrity',
                text: ' We operate with honesty, transparency, and a commitment to doing what\'s right.',
              },
              {
                icon: Palette,
                title: 'Results-Oriented',
                text: '  We are driven by data and focused on delivering tangible, impactful results for every client.',
              },
            ].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-blue-50">
                  <CardContent className="p-8">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-blue-700">
                      {title}
                    </h3>
                    <p className="text-blue-800">{text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-700 mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="p-8 bg-blue-50 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Star className="w-6 h-6 text-yellow-400 mx-auto mb-4" />
                <p className="text-blue-800 italic mb-4">
                  “Fusion Media completely transformed our company’s image. The
                  results were instant.”
                </p>
                <p className="font-semibold text-blue-700">Client {i}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / FAQ Section */}
      <section id="contact" className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-700 mb-12"
          >
            Q&A / Contact Us
          </motion.h2>

          {/* FAQ */}
          <div className="space-y-8 text-left">
            {[
              {
                q: 'Do you offer website design?',
                a: 'Yes, we design and develop websites with strategic storytelling and modern UX.',
              },
              {
                q: 'Can I get a custom quote?',
                a: 'Absolutely! Send us your project details and we’ll get back within 24 hours.',
              },
              {
                q: 'How long does it take to build a brand?',
                a: 'Typically, 4–6 weeks depending on project scope and deliverables.',
              },
            ].map(({ q, a }) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-blue-700 mb-2">{q}</h3>
                <p className="text-blue-800">{a}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Join our Launching
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button className="bg-white text-blue-700 hover:bg-blue-100 text-lg px-8 py-4 rounded-full">
            <Link
              className="flex items-center gap-3"
              href="https://chat.whatsapp.com/H2pYS2mORSoF9HB8sQnAHi?mode=ems_copy_c"
              target="_blank"
            >
              <MessageCircle className="w-5 h-5" />Join
            </Link>
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-blue-950 text-blue-100 text-center">
        <p>© {new Date().getFullYear()} Fusion Midea Co. All rights reserved.</p>
      </footer>
    </main>
  );
}
