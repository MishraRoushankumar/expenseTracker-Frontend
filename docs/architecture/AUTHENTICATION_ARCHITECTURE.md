# Authentication Architecture

**Project:** Expense Tracker Frontend

**Version:** v0.2.0

**Status:** Approved Architecture

**Last Updated:** July 2026

---

# 1. Overview

This document defines the authentication architecture for the Expense Tracker Frontend.

Its purpose is to establish a consistent, scalable, and maintainable authentication system that integrates with the existing Expense Tracker Backend while following the project's engineering standards and feature-first architecture.

This document serves as the architectural blueprint for all authentication-related implementation within the frontend application.

No implementation should deviate from the decisions documented here without updating this document.

---

# 2. Objectives

The authentication system should:

- Authenticate users using JWT access tokens.
- Integrate seamlessly with the existing backend API.
- Maintain a clean separation between client state and server state.
- Protect authenticated routes.
- Redirect users appropriately based on authentication status.
- Support persistent login across browser refreshes.
- Provide consistent error handling.
- Be easy to extend with refresh tokens in the future.
- Minimize unnecessary API requests.
- Follow the project's feature-first architecture.

---

# 3. Non-Goals

The following items are intentionally outside the scope of v0.2.0:

- Social authentication (Google, GitHub, etc.)
- Multi-factor authentication (MFA)
- Password reset workflow
- Email verification
- Refresh token implementation
- Role-based authorization
- OAuth providers
- Session management across multiple devices

These features may be introduced in future milestones.

---

# 4. Backend API Contract

The frontend is designed to integrate with the existing Expense Tracker Backend.

## Authentication Strategy

| Item                 | Value            |
| -------------------- | ---------------- |
| Authentication Type  | JWT              |
| Token Type           | Access Token     |
| Refresh Token        | Not Implemented  |
| Token Expiration     | 24 Hours         |
| Token Delivery       | JSON Response    |
| Authorization Header | `Bearer <token>` |

---

## API Endpoints

| Method | Endpoint                | Description                         |
| ------ | ----------------------- | ----------------------------------- |
| POST   | `/api/v1/auth/register` | Register a new user                 |
| POST   | `/api/v1/auth/login`    | Authenticate user                   |
| POST   | `/api/v1/auth/logout`   | Logout current user                 |
| GET    | `/api/v1/users/profile` | Retrieve authenticated user profile |

---

## Login Response

Successful authentication returns the following response:

```json
{
  "success": true,
  "message": "Request completed successfully.",
  "data": {
    "token": "<jwt>",
    "user": {
      "id": 1,
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "role": "user",
      "createdAt": "...",
      "updatedAt": "..."
    }
  }
}
```

---

## Register Response

The register endpoint follows the project's standardized API response format.

```json
{
  "success": true,
  "message": "...",
  "data": {
    ...
  }
}
```

---

## Profile Response

The authenticated profile endpoint returns the currently logged-in user.

```json
{
  "success": true,
  "message": "...",
  "data": {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "role": "user",
    "createdAt": "...",
    "updatedAt": "..."
  }
}
```

---

# 5. Authentication Model

The frontend uses a stateless JWT authentication model.

The backend issues a signed JWT after successful authentication.

The frontend stores the token locally and attaches it to every authenticated request using the HTTP Authorization header.

```text
Authorization: Bearer <token>
```

No server-side session is maintained.

Authentication is determined entirely by possession of a valid JWT.

---

# 6. High-Level Authentication Flow

```text
Visitor
    │
    ▼
Login / Register
    │
    ▼
Backend Authentication
    │
    ▼
JWT Issued
    │
    ▼
Store Token
    │
    ▼
Authenticated Application
```

---

# 7. Guiding Principles

The authentication implementation follows these engineering principles:

- Feature-first organization.
- Single responsibility.
- Strong TypeScript typing.
- Separation of server state and client state.
- Minimal duplication.
- Reusable business logic.
- Predictable data flow.
- Production-ready architecture.
- Security-conscious implementation.
- Documentation-driven development.

Every authentication-related implementation should align with these principles.

---

# 8. Session Lifecycle

The application uses a stateless JWT authentication model.

Authentication state is determined by the presence of a valid access token.

The frontend is responsible for:

- Persisting the access token.
- Restoring the user's session.
- Removing invalid sessions.
- Redirecting users when authentication changes.

The backend is responsible for:

- Authenticating credentials.
- Issuing JWT access tokens.
- Validating JWTs.
- Returning the authenticated user's profile.
- Invalidating authentication during logout.

---

# 9. Authentication Flow

## Login Flow

```text
User
 │
 ▼
Login Form
 │
 ▼
Validate Input
 │
 ▼
POST /api/v1/auth/login
 │
 ▼
Authentication Successful
 │
 ├── Store JWT
 ├── Seed Current User Cache
 └── Redirect → Dashboard
```

### Login Success

After successful authentication:

- Save the JWT access token.
- Populate the authenticated user in the query cache.
- Redirect the user to the dashboard.
- Display a success notification if appropriate.

---

### Login Failure

Possible failure scenarios:

- Invalid email or password
- Validation errors
- Network failure
- Internal server error

The user should remain on the login page and receive an appropriate error message.

---

# 10. Registration Flow

```text
User
 │
 ▼
Registration Form
 │
 ▼
Validate Input
 │
 ▼
POST /api/v1/auth/register
 │
 ▼
Registration Successful
 │
 ▼
Redirect → Login
```

The frontend should not automatically authenticate a newly registered user unless the backend contract changes in the future.

---

# 11. Application Initialization

Whenever the application starts:

```text
Application Starts
        │
        ▼
Read JWT from localStorage
        │
        ├──────────────┐
        │              │
     No Token      Token Exists
        │              │
        ▼              ▼
 Public Routes   GET /api/v1/users/profile
                        │
                ┌───────┴────────┐
                │                │
             Success          Failure
                │                │
                ▼                ▼
     Authenticated State   Clear Token
                                │
                                ▼
                         Redirect → Login
```

This ensures stale or expired tokens are removed automatically.

---

# 12. Logout Flow

```text
Authenticated User
        │
        ▼
Logout
        │
        ▼
POST /api/v1/auth/logout
        │
        ▼
Clear JWT
        │
        ▼
Clear Query Cache
        │
        ▼
Redirect → Login
```

---

## Logout Responsibilities

Frontend:

- Call logout endpoint.
- Remove JWT from localStorage.
- Clear authentication state.
- Clear cached authenticated data.
- Redirect user to login.

Backend:

- Return successful logout response.

---

# 13. Session Restoration

Refreshing the browser should not log the user out.

Instead:

```text
Browser Refresh
        │
        ▼
Read Stored JWT
        │
        ▼
Fetch Current User
        │
        ▼
Restore Session
```

Authentication is restored only after the backend confirms the token remains valid.

---

# 14. Route Strategy

The application separates public and authenticated experiences using route groups.

```text
app/
│
├── (public)
│   ├── login
│   └── register
│
├── (protected)
│   ├── dashboard
│   ├── categories
│   ├── transactions
│   └── settings
│
└── layout.tsx
```

---

## Public Routes

Public routes are accessible only to unauthenticated users.

Examples:

- Login
- Register

If an authenticated user attempts to access a public route, they should be redirected to the dashboard.

---

## Protected Routes

Protected routes require authentication.

Examples:

- Dashboard
- Categories
- Transactions
- Settings

Unauthenticated users attempting to access protected routes should be redirected to the login page.

---

# 15. Redirect Rules

| Current State     | Requested Route | Result                |
| ----------------- | --------------- | --------------------- |
| Not Authenticated | Protected Route | Redirect to Login     |
| Authenticated     | Login           | Redirect to Dashboard |
| Authenticated     | Register        | Redirect to Dashboard |
| Authenticated     | Protected Route | Allow Access          |
| Not Authenticated | Login           | Allow Access          |
| Not Authenticated | Register        | Allow Access          |

---

# 16. Authentication State

Authentication state consists of two independent pieces of data.

## Persistent State

Stored across browser sessions:

- JWT Access Token

## Runtime State

Managed by the application:

- Current User
- Authentication Status
- Loading State

Separating persistent state from runtime state keeps authentication predictable while avoiding stale user information.

---

# 17. Frontend Architecture

Authentication is implemented as an independent feature module following the project's feature-first architecture.

Each authentication concern is isolated into a dedicated layer with a single responsibility.

The authentication feature should never directly depend on other application features.

Instead, shared functionality should be consumed through the project's shared infrastructure.

---

# 18. Folder Structure

```text
src/
│
├── app/
│
├── components/
│   └── ui/
│
├── features/
│   └── auth/
│       ├── api/
│       ├── components/
│       ├── constants/
│       ├── hooks/
│       ├── schemas/
│       ├── types/
│       ├── utils/
│       ├── services/
│       └── index.ts
│
├── lib/
│
├── providers/
│
└── types/
```

---

# 19. Feature Responsibilities

## api/

Contains functions responsible for communicating with the backend.

Responsibilities:

- Login
- Register
- Logout
- Get Current User

These functions should contain no UI logic.

---

## components/

Contains reusable authentication UI.

Examples:

- Login Form
- Register Form
- Password Input
- Authentication Card
- Authentication Layout

Components should remain presentation-focused.

Business logic belongs inside hooks.

---

## hooks/

Contains reusable authentication logic.

Examples:

- useLogin
- useRegister
- useLogout
- useCurrentUser

Hooks coordinate:

- React Query
- Navigation
- Notifications
- Authentication state

---

## schemas/

Contains all Zod validation schemas.

Examples:

- Login Schema
- Register Schema

Validation should never be duplicated inside components.

---

## types/

Contains feature-specific TypeScript types.

Examples:

- LoginRequest
- LoginResponse
- RegisterRequest
- RegisterResponse
- CurrentUser

Shared API response types remain in the shared infrastructure.

---

## constants/

Contains authentication constants.

Examples:

- Query Keys
- Local Storage Keys
- Route Constants

Avoid magic strings throughout the feature.

---

## utils/

Contains authentication helper functions.

Examples:

- Token utilities
- Authentication helpers
- Redirect helpers

Utilities should remain pure functions.

---

## services/

Contains feature-level orchestration.

Examples:

- Authentication service
- Session initialization
- Logout cleanup

Services coordinate multiple lower-level modules.

---

# 20. Dependency Rules

The authentication feature follows strict dependency boundaries.

```text
Components
      │
      ▼
Hooks
      │
      ▼
Services
      │
      ▼
API
      │
      ▼
Axios Client
```

Dependencies must always point downward.

Reverse dependencies are not allowed.

---

# 21. Shared Infrastructure

Authentication relies on the following shared modules.

```text
src/lib/
    api-client
    utils

src/providers/
    query-provider
    theme-provider
    app-provider

src/config/
    app
    env
```

Authentication should never create duplicate infrastructure.

---

# 22. Public API

The authentication feature exposes functionality through a single entry point.

```text
features/auth/
        │
        ▼
      index.ts
```

Consumers should import from the feature entry point whenever possible.

Example:

```ts
import { LoginForm } from "@/features/auth";
```

Avoid importing deeply into feature internals from outside the feature.

---

# 23. Authentication Dependencies

The authentication feature depends on the following libraries.

| Dependency          | Purpose               |
| ------------------- | --------------------- |
| Axios               | HTTP client           |
| TanStack Query      | Server state          |
| React Hook Form     | Form management       |
| Zod                 | Validation            |
| @hookform/resolvers | RHF + Zod integration |
| shadcn/ui           | UI components         |
| Lucide React        | Icons                 |

No additional authentication libraries should be introduced without architectural review.

---

# 24. State Ownership

Authentication data is intentionally separated by responsibility.

| Data         | Owner            |
| ------------ | ---------------- |
| JWT Token    | localStorage     |
| Current User | TanStack Query   |
| Form State   | React Hook Form  |
| Validation   | Zod              |
| UI State     | React Components |

This separation minimizes duplicated state while keeping responsibilities clear.

---

# 25. Authentication Query Keys

Authentication queries should use centralized query keys.

```text
auth
auth.current-user
```

Additional keys should be added only when required.

Hard-coded query keys should be avoided.

---

# 26. Local Storage

Only the JWT access token should be persisted.

```text
expense-tracker.token
```

The following should **never** be stored in localStorage:

- User profile
- Authentication status
- Permissions
- Roles
- UI state

The backend remains the source of truth for authenticated user data.

---

# 27. Axios Client Strategy

The application uses a single shared Axios instance for all HTTP communication.

Authentication should never create a separate Axios instance.

All requests must flow through the shared API client.

```text
Component
    │
    ▼
React Query
    │
    ▼
Authentication API
    │
    ▼
Shared Axios Client
    │
    ▼
Backend
```

---

# 28. Request Interceptor

Every authenticated request should automatically attach the JWT access token.

Flow:

```text
Read JWT
    │
    ▼
Token Exists?
    │
 ┌──┴──┐
 │     │
No    Yes
 │      │
 ▼      ▼
Send   Authorization Header
Request     │
            ▼
Authorization: Bearer <token>
```

Components and hooks should never manually attach authorization headers.

Authentication should remain transparent to feature implementations.

---

# 29. Response Interceptor

The response interceptor centralizes authentication-related error handling.

## Success

Return the response without modification.

---

## Unauthorized (401)

When the backend returns **401 Unauthorized**:

- Remove the stored JWT.
- Clear authentication-related query cache.
- Redirect the user to the login page.
- Preserve the originally requested route when appropriate.

---

## Forbidden (403)

When the backend returns **403 Forbidden**:

- Display an authorization error.
- Do not remove the JWT.

---

## Server Errors

For 5xx responses:

- Preserve authentication state.
- Surface a user-friendly error message.
- Allow retry where appropriate.

---

# 30. React Query Strategy

TanStack Query is responsible for all authentication-related server state.

Authentication should not duplicate server state inside React Context or local storage.

---

## Queries

### Current User

Query Key

```text
auth.current-user
```

Responsibilities:

- Fetch authenticated user
- Restore session
- Validate stored JWT
- Provide user information

---

## Mutations

The authentication feature provides the following mutations:

### Login

Responsibilities:

- Authenticate credentials
- Store JWT
- Seed user cache
- Redirect user

---

### Register

Responsibilities:

- Register account
- Handle validation errors
- Redirect to login

---

### Logout

Responsibilities:

- Notify backend
- Remove JWT
- Clear cache
- Redirect to login

---

# 31. Cache Strategy

Authentication cache should remain minimal.

Cached data includes:

- Current authenticated user

The following should never be cached:

- Login credentials
- Passwords
- JWT tokens
- Form state

---

# 32. Route Protection Strategy

Route protection should be implemented at the routing layer rather than individual pages.

Protected pages should never duplicate authentication checks.

```text
Protected Layout
        │
        ▼
Authentication Check
        │
   ┌────┴────┐
   │         │
Valid     Invalid
   │         │
   ▼         ▼
Render   Redirect
```

---

# 33. Public Route Strategy

Public routes include:

- Login
- Register

Authenticated users attempting to access public routes should automatically be redirected to the dashboard.

---

# 34. Loading Strategy

Authentication state should expose a loading phase.

```text
App Starts
     │
     ▼
Checking Authentication
     │
     ▼
Loading Screen
     │
     ▼
Authenticated / Guest
```

Protected pages should not render until authentication initialization completes.

This prevents layout flicker and unauthorized content flashes.

---

# 35. Error Handling Strategy

Errors should be categorized consistently.

| Category       | Example             | Handling                       |
| -------------- | ------------------- | ------------------------------ |
| Validation     | Invalid email       | Display field error            |
| Authentication | Invalid credentials | Display authentication message |
| Authorization  | Forbidden           | Display access denied          |
| Network        | Connection lost     | Retry or notify user           |
| Server         | Internal error      | Display generic error          |

User-facing messages should remain clear and avoid exposing backend implementation details.

---

# 36. Notifications

Authentication actions should provide feedback.

Examples:

### Login

- Login successful
- Invalid credentials

### Registration

- Account created successfully
- Validation failed

### Logout

- Logged out successfully

Notifications should remain concise and consistent across the application.

---

# 37. Route Constants

Authentication routes should be centralized.

```text
Public

/login
/register

Protected

/dashboard
/categories
/transactions
/settings
```

Avoid hardcoding routes throughout the feature.

All route definitions should originate from shared constants.

---

# 38. Security Considerations

The authentication system is designed with security in mind while remaining aligned with the current backend implementation.

## Current Authentication Model

- JWT Access Token
- Token stored in localStorage
- Authorization header using Bearer tokens
- No refresh token
- 24-hour token expiration

This approach keeps the implementation straightforward while providing a solid foundation for future enhancements.

---

## Security Practices

The frontend follows these security practices:

- Never store passwords.
- Never cache authentication credentials.
- Never expose sensitive information in logs.
- Never persist the authenticated user in localStorage.
- Always retrieve the current user from the backend.
- Remove invalid tokens immediately.
- Use HTTPS in production.
- Validate all user input using Zod.
- Sanitize user-facing error messages.

---

## Authentication Source of Truth

| Data                  | Source of Truth    |
| --------------------- | ------------------ |
| JWT Token             | localStorage       |
| Current User          | Backend API        |
| Authentication Status | Current User Query |
| User Permissions      | Backend API        |

---

## Future Security Improvements

The following improvements are planned for future versions.

### Refresh Tokens

Replace long-lived access tokens with:

- Short-lived Access Token
- Long-lived Refresh Token

---

### HttpOnly Cookies

Move authentication from localStorage to secure HttpOnly cookies.

Benefits include:

- Reduced XSS exposure
- Automatic browser cookie handling
- Improved production security

---

### Token Rotation

Introduce rotating refresh tokens to improve session security.

---

### Role-Based Authorization

Extend the frontend to support:

- Administrator
- Maintainer
- User

Role-based route protection remains outside the scope of v0.2.0.

---

# 39. Architecture Decision Records (ADR)

## ADR-001

**Decision**

Use Feature-First Architecture.

**Reason**

Improves scalability, modularity, and maintainability.

---

## ADR-002

**Decision**

Use TanStack Query for server state.

**Reason**

Authentication state originates from the backend and should not be duplicated.

---

## ADR-003

**Decision**

Store only the JWT in localStorage.

**Reason**

Avoid stale user data while preserving sessions across browser refreshes.

---

## ADR-004

**Decision**

Use React Hook Form with Zod.

**Reason**

Provides type-safe validation with minimal boilerplate.

---

## ADR-005

**Decision**

Use a shared Axios client.

**Reason**

Centralizes request configuration, authentication headers, and error handling.

---

## ADR-006

**Decision**

Protect routes using layouts.

**Reason**

Keeps authentication logic centralized and avoids duplicated checks.

---

## ADR-007

**Decision**

Keep shadcn/ui components in `src/components/ui`.

**Reason**

They are reusable design-system primitives rather than feature-specific components.

---

# 40. Implementation Roadmap

The authentication architecture will be implemented through the following issues.

| Issue | Description                     |
| ----- | ------------------------------- |
| #26   | Authentication Dependencies     |
| #27   | Authentication UI               |
| #28   | Authentication API Integration  |
| #29   | Session Management              |
| #30   | Route Protection                |
| #31   | Application Shell               |
| #32   | Authentication Testing & Polish |
| #33   | Release v0.2.0                  |

Each issue should follow this architecture document.

Architectural changes should be documented before implementation.

---

# 41. Design Principles

The authentication feature should always follow these principles.

- Single Responsibility
- Feature Isolation
- Type Safety
- Reusability
- Predictability
- Explicit Data Flow
- Minimal Coupling
- Maximum Cohesion
- Documentation-Driven Development

---

# 42. Success Criteria

The authentication architecture is considered successfully implemented when:

- Users can register.
- Users can log in.
- Users remain authenticated after page refresh.
- Protected routes require authentication.
- Public routes redirect authenticated users.
- Logout clears the session correctly.
- API communication is centralized.
- Authentication logic is isolated within the authentication feature.
- All authentication code follows the project's architectural standards.

---

# 43. Future Enhancements

The following enhancements are intentionally postponed beyond v0.2.0.

## Authentication

- Refresh Tokens
- HttpOnly Cookies
- Silent Token Refresh
- Password Reset
- Email Verification
- Multi-Factor Authentication
- Social Login

---

## Authorization

- Role-Based Access Control
- Permission-Based Authorization
- Feature Flags

---

## Security

- Session Timeout Warnings
- Device Management
- Login History
- Audit Logs

---

# 44. Architecture Summary

The authentication system is built around a simple principle:

> **The backend is the source of truth for authentication, while the frontend is responsible for presentation, session persistence, and user experience.**

The frontend stores only the JWT required to authenticate requests.

User information is always retrieved from the backend, ensuring the application displays current and authoritative data.

This architecture provides a clean separation of responsibilities, minimizes duplicated state, and establishes a scalable foundation for future authentication and authorization enhancements.

---

# Document Maintenance

This document is a living architectural reference.

It should be reviewed whenever:

- Authentication behavior changes.
- Backend authentication APIs change.
- New authentication mechanisms are introduced.
- Authorization requirements evolve.
- Significant architectural decisions are made.

All implementation within the authentication feature should remain consistent with this document unless a documented architectural decision supersedes it.
