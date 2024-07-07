import { Octokit } from "octokit";

import { getParams } from "./getParams.js";
import { getModuleVersion } from "./getModuleVersion.js";
import { getFile } from "./getFile.js";
import { getFileSha } from "./getFileSha.js";
import { getLastCommitSha } from "./getLastCommitSha.js";
import { createBranch } from "./createBranch.js";
import { updateFile } from "./updateFile.js";
import { createPullRequest } from "./createPullRequest.js";
import { ACCESS_TOKEN } from "./constants.js";

// Octokit instance for GitHub API
const octokit = new Octokit({
    auth: ACCESS_TOKEN
})

// Get command line arguments
const { repo, module, version } = getParams()

// Get current version of the module
const moduleVersion = getModuleVersion({ octokit, repo, module })

if (version !== moduleVersion) {
    // update file
    const fileObj = await getFile(octokit, repo)
    fileObj.dependencies[module] = version
    
    // get file sha
    const fileSha = await getFileSha(octokit, repo)

    // get last commit sha
    const lastCommitSha = await getLastCommitSha(octokit, repo)

    // create a new branch
    const branchName = await createBranch({ octokit, repo, module, version, sha: lastCommitSha })

    // push updated file to the new branch
    updateFile({octokit, repo, sha: fileSha, file: fileObj, branch: branchName})

    // create a pull request
    createPullRequest({ octokit, repo, module, version, branch: branchName })
} else {
    console.log('The module version is already up-to-date!')
}