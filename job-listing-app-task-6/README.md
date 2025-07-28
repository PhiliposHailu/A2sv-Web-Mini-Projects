# 🧑‍💼 Job Listing Application with Next.js

## 🚀 Project Overview

This project showcases a **Job Listing Application** built using **Next.js 14 App Router** with **TypeScript** and **Tailwind CSS**. The app displays a list of job opportunities with filterable and detailed job descriptions, optimized for performance and clean design.

## 🔍 Features

- **Static Job Data** loaded from a local JSON file
- **Job Cards**: Title, company, location, short description
- **Detail Page**: Full description, responsibilities, candidate traits, job dates, and skills
- **Clean Layout**: Responsive and accessible design
- **Client-Side Navigation** using dynamic routing (`/jobs/[id]`)
- **Dropdown Sorting** (UI only): "Most Relevant", "Least Relevant"
- **Semantic HTML** and accessible components

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint + Prettier] for code formatting

---

## 💻 Screenshots

### 🏠 Home Page
Displays all job cards with a sort dropdown and result count.

![Home Page](./public/screenshots/home.png)

---

### 📄 Job Detail Page
Full job information including ideal candidate, when & where, and about section.

![Detail Page](./public/screenshots/detail.png)

---

## 📦 Getting Started

### 🔧 Prerequisites

- Node.js v16+
- npm or yarn

## 🚀 How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/yourusername/job-listing-app.git
cd job-listing-app
```
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open http://localhost:3000 in your browser.

## Project structure

job-listing-app/
├── app/
│   ├── page.tsx         
│   ├── jobs/
│   │   └── [slug]/
│   │       └── page.tsx 
├── components/
│   ├── JobCard.tsx       
│   ├── JobList.tsx      
├── data/
│   └── jobs.json         
├── types/
│   ├── JobListType.ts   
│   └── JobDescriptionType.ts 
├── public/
│   └── screenshots/      
├── styles/
│   └── globals.css
└── README.md


## 🔧 Tech Stack

- **Next.js 13+ (App Router)**
- **Tailwind CSS** for styling
- **Static JSON** placed in `/public/data/jobs.json`
- No external API calls or client-side fetching (pure static rendering)

---


## Author

**Philipos Hailu**  
🔗 [GitHub @philiposhailu](https://github.com/philiposhailu)  
📫 Email: hailuphilipos@gmail.com