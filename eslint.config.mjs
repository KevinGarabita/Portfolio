import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";
import prettierCompatibility from "eslint-config-prettier/flat";
import jsxAccessibility from "eslint-plugin-jsx-a11y";

const eslintConfig = defineConfig([
  ...nextCoreWebVitals,
  ...nextTypeScript,
  {
    // eslint-config-next registers the jsx-a11y plugin but enables only six of its rules.
    files: ["**/*.{jsx,tsx}"],
    rules: jsxAccessibility.flatConfigs.recommended.rules,
  },
  // Turns off stylistic rules that Prettier owns. Must stay after the other configs.
  prettierCompatibility,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
