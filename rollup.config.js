import commonjs from 'rollup-plugin-commonjs'
import sourcemaps from 'rollup-plugin-sourcemaps'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: './src/Pivot.js',
    output: [
      { file: './dist/es/Pivot.js', format: 'es', sourcemap: true },
      {
        file: './dist/es/Pivot.min.js',
        format: 'es',
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve(),
      sourcemaps(),
      commonjs({
        include: /node_modules/,
      }),
    ],
  },
  {
    input: './src/Pivot.js',
    output: [
      { file: './dist/commonjs/Pivot.js', format: 'cjs', sourcemap: true },
      {
        file: './dist/commonjs/Pivot.min.js',
        format: 'cjs',
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve(),
      sourcemaps(),
      commonjs({
        include: /node_modules/,
      }),
    ],
  },
]
