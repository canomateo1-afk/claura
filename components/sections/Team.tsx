"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionLabel, SectionHeading } from "@/components/ui";
import { cn } from "@/lib/utils";

export function Team() {
  const t = useTranslations("team");

  const teamMembers = [
    {
      name: t("member1.name"),
      role: t("member1.role"),
      initials: "MC",
      color: "from-amber-200 to-orange-200",
    },
    {
      name: t("member2.name"),
      role: t("member2.role"),
      initials: "AH",
      color: "from-rose-200 to-pink-200",
    },
    {
      name: t("member3.name"),
      role: t("member3.role"),
      initials: "DP",
      color: "from-blue-200 to-cyan-200",
    },
    {
      name: t("member4.name"),
      role: t("member4.role"),
      initials: "EM",
      color: "from-green-200 to-teal-200",
    },
  ];

  return (
    <section id="team" className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Section Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div>
            <SectionLabel>{t("sectionLabel")}</SectionLabel>
            <SectionHeading highlightWords={["experienced", "experimentadas"]}>
              {t("title")}
            </SectionHeading>
          </div>
          <p className="lg:max-w-[400px] text-[var(--color-text-secondary)] leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-[var(--radius-card)] overflow-hidden cursor-pointer"
            >
              {/* Background gradient (placeholder for photo) */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br transition-transform duration-500 group-hover:scale-105",
                  member.color
                )}
              />

              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-display font-light text-black/20 group-hover:scale-110 transition-transform duration-500">
                  {member.initials}
                </span>
              </div>

              {/* Overlay with info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="font-semibold text-white">{member.name}</p>
                <p className="text-sm text-white/70">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Team;
