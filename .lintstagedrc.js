module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write', () => 'npm run type-check'],
  '*.{js,jsx}': ['eslint --fix', 'prettier --write'],
  '*.{json,md,yml,yaml}': ['prettier --write'],
  '*.prisma': ['prettier --write'],
  '*.{sh,bash}': ['prettier --write'],
}
