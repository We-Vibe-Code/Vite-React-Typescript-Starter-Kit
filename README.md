# ⚡ The Vibe Starterkit

Welcome! You have just downloaded a **starterkit**. In the developer world, this is often called a "boilerplate," but we prefer "starterkit" because it sounds less like a legal document and more like a launchpad.

Think of this as a pre-built foundation for a house. Instead of spending your first few hours buying wood, pouring concrete, and worrying about plumbing (configurations), we have already built the frame so you can get straight to the "vibe"—designing the rooms and making it yours.

## 🧩 What is actually happening here?

If you are new to this stack, or if you usually let AI handle the setup, here is a plain-English translation of the tools we are using:

* **Vite (The Engine):** This is the tool that runs your project on your computer. Its best feature is **HMR (Hot Module Replacement)**. Basically, when you change a line of code and hit save, the change appears in your browser instantly. You don't have to hit "Refresh."
* **React (The Building Blocks):** This is the library used to build the visual parts of your app (buttons, menus, text).
* **TypeScript (The Logic Spell-Checker):** Think of this as a high-powered spell-checker. If you try to do something that is mathematically impossible or breaks the logic of your app, TypeScript will highlight it in red *before* you run the code.
* **Linting (The Grammar Coach):** You will see files referring to **ESLint**. If TypeScript is the spell-checker, Linting is the grammar coach. It ensures your code follows best practices so it is easy for AI tools (and other humans) to read.

---

## 🚀 How to Get Started

### 1. Open Your Editor
Open this folder in your code editor of choice. This kit is optimized for modern, AI-first editors like:
* **Cursor**
* **Windsurf**
* **Trae**
* **Antigravity**
* **VS Code** (The classic standard)

### 2. Open the Terminal
Inside your editor, find the menu option for **Terminal** (usually at the top or bottom) and select **New Terminal**. This is a text window where you talk directly to your computer.

### 3. Install the Tools
Type the following command into the terminal and press **Enter**:

```bash
npm install
```

This tells your computer to download all the necessary parts (dependencies) to make the starterkit work.

### 4. Start the Vibe
Once the installation is finished, type this and press **Enter**:

```bash
npm run dev
```

Your terminal will show you a local web address (usually `http://localhost:5173`). Click that link (or copy it into your browser) to see your app running live.

---

## 🤖 Vibe Coding with AI

This kit is designed to stay out of your way so you can iterate fast with AI assistants.

* **Context & Indexing:** When you open this in **Cursor** or **Windsurf**, allow the editor to "Index" the folder. Because the folder structure is standard, the AI will immediately understand where everything lives.
* **Prompting:** You can focus on the result. Open your AI chat and say: *"Create a new pricing component in the src folder that looks modern and clean."*
* **Handling "Red Lines":** If you see red squiggly lines under your code, that is **TypeScript** or **ESLint** helping you. Just highlight the red code and ask your AI: *"Why is this complaining?"* It will usually fix the logic error for you instantly.

---

## 🛠 Advanced Details (Under the Hood)

If you are a "Super User" or just curious about how we set up the engine, here are the technical specifics.

### React Compiler
The generic React Compiler is currently **disabled** in this template because it can sometimes slow down the development server startup time. If you want to enable automatic memoization, check out the [official React Compiler docs](https://react.dev/learn/react-compiler/installation).

### Vite Plugins
We use **@vitejs/plugin-react**, which uses **Babel** for Fast Refresh. If you need extreme performance for a massive app, you can swap to **@vitejs/plugin-react-swc** (which uses SWC).

### Expanding ESLint (The "Grammar Coach")
Currently, the linting rules are set to be helpful but not annoying. If you are building a mission-critical production app, you might want to make the rules stricter ("Type Aware").

To do this, you would modify your `eslint.config.js` file to look like this:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // ... keep other configs
      
      // Replace recommended with strict type checking
      tseslint.configs.strictTypeChecked, 
      // Add stylistic rules
      tseslint.configs.stylisticTypeChecked, 
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also add specific rules for React by installing plugins like `eslint-plugin-react-x` and `eslint-plugin-react-dom`.

---

## 📂 Project Structure

* `src/`: **The Kitchen.** This is where you cook. All your components, logic, and styles live here.
* `public/`: **The Garage.** Static files like images, icons, and the site favicon go here.
* `vite.config.ts`: **The Engine Settings.** You usually don't need to touch this unless you are adding advanced plugins.

Happy coding!
