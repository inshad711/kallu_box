import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Instagram,
  Send,
  Globe,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#000]/90 text-white/80 font-sans pt-8 pb-2 relative overflow-hidden">
      {/* Optional: Subtle background glow effects to match modern framer aesthetics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Column 1: Brand & Socials (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center justify-start shrink-0">
              <Image
                src="/logo/e18da22c-b1a2-454a-ba30-a0094f99529b.png"
                alt="Packeqa Logo"
                width={180}
                height={60}
                className="object-contain w-[150px] h-auto md:w-[180px]"
              />
            </div>

            <p className="text-white/70 leading-relaxed text-sm max-w-sm">
              Our goal is to empower agencies, businessmen, and freelancers with
              creative freedom. Our goal is to empower agencies, businessmen,
              and freelancers with creative freedom.
            </p>

            <div className="pt-4">
              <h6 className="text-white text-sm font-semibold mb-4">
                Follow Us On:
              </h6>
              <div className="flex gap-3">
                <SocialButton
                  icon={<Globe size={18} />}
                  href="https://google.com"
                />
                <SocialButton
                  icon={<Linkedin size={18} />}
                  href="https://linkedin.com"
                />
                <SocialButton
                  icon={<Send size={18} />}
                  href="https://telegram.org"
                />
                <SocialButton
                  icon={<Instagram size={18} />}
                  href="https://instagram.com"
                />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2 cols) */}
          <div className="lg:col-span-2">
            <SectionHeader title="Quick Links" />
            <ul className="space-y-3">
              <FooterLink href="#about">About</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Column 3: Support (Span 2 cols) */}
          <div className="lg:col-span-2">
            <SectionHeader title="Support" />
            <ul className="space-y-3">
              <FooterLink href="#faq">FAQ</FooterLink>
              <FooterLink href="#testimonial">Testimonial</FooterLink>
              <FooterLink href="/404">404 Page</FooterLink>
            </ul>
          </div>

          {/* Column 4: Contact Us (Span 4 cols) */}
          <div className="lg:col-span-4">
            <SectionHeader title="Contact Us" />
            <div className="space-y-4">
              <ContactItem
                icon={<MapPin size={18} className="text-white" />}
                text="2005 Stokes Isled Apt. 899 Vacaville 10010, USA"
                href="https://maps.google.com"
              />
              <ContactItem
                icon={<Mail size={18} className="text-white" />}
                text="info@yourdomain.com"
                href="mailto:info@yourdomain.com"
              />
              <ContactItem
                icon={<Phone size={18} className="text-white" />}
                text="(+68) 120034509"
                href="tel:+68120034509"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom: Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-center text-center">
          <p className="text-white/50 text-sm">
            © 2025 Finanex By{" "}
            <a
              href="https://framerdevs.com"
              className="text-white hover:text-[#43aeff] transition-colors"
            >
              Framerdevs
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="mb-6">
      <h5 className="relative inline-block text-white font-semibold text-lg">
        {title}
        <span className="absolute left-0 -bottom-1 w-full h-[2px] rounded-full bg-gradient-to-r from-[#700000] to-[#3b0000] text-white" />
      </h5>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        className="text-white/70 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
      >
        {/* Subtle hover arrow effect */}
        <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 opacity-0 group-hover:opacity-100 text-[#43aeff]">
          <ArrowRight size={12} />
        </span>
        {children}
      </a>
    </li>
  );
}

function SocialButton({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-white/10 to-white/5 text-white hover:scale-110 hover:border-white/40 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
    >
      {icon}
    </a>
  );
}

function ContactItem({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
    >
      <div className="shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#cf55fe]/50 transition-colors">
        {icon}
      </div>
      <span className="text-sm text-white/80 group-hover:text-white transition-colors pt-1">
        {text}
      </span>
    </a>
  );
}
