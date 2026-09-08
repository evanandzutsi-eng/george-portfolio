# George Owulama Andzutsi — Unified Career Portfolio

Premium React + TypeScript + Vite portfolio for George Owulama Andzutsi.

## V2.8 focus
- Unified career positioning across software engineering, web development, AI/LLM integration and automation.
- Preserves verified career/program context including NASITDEA and NJFP without inventing employment claims.
- Photo 1 remains the hero image; Photo 2 remains the primary profile image.
- AVIF + WebP photographic assets with responsive `<picture>` delivery.
- Added dedicated Privacy, Terms and Accessibility pages.
- Added real footer links to those legal/accessibility pages.
- Contact intake now creates a structured email draft instead of falsely reporting a server-side submission.
- Removed the fake `YOUR-DOMAIN.example` canonical URL from the static HTML.
- Keeps external social/booking placeholders until the owner supplies the actual destinations.

## Run locally
```powershell
npm install
npm run dev
npm run build
```

## Project structure
- `src/data/site.ts` — centralized profile, skills, services, projects, experience and social configuration.
- `src/pages/` — routed portfolio pages.
- `src/components/` — reusable UI components.
- `public/assets/images/` — AVIF/WebP hero and profile photography.
- `public/assets/George_Andzutsi_Web_Developer_CV_99xAutomation.pdf` — current CV asset.

## Production notes
Before deployment, replace the remaining bracketed social/booking placeholders and set the production domain for absolute social-preview/canonical metadata. If analytics or a server-side contact form is added, update the privacy policy to reflect the actual data processing.

## V3.2 AI Portfolio Assistant

The portfolio assistant is grounded by structured portfolio data and works in demo mode without an external AI provider. To connect a real server-side assistant, set `VITE_PORTFOLIO_AI_ENDPOINT` to a secure backend endpoint. Do not put provider API keys in the Vite frontend. The endpoint receives the user's question plus structured, non-secret portfolio context and should return `{ "answer": "...", "sources": [{"label":"...","to":"..."}] }`.

Recommended production architecture: React frontend → FastAPI assistant endpoint → server-side LLM provider → structured portfolio knowledge/context. Add authentication, rate limiting, input limits, logging controls and secret management on the backend.


## V3.3 AI backend

The portfolio includes an optional FastAPI backend under `server/`. The frontend sends only the visitor question; the backend owns the portfolio knowledge, validates requests, applies a lightweight rate limit, and optionally calls an OpenAI-compatible chat-completions endpoint.

1. Run the frontend with `npm run dev`.
2. Run the backend from `server` with `uvicorn main:app --reload --port 8000`.
3. Set `VITE_PORTFOLIO_AI_ENDPOINT=http://localhost:8000/api/assistant` in `.env.local`.
4. Keep `OPENAI_API_KEY` only in the backend environment.

Without an API key, the backend remains usable through its grounded fallback mode.

## V3.4 production AI deployment

The `server/` directory is a separate FastAPI service. Deploy it independently, configure `ALLOWED_ORIGINS` to the exact production frontend origin, and keep the LLM API key server-side. See `server/DEPLOYMENT.md`.
