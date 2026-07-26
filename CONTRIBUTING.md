# Contributing

Thank you for your interest in contributing to the Expense Tracker Frontend.

This document outlines the project's development workflow, coding standards, and contribution process.

---

## Development Workflow

Every change follows the same workflow.

```text

Issue

↓

Feature Branch

↓

Implementation

↓

Testing

↓

Documentation Review

↓

Pull Request

↓

Code Review

↓

Merge into develop

↓

Release

```

---

## Branch Strategy

The repository follows a Git Flow-inspired workflow.

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

## Commit Convention

Use Conventional Commits.

Examples:

```md
feat(auth): implement login form

fix(theme): resolve dark mode persistence

refactor(api): simplify axios configuration

docs: update roadmap

test(auth): add login component tests
```

---

## Pull Requests

Every Pull Request should:

- Reference an issue
- Have a clear description
- Focus on a single responsibility
- Pass linting
- Pass production build
- Include documentation updates when necessary

---

## Coding Standards

General guidelines:

- Prefer feature-first organization
- Keep components focused
- Avoid duplicated logic
- Write reusable code
- Prefer composition over inheritance
- Avoid unnecessary abstractions
- Global providers should be composed through `AppProvider`.
- Avoid adding providers directly to `app/layout.tsx`.

### Environment Variables

Never access `process.env` directly.

Always import environment variables from:

```ts
import { env } from "@/config";
```

---

## Architecture

The frontend follows a hybrid feature-first architecture.

Business logic belongs inside feature modules.

Shared infrastructure remains globally accessible.

---

### API Client

Use the shared API client for all backend communication.

Do not create additional Axios instances inside feature modules.

Feature modules should build on top of the shared client rather than configuring their own HTTP clients.

---

## Documentation

Documentation is considered part of every feature.

Update documentation whenever implementation changes affect:

- Setup
- Architecture
- Workflow
- Roadmap
- Developer experience

---

## Code Reviews

Reviews should focus on:

- Correctness
- Maintainability
- Readability
- Performance
- Accessibility
- Consistency

---

## Git Hooks

This repository uses Husky and lint-staged to maintain code quality.

Before every commit, the following checks are executed automatically:

- Prettier
- ESLint

Please ensure your commit succeeds locally before opening a Pull Request.

---

## Issue Workflow

Every issue should have:

- Clear objective
- Defined scope
- Acceptance criteria
- Definition of Done

Large changes should be split into multiple focused issues.

---

## Questions

If architectural or implementation decisions require clarification, discuss them before implementation rather than during review.
