# 🧑‍💼 Job Listing Application with Next.js

## 🚀 Project Overview

This project showcases a **Job Listing Application** built using **Next.js 14 App Router** with **TypeScript** and **Tailwind CSS**. The app displays a list of job opportunities with detailed job descriptions.
## 🔍 Features

- **Static Job Data** loaded from a local JSON file
- **Job Cards**: Title, company, location, short description
- **Detail Page**: Full description, responsibilities, candidate traits, job dates, and skills
- **Clean Layout**: Responsive and accessible design
- **Client-Side Navigation** using dynamic routing (`/jobs/[id]`)

## 🛠️ Technologies Used

- [Next.js 14](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint + Prettier] for code formatting

---

## 🧭 Pages & Screenshots

### Front Page (`/`)
**Welcome to Your Next Opportunity** landing page with a button to browse jobs.  

![Home Page Screenshot](./public/imgs/homePage1.png)

### Jobs Listing (`/jobs`)
**Opportunities** header, showing count of `x results`, a `Sort by` dropdown, and a grid of job cards.  

![Jobs Listing Screenshot](./public/imgs/jobList2.png)

### Job Detail (`/jobs/[slug]`)
Full job details, including:
- Description  
- Responsibilities list  
- Ideal Candidate section  
- When & Where details  
- Sidebar with About, Categories, and Required Skills  

![Job Detail Screenshot](./public/imgs/detail3.png)


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

```bash
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
│   └── imgs/      
├── styles/
│   └── globals.css
└── README.md
```

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