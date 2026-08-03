# Expense Tracker Frontend

> A modern, scalable, and production-ready expense tracking application built with **Next.js**, **React**, and **TypeScript**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?logo=tailwindcss)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=github-actions)
![License](https://img.shields.io/github/license/MishraRoushankumar/expenseTracker-Frontend)
![Release](https://img.shields.io/github/v/release/MishraRoushankumar/expenseTracker-Frontend?display_name=tag)

---

## Table of Contents

- [Overview](#overview)
- [Why this project](#why-this-project)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture-at-a-glance)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Status

| Item               | Status                     |
| ------------------ | -------------------------- |
| Current Version    | **v0.2.0** (unreleased)    |
| Development Status | 🚧 Active Development      |
| Current Milestone  | Authentication & App Shell |
| Build Status       | Passing                    |
| CI Status          | Passing                    |

---

# Overview

Expense Tracker Frontend is the client application for the Expense Tracker platform.

The project is designed to deliver a modern, responsive, and accessible user experience while demonstrating professional frontend engineering practices.

The frontend communicates with the Expense Tracker Backend through a REST API and follows a feature-first architecture that prioritizes scalability, maintainability, and clean separation of concerns.

---

# Why this project?

Expense Tracker Frontend is more than a CRUD application.

The primary objective is to showcase production-quality frontend engineering practices including:

- Feature-first architecture
- Strong TypeScript usage
- Modular application design
- Automated quality checks
- Continuous Integration
- Documentation-driven development
- Scalable project organization
- Modern React development

The project evolves through structured milestones, ensuring every release delivers production-ready improvements rather than isolated features.

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Public Route Guards
- Persistent Authentication

### Authentication Flow

```text
Login Form
      │
      ▼
React Hook Form
      │
      ▼
useLogin()
      │
      ▼
Axios API
      │
      ▼
JWT stored
      │
      ▼
React Query
      │
      ▼
useProfile()
      │
      ▼
Protected Routes

```

## Dashboard

- Financial Summary
- Monthly Trends
- Spending Analytics
- Dashboard Insights
- Recent Transactions

## Transaction Management

- Create Transactions
- Update Transactions
- Delete Transactions
- Filtering
- Sorting
- Pagination

## Category Management

- Category CRUD
- Category Analytics
- Search

## Financial Planning

- Budget Management
- Spending Insights
- Financial Reports

## User Experience

- Responsive Design
- Dark Mode
- Accessible UI
- Optimistic Updates
- Loading States
- Error Boundaries

---

# Technology Stack

| Category               | Technology          |
| ---------------------- | ------------------- |
| Framework              | Next.js 16          |
| UI Library             | React 19            |
| Language               | TypeScript          |
| Styling                | Tailwind CSS v4     |
| Component Library      | shadcn/ui           |
| Icons                  | Lucide React        |
| HTTP Client            | Axios               |
| Validation             | Zod                 |
| Forms                  | React Hook Form     |
| Server State           | TanStack Query      |
| Theme Management       | next-themes         |
| Code Formatting        | Prettier            |
| Linting                | ESLint              |
| Git Hooks              | Husky + lint-staged |
| Continuous Integration | GitHub Actions      |
| Package Manager        | npm                 |
| Version Control        | Git + GitHub        |

---

# Architecture at a Glance

The frontend follows a **hybrid feature-first architecture** designed for scalability and long-term maintainability.

## Core Principles

- ✅ Feature-first organization
- ✅ Modular business logic
- ✅ Shared infrastructure only when necessary
- ✅ Strong TypeScript support
- ✅ Minimal global state
- ✅ Centralized API client
- ✅ Centralized application configuration
- ✅ Provider-based application composition
- ✅ Documentation-driven development

## Frontend Architecture

- Feature-first architecture
- React Query for server state
- shadcn/ui (Base UI)
- App Shell pattern

---

# Project Structure

```text
src/
│
├── app/                    # Next.js App Router
│
├── components/             # Shared reusable components
│
├── config/                 # Application configuration
│
├── constants/              # Shared constants
│
├── features/               # Feature modules
│   ├── auth/
|   |   ├── api/
|   |   ├── components/
|   |   ├── hooks/
|   |   ├── schemas/
|   |   ├── types/
|   |   └── utils/
│   ├── categories/
│   ├── dashboard/
│   ├── profile/
│   └── transactions/
│
├── hooks/                  # Shared React hooks
│
├── lib/                    # Third-party integrations
│
├── providers/              # Global React providers
│
├── types/                  # Shared TypeScript types
│
└── utils/                  # Utility functions
```

---

## Feature Structure

Each feature owns its implementation.

Example:

```text
features/
└── auth/
    ├── api/
    ├── components/
    ├── hooks/
    ├── types/
    ├── utils/
    └── validation/
```

Business logic remains inside the owning feature while shared infrastructure stays outside feature modules.

---

# Engineering Practices

The repository emphasizes professional software engineering practices.

| Practice                         | Status |
| -------------------------------- | :----: |
| Feature-first Architecture       |   ✅   |
| Conventional Commits             |   ✅   |
| Git Flow-inspired Workflow       |   ✅   |
| Pull Request Reviews             |   ✅   |
| Automated Formatting             |   ✅   |
| Automated Linting                |   ✅   |
| Git Hooks                        |   ✅   |
| Continuous Integration           |   ✅   |
| Documentation-driven Development |   ✅   |

---

# API Communication

The frontend communicates with the Expense Tracker Backend through a centralized API client.

The shared API client is configured once under `src/lib` and reused across all feature modules.

This approach provides:

- Centralized Axios API client
- Feature-based API modules
- JWT authentication
- Shared request configuration
- Centralized endpoint definitions

---

# Prerequisites

Before running the project, ensure the following tools are installed:

| Tool    | Recommended Version |
| ------- | ------------------- |
| Node.js | 24+                 |
| npm     | Latest              |
| Git     | Latest              |

---

# Getting Started

## 1. Clone the Repository

```bash
git clone git@github.com:MishraRoushankumar/expenseTracker-Frontend.git
```

or

```bash
git clone https://github.com/MishraRoushankumar/expenseTracker-Frontend.git
```

---

## 2. Navigate to the Project

```bash
cd expenseTracker-Frontend
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Configure the required environment variables.

---

## 5. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# Environment Variables

Create a local environment file:

```bash
cp .env.example .env.local
```

Required variables:

| Variable                   | Description               | Example                        |
| -------------------------- | ------------------------- | ------------------------------ |
| `NEXT_PUBLIC_API_BASE_URL` | Backend REST API base URL | `http://localhost:5000/api/v1` |
| `NEXT_PUBLIC_APP_NAME`     | Application name          | `Expense Tracker`              |

> **Note**
>
> Never access `process.env` directly.
>
> Always import environment variables from the centralized configuration layer:
>
> ```ts
> import { env } from "@/config";
> ```

---

# Available Scripts

| Script                 | Description                               |
| ---------------------- | ----------------------------------------- |
| `npm run dev`          | Start the development server              |
| `npm run build`        | Create a production build                 |
| `npm run lint`         | Run ESLint                                |
| `npm run format`       | Format the project using Prettier         |
| `npm run format:check` | Verify formatting without modifying files |
| `npm run prepare`      | Initialize Husky Git hooks                |

---

# Code Quality

The project uses multiple quality gates.

| Tool           | Purpose                             |
| -------------- | ----------------------------------- |
| Prettier       | Code formatting                     |
| ESLint         | Static analysis                     |
| Husky          | Git hooks                           |
| lint-staged    | Validate staged files before commit |
| GitHub Actions | Continuous Integration              |

Every commit is automatically validated before entering the repository.

---

# Development Workflow

The project follows a milestone-driven, issue-based development workflow to ensure every change is reviewed, documented, and validated before merging.

```text
Issue
   │
   ▼
Feature Branch
   │
   ▼
Implementation
   │
   ▼
Code Review
   │
   ▼
Quality Checks
   │
   ▼
Documentation Review
   │
   ▼
Pull Request
   │
   ▼
Review
   │
   ▼
Merge into develop
   │
   ▼
Release
```

Every feature should:

- Reference a GitHub Issue
- Be implemented on its own feature branch
- Pass all quality checks
- Include documentation updates when necessary
- Be merged through a Pull Request

---

# Branch Strategy

The repository follows a **Git Flow-inspired** branching model.

```text
main
│
└── develop
      │
      ├── feature/*
      ├── bug/*
      ├── refactor/*
      ├── docs/*
      ├── chore/*
      └── release/*
```

## Branch Types

| Branch       | Purpose                   |
| ------------ | ------------------------- |
| `main`       | Production-ready releases |
| `develop`    | Active development        |
| `feature/*`  | New features              |
| `bug/*`      | Bug fixes                 |
| `refactor/*` | Code refactoring          |
| `docs/*`     | Documentation updates     |
| `chore/*`    | Maintenance tasks         |
| `release/*`  | Release preparation       |

---

# Pull Request Process

Every Pull Request should:

- Reference the related GitHub Issue
- Focus on a single responsibility
- Pass formatting checks
- Pass ESLint
- Pass the production build
- Update documentation when required
- Receive code review before merging

### Merge Strategy

| Branch Type   | Strategy         |
| ------------- | ---------------- |
| Feature       | Squash and Merge |
| Documentation | Squash and Merge |
| Refactor      | Squash and Merge |
| Release       | Merge Commit     |

---

# Continuous Integration

The repository uses **GitHub Actions** as the primary Continuous Integration platform.

Every push and pull request targeting `develop` or `main` automatically executes the quality pipeline.

## CI Pipeline

```text
Checkout Repository
        │
        ▼
Install Dependencies
        │
        ▼
Format Check
        │
        ▼
ESLint
        │
        ▼
Production Build
```

This ensures that only verified code reaches the protected branches.

---

# Related Projects

| Repository              | Description                                |
| ----------------------- | ------------------------------------------ |
| Expense Tracker Backend | REST API powering the frontend application |

Backend Repository:

```text
https://github.com/MishraRoushankumar/expenseTracker-Backend
```

---

# Project Documentation

| Document          | Purpose                          |
| ----------------- | -------------------------------- |
| `README.md`       | Project overview and setup guide |
| `ROADMAP.md`      | Long-term development roadmap    |
| `CONTRIBUTING.md` | Contribution guidelines          |
| `CHANGELOG.md`    | Release history                  |
| `LICENSE`         | License information              |
| `SECURITY.md`     | Security policy _(planned)_      |

---

# Current Status

The project has completed its initial engineering foundation and is ready for feature development.

| Item                 | Status                 |
| -------------------- | ---------------------- |
| Version              | **v0.1.0**             |
| Milestone            | ✅ Frontend Foundation |
| Development          | 🚧 Active              |
| Documentation        | ✅ Complete            |
| CI/CD                | ✅ Configured          |
| Architecture         | ✅ Established         |
| Developer Experience | ✅ Configured          |

---

# Roadmap

The project is developed through milestone-based releases.

| Version    | Milestone                  | Status  |
| ---------- | -------------------------- | :-----: |
| **v0.1.0** | Frontend Foundation        |   ✅    |
| **v0.2.0** | Authentication & App Shell | 🚧 Next |
| **v0.3.0** | Dashboard                  |   ⏳    |
| **v0.4.0** | Categories                 |   ⏳    |
| **v0.5.0** | Transactions               |   ⏳    |
| **v0.6.0** | UI System                  |   ⏳    |
| **v0.7.0** | Profile & Settings         |   ⏳    |
| **v0.8.0** | Budget Management          |   ⏳    |
| **v0.9.0** | Financial Reports          |   ⏳    |
| **v1.0.0** | Production Ready           |   🎯    |

For complete milestone details, see:

```text
ROADMAP.md
```

---

# Contributing

Contributions are welcome.

Before contributing, please review:

```text
CONTRIBUTING.md
```

The contribution guide includes:

- Development workflow
- Branch strategy
- Coding standards
- Pull request process
- Code review expectations
- Continuous Integration requirements
- Documentation standards

---

# License

This project is licensed under the **MIT License**.

See the `LICENSE` file for complete details.

---

# Engineering Goals

This repository aims to demonstrate professional frontend engineering practices rather than simply implementing application features.

The project emphasizes:

- Scalable architecture
- Feature-first organization
- Clean code
- Strong TypeScript usage
- Modular design
- Automated quality assurance
- Continuous Integration
- Documentation-driven development
- Maintainability
- Long-term extensibility

---

# Planned Improvements

Future milestones will introduce:

- Authentication
- Dashboard analytics
- Category management
- Transaction management
- Budget planning
- Financial reports
- Component library
- Testing
- Performance optimization
- Accessibility improvements

---

# Acknowledgements

This project is built using modern open-source technologies including:

- Next.js
- React
- TypeScript
- Tailwind CSS
- TanStack Query
- Axios
- next-themes

Many thanks to the maintainers and contributors of these projects.

---

# Development Principles

The project follows a set of engineering principles that guide every architectural and implementation decision.

## Core Principles

### Feature-first Architecture

Business logic belongs inside feature modules.

Shared infrastructure is introduced only when it is genuinely shared across multiple features.

---

### Simplicity Over Premature Abstraction

Abstractions are introduced only after a clear need has been identified.

The project intentionally avoids unnecessary complexity.

---

### Strong Type Safety

TypeScript is used throughout the application to improve maintainability, developer experience, and runtime reliability.

---

### Single Responsibility

Every module, component, and utility should have a single, well-defined responsibility.

---

### Documentation-driven Development

Documentation evolves alongside implementation.

Every significant architectural or workflow change should be reflected in the project's documentation.

---

### Quality First

Every change should successfully pass:

- Formatting
- Linting
- Production Build
- Continuous Integration

before being merged.

---

# Repository Standards

The project follows modern software engineering practices.

| Standard                   | Status |
| -------------------------- | :----: |
| Feature-first Architecture |   ✅   |
| Conventional Commits       |   ✅   |
| Git Flow-inspired Workflow |   ✅   |
| Pull Request Reviews       |   ✅   |
| Documentation Reviews      |   ✅   |
| Semantic Versioning        |   ✅   |
| Keep a Changelog           |   ✅   |
| GitHub Actions CI          |   ✅   |

---

# Versioning

This project follows **Semantic Versioning (SemVer)**.

```text
MAJOR.MINOR.PATCH
```

Example:

```text
v1.2.3
```

Where:

| Version | Meaning                          |
| ------- | -------------------------------- |
| Major   | Breaking changes                 |
| Minor   | New backward-compatible features |
| Patch   | Bug fixes and small improvements |

---

# Release Process

Every milestone is released using a structured workflow.

```text
Issue Planning
        │
        ▼
Implementation
        │
        ▼
Code Review
        │
        ▼
Quality Validation
        │
        ▼
Documentation Review
        │
        ▼
Release PR
        │
        ▼
Merge into main
        │
        ▼
Git Tag
        │
        ▼
GitHub Release
```

---

# Repository Goals

This repository is intended to serve as:

- A production-quality frontend application
- A demonstration of scalable React architecture
- A reference implementation for modern frontend engineering
- A portfolio project showcasing engineering best practices
- The client application for the Expense Tracker Backend

---

# Future Vision

The long-term objective is to evolve the project into a complete personal finance platform featuring:

- Secure authentication
- Budget management
- Financial analytics
- Interactive dashboards
- Reporting
- Data visualization
- Responsive mobile-first design
- Accessibility compliance
- High test coverage
- Production deployment

---

# Support

If you encounter a bug, have a feature request, or want to discuss an architectural improvement:

- Open a GitHub Issue
- Start a GitHub Discussion _(if enabled)_
- Submit a Pull Request

Please review `CONTRIBUTING.md` before contributing.

---

# Maintainer

**Roushankumar Mishra**

Computer Science Engineering Student

University of Allahabad

---

<div align="center">

### Expense Tracker Frontend

**Building modern frontend software with clean architecture, scalable engineering practices, and continuous improvement.**

⭐ If you find this project useful, consider giving it a star.

</div>
