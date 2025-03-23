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
   # Create .env file
   cp .env.example .env
   ```
   Update the `.env` file with your Django backend URL.

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
