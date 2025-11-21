"use client";

export default function Capabilities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1.4fr] items-start mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-gray-500 mb-3">
            Why Choose Us
          </p>
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why businesses trust GrowWithDigital
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;re not just building pretty websites. We&apos;re building digital
              homes for your business that are easy to use, fast to load, and
              designed to bring you enquiries and sales.
            </p>
          </div>
          <div className="hidden md:block" />
        </div>

        <ul className="grid gap-4 md:grid-cols-2 text-gray-700 text-base">
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span>
              <strong className="font-semibold">SEO-first thinking:</strong>{" "}
              Every layout, heading and page is structured with discoverability in mind.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span>
              <strong className="font-semibold">Performance-focused:</strong>{" "}
              We use modern stacks like Next.js so your site loads fast even on mobile data.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span>
              <strong className="font-semibold">Clear communication:</strong>{" "}
              No jargon, no confusing reports — just simple language and transparent progress.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span>
              <strong className="font-semibold">India-friendly pricing:</strong>{" "}
              Plans suitable for small businesses, solopreneurs, and growing startups.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
            <span>
              <strong className="font-semibold">Long-term partner:</strong>{" "}
              We prefer ongoing relationships, not one-off “build and disappear” projects.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

