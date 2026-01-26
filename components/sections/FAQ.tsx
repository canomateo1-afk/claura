"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { SectionLabel, SectionHeading } from "@/components/ui";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[var(--color-cream-dark)] rounded-lg overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-medium pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <Plus className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="px-6 pb-6 text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  const t = useTranslations("faq");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t("question1.question"),
      answer: t("question1.answer"),
    },
    {
      question: t("question2.question"),
      answer: t("question2.answer"),
    },
    {
      question: t("question3.question"),
      answer: t("question3.answer"),
    },
    {
      question: t("question4.question"),
      answer: t("question4.answer"),
    },
    {
      question: t("question5.question"),
      answer: t("question5.answer"),
    },
  ];

  return (
    <section id="faq" className="py-24 px-6 bg-[var(--color-cream)]">
      <div className="max-w-[var(--container-max-width)] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <SectionLabel>{t("sectionLabel")}</SectionLabel>
          <SectionHeading align="center" highlightWords={["answered", "respondidas"]}>
            {t("title")}
          </SectionHeading>
          <p className="text-[var(--color-text-secondary)] mt-4">
            {t("description")}{" "}
            <Link href="/book-a-call" className="underline hover:text-[var(--color-text-primary)]">
              {t("bookCall")}
            </Link>{" "}
            {t("descriptionEnd")}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
