// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";

export default [
    {
        input: "src/index.tsx",
        output: {
            dir: "dist/cjs",
            format: "cjs",
            preserveModules: true,
            preserveModulesRoot: "src",
            sourcemap: true
        },
        plugins: [
            peerDepsExternal(),
            typescript({
                tsconfig: "./tsconfig.json",
                outDir: "dist/cjs/types",
                declarationDir: "dist/cjs/types",
                rootDir: "src",
                outputToFilesystem: true
            }),
            resolve(),
            terser()
        ]
    },
    {
        input: "src/index.tsx",
        output: {
            dir: "dist/esm",
            format: "esm",
            preserveModules: true,
            preserveModulesRoot: "src",
            sourcemap: true
        },
        plugins: [
            peerDepsExternal(),
            typescript({
                tsconfig: "./tsconfig.json",
                outDir: "dist/esm/types",
                declarationDir: "dist/esm/types",
                rootDir: "src",
                outputToFilesystem: true
            }),
            resolve(),
            terser()
        ]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/types/index.d.ts", format: "es" }],
        plugins: [dts()]
    }
];
