import { Link, useRouter } from '../../internal/router'

export function load(params) {
    return {
        props: undefined,
        meta: {
            title: `Parameter Page ${params.id}`,
            description: 'An example page for parametric routing',
        },
    }
}

export default function Index() {
    const router = useRouter()
    return (
        <div>
            <span>
                {'Welcome to '}
                <span>{`Parameter Page ${router.params.id}`}</span>!
            </span>
            <div>
                <Link href='/'>Go to home</Link>
            </div>
        </div>
    )
}
