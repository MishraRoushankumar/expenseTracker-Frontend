# Changelog

All notable changes to this project will be documented in this file.

The format is based on **[Keep a Changelog](https://keepachangelog.com/en/1.1.0/)**, and this project adheres to **[Semantic Versioning](https://semver.org/)**.

---

# [Unreleased]

## Added

### UI Foundation

- Configured shadcn/ui
- Added shared UI component system
- Configured Tailwind CSS v4 integration
- Added Lucide React icon library
- Added authentication architecture documentation
- Documented authentication flows and session lifecycle
- Documented frontend authentication design and implementation roadmap

### Authentication

- Added login page
- Added registration page
- Added reusable authentication layout
- Added login form
- Added registration form
- Added password input component
- Added authentication form validation with Zod
- Added React Hook Form integration
- Added JWT-based authentication flow
- Added protected route guards
- Added public route guards
- Added centralized authentication storage utilities
- Added authentication API integration
- Added profile query

## Changed

- Simplified frontend authentication architecture
- Removed AuthProvider in favor of React Query as the authentication source of truth
- Centralized authentication state around the authenticated profile
- Improved route protection logic
- Improved SSR compatibility of authentication storage

---

# [v0.1.0] - 2026-07-26

## Added

### Project Foundation

- Initialized Next.js 16 project
- Configured React 19
- Configured TypeScript
- Configured Tailwind CSS v4
- Enabled React Compiler
- Established feature-first project architecture

---

### Documentation

- Added comprehensive README
- Added ROADMAP
- Added CONTRIBUTING guide
- Added CHANGELOG
- Added repository documentation standards

---

### Developer Experience

- Configured Prettier
- Added Tailwind CSS Prettier plugin
- Added EditorConfig
- Added formatting scripts
- Configured Husky
- Configured lint-staged
- Added Git hooks

---

### Configuration

- Added centralized application configuration
- Added environment configuration module
- Added application configuration module
- Added environment variable template

---

### Infrastructure

- Configured shared Axios API client
- Configured TanStack Query
- Added Query Client
- Added global provider architecture
- Added centralized AppProvider

---

### User Interface

- Configured next-themes
- Added ThemeProvider
- Added system theme detection
- Added theme persistence
- Configured application-wide theme support

---

### Continuous Integration

- Added GitHub Actions workflow
- Added automated formatting validation
- Added automated ESLint validation
- Added production build validation

---

## Changed

- Established milestone-driven development workflow
- Standardized repository documentation
- Adopted Conventional Commits
- Adopted Git Flow-inspired branching strategy
- Standardized release workflow

---

## Security

- Reviewed project dependencies
- Reviewed npm audit report
- Deferred upstream dependency updates until compatible releases become available

---

## Notes

This release establishes the engineering foundation for the Expense Tracker Frontend.

No end-user functionality is included in this release.

The focus of **v0.1.0** is:

- Project architecture
- Developer experience
- Shared infrastructure
- Documentation
- Quality assurance
- Continuous Integration

User-facing functionality begins in **v0.2.0 – Authentication & App Shell**.
