import NotFound from './404'
import { definePageRouter } from './internal/root'

const PageRouter = definePageRouter({
    routes: {
        path: './routes',
        imports: import.meta.glob('./routes/**/*.jsx', {
            import: 'default',
            eager: true,
        }),
    },
    pages: {
        404: NotFound,
    },
})

export default PageRouter
