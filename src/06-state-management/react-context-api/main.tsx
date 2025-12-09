import { StateProvider } from './context/stateContext';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DemoPage from './pages/DemoPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateProvider>
      <>
      {/* <App/> */}
        <DemoPage/>
      </>
    </StateProvider>
  </StrictMode>,
)
