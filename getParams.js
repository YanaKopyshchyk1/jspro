import { DEFAULT_REPO } from './constants.js'

export function getParams() {
    const args = process.argv.slice(2)
    const params = args.reduce((acc, arg) => {
        const [key, value] = arg.split('=')
        return {
            ...acc,
            [key]: value,
        }
    }, {})
    const { repo, module, version } = params

    if (!repo) {
        console.log(`No repo provided, using default repo: ${DEFAULT_REPO}`)
        params.repo = DEFAULT_REPO
    }

    if (!module || !version) {
        throw new Error("Please provide all required params: module, version");
    }

    console.log('Input params:', params)
    return params
}

