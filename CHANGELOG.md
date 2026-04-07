<a name="readme-top"></a>

# Changelog

## [Version 0.0.3](https://github.com/andersonosn/workia.space/compare/v0.0.2...v0.0.3)

<sup>Released on **2026-04-07**</sup>

#### 🎨 Branding

- **branding**: Set `BRANDING_NAME = 'Workia'`, `ORG_NAME = 'IA Spaces'` — activates `isCustomBranding = true` across the app.
- **branding**: Set `BRANDING_LOGO_URL` to `edge.workia.space/branding/logo.png` — replaces LobeHub SVG with custom image logo.
- **branding**: Update `BRANDING_EMAIL`, `BRANDING_URL` (help/privacy/terms/support/subscription) and `SOCIAL_URL` to Workia URLs.
- **branding**: Set `BRANDING_PROVIDER = 'workia'`, `LOBE_CHAT_CLOUD = 'Workia Cloud'`.

#### 🚀 Onboarding

- **onboarding**: Enable Agent Onboarding (conversational flow) for all environments by setting `AGENT_ONBOARDING_ENABLED = true`.
- **onboarding**: Set `DEFAULT_ONBOARDING_ENTRY_VARIANT = 'agent'` — new users land on conversational onboarding by default.
- **onboarding**: Remove business feature gate from `/onboarding/agent` route — works on self-hosted without cloud subscription.

#### 🗂️ File Manager

- **deploy**: Add `ENABLED_UPLOAD=1`, `ENABLED_KNOWLEDGE_BASE=1`, `ENABLED_ARTIFACTS=1`, `ENABLED_WEB_SEARCH=1` to `docker-compose.yml` — fix file manager (files were becoming "ghosts", impossible to delete). Upload, delete and S3 R2 now fully functional.
- **deploy**: Add `DEFAULT_AGENT_CONFIG` and `SYSTEM_AGENT` env vars to `docker-compose.yml` for future agent defaults configuration.

#### 🛠️ App Builder (`/apps`)

- **apps**: New route `/apps/:appId` — mirrors agent chat but dedicated to app building with live preview.
- **apps**: New route `/apps/:appId/start` — configure App Builder agent (system prompt, tools).
- **apps**: Custom sidebar with **"New App" button** — one click creates an agent pre-configured with the App Builder system prompt and `lobe-cloud-sandbox` tool enabled, then redirects to the chat.
- **apps**: Standardized system prompt (`src/config/appBuilderPrompt.ts`) that teaches any LLM the correct `<lobeArtifact>` tag syntax, supported types (`application/vnd.ant.react`, `text/html`, etc.) and React artifact rules.
- **apps**: **First Response Rule** — model always emits a starter artifact on the first reply, opening the split-screen preview panel automatically.
- **apps**: `AppIdSync` component maps `:appId` URL param to agent store (mirrors `AgentIdSync` for `:aid`).

<br/>

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
