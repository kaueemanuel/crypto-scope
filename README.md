# CryptoPulse (esqueleto)

Skeleton do projeto CryptoPulse â€” dashboard de criptomoedas.

Estrutura:
- `frontend/` â€” app Next.js (TypeScript)
- `api/` â€” backend NestJS (TypeScript) + Prisma
- `infra/` â€” infra helpers (Postman collection, etc.)

Para levantar o ambiente de desenvolvimento com Docker Compose:

```powershell
docker-compose up --build
```

ServiÃ§os previstos:
- Frontend: http://localhost:3000
- API: http://localhost:4000
- Postgres: localhost:5432
- Redis: localhost:6379

Passos rÃ¡pidos apÃ³s clonar:
1. Copie os arquivos `.env.example` para `.env` em `api/` e preencha as variÃ¡veis.
2. `docker-compose up --build` para subir infra e apps.
3. No `api/`: configurar Prisma (`npx prisma migrate dev`) e rodar a aplicaÃ§Ã£o.
