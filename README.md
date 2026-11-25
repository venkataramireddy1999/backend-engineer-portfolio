# Venkata Rami Reddy — Backend Engineering Portfolio

A responsive developer portfolio built with **React, Vite, and Tailwind CSS**. Focused on Java backend engineering, distributed systems, and hands-on Spring AI integrations.

## Local setup

```bash
npm install
npm run dev
```

Build the static site with `npm run build` (output: `dist/`).

## Portfolio highlights

- Professional experience at Tata Consultancy Services, kept distinct from personal projects
- Featured case studies: Patient Management, FilePilot AI, AI Agents
- Additional work: Polling Outbox, Enterprise Semantic Search, E-commerce Microservices
- Links to original GitHub repositories and LinkedIn profile
- Mobile-friendly layout, project filtering, and accessibility labels

## Publish to GitHub Pages

1. Create a public repository, such as `backend-engineer-portfolio`, and push the contents of this folder to its `main` branch.
2. Go to **Settings → Pages → Build and deployment → GitHub Actions**.
3. The included workflow builds and publishes `dist/` on pushes to `main`.

For a custom domain or a project-repository URL, the Vite `base: './'` setting supports relative static assets. This is a static portfolio: it does not require a backend or public API keys.

## Content notes

Project descriptions are based on actual GitHub repository READMEs and the user's November 2026 résumé. The AI Agents project currently uses mock domain data; FilePilot AI is documented as a local-first prototype and lacks API authentication; Enterprise Search currently doesn't apply per-user filtering on semantic search results. Keep these disclosures current as the projects evolve.
