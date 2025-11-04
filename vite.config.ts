import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        cssInjectedByJsPlugin(),
        dts({
            insertTypesEntry: true,
            include: ['src/lib'],
            outDir: 'dist',
            rollupTypes: true
        }),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/lib/index.ts'),
            name: 'lexgui-react',
            fileName: `index`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
})
