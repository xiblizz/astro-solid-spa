import { Link } from '../internal/router'

export function load() {
    return {
        props: undefined,
        meta: {
            title: 'Page A',
            description: 'An example page for static routing',
        },
    }
}

export default function A() {
    return (
        <div>
            <span>
                {'Welcome to '}
                <span>Page A</span>!
            </span>
            <div>
                <Link href='/'>Go to home</Link>
                <Link href='/b'>Go to page B</Link>
            </div>
        </div>
    )
}
