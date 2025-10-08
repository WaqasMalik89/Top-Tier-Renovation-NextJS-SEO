"use client"; // Required for client-side animation in Next.js 13+

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Select all blockquotes
    const quotes = sectionRef.current.querySelectorAll("blockquote");

    quotes.forEach((quote) => {
      // Split text into spans
      const text = quote.textContent || "";
      quote.innerHTML = text
        .split(" ")
        .map((word) => `<span class="word">${word}</span>`)
        .join(" ");

      // Animate each word
      gsap.from(quote.querySelectorAll(".word"), {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quote,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{ marginBottom: 40, padding: "0 20px" }}
    >
      <h2>Testimonials</h2>
      <blockquote>
        "Top Tier Renovation completely transformed our backyard into a
        luxurious oasis. Every detail was flawless — we couldn’t be happier!”
        – Sarah M.
      </blockquote>
      <blockquote>
        "The team at Top Tier Renovation is professional, reliable, and
        incredibly creative. Our home renovation exceeded all expectations!” –
        John D.
      </blockquote>
      <blockquote>
        "From concept to completion, Top Tier Renovation delivered exceptional
        results. Our outdoor space is now perfect for entertaining.” – Emily R.
      </blockquote>
      <blockquote>
        "Top Tier Renovation’s landscaping and stonework turned our property
        into a showpiece. Highly recommended for anyone in the GTA!” – Michael
        L.
      </blockquote>
      <blockquote>
        "We trusted Top Tier Renovation with our home remodel, and they truly
        delivered. Quality craftsmanship and attention to detail!” – Amanda K.
      </blockquote>
      <blockquote>
        "Top Tier Renovation is the definition of professionalism. Their team is
        skilled, punctual, and creative — a joy to work with!” – Laura S.
      </blockquote>
    </section>
  );
}
