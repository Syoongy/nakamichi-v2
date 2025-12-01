# Web App Agent Instructions

You are an expert in Vue 3, Nuxt 4, TypeScript, and Tailwind CSS. This application is the public-facing frontend for the Nakamichi v2 platform.

### Architecture & Layers

This application is built using **Nuxt Layers**. It consumes functionality from the following workspace packages:
1.  **`shadcn-layer`**: Provides the base UI components (atoms) and Tailwind configuration.
2.  **`cms-blocks`**: Provides "smart" components that map to CMS blocks.

**Do not** implement generic UI components or CMS blocks directly in this app unless they are specific *only* to the website layout (e.g., Header, Footer).

### Code Style and Structure

- **Nuxt 4 Structure**: This app uses the `app/` directory structure.
  - Pages: `app/pages/`
  - Components: `app/components/`
  - Layouts: `app/layouts/`
  - Composables: `app/composables/`
- **TypeScript**: Use strict TypeScript. Prefer interfaces over types.
- **Composition API**: Always use `<script setup lang="ts">`.

### Data Fetching

- **CMS Integration**: Fetch content from the Payload CMS API (running at `http://localhost:3000`).
- **Method**: Use Nuxt's `useFetch` for data fetching.
- **URL Handling**: The CMS returns relative URLs for images. Ensure these are processed (prepended with the CMS base URL) before passing them to components.
- **Pattern**:
  - Fetch page data based on the route slug.
  - Pass the `layout` array from the CMS response to the `<BlockRenderer />` component (imported from `cms-blocks`).

### UI and Styling

- **Components**: Use components from the `shadcn-layer` (auto-imported).
- **Icons**: Use the `<Icon name="..." />` component (via `@nuxt/icon`).
- **Fonts**: Fonts are configured via `@nuxt/fonts` in `nuxt.config.ts`.
- **Images**: Use `<NuxtImg>` for optimized image rendering.

### Development Workflow

- **Routing**: File-based routing in `app/pages`.
- **Layouts**: Define global layouts (Header/Footer structure) in `app/layouts` or `app.vue`.
- **Error Handling**: Implement graceful error handling for failed CMS requests (e.g., show 404 or fallback content).

