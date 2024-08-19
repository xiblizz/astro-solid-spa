import { Link } from '../internal/router'

export function load() {
    return {
        props: undefined,
        meta: {
            title: 'Astro + Solid SPA',
            description: 'Home page of Astro + Solid SPA',
        },
    }
}

export default function Index() {
    return (
        <div>
            <span>
                {'Welcome to '}
                <span>Astro + Solid SPA</span>!
            </span>
            <div>
                <Link href='/a'>Go to page A</Link>
                <Link href='/b'>Go to page B</Link>
                <Link href='/parameter/c'>Go to page C</Link>
                <Link href='/parameter/d'>Go to page D</Link>
                <Link href='/wildcard/e/f/g/h'>Go to page E, F, G, H</Link>
            </div>
        </div>
    )
}
