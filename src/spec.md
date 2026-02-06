# Specification

## Summary
**Goal:** Build a single-page, high-converting marketing landing page for an Indian handmade handicrafts gifting brand (curated + customized gift hampers) with a warm, premium, artisan-focused design, plus a minimal backend to store lead inquiries.

**Planned changes:**
- Create a fully responsive, single-scroll landing page with a cohesive warm/earthy premium theme (typography, colors, spacing, consistent components).
- Implement a conversion-focused hero with English headline/subheadline, primary + secondary CTAs, trust-signal badges, and a premium hero visual; CTAs scroll to section anchors.
- Add key sections: Curated Hampers (3–6 cards with “Request This Hamper”), Customize step-by-step explainer, Artisan story/values, Social proof, interactive FAQ (5+ items), and a final CTA banner linking to the form.
- Build a lead-capture customization form with client-side validation, loading/success states, and submission to the backend (no third-party integrations).
- Add a minimal Motoko backend (single actor) with an update method to create inquiries (returns ID + timestamp) and a query method to retrieve stored inquiries; persist data in stable storage.
- Add analytics-friendly structure: semantic headings, stable section IDs for scrolling, and centralized event hooks/logs for key actions (primary CTA click, successful form submit).
- Add a lightweight footer with contact links (mailto/tel), Shipping/Returns info (inline or dialog), and a short handmade/craftsmanship brand note.

**User-visible outcome:** Visitors can browse curated hamper options, learn about customization and artisan values, read testimonials and FAQs, and submit a custom hamper inquiry via a validated form that confirms successful submission.
