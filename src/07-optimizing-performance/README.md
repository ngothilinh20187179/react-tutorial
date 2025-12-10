# Optimizing Performance

## Initial Load Time
- Code Splitting & Lazy Loading
- Tree Shaking
- Assets

## Rendering Performance
- Memoization: 
+ `React.memo` - Function Component (props change - re-render)
+ useMemo - value, complex calculation

- State Changes
+ Combine `multiple setState` into a single update: useReducer,...
+ Define only the state in the component that needs it.

- Context API ? State Management
+ Context change -> re render all components use that Context 
-> use Redux,...

---
React.lazy & Suspense

```bash
    import React, { Suspense, lazy } from 'react';
    const AboutPage = lazy(() => import('./pages/AboutPage'));
    const ContactPage = lazy(() => import => import('./pages/ContactPage'));

    const App = () => {
      return (
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </Router>
      );
    };
```

--- 
React.memo + useMemo

```bash
const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const userProfile = useMemo(() => ({
        id: 1,
        level: count > 5 ? 'Senior' : 'Junior',
    }), [count]); 

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Increment: {count}</button>
            <MemoizedChild profile={userProfile} /> 
        </div>
    );
};
const MemoizedChild = React.memo(({ profile }) => {
    return <div>Level: {profile.level}</div>;
});
```