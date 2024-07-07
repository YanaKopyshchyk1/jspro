import { owner, path, headers } from './constants.js'

export async function getFileSha (octokit, repo) {
    try {
        const { data: { sha } } = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner,
            repo,
            path,
            headers,
        })
        
        console.log('File sha: ', sha)
        return sha
    } catch (error) {
        console.error(`Error getting file SHA ${path}:`, error)
    }
}