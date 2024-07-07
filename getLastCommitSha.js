import { owner, headers } from './constants.js'

export async function getLastCommitSha (octokit, repo) {
    try {
    // get sha of master branch
    const { data } = await octokit.request('GET /repos/{owner}/{repo}/git/matching-refs/{ref}', {
        owner,
        repo,
        headers,
        ref: 'heads/master',
    })
    const { sha } = data[0].object

    console.log('Last commit sha: ', sha)
    return sha
    } catch (error) {
        console.error('Error getting last commit sha:', error)
    }
}