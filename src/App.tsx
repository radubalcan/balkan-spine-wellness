/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Hand, 
  Activity, 
  Heart, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Menu, 
  X,
  Star,
  CheckCircle2,
  MessageCircle,
  Quote,
  Facebook,
  Instagram
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Acasă', href: '#home' },
    { name: 'Despre', href: '#about' },
    { name: 'Servicii', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex flex-col group">
          <span className={`text-xl font-bold font-playfair leading-none tracking-[0.02em] ${isScrolled ? 'text-gold-800' : 'text-gold-900'}`}>
            RUSLAN BALKAN
          </span>
          <span className={`text-[11px] font-bold font-playfair uppercase tracking-[0.4em] mt-1 ${isScrolled ? 'text-gold-600' : 'text-gold-700'}`}>
            WELLNESS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-medium hover:text-gold-600 transition-colors ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="bg-gold-600 hover:bg-gold-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-md"
          >
            Programare
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gold-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-slate-700 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-gold-600 text-white px-6 py-3 rounded-xl font-semibold">
                Programare Acum
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/spine/1920/1080?blur=2" 
          className="w-full h-full object-cover opacity-20"
          alt="Spinal Health Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gold-50/80 via-white/40 to-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gold-100 text-gold-800 text-sm font-bold mb-6 tracking-wider uppercase">
              International Practitioner
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Balkan Spine <span className="gold-text-gradient">Wellness</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl italic">
              Spine Alignment • Body Balance • Natural Recovery
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="bg-gold-600 hover:bg-gold-700 active:scale-95 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-xl flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Rezervă o Evaluare <ChevronRight className="w-5 h-5" />
              </a>
              <a 
                href="#services"
                className="bg-white border-2 border-gold-200 hover:border-gold-400 active:scale-95 text-gold-800 px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-gold-50 flex items-center justify-center w-full sm:w-auto"
              >
                Vezi Programele
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 bottom-20 hidden lg:block"
      >
        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-gold-100 flex items-center gap-4">
          <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center">
            <Activity className="text-gold-600" />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800">Postură Corectă</p>
            <p className="text-xs text-slate-500">Realiniere garantată</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Eliminarea Durerii",
      desc: "Tratăm cauza durerilor de spate, nu doar simptomele, prin realiniere precisă.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Corectarea Posturii",
      desc: "Îndreptăm deviațiile coloanei pentru o postură demnă și sănătoasă.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Mobilitate Sporită",
      desc: "Redăm flexibilitatea articulațiilor și libertatea de mișcare naturală.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold-600" />
    },
    {
      title: "Prevenție pe Termen Lung",
      desc: "Învățăm corpul să mențină echilibrul pentru a evita recidivele.",
      icon: <CheckCircle2 className="w-6 h-6 text-gold-600" />
    }
  ];

  return (
    <section className="py-20 bg-gold-50/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex flex-col items-center text-center p-6">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Povestea Noastră</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-8">
            Excelență în <span className="text-gold-600">Realiniere Vertebrală</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Balkan Spine Wellness reprezintă vârful de lance în recuperarea naturală și echilibrarea structurală a corpului. Cu o experiență internațională de peste un deceniu, ne dedicăm restabilirii sănătății coloanei tale prin tehnici avansate, non-invazive. Nu ne limităm la tratarea simptomelor; misiunea noastră este identificarea și corectarea cauzei profunde a dezechilibrelor, oferindu-ți libertatea de mișcare și postura pe care o meriți.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
            {[
              "Abordare Personalizată",
              "Tehnici Moderne",
              "Atmosferă Relaxantă",
              "Rezultate Garantate"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <CheckCircle2 className="text-gold-600 w-6 h-6 shrink-0" />
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          <div className="inline-flex flex-col items-center bg-gold-50 p-8 rounded-[2rem] border border-gold-100 mb-12 shadow-sm">
            <p className="text-5xl font-bold text-gold-700 mb-1">10+</p>
            <p className="text-sm text-gold-600 font-bold tracking-widest uppercase">Ani de Experiență Internațională</p>
          </div>

          <div className="flex justify-center">
            <a 
              href="#services"
              className="text-gold-700 font-bold flex items-center gap-2 hover:gap-4 transition-all active:scale-95"
            >
              Află mai multe despre noi <ChevronRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Realiniere Vertebrală",
      desc: "Corectarea manuală a poziției vertebrelor pentru a elibera presiunea asupra nervilor și a restabili postura.",
      icon: <Activity className="w-8 h-8" />,
    },
    {
      title: "Terapie de Recuperare",
      desc: "Programe intensive pentru hernie de disc, scolioză și cifoză, adaptate fiecărui stadiu de evoluție.",
      icon: <Heart className="w-8 h-8" />,
    },
    {
      title: "Decompresie Coloană",
      desc: "Tehnici non-invazive pentru elongația coloanei, facilitând hidratarea discurilor intervertebrale.",
      icon: <Hand className="w-8 h-8" />,
    },
    {
      title: "Masaj de Reabilitare",
      desc: "Masaj medical profund pentru relaxarea musculaturii paravertebrale și îmbunătățirea circulației.",
      icon: <Sparkles className="w-8 h-8" />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Specializările Noastre</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">Expertiză în Sănătatea Coloanei</h2>
          <p className="text-slate-600 text-lg">
            Ne concentrăm pe soluții durabile pentru îndreptarea coloanei și recuperarea funcțională completă.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:border-gold-200 transition-all"
            >
              <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <a 
                href="#contact"
                className="text-gold-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all active:scale-95"
              >
                Detalii Program <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Evaluare Inițială",
      desc: "Analizăm postura și identificăm deviațiile coloanei prin teste specifice."
    },
    {
      num: "02",
      title: "Plan Personalizat",
      desc: "Creăm un program de recuperare adaptat nevoilor și obiectivelor tale."
    },
    {
      num: "03",
      title: "Terapie Activă",
      desc: "Aplicăm tehnicile de realiniere și exercițiile de corecție posturală."
    },
    {
      num: "04",
      title: "Monitorizare",
      desc: "Urmărim progresul și ajustăm terapia pentru rezultate optime pe termen lung."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Drumul tău spre o coloană dreaptă</h2>
          <p className="text-slate-600">Un proces simplu și eficient pentru rezultate vizibile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="text-6xl font-bold text-gold-100 absolute -top-10 -left-4 z-0">{step.num}</div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Se procesează...' });

    try {
      const subject = encodeURIComponent(`Mesaj nou: ${formData.name} - Balkan Spine Wellness`);
      const body = encodeURIComponent(`Nume: ${formData.name}\nEmail: ${formData.email}\n\nMesaj:\n${formData.message}`);
      
      const mailtoLink = `mailto:balkanspinewellness@gmail.com?subject=${subject}&body=${body}`;
      
      // To avoid "refused to connect" errors inside an iframe (like AI Studio preview),
      // we open the mailto link in a new window/tab. This prevents the iframe from 
      // attempting to navigate to a blocked URL (like Gmail's web interface).
      window.open(mailtoLink, '_blank');

      setStatus({ 
        type: 'success', 
        message: 'Am deschis aplicația de email. Te rugăm să verifici fereastra nouă și să apeși "Trimite".' 
      });
      
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus({ type: 'idle', message: '' }), 8000);
    } catch (error) {
      console.error("Mailto error:", error);
      setStatus({ 
        type: 'error', 
        message: 'Nu am putut deschide aplicația de email. Te rugăm să ne scrii direct la balkanspinewellness@gmail.com' 
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="bg-gold-600 rounded-[3rem] p-12 md:p-20 flex flex-col lg:flex-row gap-16 shadow-2xl relative overflow-hidden -mt-40 mb-24">
          {/* Decorative Circle */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="lg:w-1/2 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ești gata să te simți mai bine?</h2>
            <p className="text-gold-50 text-xl mb-12 leading-relaxed">
              Contactează-ne astăzi pentru o evaluare gratuită și începe călătoria ta către o viață fără durere.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gold-100 text-sm">Telefon / WhatsApp</p>
                  <p className="text-xl font-bold">+373 607 97 998</p>
                  <a 
                    href="https://wa.me/353874898785" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xl font-bold hover:text-gold-200 transition-colors"
                  >
                    +353 874 89 87 85 <MessageCircle className="w-5 h-5 fill-green-500 text-green-500" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gold-100 text-sm">Email</p>
                  <p className="text-lg font-bold">balkanspinewellness@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gold-100 text-sm">Locație</p>
                  <p className="text-xl font-bold">International Practitioner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white rounded-3xl p-8 md:p-12 shadow-xl relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Nume Complet</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-gold-500 transition-colors" 
                  placeholder="Ion Popescu" 
                />
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-gold-500 transition-colors" 
                  placeholder="ion.popescu@exemplu.ro" 
                />
              </div>
              <div>
                <label className="block text-slate-700 text-sm font-bold mb-2">Mesaj</label>
                <textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-gold-500 transition-colors h-32" 
                  placeholder="Cum te putem ajuta?"
                ></textarea>
              </div>
              
              <AnimatePresence mode="wait">
                {status.type !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-4 rounded-xl text-sm font-medium ${
                      status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
                      status.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
                      'bg-gold-50 text-gold-700 border border-gold-200'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <button 
                type="submit"
                disabled={status.type === 'loading'}
                className={`w-full bg-gold-600 hover:bg-gold-700 active:scale-95 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2 ${status.type === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status.type === 'loading' ? 'Se trimite...' : 'Trimite Mesajul'}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-slate-800 pt-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col items-center md:items-start mb-6">
              <span className="text-2xl font-bold font-playfair leading-none tracking-[0.02em] text-gold-500">RUSLAN BALKAN</span>
              <span className="text-[12px] font-bold font-playfair uppercase tracking-[0.4em] text-gold-600 mt-2">WELLNESS</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed text-center md:text-left">
              Dedicat sănătății tale holistice și recuperării complete. Redescoperă bucuria mișcării fără durere.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Link-uri Rapide</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-gold-500 transition-colors">Acasă</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition-colors">Despre Noi</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition-colors">Servicii</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Program</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex justify-between"><span>Luni - Vineri:</span> <span>09:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Sâmbătă:</span> <span>10:00 - 16:00</span></li>
              <li className="flex justify-between"><span>Duminică:</span> <span>Închis</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Abonează-te pentru sfaturi de sănătate și oferte speciale.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email-ul tău" className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-gold-500" />
              <button className="bg-gold-600 p-2 rounded-lg"><ChevronRight /></button>
            </div>
          </div>
        </div>
        
        <div className="text-center text-slate-500 text-xs mt-16 pb-8">
          © {new Date().getFullYear()} Balkan Spine Wellness. Toate drepturile rezervate.
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-200 selection:text-gold-900">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        <a 
          href="https://wa.me/353874898785" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <MessageCircle className="w-8 h-8 fill-white" />
        </a>
        <a 
          href="tel:+37360797998"
          className="w-14 h-14 gold-gradient rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform md:hidden"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
