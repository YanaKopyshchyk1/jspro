import { owner, headers } from './constants.js'

export async function createPullRequest ({ octokit, repo, module, version, branch }) {
    try {
        const { status } = await octokit.request('POST /repos/{owner}/{repo}/pulls', {
            owner,
            repo,
            title: '[PR]: Update package.json',
            body: `Update package.json with ${module} version ${version}`,
            head: branch,
            base: 'master',
            headers,
        })
        console.log('Creating PR status:', status)
    } catch (error) {
        console.error('Error creating pull request:', error)
    }
}
