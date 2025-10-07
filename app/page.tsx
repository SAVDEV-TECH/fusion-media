  'use client'
  import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Sparkles, Palette, Rocket, Star, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-blue-900 overflow-hidden">
      <nav className='w-full flex bg-blue-900 h-20'>
        <div className="relative w-[100px] h-[70px]">
             <img className='w-full h-full object-cover' src='/fusion.jpg' alt='fusion-media'></img>
        </div>
      
      </nav>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen relative px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-blue-600 mb-4"
        >
          We Build Bold Brands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg md:text-2xl text-blue-800 max-w-2xl mb-8"
        >
          Elevate your business with strategy, design, and storytelling that stand out.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full">
            Let’s Build Your Brand
          </Button>
        </motion.div>

        {/* Animated background */}
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
      <section className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
            <p className="text-lg text-blue-800 leading-relaxed">
          Fusion Midea is a digital growth agency that helps brands dominate their market. We fuse creative branding with data-driven marketing, advertising, and sales strategies to propel businesses forward. From brand identity to social media impact, we are your partner in sustainable digital growth.
            Born from a passion for both creativity and strategy, Fusion Midea was founded to fill a gap in the digital world. We saw too many businesses struggling with fragmented marketing efforts—a beautiful brand here, a powerful ad campaign there, but no unified strategy. Our solution is simple: a single, comprehensive agency that handles every aspect of your digital journey. We are a team of brand builders, data analysts, and storytellers, all working together to help your business achieve its full potential.
           Founded on April 7th, 2025, by DESTINY OGHENEMINE, FUSION MIDEA benefits from the vision of a renowned brand designer, creative monetization coach, digital agent, and dynamic young entrepreneur.

            </p>
            <p  className="mt-4 text-lg text-blue-800">
          <strong>Mission statement:</strong>
              To propel the growth of brands in the digital space by providing comprehensive solutions in branding, marketing, advertising, sales, and social media management.</p>
         <p className="mt-4 text-lg text-blue-800">
          <strong>
            vision :
          </strong>
           To be the leading digital growth partner for businesses, known for our innovative strategies and measurable results that transform brands and accelerate their success in the digital world.
          </p>
          </motion.div>
          <motion.img
            src="/branding-team.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-lg object-cover"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
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
            {[{
              icon: Sparkles,
              title: 'Brand Strategy',
              text: 'We craft authentic strategies that make your brand shine.'
            }, {
              icon: Palette,
              title: 'Design & Identity',
              text: 'Visual storytelling that defines who you are and what you stand for.'
            }, {
              icon: Rocket,
              title: 'Digital Experience',
              text: 'Launch websites and campaigns that drive real impact.'
            }].map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition bg-blue-50">
                  <CardContent className="p-8">
                    <Icon className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold mb-4 text-blue-700">{title}</h3>
                    <p className="text-blue-800">{text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section className="py-24 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-700 mb-12"
          >
            Our Work
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={`/project-${item}.jpg`} alt={`Project ${item}`} className="object-cover w-full h-64" />
                <div className="absolute inset-0 bg-blue-800 bg-opacity-0 group-hover:bg-opacity-70 transition flex items-center justify-center">
                  <p className="text-white text-xl opacity-0 group-hover:opacity-100 transition">View Project</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
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
            {[
              {
                cm:'“Fusion media completely transformed our company’s image. The results were instant.'
              },
              
              {
                cm:'“Fusion media completely transformed our company’s image. The results were instant.'
              },
              
              {
                cm:'“Fusion media completely transformed our company’s image. The results were instant.'
              },
            ].map(({cm},i) => (
              <motion.div
                key={i}
                className="p-8 bg-blue-50 rounded-2xl shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Star className="w-6 h-6 text-yellow-400 mx-auto mb-4" />
                <p className="text-blue-800 italic mb-4"> {cm}</p>
                <p className="font-semibold text-blue-700">Client {i}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client intake */}
        <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-blue-700 mb-12"
          >
            Client Intake / FAQ
          </motion.h2>
          <div className="space-y-8 text-left">
            {[{
              q: '  Can you briefly describe your business and what specific services you\'re looking for (e.g. social media management, paid ads, branding, etc.)?',
              // a: 'On average, 4-6 weeks depending on scope and deliverables.'
            }, {
              q: ' What are your short-term and long-term goals for your online presence'
              // a: 'Yes, we design and develop websites with strategic storytelling and modern UX.'
            }, {
              q: '  Who is your target audience, and which platforms are they most active on?',
              // a: 'Absolutely! Send us your project details and we’ll get back within 24 hours.'
            },
            {
              q:'Have you run any digital campaigns before? If yes, what worked and what didn’t?  ',
              // a:'We provide digital marketing services like social media management, paid ads (Facebook, Instagram, Google), lead generation, branding, and content creation.'
            },
             {
              q:'What is your expected timeline and budget for this project?',
 
              // a:' Just send us your answers to the client intake questions. Once we understand your needs, we’ll create a custom plan for you.'
            }, 
            
          ].map(({ q }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-blue-700 mb-2">{q}</h3>
                {/* <p className="text-blue-800">{a}</p> */}
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            
          </motion.div>
        </div>
      </section>


      {/* FAQ / Contact Section */}
      <section className="py-24 bg-blue-50">
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
          <div className="space-y-8 text-left">
            {[{
              q: 'How long does it take to build a brand?',
              a: 'On average, 4-6 weeks depending on scope and deliverables.'
            }, {
              q: 'Do you offer website design?',
              a: 'Yes, we design and develop websites with strategic storytelling and modern UX.'
            }, {
              q: 'Can I get a custom quote?',
              a: 'Absolutely! Send us your project details and we’ll get back within 24 hours.'
            },
            {
              q:'What services do you offer?  ',
              a:'We provide digital marketing services like social media management, paid ads (Facebook, Instagram, Google), lead generation, branding, and content creation.'
            },
             {
              q:'How do I get started?  ',
 
              a:' Just send us your answers to the client intake questions. Once we understand your needs, we’ll create a custom plan for you.'
            },
                    {
              q:'How long before I start seeing results?  ',
 
              a:' It depends on the service. For paid ads, results may start showing in 1–2 weeks. Organic growth may take longer. '
            },
               {
              q:'How do you communicate with clients?   ',
 
              a:'We use email, WhatsApp, and scheduled video calls for updates and progress reports.'
            },
            {
              q:'What is your pricing structure?  ',
 
              a:' We offer flexible pricing based on the services you need. After understanding your goals, we’ll provide a detailed quote.'
            },
            
          ].map(({ q, a }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-blue-700 mb-2">{q}</h3>
                <p className="text-blue-800">{a}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full flex items-center gap-2 mx-auto">
              <Link className='inline-flex gap-10 items-center' href="https://chat.whatsapp.com/H2pYS2mORSoF9HB8sQnAHi?mode=ems_copy_c"><MessageCircle className="w-5 h-5" /> Contact Us</Link>
            </Button>
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
          Ready to Transform Your Brand?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button className="bg-white text-blue-700 hover:bg-blue-100 text-lg px-8 py-4 rounded-full">
              <Link className='flex items-center gap-7' href="https://chat.whatsapp.com/H2pYS2mORSoF9HB8sQnAHi?mode=ems_copy_c"><MessageCircle className="w-5 h-5" /> Get Started</Link>  
 
          </Button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-blue-950 text-blue-100 text-center">
        <p>© {new Date().getFullYear()} Fusion Media Co. All rights reserved.</p>
      </footer>
    </main>
  )
}
