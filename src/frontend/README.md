# WanderLy – Premium Travel Web

## 📖 Overview
A modern, premium‑looking travel website built with **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **Lucide‑React**. It showcases beautiful pages such as **About Us**, **Travel Blog**, **Partnership**, and a full booking flow. All components are styled with glass‑morphism, gradients, and micro‑animations to give a state‑of‑the‑art user experience.

---

## 🛠️ Prerequisites
Make sure you have the following installed on your machine before cloning the repository:

- **Git** – to clone the repo.
- **Node.js** (v18 or newer) – the runtime for the app.
- **npm** (comes with Node) – or **yarn**, **pnpm**, **bun** if you prefer an alternative package manager.
- **A modern browser** – for local development (Chrome, Edge, Firefox, etc.).

> **Tip:** If you use `pnpm` or `yarn`, the commands are interchangeable – just replace `npm` with your chosen manager.

---

## 🚀 Getting Started (Clone & Run Locally)
```bash
# 1️⃣ Clone the repository
git clone https://github.com/your‑username/Travel-Web.git

# 2️⃣ Change directory to the frontend project (the Next.js app lives here)
cd Travel-Web/frontend

# 3️⃣ Install dependencies
npm install   # or `yarn` / `pnpm install` / `bun install`

# 4️⃣ Run the development server
npm run dev   # or `yarn dev`, `pnpm dev`, `bun dev`
```
Open your browser and navigate to **http://localhost:3000** – you should see the fully‑styled home page.

---

## 📦 Production Build & Preview
When you’re ready to test a production build locally:
```bash
# Build the optimized static files
npm run build   # or `yarn build`

# Preview the built app locally
npm start       # or `yarn start`
```
The preview runs on **http://localhost:3000** just like the dev server, but with all production optimizations applied.

---

## 🧹 Linting & Formatting (Optional but recommended)
```bash
# Run ESLint
npm run lint

# Auto‑fix lint issues
npm run lint -- --fix

# Run Prettier to format all files
npm run format
```
These scripts are defined in `package.json` and help keep the codebase clean.

---

## 📂 Project Structure (High‑Level)
```
frontend/
├─ src/
│  ├─ app/                # Next.js app router – pages like /about, /blog, /book, etc.
│  ├─ components/         # UI components (layout, home, UI utilities)
│  │   ├─ layout/          # Navbar & Footer
│  │   └─ home/            # Hero, DestinationCard, SearchBox, etc.
│  ├─ data/               # Centralised static data (navLinks, footerLinks, packages)
│  ├─ lib/                # Helper libraries (if any)
│  └─ globals.css         # Global Tailwind + custom CSS
├─ public/                # Static assets (favicon, images not loaded via CDN)
├─ next.config.ts         # Next.js configuration (image remotePatterns, etc.)
└─ package.json           # Scripts, dependencies, etc.
```
The README now reflects the actual folder layout after we moved shared data into `src/data`.

---

## 📦 Installing Required Tools Globally (One‑time setup)
If you don’t already have Node.js or a package manager, install them globally:
```bash
# Node.js (use nvm, asdf, or direct installer)
# Example with nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
nvm install 18
nvm use 18

# Yarn (optional)
npm install -g yarn

# PNPM (optional)
npm install -g pnpm
```
After installing Node, the `npm install` step will pull all required packages automatically.

---

## 📦 Deploying to Vercel (One‑click)
The easiest way to get this site live is via **Vercel** – the platform built by the creators of Next.js.
1. Push your repository to GitHub.
2. Go to the Vercel dashboard and import the repo.
3. Vercel detects the Next.js framework automatically and sets the build command to `npm run build` and the output directory to `.next`.
4. Click **Deploy** – Vercel will build and host your site at a generated URL.

---

## 🙋‍♂️ Contributing
Feel free to open issues or submit pull requests. Follow the lint/format steps above before committing.

---

## 📜 License
This project is licensed under the **MIT License** – see the `LICENSE` file for details.
