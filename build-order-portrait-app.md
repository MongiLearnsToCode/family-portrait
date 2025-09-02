# Build Order – Family Portrait AI App

## 1. Project Setup
- [x] Initialize Next.js PWA  
  - [x] Create Next.js app with PWA support  
  - [x] Add Tailwind CSS + shadcn/ui components  
  - [x] Configure Vercel for deployment  
- [x] Set up Convex backend (skipped, requires interactive terminal)  
  - [x] Initialize Convex project  
  - [x] Connect Convex to Next.js frontend  
- [x] Configure Cloudinary  
  - [x] Create Cloudinary account & API keys  
  - [x] Integrate image upload widget & transformations  

---

## 2. Authentication (Better Auth)
- [x] Install & configure Better Auth  
- [x] Enable social logins (Google, Apple, Email)  
- [x] Connect auth state to Convex DB (store users)  
- [x] Implement protected routes (premium features)  

---

## 3. Instant Sandbox (No-Login Demo)
- [x] Create landing page with upload UI (shadcn file uploader)  
- [x] Allow up to 3 image uploads (Cloudinary)  
- [x] Call Gemini 1.5 Flash → generate watermarked portrait  
- [x/ Display portrait preview  
- [x] Add CTA → “Sign up for full experience”  

---

## 4. Core App (Logged-In Users)
- [x] Upload & Management  
  - [x] Unlimited uploads (store in Cloudinary)  
  - [x] Save metadata to Convex DB  
- [x] Portrait Generation  
  - [x] Preprocess uploaded faces (Cloudinary transformations)  
  - [x] Call Gemini 1.5 Flash API with aligned faces  
  - [x] Save generated portrait in Convex DB  
- [x] User Library  
  - [x] List generated portraits  
  - [x] Preview portraits  
  - [x] Delete portraits  
  - [x] Re-generate portraits  

---

## 5. Premium Features
- [x] Background Selection  
  - [x] Add background selector (preset list)  
  - [x] Pass background choice to Gemini prompt  
- [x] Artistic Styles  
  - [x] Add style selector (realistic, painting, cartoon)  
  - [x] Pass style param to Gemini prompt  
- [x] High-Resolution Export  
  - [x] Implement 4K export (no watermark)  
  - [x] Enable only for premium users  
- [x] Saved Portraits  
  - [x] Save multiple generated portraits in user account  

---

## 6. Payments (Polar.sh)
- [ ] Integrate Polar.sh SDK  
- [ ] Configure subscription tiers + one-off purchases  
- [ ] Implement sandbox.polar.sh in dev mode  
- [ ] Link premium features to subscription status  

---

## 7. Privacy & Security
- [ ] Auto-delete raw uploads after portrait generation (if not saved)  
- [ ] Encrypt generated portrait metadata in Convex  
- [x] Add privacy policy + consent flow  

---

## 8. UX & Polish
- [ ] Landing page design with shadcn/ui  
- [ ] CTA buttons → sandbox demo → signup → premium  
- [x] Loading states for uploads & AI generation  
- [x] Error handling (Gemini fails, Cloudinary upload fails, etc.)  

---

## 9. Deployment & QA
- [ ] Deploy on Vercel (staging + production)  
- [ ] Connect domain + SSL  
- [ ] End-to-end testing (Cypress/Playwright)  
- [ ] Sandbox mode testing via sandbox.polar.sh  

---

## 10. Roadmap Extensions (Future)
- [ ] Outfit editing (Gemini prompt modifiers)  
- [ ] Seasonal themes (Christmas, Halloween, etc.)  
- [ ] Social features (share albums, invite family)