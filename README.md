# Expense Tracker Frontend

> A modern, production-ready expense tracking application built with **Next.js**, **React**, and **TypeScript**.
>
> **Status:** 🚧 Under Active Development

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss)
![License](https://img.shields.io/github/license/MishraRoushankumar/expenseTracker-Frontend)
![Release](https://img.shields.io/github/v/release/MishraRoushankumar/expenseTracker-Frontend?display_name=tag)

---

## Overview

Expense Tracker Frontend is the client application for the Expense Tracker platform.

It provides a modern, responsive, and accessible user interface for managing personal finances while consuming the Expense Tracker Backend REST API.

The project emphasizes clean architecture, reusable components, scalable feature organization, and production-ready engineering practices.

---

## Planned Features

### Authentication

- User registration
- User login
- Protected routes
- Session management

### Dashboard

- Financial summary
- Monthly trends
- Category analytics
- Dashboard insights
- Recent transactions

### Transaction Management

- Create transactions
- Update transactions
- Delete transactions
- Filtering
- Sorting
- Pagination

### Category Management

- Create categories
- Update categories
- Delete categories
- Category analytics

### Financial Planning

- Budget management
- Spending insights
- Financial reports

### User Experience

- Responsive design
- Dark mode
- Accessible interface
- Optimistic updates
- Loading states
- Error boundaries

---

## Technology Stack

### Framework

- Next.js 16

### Language

- TypeScript

### UI

- React 19
- Tailwind CSS v4

### Planned Libraries

- TanStack Query
- Axios
- Zod
- React Hook Form
- shadcn/ui
- next-themes
- Recharts
- Sonner

---

## Architecture

The frontend follows a **hybrid feature-first architecture**.

Business logic is organized by feature, while shared infrastructure such as reusable UI components, configuration, providers, and utilities remain globally accessible.

This approach promotes:

- Scalability
- Maintainability
- Modularity
- Clear ownership
- Separation of concerns

---

## Project Structure

```text
src/
│
├── app/              # Next.js App Router
├── components/       # Shared reusable components
├── config/           # Application configuration
├── constants/        # Shared constants
├── features/         # Feature modules
├── hooks/            # Shared custom hooks
├── lib/              # Third-party configuration
├── providers/        # React providers
├── types/            # Shared TypeScript types
└── utils/            # Utility functions
```

### Feature Modules

```text
features/
├── auth/
├── categories/
├── dashboard/
├── profile/
└── transactions/
```

Each feature owns its own:

- Components
- API layer
- Hooks
- Types
- Validation
- Utilities

---

## Design Principles

The project follows several architectural principles:

- Feature-first architecture
- Modular feature ownership
- Shared infrastructure only when necessary
- Reusable UI components
- Minimal global state
- Strong TypeScript usage
- Production-ready engineering practices

---

## Prerequisites

Before running the project, ensure you have:

- Node.js 24+
- npm
- Git

---

## Git Hooks

The project uses Husky and lint-staged to automatically enforce code quality before every commit.

The pre-commit hook:

- Formats staged files using Prettier
- Runs ESLint on staged JavaScript and TypeScript files

---

## Getting Started

Clone the repository:

```bash
git clone git@github.com:MishraRoushankumar/expenseTracker-Frontend.git
```

Navigate into the project:

```bash
cd expenseTracker-Frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Available Scripts

| Script                 | Description              |
| ---------------------- | ------------------------ |
| `npm run dev`          | Start development server |
| `npm run build`        | Create production build  |
| `npm run lint`         | Run ESLint               |
| `npm run format`       |                          |
| `npm run format:check` |                          |

Additional scripts will be introduced as the project evolves.

---

## Environment Variables

Environment variable configuration will be introduced in **Issue #7 – Configure Project Configuration and Environment Management**.

A `.env.example` file will be provided once the configuration layer is implemented.

Copy the example file:

```bash
cp .env.example .env.local
```

---

## Development Workflow

The project follows a feature-based development workflow.

```md
Issue
↓
Feature Branch
↓
Implementation
↓
Testing
↓
Documentation
↓
Pull Request
↓
Review
↓
Merge into develop
↓
Release
```

---

## Branch Strategy

```text
main
│
└── develop
      │
      ├── feature/*
      ├── bug/*
      ├── refactor/*
      ├── docs/*
      └── release/*
```

---

## Related Repository

The frontend consumes the REST API provided by the Expense Tracker Backend.

### Backend Repository

[https://github.com/MishraRoushankumar/expenseTracker-Backend](https://github.com/MishraRoushankumar/expenseTracker-Backend)

---

## Roadmap

The complete project roadmap is available in:

```text
ROADMAP.md
```

---

## Contributing

Contribution guidelines are documented in:

```text
CONTRIBUTING.md
```

---

## License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

## Project Philosophy

The goal of this project is not only to build a modern expense tracking application but also to demonstrate professional frontend engineering practices.

The repository emphasizes:

- Clean architecture
- Scalable project organization
- Modular feature development
- Maintainable code
- Comprehensive documentation
- Production-ready workflows
- Continuous improvement

As the project evolves, additional features, engineering improvements, and documentation will be introduced through structured milestones and incremental releases.
