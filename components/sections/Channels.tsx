"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const channels = [
  { name: "WhatsApp",  icon: "/images/tech-logos/whatsapp.svg" },
  { name: "Instagram", icon: "/images/tech-logos/instagram.svg" },
  { name: "TikTok",    icon: "/images/tech-logos/tiktok.svg" },
  { name: "YouTube",   icon: "/images/tech-logos/youtube.svg" },
  { name: "LinkedIn",  icon: "/images/tech-logos/linkedin.svg" },
  { name: "Meta",      icon: "/images/tech-logos/meta.svg" },
  { name: "Facebook",  icon: "/images/tech-logos/facebook.svg" },
  { name: "Pinterest", icon: "/images/tech-logos/pinterest.svg" },
  { name: "Telegram",  icon: "/images/tech-logos/telegram.svg" },
  { name: "Reddit",    icon: "/images/tech-logos/reddit.svg" },
  { name: "X",         icon: "/images/tech-logos/x.svg" },
  { name: "Threads",   icon: "/images/tech-logos/threads.svg" },
  { name: "Slack",     icon: "/images/tech-logos/slack.svg" },
  { name: "Google",    icon: "/images/tech-logos/google.svg" },
];

export function Channels() {
  const t = useTranslations("channels");

  return (
    <section className="py-12 bg-[var(--color-cream)] border-t border-[rgba(0,0,0,0.06)] overflow-hidden">
      {/* Label */}
      <p className="text-center text-xs font-medium tracking-widest uppercase text-[var(--color-text-muted)] mb-8 px-6">
        {t("label")}
      </p>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--color-cream)] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--color-cream)] to-transparent" />

        {/* Scrolling track */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...channels, ...channels].map((ch, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-8 shrink-0"
            >
              <div className="w-5 h-5 relative shrink-0">
                <Image
                  src={ch.icon}
                  alt={ch.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-[var(--color-text-secondary)] whitespace-nowrap">
                {ch.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Channels;
