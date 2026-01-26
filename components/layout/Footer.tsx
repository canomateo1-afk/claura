"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Custom Instagram icon
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Custom TikTok icon
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
    </svg>
  );
}

// Custom LinkedIn icon
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.instagram.com/mateocano_ia/", icon: InstagramIcon, labelKey: "instagram" as const },
  { href: "https://www.tiktok.com/@mate_cano", icon: TikTokIcon, labelKey: "tiktok" as const },
  { href: "https://www.linkedin.com/in/mateocano/", icon: LinkedInIcon, labelKey: "linkedin" as const },
];

export function Footer() {
  const t = useTranslations("footer");

  const footerLinks = {
    navigate: [
      { href: "/", label: t("links.home") },
      { href: "/about", label: t("links.about") },
      { href: "/#services", label: t("links.services") },
      { href: "/#team", label: t("links.team") },
    ],
    resources: [
      { href: "/case-studies", label: t("links.caseStudies") },
      { href: "/#how-we-work", label: t("links.howWeWork") },
      { href: "/#faq", label: t("links.faq") },
    ],
    connect: [
      { href: "#", label: t("links.bookCall"), calLink: true },
      { href: "mailto:mateo@space-pal.com", label: t("links.contact"), external: true },
      { href: "https://www.instagram.com/mateocano_ia/", label: t("social.instagram"), external: true },
      { href: "https://www.tiktok.com/@mate_cano", label: t("social.tiktok"), external: true },
      { href: "https://www.linkedin.com/in/mateocano/", label: t("social.linkedin"), external: true },
    ],
    legal: [
      { href: "/legal/privacy-policy", label: t("legal.privacyPolicy") },
      { href: "/legal/terms-of-service", label: t("legal.termsOfService") },
    ],
  };

  return (
    <footer className="bg-[#f6f0e9] pt-20 pb-8">
      <div className="max-w-[var(--container-max-width)] mx-auto px-6 lg:px-8">
        {/* Top section - Branding */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <Link href="/" className="font-display text-4xl md:text-5xl font-normal tracking-tight">
            Claura
          </Link>
          <p className="text-[var(--color-text-secondary)] text-base mt-3">
            {t("tagline")}
          </p>

          {/* Social links */}
          <div className="flex justify-center gap-3 mt-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.labelKey}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[var(--color-charcoal)]/20 flex items-center justify-center text-[var(--color-text-primary)] hover:bg-[var(--color-cream-dark)] transition-all"
                aria-label={t(`social.${social.labelKey}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Decorative Flower Image with soft blur */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center my-12"
        >
          {/* Single flower image with soft fade + glow */}
          <div className="relative w-[280px] h-[320px] md:w-[350px] md:h-[400px]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 85%, rgba(255, 140, 97, 0.35) 0%, rgba(255, 140, 97, 0.18) 38%, transparent 70%)",
                filter: "blur(18px)",
                transform: "translateY(20px)",
              }}
            />
            <Image
              src="/images/flower-footer.png"
              alt="Decorative flower"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 280px, 350px"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* Links grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-[700px] mx-auto mb-16"
        >
          <div>
            <h4 className="font-semibold text-sm mb-4">{t("navigate")}</h4>
            <ul className="space-y-3">
              {footerLinks.navigate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">{t("resources")}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">{t("connect")}</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  {link.calLink ? (
                    <button
                      data-cal-namespace="construye-y-automatiza-con-ia"
                      data-cal-link="mateo-cano/construye-y-automatiza-con-ia"
                      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-[var(--color-charcoal)]/10 pt-6 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs text-[var(--color-text-muted)]">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex items-center gap-3">
            {footerLinks.legal.map((link, index) => (
              <span key={link.href} className="flex items-center gap-3">
                {index > 0 && <span className="hidden md:inline">·</span>}
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {link.label}
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
