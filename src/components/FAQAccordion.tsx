"use client";

import { useState } from "react";
import Icon from "@/components/Icon";

export type FAQItem = {
  question: string;
  answer: string;
};

type Props = {
  items: FAQItem[];
  idPrefix?: string;
};

export default function FAQAccordion({ items, idPrefix = "faq" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-xl border border-border bg-surface">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${idPrefix}-btn-${idx}`;
        const panelId = `${idPrefix}-panel-${idx}`;
        return (
          <div key={idx}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-foreground hover:bg-surface-raised"
              >
                <span>{item.question}</span>
                <Icon
                  name="chevron-down"
                  size={18}
                  className={`shrink-0 text-foreground-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-5 text-sm leading-relaxed text-foreground-muted"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
