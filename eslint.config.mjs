import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	eslintConfigPrettier,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		plugins: {
			"simple-import-sort": simpleImportSort,
		},
		rules: {
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
		},
	},

	{
		rules: {
			"@typescript-eslint/no-floating-promises": "error",
			"@typescript-eslint/no-use-before-define": "error",
			"react/jsx-key": "error",
			"react/jsx-no-duplicate-props": "error",
			"react/jsx-no-target-blank": "error",
			"react/jsx-no-undef": "error",
			"react/no-children-prop": "error",
			"react/no-danger-with-children": "error",
			"react/no-unescaped-entities": "error",
			"react/no-unknown-property": "error",
			"arrow-body-style": "error",
			"react/boolean-prop-naming": [
				"error",
				{
					rule: "^(is|has|should|can|will|did|does|was|were|are)[A-Z]([A-Za-z0-9]?)+",
					message:
						"Boolean prop '{{propName}}' must match pattern '^(is|has|should|can|will|did|does|was|were|are)[A-Z]([A-Za-z0-9]?)+'",
				},
			],
			"react/hook-use-state": "error",
			"react/jsx-handler-names": [
				"error",
				{
					eventHandlerPrefix: "handle",
					eventHandlerPropPrefix: "on",
					checkLocalVariables: true,
					checkInlineFunction: true,
				},
			],
			"react/jsx-max-depth": ["warn", { max: 5 }],
			"max-lines-per-function": [
				"warn",
				{ max: 80, skipBlankLines: true, skipComments: true },
			],
		
		},
	},
];

export default eslintConfig;

