import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const getAlias = (path: string) => resolve(__dirname, path)

export default defineConfig({
    build: {
        outDir: './dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            fileName: 'index',
            formats: ['es'],
        },
        target: ['esnext'],
    },
    resolve: {
        alias: {
            _consts: getAlias('src/consts'),
            _hooks: getAlias('src/hooks'),
            _types: getAlias('src/types'),
            _utils: getAlias('src/utils'),
        },
    },
    plugins: [dts()],
})
