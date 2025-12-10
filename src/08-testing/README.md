# Testing
## Unit Testing
-> Local Logic Verification: Ensure that each unit of code (functions, methods, individual components) works correctly and in isolation as designed.

## Integration Testing
-> Ensure that the components that have been tested by the Unit Test work harmoniously when connected to each other.
-> Check Interfaces: Verify that different components or services communicate with each other properly.

## End-to-End (E2E) Testing
-> Simulates the real user journey through the entire application, on a real or simulated user interface.

## Libs
- Jest (Testing framework) 
- React Testing Library (Virtual DOM, interact component)
- React Testing Library
- Cypress, Playwright

Jest Installation
```bash
    npm install --save-dev @testing-library/react @testing-library/jest-dom jest
```

Unit Under Test

```bash
    import React from 'react';
    function Button({ onClick, children }) {
      return (
        <button onClick={onClick}>
          {children}
        </button>
      );
    }
    export default Button;
```

Unit Test

```bash
    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import Button from './Button';

    describe('Button Component', () => {
      test('renders the correct text content', () => {
        render(<Button onClick={() => {}}>Click Me</Button>);
        const buttonElement = screen.getByText(/Click Me/i);
        expect(buttonElement).toBeInTheDocument();
      });

      test('calls the onClick handler when clicked', async () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick}>Submit</Button>);
        const buttonElement = screen.getByRole('button', { name: /submit/i });
        await userEvent.click(buttonElement); 
        expect(mockOnClick).toHaveBeenCalledTimes(1);
      });
    });
```

```bash
    npm test
    # OR
    npm run test
```

Expect Result
```bash
    PASS  src/components/Button.test.js
      Button Component
        ✓ renders the correct text content (20ms)
        ✓ calls the onClick handler when clicked (15ms)
    
    Test Suites: 1 passed, 1 total
    Tests:       2 passed, 2 total
    Snapshots:   0 total
    Time:        1.234s
```