import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

const blogData = {
  1: {
    title: 'Building Scalable React Applications with TypeScript',
    content: `
      <p>React and TypeScript make a powerful combination for building scalable, maintainable web applications. In this comprehensive guide, we'll explore best practices, project structure, and advanced patterns that will help you create robust applications.</p>

      <h2>Why TypeScript with React?</h2>
      <p>TypeScript brings static type checking to JavaScript, which provides several benefits when working with React:</p>
      <ul>
        <li><strong>Better Developer Experience:</strong> Enhanced IDE support with autocomplete and error detection</li>
        <li><strong>Catch Errors Early:</strong> Type errors are caught at compile time rather than runtime</li>
        <li><strong>Self-Documenting Code:</strong> Types serve as documentation for component props and function parameters</li>
        <li><strong>Refactoring Confidence:</strong> Safe refactoring with compiler assistance</li>
      </ul>

      <h2>Project Structure Best Practices</h2>
      <p>A well-organized project structure is crucial for scalability. Here's a recommended structure:</p>
      <pre><code>src/
├── components/
│   ├── common/
│   ├── forms/
│   └── layout/
├── hooks/
├── services/
├── types/
├── utils/
└── pages/</code></pre>

      <h2>Component Patterns</h2>
      <p>Let's look at some essential patterns for TypeScript React components:</p>

      <h3>1. Functional Components with Props Interface</h3>
      <pre><code>interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  size = 'medium', 
  onClick, 
  children 
}) => {
  return (
    <button 
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};</code></pre>

      <h3>2. Custom Hooks with TypeScript</h3>
      <pre><code>interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error };
}</code></pre>

      <h2>State Management with TypeScript</h2>
      <p>When working with complex state, TypeScript helps ensure type safety across your application:</p>

      <h3>Context API with TypeScript</h3>
      <pre><code>interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  notifications: Notification[];
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};</code></pre>

      <h2>Performance Optimization</h2>
      <p>TypeScript can help with performance optimization by providing better tooling support:</p>
      <ul>
        <li>Use <code>React.memo</code> with proper prop types</li>
        <li>Implement <code>useMemo</code> and <code>useCallback</code> with correct dependencies</li>
        <li>Leverage TypeScript's tree-shaking capabilities</li>
      </ul>

      <h2>Testing TypeScript React Components</h2>
      <p>Testing becomes more reliable with TypeScript:</p>
      <pre><code>import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button Component', () => {
  it('calls onClick when clicked', () => {
    const mockClick = jest.fn();
    render(
      <Button variant="primary" onClick={mockClick}>
        Click me
      </Button>
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockClick).toHaveBeenCalledTimes(1);
  });
});</code></pre>

      <h2>Conclusion</h2>
      <p>Building scalable React applications with TypeScript requires thoughtful planning and adherence to best practices. By leveraging TypeScript's type system, you can create more maintainable, reliable, and developer-friendly applications.</p>

      <p>Remember to start small, gradually adopt TypeScript features, and always prioritize code readability and maintainability over complex type gymnastics.</p>
    `,
    date: '2024-01-15',
    readTime: '5 min read',
    author: 'Arfan Ahmed',
    category: 'React',
    tags: ['React', 'TypeScript', 'Best Practices', 'Scalability'],
    image: 'https://www.curotec.com/wp-content/uploads/2024/10/top-uses-for-react-e1729004277386.jpg?w=1024',
    likes: 42,
    comments: 8
  },
  2: {
    title: 'Modern CSS Techniques for Responsive Design',
    content: `
      <p>Responsive web design has evolved significantly over the years. Modern CSS provides powerful tools and techniques that make creating responsive layouts easier and more efficient than ever before.</p>

      <h2>CSS Grid: The Game Changer</h2>
      <p>CSS Grid revolutionized how we approach layout design. Unlike Flexbox, which is one-dimensional, Grid is two-dimensional, allowing you to control both rows and columns simultaneously.</p>

      <h3>Basic Grid Setup</h3>
      <pre><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}</code></pre>

      <h2>Container Queries: The Future is Here</h2>
      <p>Container queries allow you to apply styles based on the size of a container rather than the viewport. This is particularly useful for component-based design systems.</p>

      <pre><code>.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}</code></pre>

      <h2>Modern CSS Units</h2>
      <p>New CSS units provide better control over responsive design:</p>
      <ul>
        <li><strong>clamp():</strong> Sets a value between a minimum and maximum</li>
        <li><strong>min() and max():</strong> Choose the smaller or larger value</li>
        <li><strong>ch and ex:</strong> Typography-based units</li>
        <li><strong>dvh, lvh, svh:</strong> Dynamic viewport units</li>
      </ul>

      <h3>Fluid Typography</h3>
      <pre><code>h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.container {
  width: min(90%, 1200px);
  margin: 0 auto;
}</code></pre>

      <h2>CSS Custom Properties (Variables)</h2>
      <p>CSS variables enable dynamic theming and responsive design patterns:</p>

      <pre><code>:root {
  --spacing-unit: 1rem;
  --max-width: 1200px;
  --primary-color: #3b82f6;
}

@media (max-width: 768px) {
  :root {
    --spacing-unit: 0.75rem;
  }
}</code></pre>

      <h2>Advanced Flexbox Patterns</h2>
      <p>Flexbox remains essential for many layout patterns:</p>

      <h3>The Holy Grail Layout</h3>
      <pre><code>.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  display: flex;
  flex: 1;
}

.sidebar {
  flex: 0 0 250px;
}

.content {
  flex: 1;
}</code></pre>

      <h2>Responsive Images and Media</h2>
      <p>Modern techniques for responsive media:</p>

      <pre><code>/* Responsive images */
img {
  max-width: 100%;
  height: auto;
}

/* Art direction with picture element */
&lt;picture&gt;
  &lt;source media="(max-width: 768px)" srcset="mobile.jpg"&gt;
  &lt;source media="(max-width: 1200px)" srcset="tablet.jpg"&gt;
  &lt;img src="desktop.jpg" alt="Description"&gt;
&lt;/picture&gt;</code></pre>

      <h2>CSS Logical Properties</h2>
      <p>Logical properties make your CSS more international-friendly:</p>

      <pre><code>/* Instead of margin-left and margin-right */
.element {
  margin-inline: 1rem;
  padding-block: 2rem;
  border-inline-start: 2px solid blue;
}</code></pre>

      <h2>Performance Considerations</h2>
      <p>Modern CSS techniques for better performance:</p>
      <ul>
        <li>Use <code>content-visibility</code> for off-screen content</li>
        <li>Implement <code>contain</code> for layout optimization</li>
        <li>Leverage <code>will-change</code> sparingly for animations</li>
        <li>Use <code>aspect-ratio</code> to prevent layout shifts</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Modern CSS provides powerful tools for creating responsive, performant, and maintainable designs. By combining these techniques thoughtfully, you can create web experiences that work beautifully across all devices and contexts.</p>
    `,
    date: '2024-01-10',
    readTime: '7 min read',
    author: 'Arfan Ahmed',
    category: 'CSS',
    tags: ['CSS', 'Responsive Design', 'Web Design', 'Modern CSS'],
    image: 'https://blog.openreplay.com/images/a-top-collection-of-css-code-generators/images/hero.png',
    likes: 38,
    comments: 12
  },
  3: {
    title: 'Node.js Best Practices for Production',
    content: `
      <p>Building Node.js applications for production requires careful consideration of performance, security, and maintainability. This guide covers essential best practices that will help you deploy robust applications.</p>

      <h2>Application Structure</h2>
      <p>A well-structured Node.js application is easier to maintain and scale:</p>

      <pre><code>project/
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
├── tests/
├── config/
└── docs/</code></pre>

      <h2>Environment Configuration</h2>
      <p>Never hardcode configuration values. Use environment variables:</p>

      <pre><code>// config/database.js
module.exports = {
  development: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME || 'myapp_dev'
  },
  production: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    ssl: true
  }
};</code></pre>

      <h2>Error Handling</h2>
      <p>Implement comprehensive error handling:</p>

      <h3>Global Error Handler</h3>
      <pre><code>// middleware/errorHandler.js
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log error
  console.error(err);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new ErrorResponse(message, 404);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
};

module.exports = errorHandler;</code></pre>

      <h3>Async Error Handling</h3>
      <pre><code>// utils/asyncHandler.js
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

// Usage
const getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({ success: true, data: users });
});</code></pre>

      <h2>Security Best Practices</h2>
      <p>Security should be a top priority in production applications:</p>

      <h3>Essential Security Middleware</h3>
      <pre><code>const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

// Set security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100
});
app.use(limiter);

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(hpp());</code></pre>

      <h2>Performance Optimization</h2>
      <p>Optimize your Node.js application for better performance:</p>

      <h3>Caching Strategies</h3>
      <pre><code>const redis = require('redis');
const client = redis.createClient();

// Cache middleware
const cache = (duration) => {
  return async (req, res, next) => {
    const key = req.originalUrl;
    const cached = await client.get(key);
    
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    
    res.sendResponse = res.json;
    res.json = (body) => {
      client.setex(key, duration, JSON.stringify(body));
      res.sendResponse(body);
    };
    
    next();
  };
};</code></pre>

      <h3>Database Optimization</h3>
      <pre><code>// Use connection pooling
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
});

// Index your queries
userSchema.index({ email: 1 });
userSchema.index({ createdAt: -1 });

// Use lean queries when you don't need full Mongoose documents
const users = await User.find().lean();</code></pre>

      <h2>Logging and Monitoring</h2>
      <p>Implement comprehensive logging for production debugging:</p>

      <pre><code>const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}</code></pre>

      <h2>Testing Strategy</h2>
      <p>Implement comprehensive testing:</p>

      <pre><code>// tests/user.test.js
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
  test('GET /api/users should return all users', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect(200);
    
    expect(response.body.success).toBe(true);
    expect(Array.isArray(response.body.data)).toBe(true);
  });
});</code></pre>

      <h2>Deployment Considerations</h2>
      <p>Key considerations for production deployment:</p>
      <ul>
        <li>Use process managers like PM2</li>
        <li>Implement health checks</li>
        <li>Set up proper logging aggregation</li>
        <li>Configure load balancing</li>
        <li>Implement graceful shutdowns</li>
      </ul>

      <h3>PM2 Configuration</h3>
      <pre><code>// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'myapp',
    script: './src/server.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};</code></pre>

      <h2>Conclusion</h2>
      <p>Following these best practices will help you build robust, secure, and performant Node.js applications ready for production. Remember to continuously monitor your application's performance and security, and stay updated with the latest Node.js features and security patches.</p>
    `,
    date: '2024-01-05',
    readTime: '8 min read',
    author: 'Arfan Ahmed',
    category: 'Node.js',
    tags: ['Node.js', 'Backend', 'Production', 'Best Practices'],
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    likes: 56,
    comments: 15
  },
  4: {
    title: 'Getting Started with Next.js 14',
    content: `
      <p>Next.js 14 introduces groundbreaking features that revolutionize how we build full-stack React applications. With the new App Router, Server Components, and enhanced performance optimizations, Next.js continues to lead the way in modern web development.</p>

      <h2>What's New in Next.js 14?</h2>
      <p>Next.js 14 brings several exciting features and improvements:</p>
      <ul>
        <li><strong>Turbopack (Beta):</strong> Up to 53% faster local development</li>
        <li><strong>Server Actions (Stable):</strong> Simplified server-side mutations</li>
        <li><strong>Partial Prerendering (Preview):</strong> Combine static and dynamic content</li>
        <li><strong>Next.js Learn Course:</strong> New free course with app router</li>
      </ul>

      <h2>App Router: The New Standard</h2>
      <p>The App Router is built on React's latest features and represents the future of Next.js applications:</p>

      <h3>File-based Routing</h3>
      <pre><code>app/
├── layout.tsx          // Root layout
├── page.tsx           // Home page
├── about/
│   └── page.tsx       // About page
├── blog/
│   ├── page.tsx       // Blog listing
│   └── [slug]/
│       └── page.tsx   // Dynamic blog post
└── api/
    └── users/
        └── route.ts   // API endpoint</code></pre>

      <h3>Layouts and Templates</h3>
      <pre><code>// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}</code></pre>

      <h2>Server Components: The Game Changer</h2>
      <p>Server Components allow you to render components on the server, reducing bundle size and improving performance:</p>

      <h3>Server Component Example</h3>
      <pre><code>// app/blog/page.tsx (Server Component by default)
async function BlogPage() {
  // This runs on the server
  const posts = await fetch('https://api.example.com/posts');
  const data = await posts.json();

  return (
    <div>
      <h1>Blog Posts</h1>
      {data.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
}</code></pre>

      <h3>Client Components</h3>
      <pre><code>// components/SearchBox.tsx
'use client'; // This directive makes it a Client Component

import { useState } from 'react';

export default function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}</code></pre>

      <h2>Data Fetching Patterns</h2>
      <p>Next.js 14 provides several patterns for fetching data:</p>

      <h3>Server-side Data Fetching</h3>
      <pre><code>// Fetch data on the server
async function getUser(id: string) {
  const res = await fetch(\`https://api.example.com/users/\${id}\`, {
    cache: 'force-cache', // Cache by default
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }
  
  return res.json();
}

export default async function UserProfile({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}</code></pre>

      <h3>Streaming and Suspense</h3>
      <pre><code>import { Suspense } from 'react';

function LoadingSkeleton() {
  return <div className="animate-pulse bg-gray-200 h-4 rounded"></div>;
}

async function SlowComponent() {
  // Simulate slow data fetching
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div>Slow content loaded!</div>;
}

export default function Page() {
  return (
    <div>
      <h1>Fast content</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}</code></pre>

      <h2>Server Actions</h2>
      <p>Server Actions provide a seamless way to handle server-side mutations:</p>

      <pre><code>// app/actions.ts
'use server';

import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // Save to database
  await savePost({ title, content });

  // Revalidate the posts page
  revalidatePath('/posts');
}

// app/create-post/page.tsx
import { createPost } from '../actions';

export default function CreatePost() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Post title" required />
      <textarea name="content" placeholder="Post content" required />
      <button type="submit">Create Post</button>
    </form>
  );
}</code></pre>

      <h2>Route Handlers (API Routes)</h2>
      <p>Create API endpoints with the new route handlers:</p>

      <pre><code>// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get('page') || '1';
  
  const posts = await fetchPosts(parseInt(page));
  
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const post = await createPost(body);
  
  return NextResponse.json({ post }, { status: 201 });
}</code></pre>

      <h2>Styling and CSS</h2>
      <p>Next.js 14 supports various styling solutions:</p>

      <h3>Tailwind CSS Integration</h3>
      <pre><code>// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};</code></pre>

      <h3>CSS Modules</h3>
      <pre><code>// styles/Home.module.css
.container {
  padding: 2rem;
  background: white;
}

// components/Home.tsx
import styles from '../styles/Home.module.css';

export default function Home() {
  return <div className={styles.container}>Content</div>;
}</code></pre>

      <h2>Performance Optimization</h2>
      <p>Next.js 14 includes several performance optimizations:</p>

      <h3>Image Optimization</h3>
      <pre><code>import Image from 'next/image';

export default function Gallery() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority // Load immediately
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
}</code></pre>

      <h3>Font Optimization</h3>
      <pre><code>// app/layout.tsx
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}</code></pre>

      <h2>Deployment</h2>
      <p>Deploy your Next.js 14 application with ease:</p>

      <h3>Vercel Deployment</h3>
      <pre><code># Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod</code></pre>

      <h3>Docker Deployment</h3>
      <pre><code># Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]</code></pre>

      <h2>Migration from Pages Router</h2>
      <p>Migrating from the Pages Router to App Router:</p>

      <h3>Key Differences</h3>
      <ul>
        <li><strong>File structure:</strong> Move from <code>pages/</code> to <code>app/</code></li>
        <li><strong>Layouts:</strong> Replace <code>_app.tsx</code> with <code>layout.tsx</code></li>
        <li><strong>API routes:</strong> Move from <code>pages/api/</code> to <code>app/api/</code></li>
        <li><strong>Data fetching:</strong> Replace <code>getServerSideProps</code> with async components</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Follow these best practices for Next.js 14:</p>
      <ul>
        <li>Use Server Components by default, Client Components when needed</li>
        <li>Implement proper error boundaries</li>
        <li>Optimize images and fonts</li>
        <li>Use TypeScript for better developer experience</li>
        <li>Implement proper SEO with metadata API</li>
        <li>Use Server Actions for form submissions</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Next.js 14 represents a significant leap forward in React development. With Server Components, improved performance, and developer experience enhancements, it's the perfect time to start building with Next.js 14.</p>

      <p>The combination of server and client components, along with the new App Router, provides unprecedented flexibility in building modern web applications that are both performant and maintainable.</p>
    `,
    date: '2023-12-28',
    readTime: '6 min read',
    author: 'Arfan Ahmed',
    category: 'Next.js',
    tags: ['Next.js', 'React', 'Full Stack', 'App Router'],
    image: 'https://strapi.dhiwise.com/uploads/nextjs_14_OG_Image_28a918c58b.webp',
    likes: 67,
    comments: 23
  },
  5: {
    title: 'MongoDB Performance Optimization Tips',
    content: `
      <p>MongoDB is a powerful NoSQL database, but like any database system, it requires proper optimization to perform at its best. This comprehensive guide covers essential techniques to optimize your MongoDB performance for production applications.</p>

      <h2>Understanding MongoDB Performance</h2>
      <p>Before diving into optimization techniques, it's important to understand what affects MongoDB performance:</p>
      <ul>
        <li><strong>Query patterns:</strong> How your application queries data</li>
        <li><strong>Index strategy:</strong> Which fields are indexed and how</li>
        <li><strong>Schema design:</strong> How your documents are structured</li>
        <li><strong>Hardware resources:</strong> CPU, memory, and storage</li>
        <li><strong>Network latency:</strong> Connection between application and database</li>
      </ul>

      <h2>Indexing Strategies</h2>
      <p>Proper indexing is the most critical factor for MongoDB performance:</p>

      <h3>Single Field Indexes</h3>
      <pre><code>// Create an index on the email field
db.users.createIndex({ email: 1 });

// Create a descending index on creation date
db.posts.createIndex({ createdAt: -1 });

// Create a unique index
db.users.createIndex({ username: 1 }, { unique: true });</code></pre>

      <h3>Compound Indexes</h3>
      <pre><code>// Compound index for queries filtering by status and date
db.orders.createIndex({ status: 1, createdAt: -1 });

// Index for sorting and filtering
db.products.createIndex({ category: 1, price: -1, rating: -1 });

// Partial index for specific conditions
db.users.createIndex(
  { email: 1 },
  { partialFilterExpression: { email: { $exists: true } } }
);</code></pre>

      <h3>Text Indexes for Search</h3>
      <pre><code>// Create a text index for full-text search
db.articles.createIndex({
  title: "text",
  content: "text",
  tags: "text"
});

// Search using text index
db.articles.find({ $text: { $search: "mongodb performance" } });</code></pre>

      <h2>Query Optimization</h2>
      <p>Writing efficient queries is crucial for good performance:</p>

      <h3>Use Explain to Analyze Queries</h3>
      <pre><code>// Analyze query performance
db.users.find({ age: { $gte: 18 } }).explain("executionStats");

// Check if index is being used
db.products.find({ category: "electronics" }).explain("queryPlanner");</code></pre>

      <h3>Efficient Query Patterns</h3>
      <pre><code>// Good: Use indexed fields in queries
db.users.find({ email: "user@example.com" });

// Bad: Avoid regex at the beginning of strings
db.users.find({ name: /^John/ }); // Slow

// Good: Use anchored regex or text search
db.users.find({ name: /John/ }); // Better
db.users.find({ $text: { $search: "John" } }); // Best for text search

// Use projection to limit returned fields
db.users.find({ status: "active" }, { name: 1, email: 1 });</code></pre>

      <h3>Aggregation Pipeline Optimization</h3>
      <pre><code>// Optimize aggregation pipelines
db.orders.aggregate([
  // Filter early in the pipeline
  { $match: { status: "completed", date: { $gte: new Date("2024-01-01") } } },
  
  // Use $project to reduce document size early
  { $project: { customerId: 1, total: 1, date: 1 } },
  
  // Group after filtering and projecting
  { $group: { _id: "$customerId", totalSpent: { $sum: "$total" } } },
  
  // Sort at the end
  { $sort: { totalSpent: -1 } },
  
  // Limit results
  { $limit: 100 }
]);</code></pre>

      <h2>Schema Design Best Practices</h2>
      <p>Proper schema design can significantly impact performance:</p>

      <h3>Embedding vs. Referencing</h3>
      <pre><code>// Embedding (good for one-to-few relationships)
{
  _id: ObjectId("..."),
  title: "Blog Post",
  author: {
    name: "John Doe",
    email: "john@example.com"
  },
  comments: [
    { text: "Great post!", author: "Jane" },
    { text: "Thanks for sharing", author: "Bob" }
  ]
}

// Referencing (good for one-to-many relationships)
// Users collection
{ _id: ObjectId("user1"), name: "John Doe", email: "john@example.com" }

// Posts collection
{ _id: ObjectId("post1"), title: "Blog Post", authorId: ObjectId("user1") }</code></pre>

      <h3>Avoid Large Arrays</h3>
      <pre><code>// Bad: Unbounded array growth
{
  _id: ObjectId("..."),
  userId: ObjectId("..."),
  activities: [
    { action: "login", timestamp: ISODate("...") },
    { action: "view_page", timestamp: ISODate("...") },
    // ... potentially thousands of activities
  ]
}

// Good: Separate collection with references
// Activities collection
{
  _id: ObjectId("..."),
  userId: ObjectId("..."),
  action: "login",
  timestamp: ISODate("...")
}</code></pre>

      <h2>Connection and Driver Optimization</h2>
      <p>Optimize your application's connection to MongoDB:</p>

      <h3>Connection Pooling</h3>
      <pre><code>// Node.js with Mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp', {
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  bufferCommands: false, // Disable mongoose buffering
  bufferMaxEntries: 0 // Disable mongoose buffering
});</code></pre>

      <h3>Read Preferences</h3>
      <pre><code>// Read from secondary for analytics queries
db.analytics.find().readPref("secondary");

// Read from primary for critical data
db.transactions.find().readPref("primary");

// Use read concern for consistency
db.orders.find().readConcern("majority");</code></pre>

      <h2>Memory and Storage Optimization</h2>
      <p>Optimize memory usage and storage:</p>

      <h3>Working Set Size</h3>
      <pre><code>// Monitor working set size
db.runCommand({ serverStatus: 1 }).wiredTiger.cache;

// Check index usage
db.runCommand({ collStats: "users", indexDetails: true });</code></pre>

      <h3>Compression</h3>
      <pre><code>// Enable compression for collections
db.createCollection("logs", {
  storageEngine: {
    wiredTiger: {
      configString: "block_compressor=zstd"
    }
  }
});

// Enable compression for indexes
db.users.createIndex(
  { email: 1 },
  { storageEngine: { wiredTiger: { configString: "prefix_compression=true" } } }
);</code></pre>

      <h2>Monitoring and Profiling</h2>
      <p>Continuous monitoring is essential for maintaining performance:</p>

      <h3>Enable Profiling</h3>
      <pre><code>// Enable profiling for slow operations (>100ms)
db.setProfilingLevel(1, { slowms: 100 });

// View profiling data
db.system.profile.find().limit(5).sort({ ts: -1 }).pretty();

// Disable profiling
db.setProfilingLevel(0);</code></pre>

      <h3>Key Metrics to Monitor</h3>
      <pre><code>// Check database statistics
db.stats();

// Monitor current operations
db.currentOp();

// Check replication lag (for replica sets)
rs.printSlaveReplicationInfo();

// Monitor index usage
db.users.aggregate([{ $indexStats: {} }]);</code></pre>

      <h2>Sharding Considerations</h2>
      <p>For large-scale applications, consider sharding:</p>

      <h3>Choosing a Shard Key</h3>
      <pre><code>// Good shard key: high cardinality, even distribution
sh.shardCollection("myapp.users", { userId: 1 });

// Compound shard key for better distribution
sh.shardCollection("myapp.orders", { customerId: 1, orderDate: 1 });

// Avoid monotonically increasing shard keys
// Bad: { _id: 1 } or { timestamp: 1 }</code></pre>

      <h2>Maintenance and Housekeeping</h2>
      <p>Regular maintenance tasks for optimal performance:</p>

      <h3>Index Maintenance</h3>
      <pre><code>// Remove unused indexes
db.users.dropIndex("oldIndex");

// Rebuild indexes if needed
db.users.reIndex();

// Check index usage statistics
db.users.aggregate([{ $indexStats: {} }]);</code></pre>

      <h3>Data Cleanup</h3>
      <pre><code>// Set up TTL indexes for automatic cleanup
db.sessions.createIndex(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 } // Expire after 1 hour
);

// Archive old data
db.logs.aggregate([
  { $match: { date: { $lt: new Date("2023-01-01") } } },
  { $out: "logs_archive" }
]);</code></pre>

      <h2>Performance Testing</h2>
      <p>Regular performance testing helps identify bottlenecks:</p>

      <pre><code>// Use MongoDB's built-in tools
// Load testing with mongoperf
echo '{nThreads: 4, fileSizeMB: 1000, r: true}' | mongoperf

// Benchmark with mongo shell
for (var i = 0; i < 1000; i++) {
  db.test.insert({ x: i, data: "test data" });
}</code></pre>

      <h2>Common Anti-Patterns to Avoid</h2>
      <p>Avoid these common performance pitfalls:</p>
      <ul>
        <li>Not using indexes for frequent queries</li>
        <li>Creating too many indexes (impacts write performance)</li>
        <li>Using $where clauses (very slow)</li>
        <li>Fetching entire documents when only specific fields are needed</li>
        <li>Not using connection pooling</li>
        <li>Ignoring the working set size</li>
      </ul>

      <h2>Conclusion</h2>
      <p>MongoDB performance optimization is an ongoing process that requires understanding your application's query patterns, proper indexing strategies, and continuous monitoring. By following these best practices and regularly analyzing your database performance, you can ensure your MongoDB deployment scales efficiently with your application's growth.</p>

      <p>Remember that optimization is context-dependent – what works for one application may not work for another. Always test performance changes in a staging environment before applying them to production.</p>
    `,
    date: '2023-12-20',
    readTime: '9 min read',
    author: 'Arfan Ahmed',
    category: 'Database',
    tags: ['MongoDB', 'Database', 'Performance', 'Optimization'],
    image: 'https://mingo.io/wp-content/uploads/2023/05/MongoDB-Performance.png',
    likes: 89,
    comments: 31
  },
  6: {
    title: 'State Management in React: Redux vs Context API',
    content: `
      <p>State management is one of the most crucial aspects of building React applications. As your application grows, choosing the right state management solution becomes critical for maintainability, performance, and developer experience. This comprehensive guide compares Redux and Context API to help you make the right choice.</p>

      <h2>Understanding State Management</h2>
      <p>Before diving into specific solutions, let's understand what state management involves:</p>
      <ul>
        <li><strong>Local State:</strong> Component-specific state managed with useState or useReducer</li>
        <li><strong>Global State:</strong> Application-wide state accessible from any component</li>
        <li><strong>Server State:</strong> Data fetched from external sources</li>
        <li><strong>URL State:</strong> State reflected in the browser's URL</li>
      </ul>

      <h2>React Context API</h2>
      <p>Context API is React's built-in solution for sharing state across components without prop drilling:</p>

      <h3>Basic Context Setup</h3>
      <pre><code>// contexts/AuthContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

type AuthAction =
  | { type: 'LOGIN_START' }
  | { type: 'LOGIN_SUCCESS'; payload: User }
  | { type: 'LOGIN_ERROR'; payload: string }
  | { type: 'LOGOUT' };

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { ...state, isLoading: false, user: action.payload };
    case 'LOGIN_ERROR':
      return { ...state, isLoading: false, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

interface AuthContextType {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = async (email: string, password: string) => {
    dispatch({ type: 'LOGIN_START' });
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const user = await response.json();
      dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: 'Login failed' });
    }
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}</code></pre>

      <h3>Using Context in Components</h3>
      <pre><code>// components/LoginForm.tsx
import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { state, login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={state.isLoading}>
        {state.isLoading ? 'Logging in...' : 'Login'}
      </button>
      {state.error && <p className="error">{state.error}</p>}
    </form>
  );
}</code></pre>

      <h2>Redux with Redux Toolkit</h2>
      <p>Redux is a predictable state container that provides a more structured approach to state management:</p>

      <h3>Setting up Redux Store</h3>
      <pre><code>// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import postsSlice from './slices/postsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    posts: postsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;</code></pre>

      <h3>Creating Redux Slices</h3>
      <pre><code>// store/slices/authSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

// Async thunk for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error('Login failed');
    }
    
    return response.json();
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Login failed';
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;</code></pre>

      <h3>Using Redux in Components</h3>
      <pre><code>// hooks/redux.ts
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// components/LoginForm.tsx
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { loginUser } from '../store/slices/authSlice';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}</code></pre>

      <h2>Performance Comparison</h2>
      <p>Understanding the performance implications of each approach:</p>

      <h3>Context API Performance</h3>
      <pre><code>// Optimizing Context with multiple contexts
// Instead of one large context
const AppContext = createContext({
  user: null,
  posts: [],
  comments: [],
  // ... many other values
});

// Split into focused contexts
const UserContext = createContext({ user: null });
const PostsContext = createContext({ posts: [] });
const CommentsContext = createContext({ comments: [] });

// Use React.memo to prevent unnecessary re-renders
const UserProfile = React.memo(({ userId }: { userId: string }) => {
  const { user } = useContext(UserContext);
  return <div>{user?.name}</div>;
});</code></pre>

      <h3>Redux Performance</h3>
      <pre><code>// Redux automatically optimizes re-renders
// Components only re-render when their selected state changes
const UserProfile = () => {
  // Only re-renders when user data changes
  const user = useAppSelector((state) => state.auth.user);
  return <div>{user?.name}</div>;
};

// Use reselect for expensive computations
import { createSelector } from '@reduxjs/toolkit';

const selectPosts = (state: RootState) => state.posts.items;
const selectSearchTerm = (state: RootState) => state.posts.searchTerm;

const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);</code></pre>

      <h2>When to Use Context API</h2>
      <p>Context API is ideal for:</p>
      <ul>
        <li><strong>Simple state:</strong> Authentication, theme, language preferences</li>
        <li><strong>Small to medium applications:</strong> Limited complexity</li>
        <li><strong>Infrequent updates:</strong> State that doesn't change often</li>
        <li><strong>Component-specific state:</strong> State used by a specific component tree</li>
        <li><strong>No external dependencies:</strong> Built into React</li>
      </ul>

      <h3>Context API Pros and Cons</h3>
      <pre><code>// Pros:
// ✅ Built into React
// ✅ Simple setup
// ✅ No additional dependencies
// ✅ Good for simple state

// Cons:
// ❌ Can cause performance issues with frequent updates
// ❌ No built-in middleware support
// ❌ Limited debugging tools
// ❌ Can lead to prop drilling with multiple contexts</code></pre>

      <h2>When to Use Redux</h2>
      <p>Redux is better for:</p>
      <ul>
        <li><strong>Complex state logic:</strong> Multiple reducers, complex updates</li>
        <li><strong>Large applications:</strong> Many components sharing state</li>
        <li><strong>Frequent updates:</strong> State that changes often</li>
        <li><strong>Time-travel debugging:</strong> Need to debug state changes</li>
        <li><strong>Middleware requirements:</strong> Logging, persistence, etc.</li>
      </ul>

      <h3>Redux Pros and Cons</h3>
      <pre><code>// Pros:
// ✅ Predictable state updates
// ✅ Excellent debugging tools (Redux DevTools)
// ✅ Middleware ecosystem
// ✅ Time-travel debugging
// ✅ Better performance for frequent updates

// Cons:
// ❌ Additional dependency
// ❌ More boilerplate (though RTK reduces this)
// ❌ Learning curve
// ❌ Overkill for simple applications</code></pre>

      <h2>Alternative Solutions</h2>
      <p>Consider these alternatives for specific use cases:</p>

      <h3>Zustand (Lightweight Alternative)</h3>
      <pre><code>import { create } from 'zustand';

interface AuthStore {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  login: async (email, password) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const user = await response.json();
    set({ user });
  },
  logout: () => set({ user: null }),
}));

// Usage in component
const LoginForm = () => {
  const { user, login, logout } = useAuthStore();
  // ... component logic
};</code></pre>

      <h3>React Query for Server State</h3>
      <pre><code>import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

// Fetching data
const PostsList = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(res => res.json()),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};</code></pre>

      <h2>Decision Framework</h2>
      <p>Use this framework to choose the right solution:</p>

      <h3>Choose Context API when:</h3>
      <ul>
        <li>State is simple and doesn't change frequently</li>
        <li>You want to avoid external dependencies</li>
        <li>Your app is small to medium-sized</li>
        <li>You need to share state between a few components</li>
      </ul>

      <h3>Choose Redux when:</h3>
      <ul>
        <li>You have complex state logic</li>
        <li>Multiple components need access to the same state</li>
        <li>You need time-travel debugging</li>
        <li>Your app will scale significantly</li>
        <li>You need middleware for logging, persistence, etc.</li>
      </ul>

      <h3>Consider alternatives when:</h3>
      <ul>
        <li><strong>Zustand:</strong> You want Redux-like features with less boilerplate</li>
        <li><strong>React Query:</strong> You're primarily dealing with server state</li>
        <li><strong>SWR:</strong> You need data fetching with caching</li>
        <li><strong>Jotai:</strong> You prefer atomic state management</li>
      </ul>

      <h2>Best Practices</h2>
      <p>Regardless of your choice, follow these best practices:</p>

      <h3>General Guidelines</h3>
      <ul>
        <li>Start with local state and lift up when needed</li>
        <li>Separate client state from server state</li>
        <li>Use TypeScript for better developer experience</li>
        <li>Keep state normalized when possible</li>
        <li>Implement proper error handling</li>
      </ul>

      <h3>Performance Optimization</h3>
      <pre><code>// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  // Expensive rendering logic
  return <div>{/* Complex UI */}</div>;
});

// Use useMemo for expensive calculations
const ExpensiveCalculation = ({ items }) => {
  const expensiveValue = useMemo(() => {
    return items.reduce((acc, item) => acc + item.value, 0);
  }, [items]);

  return <div>{expensiveValue}</div>;
};</code></pre>

      <h2>Conclusion</h2>
      <p>Both Context API and Redux are excellent tools for state management in React applications. The choice between them depends on your specific requirements, team expertise, and application complexity.</p>

      <p>For most applications, starting with Context API for simple global state and local state for component-specific data is a good approach. As your application grows and state management becomes more complex, you can gradually introduce Redux or other specialized tools.</p>

      <p>Remember that state management is not just about choosing a tool – it's about designing your application's data flow in a way that's maintainable, performant, and easy to reason about.</p>
    `,
    date: '2023-12-15',
    readTime: '10 min read',
    author: 'Arfan Ahmed',
    category: 'React',
    tags: ['React', 'Redux', 'State Management', 'Context API'],
    image: 'https://miro.medium.com/v2/resize:fit:943/1*sm8Fg19HL9y8zEzGVkTfNg.png',
    likes: 94,
    comments: 27
  }
};

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
    const numericId = Number(id);
    const blog = blogData[numericId as 1 | 2 | 3];

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blog
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full mb-3">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{blog.title}</h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <User className="mr-2" size={16} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2" size={16} />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  <Tag className="mr-1" size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Author Bio */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8">
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">About {blog.author}</h3>
              <p className="text-gray-600 mb-4">
                Full Stack Developer specializing in MERN stack development. Passionate about creating 
                scalable web applications and sharing knowledge with the developer community.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Get in touch
                <ArrowLeft className="ml-1 rotate-180" size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/blog/2" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CSS Article"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Modern CSS Techniques</h4>
                <p className="text-sm text-gray-600">Explore the latest CSS features...</p>
              </div>
            </Link>
            <Link to="/blog/3" className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Node.js Article"
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Node.js Best Practices</h4>
                <p className="text-sm text-gray-600">Essential practices for production...</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;