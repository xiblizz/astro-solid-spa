import { defineLoaderRouter } from './internal/root'

const getLoader = defineLoaderRouter({
    routes: {
        path: './routes',
        imports: import.meta.glob('./routes/**/*.jsx', {
            import: 'load',
            eager: true,
        }),
    },
})

export default getLoader
