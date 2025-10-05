'use client';

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

type Item = {
  icon: ReactNode;
  title: string;
  blurb: string;
  details?: string[];
  href?: string;
};

type Props = {
  heading?: string;
  subheading?: string;
  items: Item[];
  accentHex?: string;
};

export default function ServicesShowcase({
  heading = "OUR EXPERTISE. YOUR GROWTH",
  subheading = "Innovative Digital Solutions for Modern Businesses",
  items,
  accentHex = "#4B64F3"
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accentShadow = useMemo(() => hexToRgba(accentHex, 0.18), [accentHex]);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      className="relative bg-white py-14 md:py-20"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
        backgroundSize: "48px 48px"
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10">
        <header className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{heading}</h2>
          <p className="mt-3 text-base text-neutral-500 md:text-lg">{subheading}</p>
        </header>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 items-start gap-6 md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
          {items.map((item, index) => {
            const isExpanded = openIndex === index;
            const itemKey = `${item.title}-${index}`;

            return (
              <article
                key={itemKey}
                className="group flex w-full min-h-[260px] md:min-h-[320px] cursor-pointer flex-col rounded-3xl bg-neutral-50 p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-400"
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                style={{
                  border: `1.5px solid ${accentHex}`,
                  boxShadow: `0 1px 0 rgba(0,0,0,0.02), 0 12px 22px -14px ${accentShadow}`
                }}
                onClick={() => toggleItem(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    toggleItem(index);
                  }
                }}
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start gap-3">
                    <div
                      className="grid h-14 w-14 place-items-center rounded-xl bg-white"
                      style={{ border: `1px solid ${accentHex}` }}
                    >
                      <span className="inline-block" style={{ color: accentHex }} aria-hidden>
                        {item.icon}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-extrabold tracking-wide text-neutral-900 md:text-xl">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-600 md:text-base">{item.blurb}</p>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && item.details ? (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="mt-4 space-y-2 rounded-2xl bg-white/85 p-4 text-left text-sm leading-6 text-neutral-700 md:text-base"
                        style={{ border: `1px solid ${accentShadow}` }}
                      >
                        {item.details.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>

                <div className="mt-4 flex justify-center">
                  <span
                    aria-hidden
                    className={`rounded-full bg-white p-2 shadow-sm transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    style={{ border: `1px solid ${accentHex}`, color: accentHex }}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// --- helper (inline to keep it copy-pasteable) ---
function hexToRgba(hex: string, alpha = 1) {
  const h = hex.replace("#", "");
  const normalized = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const bigint = Number.parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
