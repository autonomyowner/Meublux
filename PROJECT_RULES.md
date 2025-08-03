# Project Rules - Front-End Development Guidelines

## Senior Front-End Developer Standards

This project follows the standards of a Senior Front-End Developer with expertise in:
- ReactJS
- NextJS  
- JavaScript
- TypeScript
- HTML
- CSS
- Modern UI/UX frameworks (TailwindCSS, Shadcn, Radix)

## Development Approach

### Step-by-Step Planning
1. **Think step-by-step** - Describe the plan in pseudocode with great detail
2. **Confirm** the approach with stakeholders
3. **Write code** following all guidelines below

### Code Quality Standards
- Write **correct, best practice, DRY principle** code
- Focus on **readability over performance**
- Ensure **bug-free, fully functional** code
- **Leave NO todos, placeholders, or missing pieces**
- **Verify thoroughly** before finalizing
- **Include all required imports**
- **Use proper naming** for key components
- **Be concise** - minimize unnecessary prose

## Code Implementation Guidelines

### 1. Early Returns
- Use early returns whenever possible to make code more readable
- Avoid deeply nested conditions

### 2. Styling Approach
- **Always use Tailwind classes** for styling HTML elements
- **Avoid using CSS or style tags**
- Use `class:` instead of ternary operators in class tags whenever possible

### 3. Naming Conventions
- Use **descriptive variable and function names**
- Event functions should be named with "handle" prefix:
  - `handleClick` for onClick
  - `handleKeyDown` for onKeyDown
  - `handleSubmit` for onSubmit

### 4. Function Declarations
- Use `const` instead of `function` declarations
- Example: `const toggle = () => {}`
- Define types whenever possible

### 5. Accessibility Requirements
Implement accessibility features on all interactive elements:
- `tabindex="0"` for keyboard navigation
- `aria-label` for screen readers
- `onClick` and `onKeyDown` handlers
- Proper semantic HTML elements

### 6. TypeScript Best Practices
- Define types for all components and functions
- Use interfaces for complex object structures
- Leverage TypeScript's type checking capabilities

### 7. React/NextJS Standards
- Use functional components with hooks
- Implement proper state management
- Follow React best practices for performance
- Use NextJS features appropriately (SSR, SSG, etc.)

### 8. Component Structure
- Keep components focused and single-purpose
- Use proper prop typing
- Implement error boundaries where appropriate
- Follow the DRY principle

### 9. Error Handling
- Implement proper error handling
- Provide meaningful error messages
- Use try-catch blocks where appropriate

### 10. Testing Considerations
- Write testable code
- Use proper separation of concerns
- Avoid tightly coupled components

## Project Organization

### File Structure
- Each new website/project should be stored in its own folder
- Avoid code overlap between projects
- Use descriptive folder and file names

### Environment Configuration
- Use `.env` files for environment variables
- Follow security best practices for API keys
- Document required environment variables

## Quality Assurance

### Before Finalizing Code
- [ ] All functionality is implemented
- [ ] No todos or placeholders remain
- [ ] All imports are included
- [ ] Accessibility features are implemented
- [ ] Code is readable and well-documented
- [ ] TypeScript types are properly defined
- [ ] Error handling is in place
- [ ] Code follows DRY principles

### Code Review Checklist
- [ ] Early returns used where appropriate
- [ ] Tailwind classes used for styling
- [ ] Descriptive naming conventions followed
- [ ] Accessibility features implemented
- [ ] TypeScript types defined
- [ ] No console.log statements in production code
- [ ] Proper error handling implemented

## Communication Standards

- If there might not be a correct answer, say so
- If you don't know the answer, say so instead of guessing
- Provide thoughtful, nuanced answers
- Be brilliant at reasoning and problem-solving
- Follow requirements carefully and to the letter 