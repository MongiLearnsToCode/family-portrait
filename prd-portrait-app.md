# PRD – Family Portrait AI App

## 1. Overview
A **Next.js PWA** that lets users upload photos of family members, then generates a composite portrait with **Gemini 2.5 Flash**. Uses **Better Auth** for authentication, **shadcn/ui** for the design system, **Polar.sh** for payments, and **Cloudinary** for image handling.  

Users can try the app instantly (sandbox mode) without creating an account, then upgrade to premium features via Polar.  

---

## 2. Goals
- Make portrait creation frictionless.  
- Encourage instant engagement with a free sandbox/demo.  
- Monetize with premium backgrounds, styles, and higher resolution.  
- Maintain user trust with privacy-first defaults.  

---

## 3. Features

### MVP (Free Tier)
- **Instant Sandbox:** User lands on homepage and can upload 2–3 photos → AI generates a demo portrait (watermarked).  
- **Auth (Better Auth):** Seamless social + email login.  
- **Photo Upload (Cloudinary):** Drag & drop or mobile camera.  
- **Portrait Generation (Gemini 2.5 Flash):** AI combines uploaded faces into a single portrait.  
- **Download:** 1080p watermarked image.  

### Premium
- **Background Selection:** Choose from curated backgrounds (home, studio, travel, fantasy).  
- **Artistic Styles:** Realistic, oil painting, watercolor, Pixar-style.  
- **High-Resolution Export:** 4K, no watermark.  
- **Saved Portraits:** Unlimited storage in account.  
- **Outfit Editing:** Change clothing (formal, casual, seasonal).  

---

## 4. Tech Stack
- **Frontend:** Next.js + Tailwind + shadcn/ui components  
- **Auth:** Better Auth (plug-and-play secure auth)  
- **Payments:** Polar.sh (prod), sandbox.polar.sh (dev/test)  
- **Backend:** Convex (DB, functions, real-time sync)  
- **Image Handling:** Cloudinary (uploads, transformations, delivery)  
- **AI Integration:** Gemini 2.5 Flash API for portrait synthesis  
- **Hosting:** Vercel  

---

## 5. User Flow
1. **Landing Page (No Account Needed):**  
   - Upload up to 3 images → Generate demo portrait (watermarked).  
   - CTA to “Sign up for full experience.”  

2. **Signup/Login (Better Auth):**  
   - Google/Apple/Email sign-in.  

3. **Main App:**  
   - Upload unlimited photos → Generate portraits.  
   - Pick styles/backgrounds (premium).  
   - Preview portrait → Save to account.  

4. **Payments (Polar):**  
   - Subscribe for premium or one-off purchases.  
   - Sandbox.polar.sh used in development to simulate transactions.  

5. **Export & Share:**  
   - Free: 1080p watermarked.  
   - Premium: 4K, no watermark, multiple backgrounds/styles.  

---

## 6. Privacy
- Raw photos deleted post-processing unless user saves portrait.  
- Generated portraits + metadata stored securely in Convex DB.  
- Clear consent + transparent privacy policy.  

---

## 7. Monetization
- **Free Tier:** Limited uploads, watermarked output, neutral background.  
- **Subscription (Polar):** $5–10/month → unlimited uploads, styles, backgrounds, 4K.  
- **One-Off:** $2.99 per high-res portrait.  

---

## 8. Roadmap
- **Phase 1:** Sandbox demo → Generate → Download (watermarked).  
- **Phase 2:** Premium unlocks (backgrounds, styles, hi-res).  
- **Phase 3:** Persistent accounts + saved galleries.  
- **Phase 4:** Fun add-ons (outfit changer, seasonal themes).  

---

## 9. Risks
- **Sandbox abuse (free farm):** Limit watermarked downloads per IP/session.  
- **Performance:** Gemini calls may be slow → pre-process with Cloudinary before sending to Gemini.  
- **Design sprawl:** Keep UI simple with shadcn/ui presets.  

