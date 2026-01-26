"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui";
import { LanguageSelector } from "./LanguageSelector";

export function Navigation() {
  const t = useTranslations("navigation");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/about", label: t("about") },
    { href: "/case-studies", label: t("caseStudies") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[rgba(250,249,246,0.95)] backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-[var(--container-max-width)] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left side - Navigation links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Center - Logo (hidden on mobile when scrolled) */}
          <Link
            href="/"
            className={cn(
              "font-display text-3xl md:text-4xl font-normal tracking-tight text-[var(--color-text-primary)] absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 transition-opacity duration-300",
              isScrolled ? "opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto" : "opacity-100"
            )}
          >
            Claura
          </Link>

          {/* Right side - Language selector & CTA button (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSelector />
            <Button calLink="mateo-cano/construye-y-automatiza-con-ia" size="sm">
              {t("bookFreeCall")}
            </Button>
          </div>

          {/* Mobile CTA + menu button */}
          <div className="md:hidden flex items-center gap-2">
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button calLink="mateo-cano/construye-y-automatiza-con-ia" size="sm">
                    {t("bookFreeCall")}
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={t("toggleMenu")}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--color-cream)] border-t border-[var(--color-border)]"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="py-2">
                <LanguageSelector />
              </div>
              <Button calLink="mateo-cano/construye-y-automatiza-con-ia" size="sm" className="w-full">
                {t("bookFreeCall")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navigation;
