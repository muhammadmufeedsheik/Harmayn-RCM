// components/Contact.tsx
import React, { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeobkbwj"; // <- your Formspree URL

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // refs for animation and scroll direction
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef<number>(0);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  // track scroll direction (down or up)
  useEffect(() => {
    function onScroll() {
      lastScrollY.current = window.scrollY || window.pageYOffset;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    // initialize
    lastScrollY.current = window.scrollY || window.pageYOffset;
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // observer callback checks scroll direction and only reveals if user is scrolling down
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isIntersecting = entry.isIntersecting;
          // determine current scroll position (approx)
          const currentScroll = window.scrollY || window.pageYOffset;
          const isScrollingDown = currentScroll >= lastScrollY.current;

          // For left element
          if (entry.target === leftRef.current && isIntersecting) {
            // trigger only when scrolling down (or if not scrolled yet)
            if (isScrollingDown || !leftVisible) {
              setLeftVisible(true);
            }
          }

          // For right element
          if (entry.target === rightRef.current && isIntersecting) {
            if (isScrollingDown || !rightVisible) {
              // slight stagger after left
              setTimeout(() => setRightVisible(true), 120);
            }
          }
        });
        // update lastScrollY after processing, so we have the latest baseline
        lastScrollY.current = window.scrollY || window.pageYOffset;
      },
      { threshold: 0.15 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, [leftVisible, rightVisible]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("ok");
        form.reset();
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMsg((data && data.error) || "Submission failed. Try again.");
        console.error("Formspree response error:", data);
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err?.message || "Network error");
      console.error("Submit error:", err);
    }
  }

  // animation helper classes
  const baseAnim = "transition-transform transition-opacity duration-700 ease-out will-change-transform";
  const hiddenUp = "opacity-0 translate-y-6";
  const visible = "opacity-100 translate-y-0";

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - CONTACT INFO */}
          <div
            ref={leftRef}
            className={`${baseAnim} ${leftVisible ? visible : hiddenUp}`}
            aria-hidden={!leftVisible}
          >
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
              Get Your Free Revenue Audit
            </h2>

            <p className="text-lg text-slate-600 mb-8">
              Ready to optimize your practice's financial health? Fill out the form, and our team
              will contact you within 24 hours for a comprehensive consultation.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">
                    <a href="mailto:info@harmaynrcm.solutions" className="hover:underline">
                      info@harmaynrcm.solutions
                    </a>
                  </p>
                </div>
              </div>

              {/* Headquarters (updated to Karnataka, India) */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Headquarters</h4>
                  <p className="text-slate-600">Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div
            ref={rightRef}
            className={`${baseAnim} ${rightVisible ? visible : hiddenUp}`}
            aria-hidden={!rightVisible}
          >
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-lg">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New contact from Harmayn RCM website" />

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      name="name"
                      required
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Dr. John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
  name="email"
  required
  type="email"
  pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
  onInvalid={(e) => (e.target as HTMLInputElement).setCustomValidity("Please enter a valid email address with @")}
  onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
  placeholder="john@example.com"
/>
                  </div>
                </div>

                {/* PRACTICE */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Practice Name</label>
                  <input
                    name="practice"
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="City Medical Center"
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">How can we help?</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Tell us about your current billing challenges..."
                  />
                </div>

                {/* STATUS MESSAGES */}
                {status === "ok" && (
                  <div className="text-green-600 font-medium">✔ Message sent! We'll contact you soon.</div>
                )}
                {status === "error" && (
                  <div className="text-red-600 font-medium">✖ Error: {errorMsg || "Submission failed. Try again."}</div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 active:scale-98 transition transform-gpu duration-150 shadow-lg flex items-center justify-center gap-2"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
