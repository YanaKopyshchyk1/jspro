import { owner, headers, DEFAULT_BRANCH } from './constants.js'

export async function getLastCommitSha (octokit, repo) {
    try {
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/git/matching-refs/{ref}', {
        owner,
        repo,
        headers,
        ref: `heads/${DEFAULT_BRANCH}`,
    })
    const { sha } = data[0].object

    console.log('Last commit sha: ', sha)
    return sha
    } catch (error) {
        console.error('Error getting last commit sha:', error)
    }
}