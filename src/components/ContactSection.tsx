import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FadeIn } from './FadeIn';
import { PrimaryButton } from './PrimaryButton';

const EMAILJS_SERVICE_ID  = 'service_c9jd0dn';
const EMAILJS_TEMPLATE_ID = 'template_qylhbha';
const EMAILJS_PUBLIC_KEY  = '_h_jKjnprPFFcM2u0';

const socialLinks = [
  {
    label: "Email",
    value: "rahulramesh18206@gmail.com",
    href: "mailto:rahulramesh18206@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    description: "Drop me a mail anytime"
  },
  {
    label: "LinkedIn",
    value: "Rahul R",
    href: "https://www.linkedin.com/in/rahul-r-513b21329/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    description: "Connect professionally"
  },
  {
    label: "GitHub",
    value: "RahulR1826",
    href: "https://github.com/RahulR1826",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    description: "View my open-source work"
  },
  {
    label: "Phone",
    value: "+91 8148645121",
    href: "tel:+918148645121",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.12 1.18 2 2 0 012.11 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    description: "Call or WhatsApp me"
  }
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:     formData.name,
          email:    formData.email,
          message:  formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-[80] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,10vw,160px)] mb-4 leading-none">
        Let's Connect
      </h2>
      <p className="text-center text-[#D7E2EA]/50 uppercase tracking-widest text-sm mb-16 sm:mb-20 md:mb-24 font-medium">
        Got an idea? Let's build something together.
      </p>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* Left — Social cards + tagline */}
        <FadeIn className="w-full lg:w-2/5 flex flex-col justify-between gap-8">
          <div className="flex flex-col gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="group flex items-center gap-4 p-5 rounded-2xl border border-[#D7E2EA]/10 hover:border-[#D7E2EA]/30 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#D7E2EA]/10 group-hover:bg-[#D7E2EA]/20 text-[#D7E2EA] flex-shrink-0 transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-medium">{link.label}</span>
                  <span className="text-white font-semibold text-base truncate">{link.value}</span>
                  <span className="text-[#D7E2EA]/40 text-xs mt-0.5">{link.description}</span>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 text-[#D7E2EA]/30 group-hover:text-[#D7E2EA]/70 flex-shrink-0 ml-auto transition-colors duration-300">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-3 p-4 rounded-2xl border border-green-500/20 bg-green-500/5">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
            <span className="text-green-400 text-sm font-medium">Available for internships & collaborations</span>
          </div>
        </FadeIn>

        {/* Right — Contact form */}
        <FadeIn delay={0.2} className="w-full lg:w-3/5">
          <div className="rounded-3xl border border-[#D7E2EA]/10 bg-white/[0.03] p-6 sm:p-8 md:p-10">
            <h3 className="text-white font-bold text-xl mb-1">Send a message</h3>
            <p className="text-[#D7E2EA]/40 text-sm mb-8">I'll get back to you within 24 hours.</p>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-8 h-8 text-green-400">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Message sent!</p>
                <p className="text-[#D7E2EA]/50 text-sm text-center">I received your message and will get back to you soon!</p>
              </div>
            ) : status === 'error' ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-8 h-8 text-red-400">
                    <path d="M12 8v4m0 4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-white font-semibold text-lg">Something went wrong</p>
                <p className="text-[#D7E2EA]/50 text-sm text-center">Please try again or email me directly at rahulramesh18206@gmail.com</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/[0.05] border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-white text-base placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <label className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-medium">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/[0.05] border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-white text-base placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[#D7E2EA]/50 text-xs uppercase tracking-widest font-medium">Message</label>
                  <textarea
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/[0.05] border border-[#D7E2EA]/15 rounded-xl px-4 py-3 text-white text-base placeholder:text-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA]/50 transition-colors resize-none"
                  />
                </div>
                <div className="mt-2">
                  <PrimaryButton as="button" type="submit" className="w-full sm:w-auto px-10" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending...' : 'Send Message →'}
                  </PrimaryButton>
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
