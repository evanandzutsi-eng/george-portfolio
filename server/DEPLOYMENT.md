# Production Deployment — Groq + FastAPI

## Recommended setup

Frontend: Vercel or Netlify  
Backend: Railway or Render  
Model provider: Groq

Groq's API is OpenAI-compatible, so the backend uses the OpenAI-compatible `/chat/completions` endpoint with the Groq base URL.

Recommended starting model: `openai/gpt-oss-20b` for a portfolio assistant where low latency and cost efficiency matter. Groq currently lists it as a production model. `openai/gpt-oss-120b` is the upgrade path if you want stronger reasoning at higher cost.

## Backend environment variables

```text
ENVIRONMENT=production
GROQ_API_KEY=<secret>
GROQ_MODEL=openai/gpt-oss-20b
GROQ_BASE_URL=https://api.groq.com/openai/v1
ALLOWED_ORIGINS=https://YOUR-REAL-DOMAIN
TRUSTED_HOSTS=YOUR-API-DOMAIN
TRUST_PROXY=false
RATE_LIMIT_PER_MINUTE=12
MAX_QUESTION_LENGTH=800
MAX_REQUEST_BYTES=16384
MAX_RESPONSE_CHARS=3500
```

Replace the domain placeholders with the real deployed values. Never put `GROQ_API_KEY` in Vite variables or frontend source code.

## Frontend environment

```text
VITE_PORTFOLIO_AI_ENDPOINT=https://YOUR-API-DOMAIN/api/assistant
```

## Local test

```powershell
cd server
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Frontend:

```text
VITE_PORTFOLIO_AI_ENDPOINT=http://localhost:8000/api/assistant
```

## Health check

```text
GET /health
```

The response should report `mode: "llm"` when `GROQ_API_KEY` is configured.

## Security notes

Groq recommends keeping API keys in environment variables/secret management and never exposing them in browser bundles. Groq API traffic uses TLS and authenticates with API keys. Groq also applies its own organization-level rate limits, so the application should retain its own per-client controls as a separate abuse/cost boundary.
