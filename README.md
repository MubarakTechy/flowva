<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>
<!-- 

Flowva Rewards Page – Technical Assessment

This project is a recreation of the Rewards page from flowvahub.com
 as part of the React Full-Stack Developer technical assessment.

The goal of this implementation is to closely match the original UI and behavior while demonstrating real-world usage of React and Supabase with clean architecture, authentication, and proper state handling.

Live Demo

 Live URL:
     https://flowva-eight.vercel.app/

 GitHub Repository:
<!-- https://github.com/your-username/flowva-rewards -->


Tech Stack

   Frontend: React (Vite), TypeScript, Tailwind CSS

   Routing: React Router

   Backend & Database: Supabase (Authentication + Database Queries + API)

   Deployment: Vercel


Features Implemented

Authentication Flow:

    Email & password signup and login

    Email confirmation with redirect to /hub

    Protected routes — only authenticated users can access Rewards

    Rewards Page:

    Fetches rewards data from Supabase

    Displays reward title, points, and category

    Handles loading, empty, and error states

    UI / UX:

    Responsive layout for desktop and mobile

    Clean, modern design reflecting the original platform

    Clear feedback for actions (success, error, and loading states)




Project Structure
   src/
│
├── pages/
│   ├── Auth.tsx
│   ├── Hub.tsx
│   ├── Home.tsx
│   └── Rewards.tsx
│
├── components/
│   ├── Navbar.tsx
│   └── RewardCard.tsx
│
├── lib/
│   └── supabaseClient.ts
│
├── AuthListener.tsx
├── App.tsx
└── main.tsx
Setup Instructions







🧩 Supabase Setup

Create a Supabase Project:

    Go to supabase.com

    Create a new project

    Copy your Project URL and Anon Key

    Environment Variables:
    Create a .env file in the root directory:

    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key


Important: .env is included in .gitignore for security.

    Database Table (Rewards):

    create table rewards (
    id uuid primary key default uuid_generate_v4(),
    title text,
    points integer,
    category text,
    created_at timestamp default now()
    );




▶️ Running the Project Locally
# Install dependencies
npm install

# Start development server
npm run dev


Open in your browser:

http://localhost:5173






🔐 Authentication Flow

    Users sign up with email & password

    Email confirmation is required before login

    Authenticated users are redirected to /hub

    Rewards page is only accessible to logged-in users

⚠️ Assumptions & Trade-offs

    Rewards data is manually seeded in Supabase for demonstration purposes

    Email/password auth chosen to showcase Supabase’s native authentication

    Focused on functionality, responsiveness, and clean code over perfect pixel replication

    No external state management libraries used to keep project lightweight

✅ What This Project Demonstrates

    Real-world Supabase usage (auth + database queries)

    Solid React fundamentals and component architecture

    Proper handling of loading, empty, and error states

    Clean, readable, and maintainable code

    Ability to recreate an existing product feature with working logic