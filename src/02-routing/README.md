# Routing
- Router Setup (<BrowserRouter>)
- Rendering a Route
- Nested Routes (<Routes>, <Route>, <Outlet>)
- Navigating with Link (<Link>, <NavLink>)
- Redirect
- URL Parameters (/products/:id, useParams())
- Search Parameters (?sort=..., useSearchParams)

## Router Setup
Install React Router DOM
```bash
npm install react-router-dom
```

Wrap the entire application with <BrowserRouter>(BrowserRouter prevents SPA from reloading the entire page when redirecting)
```bash
# src/main.tsx
  <BrowserRouter>
    <App />
  </BrowserRouter>
```

Nested Routes & Rendering a Route
```bash
# src/02-routing/AppLayout.tsx
  <>
    <nav>
      <NavLink to="/home"> Home </NavLink>
      <NavLink to="/posts/500?view=full&sort=asc"> Post </NavLink>
    </nav>
    <main>
      <Outlet />
    </main>
  </>

# src/02-routing/AppRouter.tsx
  <Routes>
    <Route path="/" element={<AppLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/posts/:postId" element={<PostDetail />} />
    </Route>
    <Route path="*" element={<h1>404 | Not Found</h1>} />
  </Routes>
```

Navigating with Link
```bash
# src/02-routing/Home.tsx
  <Link to="/about">About</Link>
```

Redirect
```bash
# src/02-routing/Home.tsx
    const navigate = useNavigate(); 
    <button onClick={() => navigate('/')}>
      Back to /
    </button>
    <button onClick={() => navigate(-1)}>
      Before
    </button>
```

URL Parameters & Search Parameters
```bash
# src/02-routing/PostDetail.tsx
    const { postId } = useParams(); 
    const [searchParams] = useSearchParams();
    const view = searchParams.get('view');
    const sort = searchParams.get('sort');

    <p>ID - URL Parameter: <strong>{postId}</strong></p>
    <p><strong>View:</strong> {view || 'default'}</p>
    <p><strong>Sort By:</strong> {sort || 'none'}</p>
```