module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // Changes to build system or dependencies
        "chore", // Maintenance tasks, no production code changes
        "ci", // Continuous Integration pipeline changes
        "cd", // Continuous Deployment changes
        "docs", // Documentation updates
        "feat", // New features
        "fix", // Bug fixes
        "perf", // Performance improvements
        "refactor", // Code refactoring without feature changes
        "cleanup", // Code and file cleanup, removing unused code/files
        "revert", // Revert previous commits
        "style", // Code style changes (formatting, etc.)
        "test", // Test additions or modifications
        "config", // Configuration file changes
        "security", // Security-related changes
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "auth", // Authentication related changes
        "catalog", // Product catalog features
        "orders", // Order management system
        "payments", // Payment processing
        "inventory", // Inventory management
        "notifications", // Notification system
        "shared", // Shared utilities/components
        "config", // Configuration changes
        "docker", // Docker-related changes
        "k8s", // Kubernetes configurations
        "ci", // CI/CD specific changes
        "deps", // Dependency updates
        "db", // Database changes
        "api", // API modifications
        "types", // TypeScript type definitions
        "utils", // Utility functions
        "scripts", // Build/deployment scripts
        "infra", // Infrastructure changes
        "monitoring", // Monitoring and observability
        "security", // Security implementations
        "logger", // Logging functionality
      ],
    ],
    "type-case": [2, "always", "lower-case"],
    "scope-case": [2, "always", "lower-case"],
    "subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "scope-empty": [2, "never"],
    "subject-min-length": [2, "always", 10],
    "subject-max-length": [2, "always", 100],
  },
};

// Commit format: <type>(<scope>): <subject>
// e.g. feat(auth): add JWT token validation middleware
