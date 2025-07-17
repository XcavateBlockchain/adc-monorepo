#  AssetDIDcom Interface

A modern web interface built with Next.js 15, React 19, and TypeScript. This project uses the latest features of Next.js including the App Router and Turbopack for optimal development experience.

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **UI Components**: Custom components with Tailwind CSS
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm 10.10.0
- **Linting**: Biome
- **Development**: Turbopack for faster builds

## Prerequisites

- Node.js (Latest LTS version recommended)
- pnpm 10.10.0 or later

## Environment Setup

- Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Note: Never commit the `.env` file to version control. The `.env.example` file serves as a template for required environment variables.

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run Next.js linting
- `pnpm lint:fix` - Run Biome to check and fix linting issues
- `pnpm typecheck` - Run TypeScript type checking
- `pnpm check` - Run both linting and type checking
- `pnpm shadcn` - Run shadcn CLI for component management

## Project Structure

- `/app` - Next.js app directory containing pages and layouts
- `/components` - Reusable React components
- `/lib` - Utility functions and shared logic
- `/constants` - Application constants and configuration
- `/public` - Static assets
- - `/.github` - GitHub configuration files
- `/.vscode` - VS Code configuration

## Development

- Todo

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Run `pnpm check` to ensure code quality
4. Submit a pull request

## License

This project is private and proprietary.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
