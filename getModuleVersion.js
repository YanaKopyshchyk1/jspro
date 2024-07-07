import { getFile } from './getFile.js'

export async function getModuleVersion ({ octokit, repo, module }) {
    try {
        const fileObj = await getFile(octokit, repo)
        const currectVersion = fileObj.dependencies[module]

        console.log(`Current ${module} version is:`, currectVersion)
        return currectVersion
    } catch (error) {
        console.error('Error getting module version:', error)
    }
}
