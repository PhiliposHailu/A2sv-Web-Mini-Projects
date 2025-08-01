# 💼 Job Listing Application with Next.js Plus User Authentication

A clean, modern Job Board application built with **Next.js** and **Tailwind CSS**. It includes user authentication, email verification, and a personalized welcome dashboard.

---

## 🔧 Features
- ✅ Signup with email, username, and password  
- 📩 OTP sent to email for verification  
- 🔐 Secure login with token-based authentication  
- 🏠 Welcome dashboard with user's name and email  
- ⚡ Fast UI built with Tailwind and Next.js  
- 🔒 Only authenticated users can view the Home, Jobs List, and Job Detail pages (`/`, `/jobs`, `/jobs/[id]`)  
- 🔁 Unauthenticated users are redirected to the login page  
- ↩️ After login, users are redirected to the page they originally tried to access


---

## 🧠 Tech Stack

- **Frontend**: Next.js (App Router), Tailwind CSS  
- **Authentication**: Token-based auth using JWT  
- **State**: LocalStorage and client-side context  

---

## 🖥️ Screenshots & Instructions

### 1. 📝 Signup Page

![Signup Page](/public/imgs/task8_imgs/sighUp_1.png)
![Signup Page](/public/imgs/task8_imgs/signUp_2.png)



- Fill in **username**, **email**, **password** and confirm **password** fields.  
- Submit to register your account.

---

### 2. 📧 OTP Sent to Gmail

![OTP Sent](/public/imgs/task8_imgs/verify_4.png)

- Check your inbox for a 4-digit OTP code.  
- Copy the OTP to continue verification.

---

### 3. 🔐 Verification Page

![Verification Page](/public/imgs/task8_imgs/verify_3.png)

- Enter the OTP sent to your email.  
- Click **Verify** to confirm your account.

---

### 4. 🔑 Login Page

![Login Page](/public/imgs/task8_imgs/login_5.png)
![Login Page](/public/imgs/task8_imgs/login_6.png)


- Input your **email** and **password**.  
- After login, your token is stored locally.

---

### 5. 🏡 Home Page

![Home Page](/public/imgs/task8_imgs/Home_7.png)

- You will be redirected to the home page.  
- Displays a welcome message with your **name** and **email**, confirming successful login.

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/PhiliposHailu/A2sv-Web-Mini-Projects/tree/main
cd job-listing-app-Auth-task-8
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

## Project Structure

```bash

├── app
│   ├── components
│   ├── favicon.ico
│   ├── globals.css
│   ├── jobs
│   ├── layout.tsx
│   ├── login
│   ├── page.tsx
│   ├── signup
│   ├── types
│   └── verify
├── public
│   ├── data
│   └── imgs
└── README.md

```

## Author

**Philipos Hailu**  
🔗 [GitHub @philiposhailu](https://github.com/philiposhailu)  
📫 Email: hailuphilipos@gmail.com