import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';


const ContactFooter = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        scope: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);

    const handleEnquiry = (e) => {
        e.preventDefault();
        
        const { name, contact, scope } = formData;
        
        if (!name || !contact || !scope) {
            alert("Please complete all professional credentials.");
            return;
        }

        setIsSending(true);

        const templateParams = {
            name: name,
            contact: contact,
            message: scope,
            time: new Date().toLocaleString()
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSubmitted(true);
            setIsSending(false);
            setFormData({ name: '', contact: '', scope: '' });
            setTimeout(() => setSubmitted(false), 5000);
        })
        .catch((err) => {
            console.error('FAILED...', err);
            alert("Inquiry transmission failed. Please check your credentials.");
            setIsSending(false);
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const machinery = [
      "Dual Concrete Mixers",
      "Mechanical Hoists",
      "Digital Surveying Tools",
      "Mobile Power Units"
    ];

    return (
      <footer id="contact" className="bg-white dark:bg-charcoal pt-32 pb-12 px-6 border-t-4 border-gold transition-colors duration-500 overflow-hidden relative">
        
        {/* Subtle Background Watermark */}
        <div className="absolute top-10 right-10 pointer-events-none select-none opacity-[0.03] dark:opacity-[0.05] hidden lg:block">
            <span className="text-[12rem] font-heading font-black text-gold leading-none uppercase">CONTACT</span>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* 1. Brand & Machinery Section (Col-Span 4) */}
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl font-heading text-gold tracking-tighter uppercase">Patel <br /> Construction</h2>
                <p className="text-gray-700 dark:text-gray-400 font-body text-sm tracking-widest uppercase italic font-medium">Est. 1998 — Maharashtra</p>
              </div>

              <div className="space-y-6">
                <h3 className="text-sm font-heading text-gold tracking-[0.4em] uppercase font-bold flex items-center gap-3">
                  <Wrench className="w-4 h-4" /> Operational Assets
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {machinery.map((item, index) => (
                    <div key={index} className="flex items-center group cursor-default">
                      <div className="w-0 group-hover:w-4 h-px bg-gold transition-all duration-300"></div>
                      <span className="text-gray-800 dark:text-gray-300 font-body uppercase tracking-[0.15em] text-sm group-hover:pl-4 transition-all duration-300 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 2. Contact Details & Inquiry (Col-Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">
              
              {/* Contact Info */}
              <div className="space-y-12">
                <h3 className="text-sm font-heading text-gold tracking-[0.4em] uppercase font-bold border-b border-gold/20 pb-4">Corporate Office</h3>
                
                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="p-3 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-gray-900 dark:text-gray-200 font-body text-lg leading-relaxed font-medium">
                            Poonam Nagar, <br />
                            Mira Road (East), <br />
                            Mumbai, Maharashtra.
                        </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group text-lg">
                    <div className="p-3 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="tel:+919920315896" className="text-gray-900 dark:text-gray-200 font-body hover:text-gold transition font-medium">+91 99203 15896</a>
                        <a href="tel:+919082304451" className="text-gray-900 dark:text-gray-200 font-body hover:text-gold transition font-medium">+91 90823 04451</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group text-lg">
                    <div className="p-3 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-charcoal transition-all duration-500">
                        <Mail className="w-6 h-6" />
                    </div>
                    <a href="mailto:mailmeharshita24@gmail.com" className="text-gray-900 dark:text-gray-200 font-body hover:text-gold transition truncate font-medium">mailmeharshita24@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="relative">
                <div className="bg-gold/[0.03] dark:bg-white/[0.02] border border-gold/20 p-10 relative overflow-hidden group">
                  <h4 className="text-gold font-heading text-xs tracking-[0.5em] uppercase mb-10 font-black">Project Inquiry</h4>
                  
                  {!submitted ? (
                    <form onSubmit={handleEnquiry} className="space-y-6 relative z-10">
                      <div className="group/input relative">
                          <input 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            placeholder="FULL NAME" 
                            className="w-full bg-transparent border-b border-gold/30 py-3 text-charcoal dark:text-white text-sm font-heading tracking-widest focus:outline-none focus:border-gold transition-all placeholder:text-gray-500" 
                          />
                      </div>
                      <div className="group/input relative">
                          <input 
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            type="text" 
                            placeholder="CONTACT / EMAIL" 
                            className="w-full bg-transparent border-b border-gold/30 py-3 text-charcoal dark:text-white text-sm font-heading tracking-widest focus:outline-none focus:border-gold transition-all placeholder:text-gray-500" 
                          />
                      </div>
                      <div className="group/input relative">
                          <textarea 
                            name="scope"
                            value={formData.scope}
                            onChange={handleChange}
                            rows="2" 
                            placeholder="BRIEF PROJECT SCOPE" 
                            className="w-full bg-transparent border-b border-gold/30 py-3 text-charcoal dark:text-white text-sm font-heading tracking-widest focus:outline-none focus:border-gold transition-all placeholder:text-gray-500 resize-none"
                          ></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={isSending}
                        className={`w-full mt-6 group flex items-center justify-between px-8 py-4 font-heading font-bold text-xs tracking-[0.3em] uppercase transition-all duration-500 border border-gold ${isSending ? 'bg-charcoal text-gold opacity-50 cursor-not-allowed' : 'bg-gold text-charcoal hover:bg-charcoal hover:text-gold'}`}
                      >
                        {isSending ? 'Transmitting Inquiry...' : 'Commence Inquiry'}
                        {!isSending && <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />}
                      </button>
                    </form>
                  ) : (
                    <div className="h-64 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in zoom-in duration-500">
                        <CheckCircle className="w-16 h-16 text-gold" />
                        <p className="text-gold font-heading text-sm tracking-widest uppercase">Enquiry Managed Successfully</p>
                        <p className="text-gray-500 text-xs font-body italic">We will respond shortly.</p>
                    </div>
                  )}
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rotate-45 translate-x-8 -translate-y-8"></div>
                </div>
              </div>

            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-32 pt-12 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[14px] text-gray-500 font-heading tracking-[0.5em] uppercase opacity-70">
              © {new Date().getFullYear()} Patel Construction • Structural Excellence
            </p>
            <div className="flex gap-8">
                <span className="text-[14px] text-gold font-heading tracking-[0.2em] uppercase cursor-pointer hover:opacity-100 opacity-60 transition-opacity">Privacy Policy</span>
                <span className="text-[14px] text-gold font-heading tracking-[0.2em] uppercase cursor-pointer hover:opacity-100 opacity-60 transition-opacity">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default ContactFooter;