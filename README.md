# OpenJira - Task Management Application

A modern, responsive task management application built with Next.js, React, and TypeScript. OpenJira provides an intuitive Kanban-style interface for managing tasks across different stages of completion.

## Features

- **Kanban Board Interface**: Visual task management with three columns (Pending, In Progress, Completed)
- **Real-time Task Management**: Create, update, and delete tasks with immediate UI updates
- **Drag & Drop Support**: Move tasks between different status columns
- **Responsive Design**: Built with Material-UI for optimal experience across devices
- **TypeScript Support**: Full type safety throughout the application
- **MongoDB Integration**: Persistent data storage with Mongoose ODM

## Tech Stack

- **Frontend**: Next.js 12.1.0, React 17.0.2, TypeScript 4.6.2
- **UI Framework**: Material-UI (MUI) 5.5.1 with Emotion for styling
- **Database**: MongoDB with Mongoose ODM
- **HTTP Client**: Axios for API communication
- **Notifications**: Notistack for user feedback
- **Date Handling**: date-fns for date formatting
- **Development**: ESLint for code quality

## Prerequisites

- Node.js 16.19.1 (managed by Volta)
- Yarn 1.22.19 (managed by Volta)
- Docker and Docker Compose

## Getting Started

### 1. Setup Database

Start the MongoDB container:

```bash
docker-compose up -d
```

### 2. Environment Configuration

Create environment file:

```bash
cp .env.template .env
```

Configure MongoDB connection in `.env`:

```env
MONGO_URL=mongodb://localhost:27017/entriesdb
```

### 3. Install Dependencies

```bash
yarn install
```

### 4. Seed Database (Optional)

Populate the database with sample data:

```bash
curl http://localhost:3000/api/seed
```

### 5. Start Development Server

```bash
yarn dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```text
├── apis/              # API client functions
├── components/        # React components
│   ├── layouts/       # Layout components
│   └── ui/           # UI components (EntryCard, EntryList, etc.)
├── context/          # React Context providers
│   ├── entries/      # Entry state management
│   └── ui/           # UI state management
├── database/         # Database connection and utilities
├── interfaces/       # TypeScript type definitions
├── models/           # Mongoose schemas
├── pages/            # Next.js pages and API routes
│   └── api/          # API endpoints
├── styles/           # Global styles
├── themes/           # Material-UI theme configuration
└── utils/            # Utility functions
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build production version
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## API Endpoints

- `GET /api/entries` - Retrieve all entries
- `POST /api/entries` - Create new entry
- `PUT /api/entries/[id]` - Update entry
- `DELETE /api/entries/[id]` - Delete entry
- `GET /api/seed` - Populate database with sample data

## Entry States

Tasks can be in one of three states:

- **pending** - Newly created tasks  
- **in-progress** - Tasks currently being worked on  
- **finished** - Completed tasks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is private and not licensed for public use.
