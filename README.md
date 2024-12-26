
## Run Locally

Clone the project

```bash
  git clone https://github.com/Shashankd48/reactjs19-vite-boilterplat-code.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Set up husky

```bash
  echo "npx lint-staged" > .husky/pre-commit
  echo "npm run build" > .husky/pre-push
```

Run development server

```bash
  npm run dev
```

Commit and push

```bash
  git add . # Files to be staged

  git commit -m "Message" # Run pre-commit (Linting)

  git push origin <branch_name> # Run pre-push (Linting & build)
```

