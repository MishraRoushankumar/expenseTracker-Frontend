# Security Policy

Thank you for helping improve the security of the **Expense Tracker Frontend**.

The security of this project is taken seriously. If you discover a security vulnerability, please report it responsibly so it can be investigated and resolved before public disclosure.

---

# Supported Versions

The following table indicates which versions currently receive security updates.

| Version  | Supported |
| -------- | :-------: |
| v0.1.x   |    ✅     |
| < v0.1.0 |    ❌     |

---

# Reporting a Vulnerability

Please **do not** create a public GitHub Issue for security vulnerabilities.

Instead, use one of the following methods:

- GitHub Security Advisories (preferred, if enabled)
- Contact the project maintainer privately

Please include as much information as possible:

- Description of the issue
- Steps to reproduce
- Potential impact
- Screenshots or proof of concept (if applicable)
- Suggested mitigation (optional)

---

# Response Process

Every report will be:

1. Acknowledged as soon as possible.
2. Reviewed to determine severity and impact.
3. Reproduced and verified.
4. Fixed in a private branch when appropriate.
5. Released in a future security update.
6. Publicly disclosed after a fix becomes available.

---

# Scope

The following areas are considered within the scope of this policy:

- Authentication
- Authorization
- Session Management
- API Communication
- Client-side Data Handling
- Dependency Security
- Build Configuration

Third-party dependencies should be reported to their respective maintainers when appropriate.

---

# Dependency Management

Project dependencies are reviewed regularly.

Maintenance includes:

- Reviewing `npm audit`
- Reviewing `npm outdated`
- Updating compatible package versions
- Monitoring upstream security advisories

Breaking dependency upgrades are evaluated before adoption to maintain project stability.

---

# Disclosure Policy

Please allow reasonable time to investigate and resolve vulnerabilities before publicly disclosing them.

Coordinated disclosure helps protect users while fixes are being prepared.

---

# Security Best Practices

The project follows several engineering practices to improve security, including:

- TypeScript for improved type safety
- ESLint for static analysis
- GitHub Actions for automated quality checks
- Protected release workflow
- Dependency reviews before releases
- Centralized configuration management

Additional security improvements will be introduced as the project evolves.

---

# Contact

For security-related concerns, please contact the project maintainer through GitHub or another private communication channel.

Thank you for helping make the Expense Tracker Frontend more secure.
