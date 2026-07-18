npx eslint **/*.ts **/*.tsx 2>&1 > eslint.log 2>&1
pnpm run lint 2>&1 > lint.log 2>&1

echo "Lint output:"
cat eslint.log

echo -e "\n---\n\nLint results:"
grep -E "error|warning" eslint.log | head -20