# **🎯 Flataway Dashboard — Customizable Dashboard**

## 📌 **Project Overview**

This project is a customizable dashboard built with **Next.js**, featuring a responsive 3x3 grid of buttons. Each button can be configured with a custom color and hyperlink. If a button isn't set yet, clicking it leads to a configuration page where users can add or edit the button’s settings.

---

## 📝 **Key Features**

* 📐 **Responsive 3x3 Grid** — the grid adapts to different screen sizes.  
* 🎨 **Each button has its own color and link**, customizable by the user.  
* 🔗 **Redirects to the specified link** when a button is clicked.  
* ⚙️ **If the link is not yet configured**, the button leads to the configuration page.  
* 🛠️ **Edit and delete** configuration for each button.  

---

## 📡 **Data Storage & API**  

🔄 Instead of using LocalStorage, as mentioned in the technical requirements, the app stores button data via **its own API layer**, implemented using App Router in Next.js.  

📁 **API Routes**:  

* `app/api/buttons/route.ts` — handles requests for fetching all buttons (`GET`) and creating a new configuration (`POST`).  
* `app/api/buttons/[id]/route.ts` — handles requests for updating (`PATCH`) or deleting (`DELETE`) a specific button by its ID.  

📦 All API logic is built around a **controller class**, which contains the necessary methods for data operations (CRUD). The data is stored in an **in-memory server array**, simulating a database for this demo example.  

---

## 🧰 **Technologies Used**  

* **Next.js** – React framework with App Router and Server Actions.  
* **TypeScript** – static typing for code reliability.  
* **Tailwind CSS** – fast and responsive UI styling.  

---  

## ☁️ **Deployment**  

The app was deployed on **Vercel**. Demo link: [https://flataway-frontend-task-ogipz44t4.vercel.app/](https://flataway-frontend-task-ogipz44t4.vercel.app/)  

---

## 📝 **Notes**

* Data storage mimics the backend layer, but can easily be adapted to a real database.  
* The project demonstrates skills in working with App Router, server routes, dynamic pages, and state management through server logic.
