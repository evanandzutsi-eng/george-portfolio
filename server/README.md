# George Portfolio AI Backend

FastAPI backend for the portfolio's grounded AI assistant.

## Provider

The backend uses Groq through its OpenAI-compatible API endpoint:

`https://api.groq.com/openai/v1`

Recommended production model: `openai/gpt-oss-20b`.

## Local setup

```powershell
python -m venv .venv
.venv\\Scripts\\activate
pip install -r requirements.txt
```

Configure `GROQ_API_KEY` in the server environment. Never put it in React/Vite environment variables.

Run:

```powershell
uvicorn main:app --reload --port 8000
```

The assistant endpoint is:

`POST /api/assistant`

Health check:

`GET /health`

## Frontend

Set the frontend environment variable:

```text
VITE_PORTFOLIO_AI_ENDPOINT=http://localhost:8000/api/assistant
```

## Security

See `SECURITY.md` for the OWASP-oriented security baseline and production hardening guidance.
