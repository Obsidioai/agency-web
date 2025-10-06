"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";

const DOWNLOAD_PATH = "/downloads/obsidio-ki-ebook.pdf";

export default function EbookDownloadCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="inline-flex items-center rounded-xl bg-[#4B64F3] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4B64F3]/40"
        onClick={() => setIsOpen(true)}
      >
        Gratis-E-Book erhalten
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 py-6"
          role="presentation"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start gap-4">
              <div className="relative h-36 w-28 overflow-hidden rounded-lg ring-1 ring-neutral-200">
                <Image
                  src="/images/ebook-cover.jpg"
                  alt="Vorschau des KI-E-Books"
                  fill
                  sizes="(max-width: 768px) 120px, 160px"
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-neutral-700">
                <h3 id={titleId} className="text-base font-semibold text-neutral-900">
                  Ihr kostenloses KI-E-Book
                </h3>
                <p className="mt-1">
                  Laden Sie den Leitfaden herunter und erhalten Sie praxisnahe Tipps für die Einführung von KI in Ihrem Unternehmen.
                </p>
                <p className="mt-2 text-xs text-neutral-500">
                  Datei: obsidio-ki-ebook.pdf
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:bg-neutral-50"
                onClick={() => setIsOpen(false)}
              >
                Schließen
              </button>
              <a
                href={DOWNLOAD_PATH}
                download
                className="inline-flex items-center rounded-lg bg-[#4B64F3] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                Download starten
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

