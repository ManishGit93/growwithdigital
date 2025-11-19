"use client";

import { partners } from "@/data/partners";

export default function PartnerMarquee() {
  return (
    <section className="py-10 bg-gray-900 dark:bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <div className="text-sm uppercase tracking-[0.35em] text-gray-400">
          Trusted by growth-focused teams
        </div>
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-lg font-medium opacity-80">
          {[...partners, ...partners].map((partner, index) => (
            <span key={`${partner}-${index}`} className="tracking-wide">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

