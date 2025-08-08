# 🧰 Devfix — Developer Tools Dashboard

Devfix is a beautifully designed dashboard web app that showcases essential tools and resources for developers. Built using **Next.js**, **TypeScript**, **Tailwind CSS**, and **ShadCN UI**, the site offers a clean, dark-themed interface with a responsive layout and smooth scroll sections.

## 🚀 Features

- ⚡ **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, and ShadCN components.
- 🎯 **Hero Section**: Eye-catching title and call-to-action buttons.
- 💡 **Unique Selling Points (USP)**: Highlights why Devfix stands out.
- 🛠️ **Featured Tools**: Cards for top developer tools like GitHub, VS Code, and Postman.
- 🔥 **Responsive Design**: Mobile-friendly and fast loading.
- 🌐 **Deployed on Vercel** for instant access.

## 📸 Preview

![Devfix Preview](./public/preview.png)  
> _Dark mode friendly UI with developer-centric design._

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.dev/)
- **Deployment**: [Vercel](https://vercel.com)

## 📁 Project Structure

```
├── app
│   ├── page.tsx          # Main landing page
│   └── layout.tsx        # Global layout with theme
├── components
│   ├── ui/
│   │   ├── hero.tsx
│   │   ├── usp-section.tsx
│   │   ├── featured-tools.tsx
│   │   └── navbar.tsx
├── public
│   └── preview.png       # Image for README preview
├── styles
│   └── globals.css
└── README.md
```

## 🧪 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/devfix.git
cd devfix
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

Now, open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚀 Deployment

This project is deployed with **Vercel**.

### Automatic Deployment from GitHub

If you've connected this repo to Vercel:

- Any `git push` to the `main` branch will **automatically trigger a redeploy**.
- You can also go to your [Vercel Dashboard](https://vercel.com/dashboard) and click **"Redeploy"** manually.

### Manual Deployment (Optional)

```bash
vercel
```

_(If not logged in, you'll be prompted to authenticate.)_

## 🔄 Updating Project After Deployment

To push changes and redeploy automatically:

```bash
git add .
git commit -m "Update: your message"
git push
```

Vercel will auto-deploy your latest code.

## 📦 Optional: Initialize Git (if not done)

```bash
git init
git remote add origin https://github.com/your-username/devfix.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 📃 License

This project is licensed under the **MIT License**. Feel free to use it for personal or commercial projects.

---

> Built with ❤️ by [Kadimi Jaswanth](https://github.com/KadimiJaswanth)
