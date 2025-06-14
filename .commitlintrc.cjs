module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "chore",
        "ci",
        "docs",
        "feat",
        "fix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test",
        "config",
        "security",
      ],
    ],
    "scope-enum": [
      2,
      "always",
      [
        "auth",
        "catalog",
        "orders",
        "payments",
        "inventory",
        "notifications",
        "shared",
        "config",
        "docker",
        "k8s",
        "ci",
        "deps",
        "db",
        "api",
        "types",
        "utils",
        "scripts",
        "infra",
        "monitoring",
        "security",
        "logger",
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
