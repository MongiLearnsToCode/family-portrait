# Build Order – Family Portrait AI App

## 1. Project Setup
- [x] Initialize Next.js PWA  
  - [x] Create Next.js app with PWA support  
  - [x] Add Tailwind CSS + shadcn/ui components  
  - [x] Configure Vercel for deployment  
- [ ] Set up Convex backend (skipped, requires interactive terminal)  
  - [ ] Initialize Convex project  
  - [ ] Connect Convex to Next.js frontend  
- [ ] Configure Cloudinary  
  - [ ] Create Cloudinary account & API keys  
  - [ ] Integrate image upload widget & transformations  

---

## 2. Authentication (Better Auth)
- [ ] Install & configure Better Auth  
- [ ] Enable social logins (Google, Apple, Email)  
- [ ] Connect auth state to Convex DB (store users)  
- [ ] Implement protected routes (premium features)  

---

## 3. Instant Sandbox (No-Login Demo)
- [x] Create landing page with upload UI (shadcn file uploader)  
- [x] Allow up to 3 image uploads (Cloudinary)  
- [x] Call Gemini 2.5 Flash → generate watermarked portrait  
- [x] Display portrait preview  
- [ ] Add CTA → “Sign up for full experience”  

---

## 4. Core App (Logged-In Users)
- [ ] Upload & Management  
  - [ ] Unlimited uploads (store in Cloudinary)  
  - [ ] Save metadata to Convex DB  
- [ ] Portrait Generation  
  - [ ] Preprocess uploaded faces (Cloudinary transformations)  
  - [ ] Call Gemini 2.5 Flash API with aligned faces  
  - [ ] Save generated portrait in Convex DB  
- [ ] User Library  
  - [ ] List generated portraits  
  - [ ] Preview portraits  
  - [ ] Delete portraits  
  - [ ] Re-generate portraits  

---

## 5. Premium Features
- [ ] Background Selection  
  - [ ] Add background selector (preset list)  
  - [ ] Pass background choice to Gemini prompt  
- [ ] Artistic Styles  
  - [ ] Add style selector (realistic, painting, cartoon)  
  - [ ] Pass style param to Gemini prompt  
- [ ] High-Resolution Export  
  - [ ] Implement 4K export (no watermark)  
  - [ ] Enable only for premium users  
- [ ] Saved Portraits  
  - [ ] Save multiple generated portraits in user account  

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
- [ ] Add privacy policy + consent flow  

---

## 8. UX & Polish
- [ ] Landing page design with shadcn/ui  
- [ ] CTA buttons → sandbox demo → signup → premium  
- [ ] Loading states for uploads & AI generation  
- [ ] Error handling (Gemini fails, Cloudinary upload fails, etc.)  

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

