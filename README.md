# Nexora

Nexora is an AI-powered recruitment and talent assessment platform that connects recruiters,
companies, job seekers and hiring managers. It will include a public marketing website, a
recruiter portal, a candidate portal, an administrative portal and AI-powered recruitment
and candidate intelligence. The web application comes first; mobile apps follow later.

> **Status: Phase 02 (brand identity and design system).** No business features,
> authentication or database schemas exist yet.

## Technology stack

| Area | Technology |
|---|---|
| Frontend | Next.js (App Router), TypeScript (strict), Tailwind CSS, shadcn/ui, Lucide icons |
| Backend | Python, FastAPI, Pydantic, SQLAlchemy 2.0 |
| Data and auth | Supabase PostgreSQL, Supabase Auth, Supabase Storage |
| Background jobs | Celery with Redis as the broker |
| Deployment | Vercel (frontend), Render (backend) |

Additional dependencies beyond the stack: `geist` (self-hosted fonts, so builds do not
need to reach Google Fonts), `psycopg` (PostgreSQL driver for SQLAlchemy),
`pydantic-settings` (environment-based settings), Radix UI primitives (accessible
Dialog, Dropdown Menu, Avatar, Label, Separator, Slot), plus `pytest`, `httpx` and `ruff` for
development.

## Folder structure

```
nexora/
├── frontend/              Next.js app (deployed to Vercel)
│   └── src/
│       ├── app/           Routes, layouts, global styles
│       ├── components/    ui/ (shadcn/ui) and layout/ (shared layout pieces)
│       ├── features/      Feature modules (empty for now)
│       ├── hooks/         Shared React hooks
│       ├── lib/           Utilities (cn, typed env access)
│       └── types/         Shared TypeScript types
├── backend/               FastAPI app (deployed to Render)
│   ├── app/
│   │   ├── api/routes/    HTTP route handlers
│   │   ├── core/          Settings, Celery app
│   │   ├── db/            SQLAlchemy base and session handling
│   │   ├── models/        ORM models (none yet)
│   │   ├── schemas/       Pydantic schemas
│   │   └── services/      Business logic (none yet)
│   └── tests/
└── docs/                  Project documentation
```

Frontend and backend are independent and deployable separately. They only communicate over
HTTP, with the frontend reading the API address from `NEXT_PUBLIC_API_URL`.

## Prerequisites

- Node.js 20.9 or newer and npm
- Python 3.11 or newer
- Redis (only needed once you run Celery workers)
- A Supabase project (only needed once you connect the database)

## Installation

### Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
```

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements-dev.txt
cp .env.example .env
```

## Development commands

### Frontend (from `frontend/`)

| Command | Purpose |
|---|---|
| `npm run dev` | Start the dev server at http://localhost:3000 |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |
| `npm run check:contrast` | Verify WCAG contrast of design tokens (both themes) |

The design system preview is at http://localhost:3000/design-system (see `docs/design-system.md`).

### Backend (from `backend/`, venv active)

| Command | Purpose |
|---|---|
| `uvicorn app.main:app --reload` | Start the API at http://localhost:8000 (docs at `/docs`) |
| `pytest` | Run tests |
| `ruff check .` | Lint |
| `celery -A app.core.celery_app.celery_app worker --loglevel=info` | Start a Celery worker (needs Redis) |

Check the API with `curl http://localhost:8000/health`.

## Environment variables

Never commit real secrets. Only the `.env.example` files are tracked.

### Frontend (`frontend/.env.local`)

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the frontend |

All `NEXT_PUBLIC_*` values are visible in the browser. Put no secrets here.

### Backend (`backend/.env`)

| Variable | Description |
|---|---|
| `APP_NAME` | API title |
| `ENVIRONMENT` | `development`, `staging` or `production` |
| `DEBUG` | `true` or `false` |
| `CORS_ORIGINS` | Comma-separated allowed frontend origins |
| `DATABASE_URL` | Supabase PostgreSQL connection string |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_ANON_KEY` | Supabase anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side only) |
| `REDIS_URL` | Redis connection URL for Celery |

## Deployment notes

- **Vercel:** set the project root to `frontend` and add the frontend variables.
- **Render:** set the root directory to `backend`, build command
  `pip install -r requirements.txt`, start command
  `uvicorn app.main:app --host 0.0.0.0 --port $PORT`, and add the backend variables.
