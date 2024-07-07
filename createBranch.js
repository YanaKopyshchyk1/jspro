import { owner, headers } from './constants.js'

export async function createBranch ({ octokit, repo, module, version, sha }) {
    const branchName = `update-${module}-pack-for-${version.replaceAll('.', '-')}`

    try {
        const { status } = await octokit.request('POST /repos/{owner}/{repo}/git/refs', {
            owner,
            repo,
            sha,
            headers,
            ref: `refs/heads/${branchName}`,
        })
        console.log('Creating branch status:', status)
    }   catch (error) {
        console.error('Error creating branch:', error)
    }

    return branchName
}