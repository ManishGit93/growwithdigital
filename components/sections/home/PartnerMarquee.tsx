"use client";

import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnerMarquee() {
  const firstRow = partners.slice(0, 5);
  const secondRow = partners.slice(5, 9);
  const thirdRow = partners.slice(9, 14);

  const logoImages = [
    "/hexaimage/1306190728.png",
    "/hexaimage/1328137434.jpg",
    "/hexaimage/1345750834.jpg",
    "/hexaimage/1515218003.jpg",
    "/hexaimage/1616190654.png",
    "/hexaimage/1634883749.png",
    "/hexaimage/2000599783.jpg",
    "/hexaimage/2019597669.png",
    "/hexaimage/2103925888.jpg",
    "/hexaimage/252340614.jpg",
    "/hexaimage/43096553.jpg",
    "/hexaimage/524841368.jpg",
    "/hexaimage/688319359.jpg",
    "/hexaimage/852802626.jpg",
  ];

  // Light backgrounds roughly matching each logo's own background tone
  const tileBackgrounds = [
    "#ffffff",
    "#ffffff",
    "#fef6e7",
    "#f5f3ff",
    "#f1f5f9",
    "#fef3f2",
    "#ecfeff",
    "#fefce8",
    "#e0f2fe",
    "#f4f4f5",
    "#e5f6ff",
    "#fef2f2",
    "#f0fdf4",
    "#f9fafb",
  ];

  const renderTile = (partner: string, index: number) => (
    <div
      key={partner}
      className="relative flex items-center justify-center w-32 sm:w-40 md:w-44 aspect-[5/4] rounded-3xl border border-gray-200 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
      style={{
        backgroundColor: tileBackgrounds[index] ?? "#ffffff",
        clipPath:
          "polygon(25% 3%, 75% 3%, 97% 50%, 75% 97%, 25% 97%, 3% 50%)",
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={logoImages[index] ?? logoImages[logoImages.length - 1]}
          alt={partner}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 120px, 160px"
        />
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-[#f6f1eb] text-gray-800 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
            Trusted by growth-focused teams
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            A sample of the brands and businesses we&apos;ve helped with websites,
            landing pages and ongoing optimisation.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Row 1: 5 hex tiles */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8">
            {firstRow.map((partner, idx) => renderTile(partner, idx))}
          </div>

          {/* Row 2: 4 hex tiles, slightly offset */}
          {secondRow.length > 0 && (
            <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 md:pl-10 -mt-2 sm:-mt-3 md:-mt-4">
              {secondRow.map((partner, idx) =>
                renderTile(partner, firstRow.length + idx)
              )}
            </div>
          )}

          {/* Row 3: remaining tiles (aiming for 5 like reference) */}
          {thirdRow.length > 0 && (
            <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mt-2 sm:mt-3 md:mt-4">
              {thirdRow.map((partner, idx) =>
                renderTile(partner, firstRow.length + secondRow.length + idx)
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

