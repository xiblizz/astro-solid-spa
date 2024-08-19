import { Link } from '../../internal/router'

const sleep = (ms) => {
    return new Promise((res) => {
        setTimeout(res, ms)
    })
}

export async function load(request, params) {
    await sleep(200)

    const data = params.list.join(', ')

    return {
        props: {
            data,
        },
        meta: {
            title: `Wildcard Page ${data}`,
            description: 'An example page for wildcard routing',
        },
    }
}

export default function CaptureAllRoute(props) {
    return (
        <div>
            <span>
                {'Welcome to '}
                <span>{`Wildcard Page ${props.data}`}</span>!
            </span>
            <div>
                <Link href='/'>Go to home</Link>
            </div>
        </div>
    )
}
