# Shadcn Keycloak Theme

A modern and customizable Keycloak theme built with [Keycloakify](https://www.keycloakify.dev/) and [shadcn/ui](https://ui.shadcn.com/). This theme provides a beautiful, responsive, and accessible user interface for Keycloak login pages.

## Features

- 🎨 Modern UI using shadcn/ui components
- 🔒 Supports essential login theme pages:
  - Login
  - Registration
  - Password Reset
  - OTP/2FA
  - Email Verification
  - Password Update
  - Logout Confirmation
  - Error Pages
- 🌐 Internationalization support
- 📱 Fully responsive design
- ♿ Accessibility focused
- 🛠️ Built with TypeScript and React

## Prerequisites

- Node.js (^18.0.0 || >=20.0.0)
- Docker and Docker Compose
- Java Development Kit (JDK) 17 (for local development)

## Quick Start

1. Clone the repository:

```bash
git clone <your-repo-url>
cd keycloakify-shadcn
```

2. Install dependencies:

```bash
npm install
```

3. Start the development environment:

```bash
# Start Storybook for component development
npm run storybook

# Or start the Vite dev server
npm run dev
```

4. Build the theme:

```bash
npm run build-keycloak-theme
```

## Docker Deployment

The project includes Docker configuration for easy deployment:

1. Build and start the containers:

```bash
docker compose up -d
```

This will start:

- Keycloak server with the custom theme (accessible at http://localhost:8090)
- PostgreSQL database
- Initial realm configuration

Default admin credentials:

- Username: admin
- Password: admin

## Development

### Project Structure

- `/src/login/` - Theme components and pages
- `/src/login/pages/` - Individual page implementations
- `/config/` - Keycloak realm configuration
- `/.github/workflows/` - CI/CD pipelines

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the project
- `npm run build-keycloak-theme` - Build the Keycloak theme
- `npm run storybook` - Start Storybook for component development
- `npm run format` - Format code with Prettier

### Creating New Pages

1. Create a new page component in `/src/login/pages/`
2. Add the page to the switch statement in `KcPage.tsx`
3. Create a corresponding story file for Storybook testing
