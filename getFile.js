import { owner, path, headers, acceptHeader } from './constants.js'

export async function getFile (octokit, repo) {
    try {
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner,
            repo,
            path,
            headers: {
                ...headers,
                ...acceptHeader,
            }
        })
        
        return JSON.parse(data)
    } catch (error) {
        console.error(`Error getting file ${path}:`, error)
    }
}
