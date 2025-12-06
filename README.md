# E-Commerce Dashboard

A modern, feature-rich e-commerce admin dashboard built with Next.js 16, React 19, and TypeScript. This application provides a comprehensive interface for managing products, orders, categories, and user accounts for an online store.

[![Next.js](https://img.shields.io/badge/Next.js-16.0.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Backend API](#backend-api)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Product Management**: Full CRUD operations for products with image upload support
- **Order Management**: Track and manage customer orders with status updates
- **Category & Subcategory Management**: Organize products hierarchically
- **User Management**: Manage customer accounts and authentication
- **Dashboard Analytics**: Visual insights with charts and statistics
- **Modern UI Components**: Built with shadcn/ui for a consistent, accessible design system
- **Responsive Design**: Mobile-first design optimized for all screen sizes
- **Dark Mode Support**: Theme switching with next-themes
- **Form Validation**: Robust form handling with react-hook-form and Zod
- **Data Tables**: Advanced tables with sorting, filtering, and pagination using TanStack Table
- **Drag & Drop**: Intuitive drag-and-drop functionality with dnd-kit
- **Toast Notifications**: User feedback with Sonner
- **Payment Integration**: Stripe payment gateway support (via backend API)

## 🛠️ Tech Stack

### Core
- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### Styling
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components built with Radix UI and Tailwind CSS
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Tabler Icons](https://tabler.io/icons)** - Additional icon set

### State & Forms
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation
- **[Axios](https://axios-http.com/)** - HTTP client

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: >= 18.x (LTS recommended)
- **npm**: >= 9.x or **yarn**: >= 1.22.x or **pnpm**: >= 8.x
- **Git**: Latest version

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Bay1999/nextjs-ecommerce-store.git
cd nextjs-ecommerce-store
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

## ⚙️ Configuration

1. **Create environment file**

Create a `.env.local` file in the root directory:

```env
API_BASE_URL=http://127.0.0.1:8000/api/v1
NEXT_PUBLIC_APP_ENV=development
```

> **Note**: Replace `http://localhost:8000` with your backend API URL if different.

## 🏃 Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

1. **Build the application**

```bash
npm run build
# or
yarn build
# or
pnpm build
```

2. **Start production server**

```bash
npm run start
# or
yarn start
# or
pnpm start
```

## 📁 Project Structure

```
ecommerce-dashboard/
├── app/                      # Next.js App Router
│   ├── admin/               # Admin dashboard routes
│   │   ├── dashboard/       # Dashboard pages
│   │   └── layout.tsx       # Admin layout
│   ├── api/                 # API routes (if any)
│   ├── login/               # Authentication pages
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/              # Reusable React components
│   ├── ui/                  # UI components from shadcn/ui (buttons, inputs, etc.)
│   ├── atoms/               # UI component with smallest (password inputs, etc.)
|   ├── molecules/           # UI component with medium (cards, etc.)
|   ├── organisms/           # UI component with large (tables, page sections, etc.)
|   ├── templates/           # UI component with largest (sidebar, etc.)
├── config/                  # Configuration files
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and libraries
├── public/                  # Static assets
├── types/                   # TypeScript type definitions
├── .env.local              # Environment variables (create this)
├── .gitignore              # Git ignore rules
├── components.json         # shadcn/ui configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🔌 Backend API

This dashboard connects to the [Simple E-Store API](https://github.com/mabdusshakur/simp-estore-api), a Laravel-based REST API that provides:

- Product management endpoints
- Order processing and management
- User authentication and authorization
- Category and subcategory management
- Stripe payment integration
- Email notifications for orders and registration

### Backend Setup

To set up the backend API, follow the instructions in the [simp-estore-api repository](https://github.com/mabdusshakur/simp-estore-api):

1. Clone the backend repository
2. Install PHP dependencies with Composer
3. Configure environment variables (database, mail, Stripe)
4. Run migrations and seeders
5. Start the Laravel development server

Ensure the backend API is running before starting this dashboard application.

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add: your feature description"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request**

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible UI primitives
- [Simple E-Store API](https://github.com/mabdusshakur/simp-estore-api) - Backend API

---

**Built with ❤️ using Next.js and React**
