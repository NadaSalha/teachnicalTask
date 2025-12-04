# RickAndMorty App

**Explore the universe of Rick & Morty!**  
A modern **React + TypeScript** web application that fetches and displays characters and their episodes from the **[Rick & Morty API](https://rickandmortyapi.com/documentation/)** using custom hooks and TanStack Query.


---

## 📝 Overview

This project is a fully responsive web app built with a clean architecture approach.  
It demonstrates efficient API integration, state management, and dynamic routing, making it a great showcase for **frontend development skills**.

---

## 🚀 Features

### Characters Page
- Display a **grid of characters** with images and basic info.
- **Search characters by name**.
- Loading, error, and "Not Found" states implemented for smooth UX.

### Character Details Page
- Show character **image** and detailed info: status, species, gender, origin.
- List all **episodes** the character appeared in, fetched dynamically.

### State Management & API
- **Custom hooks** (`useCharacters`, `useEpisode`) for API calls.
- Data fetching and caching using **TanStack Query**.
- Proper handling of **loading, error, and empty states**.

### Clean Architecture
- Components organized for **scalability and maintainability**.
- TypeScript types ensure **type safety and predictability**.

---

## 🛠️ Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS  
- **State Management / Data Fetching:** TanStack Query (React Query)  
- **Routing:** React Router v7  
- **API Integration:** Axios  

---

## ⚡ Installation & Setup

```bash
# Clone repository
git clone https://github.com/NadaSalha/teachnicalTask.git

--------------------------------------------------------
# Navigate to project folder
cd teachnicalTask

--------------------------------------------------------
# Install dependencies
npm install

--------------------------------------------------------
# Start development server
npm run dev
