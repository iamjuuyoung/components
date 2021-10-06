import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";
import packageJson from "./package.json";
import alias from "@rollup/plugin-alias";
export default {
  input: "src/index.js",
  output: [
    {
      format: "cjs",
      file: packageJson.main,
      sourcemap: true
    },
    {
      format: "esm",
      file: packageJson.module,
      sourcemap: true
    }
  ],
  plugins: [
    alias({
      entries: [
        {
          find: '@',
          replacement: `${__dirname}/src/`
        }
      ]
    }),
    peerDepsExternal(), resolve(), commonjs(), vue(),
      postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
  ]
};
