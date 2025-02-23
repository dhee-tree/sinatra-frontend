# Pebble - Network for Social Good

## Overview

Pebble is a modern, gamified volunteer and community ecosystem platform that connects everyday people, NGOs, and local communities to make a meaningful difference. Inspired by the metaphor of pebbles creating ripples, Pebble fosters trust, engagement, and impact through features like skill matching, rewards, certifications, and community-driven support. Built for a 24-hour hackathon, this project showcases a scalable, user-friendly web application using Next.js, TypeScript, Tailwind CSS, Shadcn UI, and Django REST Framework (DRF) for the backend.

### Tagline
"Pebble reflects how everyday people can come together to make a meaningful difference."

## Features

### Core Functionality
- User Management: Register, log in, and manage profiles with skills, availability, and location.
- Volunteer Opportunities: Create, view, and join volunteer events posted by NGOs or users.
- Community Support: Post requests for help (e.g., grocery runs) and offer skills (e.g., tutoring, gardening).
- Community Feed: Share stories, achievements, and events to inspire engagement.

### Non-CRUD Innovations
- AI-Powered Skill Matching: Matches volunteers to opportunities based on skills, location, and availability.
- Gamification & Rewards: Earn points, badges, and certificates for actions, with leaderboards and side quests.
- Trust & Safety: Ratings, reviews, and verified profiles for secure community interactions.
- Real-Time Notifications: Push notifications and reminders for events, requests, and challenges.

### Current Implementation
- Landing Page ("/"): Modern, animated hero with pebble visuals and benefits cards.
- Auth Pages: Signup and login with form validation and toasts.
- Dashboard ("/dashboard"): Gamified user dashboard showing points, badges, organisations, tasks, and leaderboard.
- Organisations: Create and manage organisations with a modal, including pagination.
- Skills Management: Modal for adding/removing user skills, highlighted with mint green capsules.
- Not Found Page ("/not-found"): Custom 404 with a playful pebble theme.

## Tech Stack

- Frontend:
  - Next.js: React framework for server-side rendering and routing.
  - TypeScript: Type safety for robust code.
  - Tailwind CSS: Utility-first CSS for rapid, modern styling.
  - Shadcn UI: Pre-built, customizable UI components for cards, buttons, dialogs, etc.
  - SWR: Data fetching and caching for real-time updates.
  - Sonner: Modern toast notifications for user feedback.

- Backend:
  - Django REST Framework (DRF): RESTful API for user, organisation, and skill management.
  - Wretch: Lightweight fetch wrapper for API calls.

- Other:
  - Environment Variables: Managed via `.env.local` for API endpoints and secrets.

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm or Yarn
- Python (for backend, if setting up DRF locally)
- Git (optional, for cloning)

### Installation

1. Clone the Repository
2. Install Dependencies
3. Set Up Environment Variables. Create a `.env.local` file in the root directory with:
4. Run the Development Server

Open `http://localhost:3000` in your browser.

### Backend Setup (Optional)
If you’re running the DRF backend locally:
1. Install Python and Django/DRF:
2. Set up your Django project, configure endpoints (`/api/user/me`, `/api/organisations`, `/api/skills`, etc.), and ensure CORS allows your frontend domain.
3. Run the backend:


## Usage

### Key Pages
- Landing Page ("/"): View the modern hero section, benefits cards, and sign-up CTA.
- Signup ("/signup"): Register with name, email, password, and other details.
- Login ("/login"): Log in to access the dashboard.
- Dashboard ("/dashboard"): See points, badges, organisations, tasks, leaderboard, and manage skills/organisations.
- Not Found ("/not-found"): Custom 404 page for invalid routes.

### Features in Action
- Gamification: Earn points and badges (e.g., “First Step,” “Helper”) by creating organisations or managing skills.
- Skill Matching: (Future enhancement) AI-driven suggestions in the dashboard.
- Community Engagement: Use the dashboard to create organisations, manage tasks, and share via the community feed (TBD).


## Contributing

This project was built for a 24-hour hackathon, but contributions are welcome! To contribute:
1. Fork the repository.
2. Create a branch for your feature or fix.
3. Submit a pull request with a clear description.

### Code Style
- Follow TypeScript and ESLint rules in the project.
- Use Tailwind utility classes for styling.
- Ensure components are reusable and maintainable.
