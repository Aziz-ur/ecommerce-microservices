module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "es5",
  printWidth: 100,
  arrowParens: "avoid",
  plugins: ["prettier-plugin-prisma", "prettier-plugin-sh", "prettier-plugin-packagejson"],
  tabWidth: 2, // Standard for most teams
  useTabs: false, // Spaces for consistency
  bracketSpacing: true, // { foo } vs {foo}
  bracketSameLine: false, // Multi-line JSX closing bracket on new line
  endOfLine: "lf", // Unix line endings (Git auto-converts)
  jsxSingleQuote: true, // Consistent with singleQuote
  quoteProps: "as-needed", // Only quote when necessary

  overrides: [
    {
      files: ["*.json", "*.jsonc"],
      options: {
        printWidth: 120,
        parser: "json",
        trailingComma: "none", // JSON doesn't allow trailing commas
      },
    },
    {
      files: ["package.json"],
      options: {
        parser: "json-stringify",
        printWidth: 200,
        tabWidth: 2,
        trailingComma: "none",
      },
    },
    {
      files: ["package-lock.json", "npm-shrinkwrap.json"],
      options: {
        parser: "json",
        printWidth: 200,
        trailingComma: "none",
      },
    },
    {
      files: ["*.md", "*.mdx"],
      options: {
        parser: "markdown",
        proseWrap: "always",
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
      },
    },
    {
      files: ["*.yml", "*.yaml"],
      options: {
        parser: "yaml",
        printWidth: 120,
        tabWidth: 2,
        singleQuote: false, // YAML prefers double quotes
        bracketSpacing: true,
      },
    },
    {
      files: ["*.css", "*.scss", "*.sass", "*.less"],
      options: {
        parser: "css",
        singleQuote: false,
        printWidth: 120,
      },
    },
    {
      files: ["*.html", "*.htm"],
      options: {
        parser: "html",
        printWidth: 120,
        singleQuote: false,
        bracketSameLine: true,
      },
    },
    {
      files: ["Dockerfile*", "*.dockerfile"],
      options: {
        parser: "sh",
        printWidth: 120,
        tabWidth: 4, // Docker convention
        useTabs: false,
      },
    },
    {
      files: ["*.sh", "*.bash", "*.zsh", "*.fish"],
      options: {
        parser: "sh",
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
      },
    },
    {
      files: ["tsconfig*.json", "jsconfig*.json"],
      options: {
        parser: "jsonc",
        printWidth: 100,
        trailingComma: "none",
      },
    },
    {
      files: [".eslintrc*", "eslint.config.*"],
      options: {
        parser: "babel",
        printWidth: 100,
        trailingComma: "es5",
      },
    },
    {
      files: [".env*"],
      options: {
        parser: "sh",
        printWidth: 200,
        endOfLine: "lf",
      },
    },
    {
      files: ["*.graphql", "*.gql"],
      options: {
        parser: "graphql",
        printWidth: 120,
        tabWidth: 2,
      },
    },
    {
      files: ["*.prisma"],
      options: {
        parser: "prisma-parse",
        printWidth: 120,
        tabWidth: 2,
      },
    },
    {
      files: ["*.sql"],
      options: {
        parser: "sql",
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
      },
    },
    {
      files: ["*.d.ts"],
      options: {
        parser: "typescript",
        printWidth: 120,
        trailingComma: "es5",
      },
    },
    {
      files: ["*.test.{ts,js}", "*.spec.{ts,js}", "**/__tests__/**/*.{ts,js}"],
      options: {
        parser: "typescript",
        printWidth: 120,
        trailingComma: "es5",
      },
    },
  ],
};
