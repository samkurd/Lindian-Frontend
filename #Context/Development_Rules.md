# Development Rules - Lindian Frontend

## TypeScript Rules [TYPESCRIPT_RULES-v1]

1. **Strict Mode Requirements**

   - All TypeScript files must have `strict: true` in tsconfig
   - No use of `any` type unless absolutely necessary and documented
   - All function parameters and return types must be explicitly typed
   - No implicit `null` or `undefined` checks

2. **Import/Export Standards**

   - Use named exports as default pattern
   - Avoid default exports except for React components
   - Group imports by: React/libraries, components, utilities, types
   - No circular dependencies

3. **Type Definitions**

   - Create dedicated type files for shared types
   - Use interfaces for object shapes that will be implemented
   - Use type aliases for unions, intersections, and utility types
   - Document complex types with JSDoc comments

4. **Error Handling**

   - Use typed error handling with custom error types
   - No throwing generic errors without context
   - Properly type async/await error patterns

5. **React Specific**
   - Use functional components with explicit return types
   - Type all props using interfaces
   - Use React.FC only when children are expected
   - Type event handlers completely (no `e: any`)

## Code Quality Standards

1. **Formatting**

   - Use ESLint for static code analysis
   - Follow project-specific style rules for indentation (2 spaces)
   - Maximum line length: 100 characters

2. **Documentation**

   - Use JSDoc for all public APIs and components
   - Document all props for React components
   - Include usage examples for complex components

3. **Testing**

   - All components must have unit tests
   - Minimum coverage requirement: 80%
   - Mock external dependencies

4. **Performance**
   - Use memoization for expensive calculations
   - Optimize renders with React.memo where appropriate
   - Track bundle size and dependencies
