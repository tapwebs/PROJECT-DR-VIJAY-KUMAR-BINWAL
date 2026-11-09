<p align="center">
  <a href="https://tapwebs.in" target="_blank" rel="noopener noreferrer">
    <img src="assets/branding/tapwebs-logo.png" alt="TAPWEBS Digital Agency Logo" width="220" />
  </a>
</p>

<h1 align="center">Dr. Vijay Kumar Binwal — Medical Portal & Patient Platform</h1>

<p align="center">
  <strong>Production Healthcare Web Architecture &bull; Designed &amp; Engineered by <a href="https://tapwebs.in">TAPWEBS</a></strong>
</p>

<p align="center">
  <a href="https://drvijaykumarbinwal.com" target="_blank">
    <img src="https://img.shields.io/badge/Live_Site-drvijaykumarbinwal.com-10B981?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://tapwebs.in" target="_blank">
    <img src="https://img.shields.io/badge/Agency-TAPWEBS-0284C7?style=for-the-badge&logo=safari&logoColor=white" alt="Agency Website" />
  </a>
  <img src="https://img.shields.io/badge/Status-Production_Live-success?style=for-the-badge" alt="Production Live" />
  <img src="https://img.shields.io/badge/License-Showcase_Only-orange?style=for-the-badge" alt="Showcase License" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Sanity_CMS_v3-F03E2F?style=flat-square&logo=sanity&logoColor=white" alt="Sanity CMS" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" />
  <img src="https://img.shields.io/badge/SEO-Schema.org_JSON--LD-F59E0B?style=flat-square" alt="Schema.org" />
  <img src="https://img.shields.io/badge/i18n-English_%7C_%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%80-8B5CF6?style=flat-square" alt="Bilingual Support" />
</p>

---

## 📸 Visual Showcase & Client Highlights

<div align="center">

| 👨‍⚕️ Clinical Identity & Consultation | 🏥 Clinic Branding & Specialties |
| :---: | :---: |
| <img src="assets/doctor/doctor-profile.jpg" alt="Dr. Vijay Kumar Binwal" width="380" /> | <img src="assets/doctor/dr-vijay-binwal-logo.png" alt="Clinic Logo" width="380" /> |
| **Dr. Vijay Kumar Binwal**<br/>*DM Nephrology • 25+ Years Experience* | **Pinkcity Superspeciality Clinic**<br/>*Mansarovar, Jaipur, Rajasthan* |

| 🩺 Clinical Procedures & Dialysis | 🥗 Interactive Renal Diet Plan Guide |
| :---: | :---: |
| <img src="assets/previews/clinical-procedure-dialysis.webp" alt="Dialysis & Clinical Treatment" width="380" /> | <img src="assets/previews/kidney-diet-plan-guide.jpg" alt="Kidney Diet Guide" width="380" /> |
| **Comprehensive Renal Care**<br/>*Peritoneal Dialysis & Kidney Transplant Care* | **Patient Education Hub**<br/>*Personalized Dietetics & Health Guides* |

</div>

---

## 📌 Executive Summary & Case Study

This repository is a **Public Architecture & Showcase Portfolio** designed by [TAPWEBS](https://tapwebs.in) to illustrate modern healthcare platform engineering. 

**Dr. Vijay Kumar Binwal** is a distinguished senior nephrologist, kidney transplant physician, and medical educator based in Jaipur, Rajasthan, with over 25 years of clinical practice across prestigious institutions including SMS Medical College, SP Medical College, and RNT Medical College.

### The Challenge
- **Fragmented Patient Discovery**: High patient volumes looking for emergency nephrology consultation, dialysis scheduling, and second opinions were hindered by static directories.
- **Bilingual Demographics**: The patient base encompasses both English and Hindi-speaking populations across Rajasthan and North India.
- **Local Medical SEO**: Medical queries ("Best Nephrologist in Jaipur", "Kidney Specialist Mansarovar") required precise semantic Schema.org indexing for Google Local and Knowledge Panels.
- **Real-Time Patient Conversions**: Seamless routing directly from symptom discovery into confirmed WhatsApp booking and secure clinic enquiry forms.

### The Solution by TAPWEBS
**TAPWEBS** designed and engineered an ultra-fast, headless medical ecosystem powered by **Next.js 16 (App Router)** and **Sanity Studio v3 Headless CMS**, featuring:
- Sub-second server-side rendered pages with automated revalidation.
- Full bilingual localized content dictionaries (English & Hindi) without routing friction.
- Schema.org structured data hierarchy (`MedicalOrganization`, `Physician`, `LocalBusiness`, and `FAQPage`).
- Secure API proxies for live Google Places verified reviews and rate-limited Resend transactional messaging.

---

## 🏗️ System Architecture & Data Flow

```mermaid
flowchart TD
    subgraph ClientLayer["Client & Patient Entrypoint"]
        Patient["Patient Browser / Mobile Device"]
        WhatsApp["Direct WhatsApp Line (+91-9521874874)"]
    end

    subgraph EdgeLayer["Edge Delivery & Routing (Next.js 16)"]
        NextServer["Next.js App Router (SSR + ISR Engine)"]
        LangContext["Bilingual i18n Context (EN / HI)"]
        SEOEngine["Dynamic Schema.org JSON-LD Generator"]
    end

    subgraph APIProxy["Protected Internal Endpoints"]
        ContactRoute["/api/contact (Rate Limited + HTML Escaped)"]
        GoogleProxyRoute["/api/google-proxy (S-MaxAge Cache Proxy)"]
    end

    subgraph ExternalServices["External Infrastructure & CMS"]
        SanityCMS["Sanity Studio v3 (Headless Medical CMS)"]
        ResendMail["Resend API (Transactional Lead Delivery)"]
        GooglePlaces["Google Places API (Verified Reviews)"]
    end

    Patient -->|HTTPS| NextServer
    Patient -->|1-Click Booking| WhatsApp
    NextServer --> LangContext
    NextServer --> SEOEngine
    NextServer -->|Query Content| SanityCMS
    NextServer -->|Form Submission| ContactRoute
    NextServer -->|Fetch Ratings| GoogleProxyRoute
    ContactRoute -->|Verified Email| ResendMail
    GoogleProxyRoute -->|Cached Reviews| GooglePlaces
```

---

## 🌟 Key Engineering Highlights

### 1. Medical Schema.org Semantic SEO
The application implements Google-compliant medical structured data graphs directly within the Next.js App Router:
- **`MedicalOrganization`**: Verified clinic identity, geo-coordinates, operating hours, and specialty classification.
- **`Physician`**: Alumni credentials, GMC/MCI registration context, 25+ years experience metadata.
- **`FAQPage`**: Rich snippet Q&A eligibility right in Google Search results.

### 2. Dual-Language Architecture (English & Hindi)
- Native zero-dependency i18n dictionary system with instant client-side switching.
- Persistent state hydration with fallback to localized schemas in Sanity.

### 3. API Security & Privacy Best Practices
- **In-Memory Rate Limiting**: Prevents automated spam and brute-force abuse on `/api/contact`.
- **Server-Side API Proxying**: Google Places API credentials remain hidden on the server; client requests receive an HTTP cached response (`Cache-Control: public, s-maxage=3600`).
- **Input Sanitization**: Multi-stage HTML character escaping for all clinical enquiry fields prior to transactional dispatch.

### 4. Containerized Multi-Environment Setup
- Dockerized Next.js standalone server and Sanity Studio isolated multi-container architecture via `docker-compose.yml`.

---

## 📂 Public Showcase Repository Structure

```text
PROJECT DR VIJAY KUMAR BINWAL/
├── assets/                          # Showcase visuals & agency branding
│   ├── branding/
│   │   ├── tapwebs-logo.png         # Official TAPWEBS brand logo
│   │   └── tapwebs-logo.svg         # TAPWEBS SVG vector logo
│   ├── doctor/
│   │   ├── doctor-profile.jpg       # Dr. Vijay Kumar Binwal profile
│   │   ├── dr-vijay-binwal-logo.png # Clinic branding logo
│   │   └── medical-excellence-award.webp
│   └── previews/
│       ├── clinical-procedure-dialysis.webp
│       └── kidney-diet-plan-guide.jpg
├── cms-schemas/                     # Sanity Studio content schemas
│   ├── doctorProfile.ts             # Medical certifications & credentials schema
│   ├── speciality.ts                # Nephrology treatments schema
│   ├── faq.ts                       # Bilingual patient FAQ schema
│   ├── testimonial.ts               # Patient review schema
│   └── illness.ts                   # Patient education diseases schema
├── src/                             # Curated application architecture
│   ├── app/
│   │   ├── layout.tsx               # Root layout & meta configuration
│   │   ├── page.tsx                 # Homepage with Schema.org JSON-LD
│   │   └── api/
│   │       ├── contact/route.ts     # Resend contact endpoint (sanitized)
│   │       └── google-proxy/route.ts# Reviews proxy endpoint
│   ├── components/
│   │   ├── sections/                # High-performance UI sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TrustBar.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── AboutDoctorSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── ContactCTASection.tsx
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx           # Agency credit & link to tapwebs.in
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Badge.tsx
│   │       └── LanguageSwitcher.tsx
│   ├── lib/
│   │   ├── i18n/                    # Bilingual English/Hindi dictionary
│   │   └── sanity/                  # Sanity client & query definitions
│   └── types/
│       └── index.ts                 # TypeScript interfaces
├── docker/                          # Multi-container orchestration
│   ├── Dockerfile.frontend
│   ├── Dockerfile.cms
│   └── docker-compose.yml
├── .env.example                     # Sanitized configuration template (no secrets)
├── .gitignore                       # Strict production gitignore
├── LICENSE                          # Showcase Terms & IP Notice
├── package.json                     # Showcase package manifest
├── tsconfig.json                    # TypeScript configuration
└── README.md                        # Master repository documentation
```

---

## 🔒 Security & Public Repository Guidelines

> [!IMPORTANT]
> **Production Credentials & Proprietary Data Protection**:
> In accordance with client confidentiality agreements and cybersecurity best practices, all production database records, private API tokens, SMTP credentials, and operational secrets are strictly **excluded** from this public repository.
> 
> A sanitized [.env.example](.env.example) template is provided for developers reviewing the architectural setup.

---

## 🚀 Getting Started (Local Exploration)

### Prerequisites
- Node.js `20.x` or `22.x`
- npm, pnpm, or yarn

### 1. Clone the Showcase Repository
```bash
git clone https://github.com/tapwebs/PROJECT-DR-VIJAY-KUMAR-BINWAL.git
cd "PROJECT DR VIJAY KUMAR BINWAL"
```

### 2. Configure Environment Template
```bash
cp .env.example .env.local
```

### 3. Install Dependencies & Run
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application interface.

---

## 🏢 About the Developer — TAPWEBS

<p align="center">
  <a href="https://tapwebs.in" target="_blank" rel="noopener noreferrer">
    <img src="assets/branding/tapwebs-logo.png" alt="TAPWEBS" width="160" />
  </a>
</p>

**TAPWEBS** is a premier digital engineering and web development agency specializing in:
- ⚡ **High-Performance Web Platforms**: Next.js, React, and TypeScript enterprise applications.
- 🩺 **Medical & Healthcare Portals**: HIPAA-aware appointment engines, clinical CMS, and local medical SEO.
- 🎨 **Bespoke UI/UX Design**: Modern aesthetics, mobile-first design, and conversion-focused experiences.
- 📈 **Growth Engineering**: Core Web Vitals optimization, semantic schema markup, and headless architectures.

### Connect with TAPWEBS
- 🌐 **Website**: [tapwebs.in](https://tapwebs.in)
- 💼 **Portfolio**: [tapwebs.in/projects](https://tapwebs.in)
- ✉️ **Inquiries**: [hello@tapwebs.in](mailto:hello@tapwebs.in)
- 🐙 **GitHub**: [@tapwebs](https://github.com/tapwebs)

---

## 📄 License & Intellectual Property Notice

This repository is published as a **Showcase & Architectural Portfolio**. 

- The codebase structure, architectural design, and demonstration components are copyright © 2024–2026 **TAPWEBS**.
- The doctor's identity, clinic branding, patient imagery, and clinical materials are proprietary to **Dr. Vijay Kumar Binwal** and **TAPWEBS**.
- For full licensing terms, please consult the [LICENSE](LICENSE) file.

