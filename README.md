# Chat App Monorepo

This is a monorepo chat application built with Next.js, TypeScript, and Socket.io. It uses Turborepo for managing multiple apps and packages.



## Tech Stack

- **Next.js** – React framework for server-side rendering and static site generation
- **React** – UI library
- **TypeScript** – Type-safe JavaScript
- **Socket.io** – Real-time communication
- **Redis** – In-memory data store for caching and pub/sub
- **Turborepo** – Monorepo build system
- **ESLint** – Linting and code quality
- **Custom UI Library** – Shared React components (`packages/ui`)

## Project Structure

- `apps/web` – Main Next.js chat frontend
- `apps/server` – Socket.io server (Node.js/TypeScript)
- `apps/docs` – Documentation site (optional)
- `packages/ui` – Shared UI components
- `packages/eslint-config` – Shared ESLint config
- `packages/typescript-config` – Shared TypeScript config

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm, yarn, or pnpm

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Environment Variables
Copy the example env file and set your variables:
```bash
cp apps/web/.env.example apps/web/.env.local
```
Edit `apps/web/.env.local` as needed. See `.env.example` for required variables.

### Running the Apps
#### Start the Socket.io Server
```bash
cd apps/server
npm run dev
```

#### Start the Web Frontend
```bash
cd apps/web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the chat app.

## Scripts
- `dev` – Start development server
- `build` – Build for production
- `start` – Start production server
- `lint` – Run ESLint

## .gitignore and .env
- Sensitive files like `.env*` are gitignored by default.
- Never commit secrets to version control.

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Socket.io Documentation](https://socket.io/docs/)
- [Turborepo Documentation](https://turbo.build/repo/docs)

## License
MIT
