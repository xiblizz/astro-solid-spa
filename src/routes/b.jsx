import { Link } from '../internal/router'

export function load() {
    return {
        props: undefined,
        meta: {
            title: 'Page B',
            description: 'An example page for static routing',
        },
    }
}

export default function B() {
    return (
        <div>
            <span>
                {'Welcome to '}
                <span>Page B</span>!
            </span>
            <div>
                <Link href='/'>Go to home</Link>
                <Link href='/a'>Go to page A</Link>
            </div>
        </div>
    )
}
