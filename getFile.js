import { owner, path, apiHeader, jsonAcceptHeader } from './constants.js'

export async function getFile (octokit, repo) {
    try {
        const { data } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner,
            repo,
            path,
            headers: {
                ...apiHeader,
                ...jsonAcceptHeader,
            }
        })
        
        return JSON.parse(data)
    } catch (error) {
        console.error(`Error getting file ${path}:`, error)
    }
}
