import type { MDXComponents } from "mdx/types"

// Example custom components
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
    // Add your overrides here
    ...components,
  }
}