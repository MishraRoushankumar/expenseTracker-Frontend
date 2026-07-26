# Contributing

Thank you for your interest in contributing to the **Expense Tracker Frontend**.

This document outlines the project's development workflow, coding standards, engineering principles, and contribution process.

The goal is to ensure every contribution maintains the project's quality, consistency, and long-term maintainability.

---

# Development Workflow

Every change follows the same engineering workflow.

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
Architecture Review
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

---

# Branch Strategy

The repository follows a Git Flow-inspired branching model.

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

| Branch       | Purpose                   |
| ------------ | ------------------------- |
| `main`       | Production-ready releases |
| `develop`    | Active development        |
| `feature/*`  | New features              |
| `bug/*`      | Bug fixes                 |
| `refactor/*` | Code improvements         |
| `docs/*`     | Documentation updates     |
| `chore/*`    | Maintenance tasks         |
| `release/*`  | Release preparation       |

---

# Commit Convention

This project follows **Conventional Commits**.

## Examples

```text
feat(auth): implement login page

feat(api): configure shared api client

fix(theme): resolve hydration mismatch

refactor(providers): simplify provider composition

docs: update README

ci: configure GitHub Actions

chore: update dependencies
```

---

# Pull Requests

Every Pull Request should:

- Reference a GitHub Issue
- Have a clear summary
- Focus on a single responsibility
- Pass formatting checks
- Pass ESLint
- Pass production build
- Update documentation when applicable

---

## Merge Strategy

| PR Type       | Merge Strategy   |
| ------------- | ---------------- |
| Feature       | Squash and Merge |
| Bug Fix       | Squash and Merge |
| Documentation | Squash and Merge |
| Refactor      | Squash and Merge |
| Release       | Merge Commit     |

---

# Before Opening a Pull Request

Complete the following checklist.

- [ ] Issue referenced
- [ ] Feature completed
- [ ] Documentation updated
- [ ] `npm run format:check`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] CI passes
- [ ] Ready for review

---

# Coding Standards

General guidelines:

- Prefer feature-first organization.
- Keep components focused.
- Prefer composition over inheritance.
- Avoid duplicated logic.
- Avoid premature abstractions.
- Keep modules small and cohesive.
- Use meaningful names.
- Prefer named exports unless a default export is clearly justified.

---

# Architecture

The frontend follows a hybrid feature-first architecture.

Business logic belongs inside feature modules.

Shared infrastructure remains globally accessible.

Core principles:

- Feature ownership
- Modular design
- Single responsibility
- Shared infrastructure only when necessary
- Strong TypeScript usage
- Documentation-driven development

---

# Environment Variables

Never access:

```ts
process.env;
```

directly.

Always import environment variables from:

```ts
import { env } from "@/config";
```

This centralizes configuration and simplifies future validation.

---

# API Client

Use the shared API client for all backend communication.

Do not create additional Axios instances inside feature modules.

Every feature should build on top of the shared API client.

---

# Global Providers

Global providers should always be composed through:

```text
AppProvider
```

Avoid adding providers directly to:

```text
src/app/layout.tsx
```

This keeps the application root clean and scalable.

---

# Documentation Standards

Documentation is considered part of every feature.

Update documentation whenever implementation changes affect:

- Project setup
- Architecture
- Development workflow
- Developer experience
- Configuration
- Public APIs
- Repository structure

Documentation should remain synchronized with implementation.

---

# Git Hooks

This project uses **Husky** and **lint-staged** to automatically enforce code quality before every commit.

## Pre-commit Checks

The following checks run automatically:

- Prettier
- ESLint

A commit should never bypass these checks.

---

# Continuous Integration

The repository uses **GitHub Actions** as its Continuous Integration platform.

Every push and pull request targeting `develop` or `main` automatically validates:

- Formatting
- Linting
- Production build

Future milestones will extend CI with:

- Unit testing
- Integration testing
- End-to-end testing
- Automated release validation

---

# Code Reviews

Code reviews should focus on engineering quality rather than personal style.

Review the following areas:

## Architecture

- Is the solution consistent with the feature-first architecture?
- Does ownership belong to the correct feature?
- Is unnecessary abstraction introduced?

## Maintainability

- Is the implementation easy to understand?
- Can future developers extend it easily?
- Is the responsibility of each module clear?

## Correctness

- Does the implementation solve the intended problem?
- Are edge cases considered?
- Does it introduce regressions?

## Performance

- Avoid unnecessary rendering.
- Avoid duplicated API requests.
- Prefer lazy loading where appropriate.

## Accessibility

Verify that new UI components:

- Support keyboard navigation
- Use semantic HTML
- Provide accessible labels where required

---

# Issue Workflow

Every issue should include:

- Clear objective
- Defined scope
- Acceptance criteria
- Definition of Done

Large features should be split into multiple focused issues.

One Pull Request should normally resolve one issue.

---

# Release Process

Every release follows the same workflow.

```text
Milestone Complete
        │
        ▼
Documentation Review
        │
        ▼
Dependency Review
        │
        ▼
Quality Checks
        │
        ▼
Release Pull Request
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

Releases should always:

- Pass CI
- Pass local quality checks
- Update CHANGELOG
- Review documentation
- Be tagged using Semantic Versioning

---

# Engineering Principles

The project follows these principles:

- Simplicity over unnecessary abstraction
- Feature-first architecture
- Strong type safety
- Single responsibility
- Shared infrastructure only when required
- Documentation-driven development
- Continuous improvement
- Production-ready engineering practices

These principles should guide every implementation and review.

---

# Questions & Discussions

If an architectural or implementation decision is unclear:

- Open a GitHub Issue
- Start a discussion (if enabled)
- Ask before implementation rather than during code review

Early discussion helps maintain consistency across the project.

---

# Code of Conduct

Please be respectful and constructive when participating in discussions and reviews.

Focus feedback on the code and technical decisions rather than individuals.

We value:

- Respectful communication
- Constructive feedback
- Collaboration
- Knowledge sharing
- Continuous learning

---

# Thank You

Thank you for contributing to the Expense Tracker Frontend.

Every contribution—whether code, documentation, bug reports, or architectural improvements—helps make the project more maintainable and valuable for the community.
