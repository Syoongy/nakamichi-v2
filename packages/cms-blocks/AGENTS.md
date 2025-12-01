# CMS Blocks Layer Agent Instructions

You are an expert in Vue 3 and Nuxt 4. This package is a **Nuxt Layer** dedicated to "Smart Components" that map directly to Payload CMS blocks.

### Code Style and Structure

- **Vue Components**:
  - Use `<script setup lang="ts">`.
  - Props **must** match the schema defined in the CMS Block.
- **Composition**:
  - These components consume UI primitives from the `shadcn-layer`.
  - Do not implement low-level UI logic here; import `Button`, `Card`, etc., from the UI layer.

### Block Architecture

- **Mapping**: Each component in `components/blocks` corresponds to a `blockType` in the CMS.
- **Props Interface**: Define a TypeScript interface for the props that mirrors the JSON response from the CMS API.
- **BlockRenderer**: The `BlockRenderer` component iterates over a list of blocks and dynamically renders the correct component based on `blockType`.

### Data Handling

- **Images**: Use `<NuxtImg>` or standard `<img>` tags. Ensure URLs are processed correctly (handling relative vs absolute paths from the CMS).
- **Rich Text**: If the block contains rich text, use a dedicated Rich Text renderer component (or `v-html` if sanitized/safe).

### Naming Conventions

- **Components**: PascalCase, suffixed with `Block` (e.g., `HeroBlock.vue`, `ContentBlock.vue`).
- **CMS Mapping**: The component name (minus 'Block') often matches the CMS block slug, or a mapping object is used in `BlockRenderer`.

### Development Workflow

- **Testing**: When creating a new block:
  1.  Verify the CMS schema.
  2.  Create the Vue component in `components/blocks`.
  3.  Add it to the `BlockRenderer` mapping (if manual mapping is used).
  4.  Test with mock data if the CMS is not ready.
