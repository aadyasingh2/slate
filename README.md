# Cerebra

AI-powered flashcard app. Paste your notes, get flashcards instantly. Study, recall, track your score.

**Live:** [cerebra-nu.vercel.app](https://cerebra-nu.vercel.app)

---

## What it does

- Paste any text → Gemini generates flashcards automatically
- **Study mode** — flip through cards at your own pace
- **Recall mode** — type your answers, get a score at the end
- Sessions saved to MongoDB, persist across logins
- Full JWT auth — signup, login, protected routes

## Stack

| Layer | Tech |
|---|---|
| Frontend | React, React Router, Vite |
| Backend | Node.js, Express |
| Database | MongoDB Atlas + Mongoose |
| AI | Google Gemini 2.5 Flash |
| Auth | JWT + bcrypt |
| Deployment | Vercel (frontend) + Render (backend) |

## Running locally

**Backend**
```bash
cd backend
npm install
```

Create `backend/.env`:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

```bash
node server.js
```

**Frontend**
```bash
cd frontend
npm install
```

Create `frontend/.env`:
```
VITE_GEMINI_API_KEY=your_gemini_api_key
```

```bash
npm run dev
```

## Project structure

```
cerebra/
├── backend/
│   └── server.js        # Express server, all routes, auth middleware
└── frontend/
    └── src/
        ├── pages/
        │   ├── Landing.jsx
        │   ├── Login.jsx
        │   └── Dashboard.jsx
        └── components/
            ├── StudyMode.jsx
            └── RecallMode.jsx
```

## API routes

| Method | Route | Auth | Description |
|---|---|---|---|
| POST | `/api/signup` | No | Create account |
| POST | `/api/login` | No | Login, returns JWT |
| GET | `/api/sessions` | Yes | Get all user sessions |
| POST | `/api/sessions` | Yes | Create new session |
