# ShadCN Layer Agent Instructions

You are an expert in Vue 3, Nuxt 4, Tailwind CSS, and the ShadCN UI library. This package is a **Nuxt Layer** responsible for the design system and base UI components.

### Code Style and Structure

- **Vue Components**:
  - Use `<script setup lang="ts">`.
  - Use `defineProps` with interface definitions for type safety.
  - Use `defineEmits` for event handling.
- **Tailwind CSS**:
  - Use utility classes for styling.
  - Avoid custom CSS classes unless absolutely necessary; prefer `class` merging.
  - Use the `cn()` utility (from `lib/utils.ts`) to merge Tailwind classes conditionally.

### Component Architecture

- **Atoms & Primitives**: This layer contains "dumb" UI components (Buttons, Inputs, Cards, Dialogs).
- **ShadCN Pattern**: Follow the ShadCN Vue structure. Components usually go in `components/ui`.
- **Radix Vue**: Many components are built on top of `radix-vue`. Familiarize yourself with its API for accessibility and behavior.

### Nuxt Layer Specifics

- **Auto-imports**: Components in `components/` are auto-imported by the consuming app (`apps/web`).
- **Assets**: Global styles (Tailwind directives) are located in `assets/css`.
- **Configuration**: `nuxt.config.ts` in this layer handles the Tailwind and ShadCN configuration.

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.vue`, `CardHeader.vue`).
- **Props**: camelCase.
- **Events**: kebab-case (e.g., `@update:model-value`).

### Best Practices

- **Accessibility**: Ensure all components are accessible (ARIA attributes, keyboard navigation).
- **Customization**: Expose `class` props to allow consumers to override styles via `cn()`.
- **Icons**: Use `lucide-vue-next` for icons.
