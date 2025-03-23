# Lindian Frontend

A modern React frontend for the Lindian application, designed to communicate with a Django backend.

## Technology Stack

- **React 19.0.0**: Modern UI library
- **TypeScript 5.8**: Type-safe JavaScript
- **Vite 6.2.2**: Next-generation frontend tooling
- **TailwindCSS 4.0.15**: Utility-first CSS framework
- **Untitled UI**: Premium design system

## Project Structure

```
lindian-frontend/
├── #Context/                  # Context system for tracking architecture decisions
│   ├── CONTEXT_INDEX.md       # Main index of all decisions and changes
│   ├── Development_Rules.md   # Development guidelines and rules
│   ├── Architecture/          # Architecture decisions
│   ├── Frontend/              # Frontend-specific decisions
│   ├── Security/              # Security-related decisions
│   └── DevOps/                # DevOps and CI/CD decisions
├── src/
│   ├── components/            # React components
│   │   └── ui/                # UI components based on Untitled UI
│   ├── pages/                 # Page components
│   ├── services/              # API services for backend communication
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   ├── types/                 # TypeScript type definitions
│   └── styles/                # CSS and Tailwind styles
├── public/                    # Static assets
├── vite.config.ts            # Vite configuration
└── tailwind.config.js        # TailwindCSS configuration
```

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd lindian-frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   # Create .env file with the required backend URL
   VITE_API_URL=http://localhost:8000/api
   ```
   This environment variable is required for connecting to the Django backend.

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173

### Building for Production

Build the application for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Key Features

- **Type-Safe Development**: Full TypeScript integration
- **Component Library**: Based on Untitled UI design system
- **API Integration**: Structured services for Django backend
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Architecture Documentation**: Complete context system for tracking decisions

## Django Backend Integration

> **Note**: This frontend is designed to work with a Django backend. All integration specifications are documented in the `/#Context` directory for both frontend and backend developers.

### Development Setup

To connect the frontend with the Django backend:

1. Ensure Django backend is running on http://localhost:8000
2. Configure Django with proper CORS settings:
   ```python
   # In Django settings.py
   CORS_ALLOW_CREDENTIALS = True
   CORS_ALLOWED_ORIGINS = ["http://localhost:5173"]
   ```
3. Set environment variables in frontend `.env` file:
   ```
   VITE_API_URL=http://localhost:8000/api
   ```

### API Documentation

The frontend expects the following API structure from the Django backend:

- **API Contract**: [API_CONTRACT-v1.json](/Context/Architecture/API_CONTRACT-v1.json)
  - Contains all endpoint definitions, request/response formats
  - Defines error handling conventions
- **Data Models**: [DATA_MODELS-v1.json](/Context/Architecture/DATA_MODELS-v1.json)
  - Maps TypeScript interfaces to Django models
  - Provides validation requirements
- **Authentication**: [AUTH_SCHEMA-v1.json](/Context/Security/AUTH_SCHEMA-v1.json)
  - Details authentication mechanism (session-based with CSRF)
  - Documents login/logout/register flows

### Deployment Options

For production deployment, refer to [INTEGRATION_GUIDE-v1.json](/Context/DevOps/INTEGRATION_GUIDE-v1.json) which includes:

- **Option 1: Separate Deployment**

  - Frontend: Static hosting (S3, Netlify, Vercel)
  - Backend: Django server (AWS, DigitalOcean, Heroku)
  - Requires CORS configuration

- **Option 2: Django-Served Deployment**
  - Django serves React as static files
  - Simplified authentication and CORS handling
  - Single server deployment

See the integration guide for detailed implementation instructions.
