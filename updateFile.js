import { owner, path, headers, committer } from './constants.js'

export async function updateFile ({ octokit, repo, sha, file, branch }) {
    try {
        const { status } = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner,
            repo,
            path,
            message: `Update ${path} file with new package version`,
            committer,
            content: btoa(JSON.stringify(file, null, 2)),
            headers,
            sha,
            branch,
        })
        console.log('Updating file status:', status)
    } catch (error) {
        console.error(`Error updating file ${path}:`, error)
    }
}