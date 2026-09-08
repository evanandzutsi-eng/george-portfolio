# AI Assistant Security Baseline

This service is designed around OWASP API Security Top 10 and OWASP ASVS principles.

## Controls implemented

- API key is server-side only (`GROQ_API_KEY`).
- Exact CORS origins are configured through `ALLOWED_ORIGINS`.
- Optional `TrustedHostMiddleware` via `TRUSTED_HOSTS`.
- Request `Content-Type` is restricted to JSON for the assistant endpoint.
- Request size is capped with `MAX_REQUEST_BYTES`.
- Pydantic validates and bounds the question length.
- Process-local rate limiting protects the public endpoint from basic abuse.
- `TRUST_PROXY` must be explicitly enabled before trusting `X-Forwarded-For`.
- Security response headers are applied by middleware.
- Production API docs are disabled by default.
- Provider/network errors are not returned to visitors.
- LLM output is length-capped before being returned.
- The system prompt treats visitor input as untrusted and rejects prompt-injection attempts conceptually.
- Portfolio facts are constrained to the server-side knowledge object.
- No user question or provider response is logged by the application.
- The frontend must never receive the Groq credential.

## Production recommendations

For a public deployment, use a shared Redis/Upstash limiter instead of the process-local limiter when running multiple instances. Keep secrets in the hosting provider's secret manager/environment variables, not in Git.

Set:

- `ENVIRONMENT=production`
- `ALLOWED_ORIGINS=https://your-real-domain.example`
- `TRUSTED_HOSTS=your-api-domain.example`
- `GROQ_API_KEY=<server-side-secret>`
- `GROQ_MODEL=openai/gpt-oss-20b`

Do not enable `TRUST_PROXY=true` unless the deployment architecture is known to provide and sanitize the forwarding headers.

## Threat mapping

- API4 Unrestricted Resource Consumption → request-size cap, input bounds, rate limiting, output cap.
- API8 Security Misconfiguration → explicit CORS, trusted-host option, production docs disabled, security headers.
- API10 Unsafe Consumption of APIs → provider errors are handled safely; third-party output is treated as untrusted text.
- API2/API5 → no authentication is currently required because the assistant exposes only public portfolio information. If private/admin endpoints are added later, implement explicit authentication and authorization rather than relying on CORS.
- API7 SSRF → the assistant does not fetch user-supplied URLs or remote resources.

This is a security baseline, not a guarantee that the application is vulnerability-free. Run dependency scanning, automated tests, and an external security review before treating the service as security-critical.
