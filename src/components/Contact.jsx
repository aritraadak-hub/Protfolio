import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { Github, Linkedin } from './SocialIcons';
import SectionTitle from './SectionTitle';

export default function Contact({ isDarkMode = true }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopy = (text, type = 'email') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = formState.subject ? encodeURIComponent(formState.subject) : 'Portfolio%20Contact';
    const body = formState.message ? encodeURIComponent(formState.message) : '';
    window.location.href = `mailto:aritra1adak@gmail.com?subject=${subject}${body ? `&body=${body}` : ''}`;
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aritraadak-hub",
      icon: Github,
      color: "hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-950/30",
      isExternal: true
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aritra-adak-941408395/",
      icon: Linkedin,
      color: "hover:text-blue-400 hover:border-blue-500/50 hover:bg-blue-950/30",
      isExternal: true
    },
    {
      name: "Email",
      url: "mailto:aritra1adak@gmail.com?subject=Portfolio%20Contact",
      icon: Mail,
      color: "hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-950/30",
      isExternal: false
    }
  ];

  return (
    <section
      id="contact"
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0D1428] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#0F172A]'
      }`}
    >
      {/* Ambient background glows */}
      <div className={`absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? 'bg-purple-600/10' : 'bg-purple-400/5'
      }`} />
      <div className={`absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none ${
        isDarkMode ? 'bg-indigo-600/10' : 'bg-indigo-400/5'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Contact"
          title="Let's work together!"
          subtitle="I'm open to internships, projects, research opportunities, hackathons, and collaborations. Feel free to reach out."
          isDark={isDarkMode}
        />

        {/* 3-Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12 items-stretch">
          
          {/* Left Column: Heading, Description & Quick Message CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl border shadow-2xl relative overflow-hidden transition-[border-color,background-color,box-shadow] duration-200 ${
              isDarkMode
                ? 'bg-[#0F1A33] border-[#1F2937]'
                : 'bg-[#FFFFFF] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
            }`}
          >
            <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-2xl pointer-events-none ${
              isDarkMode ? 'bg-purple-500/20' : 'bg-purple-300/25'
            }`} />

            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-6 transition-colors ${
                isDarkMode
                  ? 'bg-[#8B5CF6]/12 border border-[#8B5CF6] text-[#C4B5FD]'
                  : 'bg-[#8B5CF6]/8 border border-[#8B5CF6] text-[#7C3AED]'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                Available for Roles
              </div>

              <h3 className={`text-3xl font-extrabold leading-tight transition-colors ${
                isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
              }`}>
                Got a project or idea?
              </h3>

              <p className={`mt-4 text-sm leading-relaxed transition-colors ${
                isDarkMode ? 'text-[#CBD5E1]' : 'text-[#475569]'
              }`}>
                Whether you're looking for an AI/ML developer for research, internship opportunities, or building scalable full-stack products, I’d love to connect.
              </p>
            </div>

            <div className={`mt-8 pt-6 border-t relative z-20 ${isDarkMode ? 'border-[#1E293B]' : 'border-[#E5E7EB]'}`}>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aritra1adak@gmail.com&su=Portfolio%20Contact"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email Aritra on Gmail"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#A855F7] to-[#3B82F6] hover:from-[#9333EA] hover:to-[#2563EB] text-white font-bold text-sm shadow-lg shadow-[#8B5CF6]/30 hover:scale-[1.02] active:scale-[0.98] transition-[transform,box-shadow] duration-200 cursor-pointer pointer-events-auto relative z-20"
              >
                <Mail className="w-4 h-4 pointer-events-none" />
                <span className="pointer-events-none">Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 pointer-events-none" />
              </a>
            </div>
          </motion.div>

          {/* Middle Column: Direct Contact Info with Copy Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`lg:col-span-4 p-8 rounded-3xl border shadow-2xl flex flex-col justify-between transition-[border-color,background-color,box-shadow] duration-200 ${
              isDarkMode
                ? 'bg-[#0F1A33] border-[#1F2937]'
                : 'bg-[#FFFFFF] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
            }`}
          >
            <div>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 transition-colors ${
                isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
              }`}>
                <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                Direct Contact
              </h3>

              <div className="space-y-5">
                {/* Email Card */}
                <div className={`p-4 rounded-2xl border transition-[border-color,background-color] duration-200 group ${
                  isDarkMode
                    ? 'bg-[#0D1428] border-[#1F2937] hover:border-[#8B5CF6]/40'
                    : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#8B5CF6]/40 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <a
                        href="mailto:aritra1adak@gmail.com?subject=Portfolio%20Contact"
                        aria-label="Email Aritra"
                        onClick={() => {
                          window.location.href = "mailto:aritra1adak@gmail.com?subject=Portfolio%20Contact";
                        }}
                        className={`p-2.5 rounded-xl border shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto ${
                          isDarkMode
                            ? 'bg-purple-950 text-purple-400 border-purple-500/20 hover:border-purple-500/40'
                            : 'bg-purple-100 text-purple-700 border-purple-200 hover:border-purple-300'
                        }`}
                      >
                        <Mail className="w-5 h-5 pointer-events-none" />
                      </a>
                      <div className="min-w-0">
                        <p className={`text-[11px] uppercase font-semibold ${
                          isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>Email</p>
                        <a
                          href="mailto:aritra1adak@gmail.com?subject=Portfolio%20Contact"
                          onClick={() => {
                            window.location.href = "mailto:aritra1adak@gmail.com?subject=Portfolio%20Contact";
                          }}
                          className={`text-xs sm:text-sm font-semibold truncate block transition-colors cursor-pointer pointer-events-auto ${
                            isDarkMode
                              ? 'text-[#FFFFFF] hover:text-[#8B5CF6]'
                              : 'text-[#0F172A] hover:text-[#8B5CF6]'
                          }`}
                        >
                          aritra1adak@gmail.com
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy('aritra1adak@gmail.com', 'email')}
                      aria-label="Copy Email"
                      title="Copy Email"
                      className={`p-2 rounded-lg transition-colors cursor-pointer shrink-0 ${
                        isDarkMode
                          ? 'bg-[#1A2442] hover:bg-[#1E293B] text-[#CBD5E1] hover:text-[#FFFFFF]'
                          : 'bg-[#FFFFFF] hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] shadow-xs'
                      }`}
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Mobile Card */}
                <div className={`p-4 rounded-2xl border transition-[border-color,background-color] duration-200 group ${
                  isDarkMode
                    ? 'bg-[#0D1428] border-[#1F2937] hover:border-[#3B82F6]/40'
                    : 'bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#3B82F6]/40 shadow-sm'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`p-2.5 rounded-xl border shrink-0 ${
                        isDarkMode
                          ? 'bg-blue-950 text-blue-400 border-blue-500/20'
                          : 'bg-blue-100 text-blue-700 border-blue-200'
                      }`}>
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-[11px] uppercase font-semibold ${
                          isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
                        }`}>Mobile</p>
                        <a
                          href="tel:+919013355545"
                          aria-label="Call Aritra Adak"
                          className={`text-xs sm:text-sm font-semibold truncate block transition-colors ${
                            isDarkMode
                              ? 'text-[#FFFFFF] hover:text-[#3B82F6]'
                              : 'text-[#0F172A] hover:text-[#3B82F6]'
                          }`}
                        >
                          +91 90133 55545
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy('+91 90133 55545', 'phone')}
                      aria-label="Copy Phone Number"
                      className={`p-2 rounded-lg transition-colors cursor-pointer shrink-0 ${
                        isDarkMode
                          ? 'bg-[#1A2442] hover:bg-[#1E293B] text-[#CBD5E1] hover:text-[#FFFFFF]'
                          : 'bg-[#FFFFFF] hover:bg-[#F1F5F9] text-[#475569] hover:text-[#0F172A] border border-[#E2E8F0] shadow-xs'
                      }`}
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-[#22C55E]" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Location Card */}
                <div className={`p-4 rounded-2xl border ${
                  isDarkMode
                    ? 'bg-[#0D1428] border-[#1F2937]'
                    : 'bg-[#F8FAFC] border-[#E2E8F0] shadow-sm'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border shrink-0 ${
                      isDarkMode
                        ? 'bg-emerald-950 text-emerald-400 border-emerald-500/20'
                        : 'bg-emerald-100 text-emerald-700 border-emerald-200'
                    }`}>
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-[11px] uppercase font-semibold ${
                        isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
                      }`}>Location</p>
                      <p className={`text-xs sm:text-sm font-semibold ${
                        isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
                      }`}>
                        Haldia, West Bengal, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 text-center">
              <span className={`text-xs flex items-center justify-center gap-2 ${
                isDarkMode ? 'text-[#94A3B8]' : 'text-[#64748B]'
              }`}>
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                Response time: &lt; 24 hours
              </span>
            </div>
          </motion.div>

          {/* Right Column: Follow Me & Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`lg:col-span-4 p-8 rounded-3xl border shadow-2xl flex flex-col justify-between transition-[border-color,background-color,box-shadow] duration-200 ${
              isDarkMode
                ? 'bg-[#0F1A33] border-[#1F2937]'
                : 'bg-[#FFFFFF] border-[#E2E8F0] shadow-[0_4px_20px_rgba(15,23,42,0.06)]'
            }`}
          >
            <div>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-2 transition-colors ${
                isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0F172A]'
              }`}>
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]"></span>
                Follow me
              </h3>

              {/* Social Grid */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 mb-6 relative z-20">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  const isEmail = social.name === "Email";
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      {...(social.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      aria-label={isEmail ? "Email Aritra" : social.name}
                      onClick={isEmail ? () => {
                        window.location.href = social.url;
                      } : undefined}
                      className={`p-2.5 sm:p-3 rounded-2xl border flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 transition-[transform,border-color,background-color,color] duration-200 hover:scale-105 active:scale-95 cursor-pointer pointer-events-auto relative z-20 group ${
                        isDarkMode
                          ? 'bg-[#0D1428] border-[#1F2937] text-[#CBD5E1] hover:text-[#FFFFFF] hover:bg-[#1A2442]'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#475569] hover:text-[#0F172A] hover:bg-[#F1F5F9] shadow-xs'
                      }`}
                    >
                      <Icon className="w-4 h-4 group-hover:text-inherit shrink-0 pointer-events-none" />
                      <span className="text-[11px] sm:text-xs font-semibold group-hover:text-inherit truncate pointer-events-none">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Fast interactive contact form */}
              <form onSubmit={handleSubmit} className={`space-y-3 pt-4 border-t ${
                isDarkMode ? 'border-[#1E293B]' : 'border-[#E5E7EB]'
              }`}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors ${
                      isDarkMode
                        ? 'bg-[#0D1428] border-[#1F2937] text-[#FFFFFF] placeholder-[#94A3B8]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] placeholder-[#64748B] focus:bg-[#FFFFFF]'
                    }`}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors ${
                      isDarkMode
                        ? 'bg-[#0D1428] border-[#1F2937] text-[#FFFFFF] placeholder-[#94A3B8]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] placeholder-[#64748B] focus:bg-[#FFFFFF]'
                    }`}
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Message..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className={`w-full px-3.5 py-2 rounded-xl border text-xs focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none ${
                      isDarkMode
                        ? 'bg-[#0D1428] border-[#1F2937] text-[#FFFFFF] placeholder-[#94A3B8]'
                        : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#0F172A] placeholder-[#64748B] focus:bg-[#FFFFFF]'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  aria-label="Send email note to Aritra"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#A855F7] to-[#3B82F6] hover:from-[#9333EA] hover:to-[#2563EB] text-white font-bold text-xs flex items-center justify-center gap-2 transition-[transform,box-shadow] duration-200 active:scale-[0.98] cursor-pointer shadow-md"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Note</span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
