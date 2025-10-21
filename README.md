# 🚗 AI Marketplace: Intelligent Car Discovery Platform

Welcome to **AI Marketplace**, a next-generation platform built to revolutionize how people search, compare, and test-drive cars using cutting-edge AI. The project combines powerful semantic search, intelligent image scanning, and robust admin tooling into a seamless experience for both users and administrators.

👉 **Live Demo:** [AI Marketplace]([https://ai-marketplace.vercel.app/](https://ai-marketplace-smoky.vercel.app/))

## 🚀 Key Features

### 🔍 AI-Powered Car Search
- Upload an image or describe a car — the platform intelligently identifies and recommends vehicles using **Gemini API**.
- Real-time suggestions and filtering based on user queries and image recognition.

### 🖱️ Drag-and-Drop Smart UI
- Effortlessly interact with the search system using an intuitive drag-and-drop interface.
- Designed for a natural flow and minimal input friction.

### 🧠 AI Image Scanning & Autofill
- Upload any car image, and the platform auto-detects make, model, and year.
- Pre-fills relevant listing details using machine learning models.

### 🔐 Custom Authentication & Role-Based Access
- Built with secure login and signup workflows.
- Admin, user, and guest roles with dynamically gated features and access controls.

### 💰 EMI Calculator with Create.xyz
- Interactive and embeddable calculator to estimate monthly payments.
- Helps users make informed financial decisions.

### 📅 Test Drive Booking System
- Users can schedule test drives through an interactive form.
- Admins can manage and respond to test drive requests in real time.

### 🛡️ Arcjet Rate Limiting & Bot Protection
- Implements smart API protection via Arcjet's edge services.
- Shields critical endpoints from abuse and maintains platform integrity.

### 🧑‍💼 Admin Dashboard
- Comprehensive backend tools for inventory, user management, and settings.
- View analytics, update listings, and modify user roles from a sleek UI.

### 🎨 Modern UI with Shadcn and Tailwind
- Fast, responsive design optimized for mobile and desktop.
- Built using the Shadcn component library and Tailwind CSS for consistency.

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS, Shadcn UI
- **Backend:** Server Actions, Prisma ORM, PostgreSQL
- **Authentication:** Custom Auth System
- **AI Integrations:** Gemini API (Semantic Search & Image Recognition)
- **DevOps & Infra:** Arcjet (Bot Protection & Rate Limiting), Vercel (Deployment)
- **Extras:** Create.xyz (EMI Calculator), Role-based Routing, Admin Tools

## ✅ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/BhaveshxPurohit/AI-Marketplace.git
cd ai-marketplace
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env.local` file and include:
```env
DATABASE_URL=your_postgres_url
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
ARCJET_TOKEN=your_arcjet_token
CREATE_XYZ_API_KEY=your_create_xyz_key
```

### 4️⃣ Run Locally
```bash
npm run dev
```
Visit `http://localhost:3000` to explore the AI Marketplace.

## 🚀 Deployment
AI Marketplace is deployed via [Vercel](https://vercel.com/):
- Auto CI/CD with every push.
- Environment variables managed securely.

## 📈 Future Enhancements
- Integrate advanced recommendation engine.
- Push notifications for test drive updates.
- Mobile app version with same AI features.
- Admin analytics dashboards and heatmaps.

---

