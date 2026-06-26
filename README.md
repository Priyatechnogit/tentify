# 🍻 Tentify — Beer, Bench & Booking

A full-stack Oktoberfest tent reservation app built as a capstone project at neue fische's Web Development & AI bootcamp.

🔗 **Live App:** [tentify.vercel.app](https://tentify.vercel.app)

---

## 📖 About

Oktoberfest attracts millions of visitors every year, but finding and reserving a tent spot is still chaotic and undigitised. Tentify solves that with a clean, mobile-first reservation experience.

---

## ✨ Features

- 🏠 Browse all major Oktoberfest tents with filters
- 📅 Book a table with date, time slot and guest selection
- 🎉 Booking confirmation with QR code and confetti animation
- ❌ Cancel booking with confirmation modal
- 📋 My Bookings page with Upcoming and Past tabs
- 🔔 Join waitlist for fully booked tents
- ⭐ Leave star ratings and written reviews
- 🔐 GitHub OAuth authentication via NextAuth.js
- 🛡️ Admin dashboard for managing all bookings
- 📍 Location link to Theresienwiese, Munich

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 13 |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Styling | Styled Components |
| Data Fetching | SWR |
| Authentication | NextAuth.js (GitHub OAuth) |
| Deployment | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- GitHub OAuth App

### Installation

```bash
git clone https://github.com/Priyatechnogit/tentify.git
cd tentify
npm install
```

### Environment Variables

Create a `.env.local` file:

MONGODB_URI=your_mongodb_uri
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret


### Run locally

```bash
npm run dev
```

---

## 👩‍💻 Developer

**Priya Pitla Krishnamoorthy**
- GitHub: [@Priyatechnogit](https://github.com/Priyatechnogit)
- LinkedIn: [linkedin.com/in/priya-pk](https://linkedin.com/in/priya-pk)

---

## 🎓 Built at

[neue fische — Web Development & AI Bootcamp](https://www.neuefische.de) — February to June 2026