# Workia — Roadmap

> **Fork:** `andersonosn/workia.space` (base: LobeHub)
> **Produção:** `work.spaces.ia.br` | **Deploy:** Dokploy

---

## Arquitetura de Serviços

```
work.spaces.ia.br  (Workia — fork LobeHub)
│
├── /chat        → Agentes + assistente pessoal      ✅ FUNCIONAL
├── /files       → File Manager + S3 (Cloudflare R2) 🔧 EM CORREÇÃO
├── /ide         → VirtualSpace Coder (IDE plugin)     🗓️ PLANEJADO
└── /nuxploy     → Agente DevOps + Dokploy API        🗓️ PLANEJADO

api.spaces.ia.br/v1    → Proxy OpenRouter             🗓️ PLANEJADO (1 arquivo)
sandbox.spaces.ia.br   → E2B sandbox (SDK)            🗓️ PLANEJADO
s3.nuxbox.spaces.ia.br → RustFS (já no compose)       ✅ EXISTE
```

---

## Status por Versão

### ✅ v0.0.1 — Base
- Fork inicial do LobeHub
- Setup Dokploy + Dockerfile

### ✅ v0.0.2 — Segurança
- Workspace isolation: `/workspace/{userId}` por usuário
- `workingDirectory` isolado no inbox agent
- Node.js 22 LTS no Docker (fix OOM)
- `docker-compose.yml` completo para Dokploy

### ✅ v0.0.3 — Identidade + Onboarding + App Builder (atual)
- Branding Workia: nome, logo, org, emails, URLs sociais
- `isCustomBranding = true` → oculta referências LobeHub na UI
- Agent Onboarding habilitado (conversacional, por padrão)
- `ENABLED_UPLOAD=1` + `ENABLED_KNOWLEDGE_BASE=1` no docker-compose
- File manager funcionando: upload, delete, S3 R2 integrado
- **App Builder:** rota `/apps/:appId` com split-screen artifacts
  - System prompt padronizado com sintaxe `<lobeArtifact>` correta
  - Botão "New App" na sidebar cria agente pré-configurado (cloud sandbox + prompt)
  - Primeira resposta sempre emite artifact → painel lateral abre automaticamente

### �️ v0.0.4 — Polimento + Logo
- Upload de logo branding: `edge.workia.space/branding/logo.png`
- Testar embeddings knowledge base em lotes menores (rate limit OpenAI)
- Teste de isolamento: logout User1 → login User2 → confirmar credenciais

### 🗓️ v0.1.0 — Proxy OpenRouter
- Criar `src/app/api/openrouter/[...path]/route.ts`
- Rewrite de `api.spaces.ia.br/v1` → `openrouter.ai/api/v1`
- Injetar `Authorization: Bearer $OPENROUTER_API_KEY` no servidor
- Usuários usam `api.spaces.ia.br/v1` como endpoint custom no Workia

### 🗓️ v0.2.0 — VirtualSpace Coder Assist

> **URL:** `vscoder.work.spaces.ia.br`
> Blueprint detalhado: [`ide.md`](./ide.md)

- Plugin Workia com manifesto MCP registrado no LobeHub
- Monaco Editor full (mesma engine do VS Code)
- Terminal interativo via WebSocket → E2B sandbox isolado por usuário
- GitHub sync: clone, commit, push via API — autenticado pelo KeyVault do usuário
- Tema gerado via Tinte: `Workia Dark` / `Workia Light`
- Agente IA coding integrado (contexto do arquivo aberto → LLM)
- Acessível em `/ide` dentro do Workia e como app standalone
- Cada usuário tem seu próprio container E2B (sandbox.spaces.ia.br)

### 🗓️ v0.3.0 — Agente DevOps (NuxPloy)
- Agente dedicado com acesso à API do Dokploy
- Criar/gerenciar containers, apps, domínios via chat
- Guardian via n8n: previne erros, sempre com opção de rollback
- UI em `/nuxploy` (rota SPA dedicada)

---

## Infraestrutura Planejada (NuxFly / IA Spaces)

| Serviço | URL | Status |
|---|---|---|
| Workia (workspace IA) | `work.spaces.ia.br` | 🔧 Em build |
| OpenRouter Proxy | `api.spaces.ia.br/v1` | 🗓️ Planejado |
| E2B Sandbox | `sandbox.spaces.ia.br` | 🗓️ Planejado |
| S3 / RustFS | `s3.nuxbox.spaces.ia.br` | ✅ No compose |
| VirtualSpace Coder | `vscoder.work.spaces.ia.br` | 🗓️ Planejado |
| Dokploy Integration | `work.spaces.ia.br/nuxploy` | 🗓️ Planejado |

---

## Decisões Técnicas

| Decisão | Escolha | Motivo |
|---|---|---|
| Storage S3 | Cloudflare R2 | Zero egress, CDN, já configurado |
| Sandbox | E2B | Isolamento por usuário, SDK simples |
| Deploy | Dokploy | Auto-hosted, Docker, API completa |
| Auth | better-auth | Já integrado no LobeHub |
| IDE base | Monaco Editor | Mesmo do VS Code, suporte a temas |
| Onboarding | Agent (conversacional) | Melhor UX que formulário clássico |

---

## Pendências Imediatas

1. **Logo** — fazer upload de `logo.png` (64×64, fundo transparente) em `edge.workia.space/branding/logo.png`
2. **Teste pós-deploy v0.0.3** — logout User1 → login User2 → confirmar isolamento
3. **File Manager** — após deploy, testar upload; se ainda quebrado, inspecionar CORS R2
