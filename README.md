# Nakamichi v2

A modern, modular web platform built with **Nuxt 4**, **Payload CMS 3.0**, and **TurboRepo**.

## 🚀 Tech Stack

- **Monorepo Manager**: [TurboRepo](https://turbo.build/)
- **Package Manager**: [Bun](https://bun.sh/)
- **Frontend**: [Nuxt 4](https://nuxt.com/)
- **CMS**: [Payload CMS 3.0](https://payloadcms.com/) (Next.js)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Library**: [ShadCN Vue](https://www.shadcn-vue.com/)

## 📂 Project Structure

This monorepo is organized into **Apps** and **Packages** (Layers).

### Apps

- **`apps/web`**: The public-facing frontend application. Built with Nuxt 4.
- **`apps/cms`**: The headless CMS and API. Built with Payload CMS 3.0 (Next.js adapter).

### Packages (Nuxt Layers)

- **`packages/shadcn-layer`**: The foundational design system layer. Contains Tailwind configuration, base UI components (atoms), and global styles.
- **`packages/cms-blocks`**: A feature layer containing "smart" components that map directly to CMS blocks. This layer consumes `shadcn-layer`.

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (v1.3.3 or later)
- Node.js (v24 or later)
- Docker (optional, for database if not using local SQLite file)

### Installation

Install dependencies from the root directory:

```bash
bun install
```

### Development

Start the development environment for all apps:

```bash
bun dev
```

This will start:
- **CMS**: [http://localhost:3000](http://localhost:3000) (Admin panel at `/admin`)
- **Web**: [http://localhost:3001](http://localhost:3001) (Port may vary if 3000 is taken)

### Building

To build all applications for production:

```bash
bun run build
```

## 📦 Architecture Highlights

### Layered Frontend
The frontend architecture uses **Nuxt Layers** to enforce separation of concerns:
1.  **`apps/web`**: Consumes layers, handles routing, page layouts, and data fetching.
2.  **`packages/cms-blocks`**: Defines the visual blocks (Hero, Features, etc.) used by the CMS.
3.  **`packages/shadcn-layer`**: Provides the raw UI primitives (Buttons, Inputs, Typography).

### CMS Integration
- The CMS provides a flexible "Block" based architecture.
- The frontend fetches page content including a list of blocks.
- A `BlockRenderer` component dynamically resolves and renders the correct Vue component for each block type.
