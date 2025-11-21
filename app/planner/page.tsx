"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

type PlannerFormState = {
  name: string;
  email: string;
  company: string;
  website: string;
  projectType: string;
  budget: string;
  timeline: string;
  goals: string;
};

export default function PlannerPage() {
  const [formData, setFormData] = useState<PlannerFormState>({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: "",
    budget: "",
    timeline: "",
    goals: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};

    if (!formData.name.trim()) nextErrors.name = "Name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      nextErrors.email = "Please enter a valid email address";
    }
    if (!formData.projectType.trim()) {
      nextErrors.projectType = "Tell us what you need help with";
    }
    if (!formData.goals.trim()) {
      nextErrors.goals = "Share a few lines about your goals";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate sending to backend / form tool
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      projectType: "",
      budget: "",
      timeline: "",
      goals: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f1eb]">
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
              Project planner
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Let&apos;s map out your website &amp; SEO plan
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Answer a few questions about your business, budget and timelines.
              We&apos;ll review everything and come back with a clear
              recommendation — no pressure, just honest advice.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-lg p-8 text-center"
            >
              <div className="text-green-600 text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thanks for sharing the details
              </h2>
              <p className="text-gray-600 mb-6">
                We&apos;ll review your answers and get back to you within one
                business day with next steps.
              </p>
              <Button
                variant="outline"
                onClick={() => setIsSubmitted(false)}
                className="mt-4"
              >
                Fill the planner again
              </Button>
            </motion.div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Company or project name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Current website (if any)
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      What do you need help with?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full rounded-lg border px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                        errors.projectType
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select an option</option>
                      <option value="new-website">
                        New website or landing page
                      </option>
                      <option value="website-refresh">
                        Refresh or redesign existing website
                      </option>
                      <option value="seo">
                        SEO strategy &amp; ongoing optimisation
                      </option>
                      <option value="other">Something else</option>
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-xs text-red-500">
                        {errors.projectType}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-900 mb-2"
                    >
                      Approximate budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                    >
                      <option value="">Select a range</option>
                      <option value="under-25k">Under ₹50,000</option>
                      <option value="25-75k">₹50,000 – ₹75,000</option>
                      <option value="75k-150k">₹75,000 – ₹1.5L</option>
                      <option value="150k-plus">₹1.5L+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="goals"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    What does success look like for you?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="goals"
                    name="goals"
                    rows={4}
                    value={formData.goals}
                    onChange={handleChange}
                    placeholder="e.g. more qualified leads, clearer messaging, better conversions from ads, etc."
                    className={`w-full rounded-lg border px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900 ${
                      errors.goals ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.goals && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.goals}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-gray-900 mb-2"
                  >
                    Ideal start date / timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-gray-900"
                  >
                    <option value="">Select a rough timeline</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-2-months">Within 1–2 months</option>
                    <option value="3-6-months">Within 3–6 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? "Sending..." : "Submit planner"}
                  </Button>
                  <p className="mt-3 text-xs text-gray-500">
                    We&apos;ll only use your details to reply to your enquiry —
                    no spam, ever.
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}


