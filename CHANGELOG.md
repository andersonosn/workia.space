<a name="readme-top"></a>

# Changelog

## [Version 0.0.2](https://github.com/andersonosn/workia.space/compare/v0.0.1...v0.0.2)

<sup>Released on **2026-04-06**</sup>

#### 🔒 Security

- **workspace**: Isolate filesystem per user — create `/workspace/{userId}` on registration.
- **workspace**: Set per-user `workingDirectory` on inbox agent creation to prevent cross-user data exposure via file system tool.

#### 👷 Infrastructure

- **docker**: Use Node.js 22 LTS in Dockerfile to prevent V8 GC OOM during Vite build.
- **docker**: Separate `build:docker` into individual steps (SPA, mobile, copy, next build) so optional mobile build failure does not block main build.
- **docker**: Fix `cross-env` not found — use `pnpm exec cross-env` instead of relying on global binary.
- **docker**: Correct SPA assets path to `public/_spa` in production stage COPY step.
- **docker**: Fix `AUTH_SECRET` and `KEY_VAULTS_SECRET` build-time placeholders to meet better-auth minimum 32-char requirement.

#### 🗃️ Configuration

- **deploy**: Add `docker-compose.yml` for Dokploy deployment with full environment variable mapping.
- **deploy**: Add `.env.dokploy.example` reference file for all required Dokploy environment variables.
- **deploy**: Set container name to `workia-space` and expose port `3211:3210`.

<br/>

<details>
<summary><kbd>Files Modified</kbd></summary>

- `Dockerfile` — Node 22, split build steps, cross-env fix, SPA path fix, secrets length fix
- `docker-compose.yml` — Full env mapping, container name, port
- `.env.dokploy.example` — Reference env file for Dokploy
- `src/server/services/user/index.ts` — Create `/workspace/{userId}` on user registration
- `src/server/services/agent/index.ts` — Set `workingDirectory: /workspace/{userId}` on inbox creation

</details>

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>

---

## [Version 0.0.1](https://github.com/andersonosn/workia.space)

<sup>Released on **2026-04-05**</sup>

Base inicial — fork do LobeHub canary `v2.1.46` configurado para deploy no Dokploy.

<div align="right">

[![](https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square)](#readme-top)

</div>
